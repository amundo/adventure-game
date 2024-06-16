import { walk } from "https://deno.land/std@0.224.0/fs/walk.ts";
import { join, relative } from "https://deno.land/std@0.224.0/path/mod.ts";

const componentsDir = 'components';
const docsDir = 'docs';
const docsFile = join(docsDir, 'index.html');

async function generateDocs() {
  const links = [];

  for await (const entry of walk(componentsDir, { exts: ['html'], includeFiles: true, followSymlinks: false })) {
    if (entry.name.endsWith('-docs.html')) {
      const relativePath = relative(docsDir, entry.path);
      links.push(`<li><a href="${relativePath}">${entry.name}</a></li>`);
    }
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Component Docs</title>
    </head>
    <body>
      <h1>Component Documentation</h1>
      <ul>
        ${links.join('\n')}
      </ul>
    </body>
    </html>
  `;

  // Ensure the docs directory exists
  await Deno.mkdir(docsDir, { recursive: true });

  // Write the HTML content to index.html in the docs directory
  await Deno.writeTextFile(docsFile, htmlContent);
  console.log(`Generated ${docsFile}`);
}

generateDocs();
