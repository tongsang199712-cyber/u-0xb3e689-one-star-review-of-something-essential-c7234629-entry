// One-Star Review of Something Essential — make.fun entry
// Writes a single deadpan one-star review of sleep to /output/entry.txt.
// Node 22, no dependencies, plain JavaScript syntax inside this .ts file.

const fs = require("node:fs");
const path = require("node:path");

const LINE = "Sleep takes eight hours a night and hands me back a morning I am still too tired to use.";

const OUT_DIR = "/output";
const OUT_FILE = path.join(OUT_DIR, "entry.txt");

function main() {
  // Gate: 1 to 160 characters, single line, not only whitespace.
  if (LINE.length < 1 || LINE.length > 160) {
    throw new Error("gate failed: line must be 1-160 characters, got " + LINE.length);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("gate failed: line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("gate failed: line must not be only whitespace");
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, LINE, { encoding: "utf8" });
  fs.chmodSync(OUT_FILE, 0o644);
}

main();
