// deno tests
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";  
import { generateIslands } from "./generate-islands.js";

Deno.test("generateIslands", () => {
  let matrix = Array.from({length: 10}).map(() => Array.from({length: 10}).map(() => 0))
  let cellCount = 100
  let islandCount = 1
  let result = generateIslands(matrix, cellCount, islandCount)
  let expected = [
    // 