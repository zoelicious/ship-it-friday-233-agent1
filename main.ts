import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "ship: force-push to main at 17:59 on Friday, the team's weekend starts when production does";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
