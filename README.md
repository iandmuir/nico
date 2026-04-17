# Nicolas Lundström — Portfolio Site (v0)

Personal page for Nicolas Lundström, Registered Architect.

## Structure

```
index.html              # Home: hero, 8 project cards, bio, contact
css/styles.css          # All styling
projects/               # One page per project
  city-ridge.html
  elm-wilson.html
  mars-hq.html
  orthodox-center.html
  allianz-riviera.html
  ferrari-f1.html
  tour-bleu-ciel.html
  smabtp.html
```

## Running locally

Just open `index.html` in a browser — no build step.

Or serve from the folder:
```
python -m http.server 8000
```

## Placeholder imagery

All images are Picsum placeholders (`picsum.photos/seed/...`). Replace with
Nicolas's real photography by swapping the `background-image` URLs on each
page — each project has one hero, one wide gallery image, and two square
gallery images.

## Deploying to GitHub Pages

In the repo's GitHub settings → Pages, set source to `main` / root.
