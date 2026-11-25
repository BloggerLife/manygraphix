# ManyGraphix Website

Responsive company website built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons and EmailJS.

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in your real contact details and EmailJS credentials.
4. Run `npm run dev` and open http://localhost:3000.

## EmailJS setup

1. Create an account at https://www.emailjs.com/ and connect the mailbox that should receive enquiries.
2. Create an email service and a template.
3. In the template, use these variables: `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, `{{service}}`, `{{message}}`.
4. Add the Service ID, Template ID and Public Key to `.env.local` using the names in `.env.example`.

## Branding and contact details

- The supplied ManyGraphix logo is installed at `public/manygraphix-logo.png`. The site palette uses the logo navy (`#063073` / `#082F78`) and bright blue (`#086FF4`). The header displays the supplied logo asset.
- Update the WhatsApp number, Facebook page URL, email and phone in `.env.local`.
- Update the placeholder contact details and company location in `components/Footer.tsx` and `app/page.tsx` if needed.

## Notes

- The header becomes visible with a frosted-glass effect after scrolling beyond the hero threshold.
- The floating Facebook and WhatsApp links are fixed at the bottom-right.
- The contact form sends through EmailJS in the browser; no backend mail server is required.
- IT photography uses remote Unsplash image URLs. Replace with licensed company imagery if preferred.
