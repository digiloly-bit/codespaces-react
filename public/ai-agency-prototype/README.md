# AI Agency WordPress-Ready HTML Prototype

This folder contains a complete static prototype for a futuristic/dark neon AI agency site.

## Included pages
- `index.html` (Home / Landing)
- `services.html`
- `about.html`
- `contact.html`
- Shared styles: `assets/styles.css`

## WordPress handoff mapping
- Header/footer -> `header.php` and `footer.php` or block template parts.
- Main page templates -> page templates or block theme HTML templates.
- Services section -> custom post type (`service`) + archive/single templates.
- Contact form -> replace static form with Gravity Forms / WPForms / Contact Form 7.

## Local preview
From project root run:

```bash
npm run dev
```

Then open:

- `http://localhost:5173/ai-agency-prototype/index.html`
