# Corona-Statistic

Old educational React project. Supposed to be still working, but idk about Relevance

## Tech stack

- **Next.js 13** (App Router) — server components, ISR
- **React 18** + **TypeScript**
- **Tailwind CSS 3** (+ PostCSS / Autoprefixer)
- **ESLint** (`eslint-config-next`)

## Data source

All statistics come from the public **[Corona-in-Zahlen](https://corona-in-zahlen.de) API**:

- `https://api.corona-zahlen.org/germany`
- `https://api.corona-zahlen.org/states` and `/vaccinations/states`
- `https://api.corona-zahlen.org/districts`
- `https://api.corona-zahlen.org/vaccinations`

The figures are based on **Robert Koch Institute (RKI)** data (and, in upstream sources,
Johns Hopkins University, WHO and Our World in Data). Requests are cached with
`revalidate: 10` (a page is refreshed from the API at most every 10 seconds). One component
also queries the German Wikipedia API (`de.wikipedia.org/w/api.php`) for supplementary text.



