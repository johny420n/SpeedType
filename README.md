# Speed Typer — Ryan's Racing School 🏎️

A fun, offline typing game for kids, themed as a racing school. Type each sentence
as fast and as accurately as you can to earn coins, set track records, and race a
ghost car of the current record holder.

## Play

Open **`index.html`** in any modern browser. No install, no server, no backend.
It works offline (a web font loads from Google Fonts when online, with a
system-font fallback otherwise). Best played on a computer with a physical keyboard.

## Features

- **8 tracks** of increasing difficulty, 10 sentences each — from tiny lowercase
  words up to long, comma-heavy Title-Case sentences that exercise the Shift key.
- **F1-style starting lights** and countdown before each race.
- **Big on-screen letters** that highlight the current key, with the upcoming
  sentence kept readable so you can get ready.
- **Hand-coloured on-screen keyboard** — left-hand keys glow red, right-hand keys
  blue, with correct opposite-hand Shift highlighting, to teach touch typing.
- **Per-track leaderboards** (top 10, named) saved locally. Multiple players on the
  same computer can each save their own name.
- **Ghost car** that replays the record holder's pace, sentence by sentence.
- **"Keys to practice"** report showing the keys you miss most.
- **Original chiptune soundtrack** generated live with the Web Audio API (no audio files).
- Coins, stars, confetti, a finish-line flag, and a per-track score reset.

## Tech

A single self-contained `index.html` — vanilla HTML/CSS/JS, zero dependencies and no
build step. High scores and progress are stored in the browser's `localStorage`.
