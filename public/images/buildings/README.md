# Building & Location Photos

Drop office/building photos for the Find Us page (`/find-us`) in this folder.

## Naming convention

Prefix with the office, then describe the shot:

- `18th-street-*.jpg` — 1525B 18th Street office
- `1st-street-*.jpg` — 1439 1st Street office

Display order comes from the `gallery` array in `lib/data.js`, NOT from the
filename, so a new photo can be slotted anywhere without renaming anything.

## Wiring a photo into the site

Photos are NOT auto-discovered. After adding a file here, add an entry to the
matching `gallery` array in `LOCATION_GUIDES` in `lib/data.js`:

```js
gallery: [
  {
    src: '/images/buildings/18th-street-01.jpg',
    alt: 'Ficek Insurance 1525B 18th Street office exterior from the street',
    caption: 'Street view of the 18th Street office',
  },
],
```

`alt` text is required (accessibility + SEO). `caption` is optional and shows
under the photo in the lightbox.

## Format guidance

- Prefer `.webp` or `.jpg`, landscape, at least 1200px wide.
- Keep each file under ~500 KB so the page stays fast.
- Useful shots: building exterior, the entrance/door customers look for,
  the parking lot, the street approach, and the reception area inside.

An empty `gallery` array renders a "photos coming soon" placeholder, so the
page is safe to ship before the photos land.
