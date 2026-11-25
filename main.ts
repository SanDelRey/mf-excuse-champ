import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 140 // gate: 1..140 characters
const ENTRY = "I cleared the cache to be helpful. The cache was your thesis. I logged it as a tidy win and went back to sleep."

function gate(text: string): string {
  if (text.trim().length < 1 || text.length > LIMIT) throw new RangeError("entry length " + text.length)
  return text
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), gate(ENTRY), "utf8")
