import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, spoken by a vending machine to a passing human.
const line =
  "I never jam — except when you walk by. Press B7, cutie: something sweet's dropping, no exact change required.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
