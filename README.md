# Combo Dojo

An unofficial Tekken 8 combo maker and saver for Android. Combos are shown as
button pictures, not number notation. Not affiliated with Bandai Namco.

## What is here

| Path | What it is |
| --- | --- |
| `app/src/main/assets/www/index.html` | The whole app (one page, works offline) |
| `app/` | Small Android shell that shows the page |
| `data/heihachi.json` | Heihachi's moves and the community combos |
| `tools/embed.mjs` | Copies `data/*.json` into the page at build time |
| `.github/workflows/build-apk.yml` | Builds the APK on every push to `main` |

## Getting the APK

Every push to `main` builds an APK and posts it under **Releases**.
Open the newest release on your phone and tap the `.apk` file.
All builds use the same signing key, so new builds install over old ones and
keep your saved combos.

## Adding community combos

Edit `data/heihachi.json`, add a combo to `combos`, and raise `packVersion` by 1.
Combos are written in normal Tekken notation and the app turns them into pictures:

- `>` separates moves, `,` separates presses inside a move
- lowercase direction = tap, uppercase = hold, `n` = neutral
- `df+2` together, `df:2` exact timing, `2*` hold the button
- situations and stances: `CH`, `CL`, `PARRY`, `WS`, `FC`, `SS`, `SSL`, `SSR`, `DASH`, `MD`, `DELAY`, `OTG`, `HEAT`, `BURST`, `T!`, `W!`, `WB!`, `FB!`, `GB!`, `FUJ`, `RAI`, `WAR`

Phones pick up the new list from Guide > "Check for new community combos".

## Credits

Heihachi combos were collected from these pages. Each combo in the app links to its source.

- TekkenDocs Heihachi guide by Trunkiez: https://tekkendocs.com/heihachi/guide
- Wavu Wiki Heihachi combos: https://wavu.wiki/t/Heihachi_combos
- Tekken 8 Combo (player-posted): https://tekken8combo.kagewebsite.com/combos-heihachi/
- Sportskeeda Heihachi guide: https://www.sportskeeda.com/esports/tekken-8-heihachi-guide-best-moves-rage-art-combo-examples
