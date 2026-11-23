// A Day of One-Line Pitches — make.fun entry for u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// Writes the entry's single pitch sentence to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Tell an AI agent your app idea in plain words and it will build a working first version for you to try, with no code to write and nothing to set up, and you keep only what you love.";

// The gate allows 1 to 240 characters: refuse to emit a pitch that would fail it.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry pitch is ${LINE.length} characters, must be 1-240`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
