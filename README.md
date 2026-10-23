# veteranpushingforward.com

Static website for **Veteran Pushing Forward LLC** — plain HTML/CSS with a little vanilla JS. No build step, no dependencies, no third-party requests.

## Files
| Path | Purpose |
| --- | --- |
| `index.html` | Home page (hero, services, who we serve, why us, federal, about, contact) |
| `capabilities.html` | Capability Statement — prints to exactly one US Letter page (use the "Print / Save as PDF" button) |
| `404.html` | Custom not-found page (GitHub Pages serves it automatically) |
| `assets/css/styles.css` | Main site styles |
| `assets/css/capabilities.css` | Capability statement screen + print styles |
| `assets/js/main.js` | Mobile menu, mailto contact form, print button |
| `assets/img/og-image.png` | 1200×630 social sharing image |
| `favicon.svg` | Shield/star favicon |
| `CNAME` | Custom domain for GitHub Pages (`veteranpushingforward.com`) |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Preview locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
Asset links are root-relative (`/assets/...`), so preview through a local server, not by double-clicking the file.

## Contact details (find/replace if they change)
- Email: `david.ingles@veteranpushingforward.com`
- Phone: `(602) 456-0961` / `tel:+16024560961` / JSON-LD `+1-602-456-0961`

Pages that contain them: `index.html` (JSON-LD, contact section, contact form `action` and `data-email`, federal "Teaming inquiries" link, footer), `capabilities.html` (header), and `404.html` (footer).

## Contact form
The form doesn't need a backend. On submit, JavaScript builds a pre-filled `mailto:` message and opens the visitor's email app. Without JavaScript it falls back to a plain `mailto:` form post. Nothing is stored or sent through a third-party service.

## Compliance notes
- SBA VetCert VOSB/SDVOSB application is **pending**. Do not change this to "Certified SDVOSB" until the certification is granted.
- CMMC services are described as *readiness support*. The company is not a C3PAO.

## Publish on GitHub Pages (when ready)
1. Push this folder to a GitHub repository.
2. Settings → Pages → Deploy from branch → `main` / root.
3. At your DNS provider, point the apex domain to GitHub Pages (A records 185.199.108.153, .109.153, .110.153, .111.153) and add `www` as a CNAME to `<user>.github.io`.
4. Turn on "Enforce HTTPS" once the certificate is issued.
