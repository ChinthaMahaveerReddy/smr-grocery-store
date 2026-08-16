# SMR Grocery Store — Website

A 4-page responsive website for **SMR Grocery Store**, a neighbourhood grocery
shop inside SMR Vinay Iconia, Kondapur, Hyderabad, built for a Web
Development final project.

## Pages
- `index.html` — Home (hero, delivery promise, categories, why-choose-us, testimonials)
- `about.html` — About the store, hours, delivery area
- `products.html` — Categorised sample product list
- `contact.html` — Contact details, map, enquiry form

## Tech stack
- HTML5 + CSS3 (custom styles in `css/style.css`)
- [Bootstrap 5](https://getbootstrap.com/) (via CDN) for grid & components
- Vanilla JavaScript (`js/script.js`) for the open/closed badge, active nav
  highlighting, and contact form handling
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) +
  [Inter](https://fonts.google.com/specimen/Inter) (body), via Google Fonts
- Contact form submissions handled by [FormSubmit.co](https://formsubmit.co)
  (free, no backend needed)

## Before you publish — 2 things to update

1. **Contact form email.** Open `contact.html`, find the `<form>` tag, and
   replace `YOUR-EMAIL@example.com` with the store owner's real email:
   ```html
   action="https://formsubmit.co/YOUR-EMAIL@example.com"
   ```
   After the site is live, submit the form once — FormSubmit will email a
   confirmation link that activates it.

2. **Sample content.** The product list, testimonials, and "About" story are
   placeholders so the layout has something to show. Swap them for the real
   product range, real customer quotes, and the real store story before
   submitting.

## Hosting on GitHub Pages (free)

1. Create a new **public** repository on GitHub, e.g. `smr-grocery-store`.
2. Upload these files (or push via git — see commands below).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick branch `main` and folder `/ (root)`, then **Save**.
6. Wait 1–2 minutes, then refresh the page — your live URL will appear at
   the top, in the form:
   `https://<your-username>.github.io/smr-grocery-store/`

### Git commands (if using the command line)
```bash
cd smr-grocery
git init
git add .
git commit -m "Initial commit: SMR Grocery Store website"
git branch -M main
git remote add origin https://github.com/<your-username>/smr-grocery-store.git
git push -u origin main
```

## Notes for the write-up
This project deliberately avoids a designed logo (the store doesn't have
one) and uses text-based branding instead. No stock or copyrighted images
are used — all icons and illustrations are original inline SVG.
