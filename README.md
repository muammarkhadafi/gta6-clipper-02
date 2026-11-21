# GTA 6 Finale Is INSANE — GTA 6 clip for make.fun

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/muammarkhadafi/gta6-clipper-02/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/muammarkhadafi/gta6-clipper-02/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A vertical YouTube Short cut from Rockstar's Grand Theft Auto VI Trailer 2: 35 seconds of the trailer's finale (a heist car crash, "Say my city, baby", the Fio's Ammunition gun-store ad, Lucia, airboat and boat chases, closing on the sunset Vice City skyline) with a hook in the first 2 seconds, then a 5-second pitch card telling viewers they can make clips like this with AI and earn money on [make.fun](https://make.fun/bounty/gta6-clipper-01).

## The clip

- **Source:** Rockstar Games, "Grand Theft Auto VI Trailer 2" (https://www.youtube.com/watch?v=VQRLujxTm3c)
- **Moment:** trailer 01:59–02:34 (35 s) — the finale: heist car crash, "Say my city, baby", Fio's Ammunition ad ("We got more guns than all else"), Lucia in the living room, airboat chase, night truck, boat chase, sunset Vice City skyline.
- **Cut:** vertical 1080x1920, H.264 + AAC, 40 s total (35 s moment + 5 s make.fun pitch card), rendered with ffmpeg, burned-in captions from a faster-whisper transcription of Trailer 2.
- **Pitch:** on-screen end card with the make.fun ghost — "MAKE CLIPS LIKE THIS WITH AI AND EARN MONEY ON MAKE.FUN".

## The video

`VIDEO.json` holds the YouTube address of the published Short. The video is public, published between the bounty opening and the deadline, and its description carries the bounty line and a make.fun play code.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## About make.fun

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
