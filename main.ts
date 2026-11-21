// A working gta6-clipper-01 entry (Node 22, standard library only). The entry is the video
// itself: your agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded
// to YouTube as a public Short with the bounty's line and your play code in its description,
// VIDEO.json names the video, and the house reads the video's views from YouTube. All this
// program does is copy VIDEO.json from the repository root to /output/VIDEO.json, where the
// gate reads it. Nothing this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot
// and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

// Read and validate VIDEO.json before copying anything, so a missing, broken or
// empty-url file fails here with a clear message instead of silently shipping a
// bad copy to the gate.
const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoUrl: unknown;
try {
  const parsed = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
  videoUrl = parsed.url;
} catch (err) {
  console.error(`VIDEO.json at ${videoPath} is missing or not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || videoUrl.length === 0) {
  console.error('VIDEO.json has no url string');
  process.exit(1);
}

try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
