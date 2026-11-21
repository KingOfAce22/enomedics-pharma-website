# NovaMed pharmaceutical website (React + Redux + Axios)

A responsive front-end starter with:
- Home page, company/about content, product catalogue, and contact footer
- Individual product detail routes, quantity selector, and checkout summary
- Checkout payment button intentionally disabled with an explicit out-of-stock notice
- Doctor sample request form with validation and email handoff
- Redux Toolkit cart state and Axios API adapter with local demo fallback

## Run locally
1. Install Node.js 18+.
2. In this folder run `npm install`
3. Run `npm run dev` and open the URL shown by Vite.
4. Run `npm run build` to check a production build.

## Doctor sample email
For actual email delivery without storing submissions in a database, configure EmailJS:
1. Create an EmailJS service and a template.
2. Add the service ID, template ID, and public key to `.env` using `.env.example`.
3. Configure the template to include: `doctor_name`, `email`, `phone`, `registration_number`, `specialty`, `clinic`, `clinic_address`, `product_requested`, `quantity`, and `message`.
4. The form sends directly through EmailJS when configured. If not configured, it opens the user's email app with a prefilled message; this fallback does not silently claim that an email was sent.

For production, validate requests server-side and protect the mail endpoint against spam. Do not put private email-service secrets in client code. EmailJS public keys are designed for browser use; set rate limits/captcha and an allowlist where possible.

## Product API
`src/api/products.js` uses Axios against `VITE_API_BASE_URL/products` when configured and falls back to sample products if the API is unavailable. Replace the demo copy, prices, product imagery, company information, and regulatory/legal details with verified information before publishing.

## Important
This is a demo storefront, not a regulated pharmacy or medical advice service. Product data is illustrative. Do not enable real medicine sales or payments until licensing, prescription controls, shipping, privacy, and regulatory requirements have been reviewed for your jurisdiction.


## Stylesheet organization

All stylesheets are stored in `src/css/`. `main.jsx` imports the shared design foundation and each page/component stylesheet. Page styles are separated into `home.css`, `about.css`, `products.css`, `product-detail.css`, `doctor-samples.css`, and `checkout.css`; shared component styles are in `header.css`, `footer.css`, `product-card.css`, and `product-image.css`.

## Generated editorial images

The site includes original generated JPG photography in `public/images/`: `wellness-hero.jpg`, `botanical-wellness.jpg`, and `healthcare-professional.jpg`. These are used as responsive image assets, not as flattened page layouts.
