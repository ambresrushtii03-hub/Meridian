# Meridian — News & Digital Magazine (React + Tailwind CSS)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
- `src/data/articles.js` — sample articles, categories, photo keywords
- `src/hooks/useLocal.js` — state synced to localStorage (bookmarks, theme, reading prefs)
- `src/components/` — Header, Ticker, ArticleCard, Cover (photo + SVG fallback), Scene, BookmarkBtn, Trending, Prefs, Icon
- `src/pages/` — Home, Browse (search + category filter), Saved, Article
- `tailwind.config.js` — dark mode via class, brand colours

Cover photos come from LoremFlickr by keyword (edit `KW` in `data/articles.js`).
If a photo fails to load, an illustrated SVG scene is shown instead.

Deployment Link :- https://vercel.com/srushti-sachin-ambre-s-projects/meridian/GPqhg8Zwm58i9CQw2yLHj68iPkAW
