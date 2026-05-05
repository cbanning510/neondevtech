# NeonDevTech Website

## Getting Started

```bash
npm install
npm start
```

## Project Structure

```
src/
  components/
    Navbar.jsx          # Fixed top navigation
    Navbar.module.css
    Hero.jsx            # Full-height cinematic hero
    Hero.module.css
    LogoStrip.jsx       # Client + platform logos
    LogoStrip.module.css
    # Coming next:
    # Services.jsx
    # WhyUs.jsx
    # Process.jsx
    # Contact.jsx
  assets/
    logos/              # DROP YOUR LOGO FILES HERE
      gemini.svg
      yahoo.svg
      anthem.svg
      ... etc
  App.jsx
  index.js
  index.css             # Global CSS variables + resets
```

## Adding Logos

1. Drop your SVG or PNG files into `src/assets/logos/`
2. Import them in `LogoStrip.jsx`:
   ```js
   import geminiLogo from '../assets/logos/gemini.svg';
   ```
3. Set the `src` field in the `CLIENT_LOGOS` array:
   ```js
   { name: 'Gemini', src: geminiLogo },
   ```

## Brand Colors

| Token     | Value     | Usage               |
|-----------|-----------|---------------------|
| `--bg`    | `#0D1B2A` | Page background     |
| `--bg2`   | `#112236` | Section backgrounds |
| `--teal`  | `#00C9C8` | Primary accent      |
| `--gold`  | `#F0A500` | Secondary accent    |
| `--text`  | `#E8EBF2` | Primary text        |
| `--mid`   | `#8A9AAA` | Body / subtext      |
| `--muted` | `#4A5A6A` | Labels / captions   |

## Fonts

- **Barlow Condensed** — Headlines, nav, buttons, labels
- **Barlow** — Body copy, subtext

Both loaded via Google Fonts in `public/index.html`.
