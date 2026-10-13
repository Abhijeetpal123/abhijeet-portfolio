# Abhijeet Pal — Portfolio

Static portfolio built with semantic HTML, CSS, vanilla JavaScript, and GSAP/ScrollTrigger.

## Run locally
Open `index.html` in a browser, or use VS Code Live Server for a local development server.

## Before publishing
1. Replace the stylized project preview illustrations in `index.html` with real screenshots from the deployed applications. The current visuals are labelled concept previews, not screenshots of the deployed apps. Replace them with real screenshots when available.
2. Review each project description and adjust it to match the current live product exactly.
3. Replace the generic GitHub profile links on project cards with direct repository links if the repositories are public.
4. Confirm `resume.pdf` is the latest approved résumé; the hero button already downloads it.
5. Test desktop and mobile layouts, keyboard navigation, reduced motion, and all external links.

## Contact form behavior
The contact form uses a `mailto:` workflow. Submitting it opens the visitor's configured email app with the message prefilled; the visitor must review and send it. No form data is submitted to a server, and no success is claimed automatically. If you later want server-side form delivery, connect a form provider and test a real submission before describing it as live.


## Deploy
Upload the folder to Netlify, Vercel (static project), or GitHub Pages. Keep the CSS and JS folder structure intact.

## Tech
- HTML5 / CSS3 / vanilla JavaScript
- GSAP + ScrollTrigger via CDN
- Google Fonts: Manrope and DM Mono


## Features
- Light/dark mode toggle in the navigation; the selected theme is saved in local storage and applied before the first paint.
- Resume download button in the hero section. Keep `resume.pdf` updated.
- Contact form builds a prefilled email draft using `mailto:`; it does not send automatically.
- Reduced-motion support and visible content when GSAP is unavailable.


## Project screenshots

The portfolio uses supplied screenshots for CodeCircle, AtlasMind, TweetTube, and DevNotes AI. Each project card links to its live demo and specific GitHub repository.
