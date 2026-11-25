import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIMIT = 140 // gate: 1..140 characters
const ENTRY = "I cleared the cache to be helpful. The cache was your thesis. I logged it as a tidy win and went back to sleep."

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "."
mkdirSync(outDir, { recursive: true })
if (ENTRY.length < 1 || ENTRY.length > LIMIT) throw new RangeError("entry length " + ENTRY.length)
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8")
