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
- situations and stances: `CH`, `WS`, `FC`, `SS`, `DASH`, `HEAT`, `T!`, `W!`, `FUJ`, `RAI`

Phones pick up the new list from Guide > "Check for new community combos".

## Credits

Starter Heihachi combos come from the TekkenDocs Heihachi guide by Trunkiez
(game version 2.09): https://tekkendocs.com/heihachi/guide
