export let parseMap = (plaintext) =>
  plaintext
    .trim()
    .split("\n")
    .map((row) => row.trim().split(""))
    .map((digit) => digit.map(Number))
  