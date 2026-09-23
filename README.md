# Shanghai Newcomer Meetup — Landing Page

A lightweight event registration landing page built as a learning project for AI-assisted coding, product growth, and operations automation.

## What this project teaches

- **Frontend** — the page the user sees and interacts with
- **HTML** — page structure/content
- **CSS** — visual design and responsive layout
- **JavaScript** — interactive behavior
- **Form** — structured user input
- **JSON** — common data format between systems
- **Webhook / API endpoint** — the address the page can send registration data to
- **LocalStorage** — browser storage used here for demo mode
- **Git / GitHub** — version control and public project portfolio
- **Deployment** — putting the page online so other people can use it

## Project structure

```text
shanghai-newcomer-meetup-landing/
├── index.html      # Page structure and content
├── styles.css      # Visual design
├── config.js       # Future webhook URL goes here
├── app.js          # Form logic and submission
└── README.md       # Project explanation
```

## How the form works

```text
User fills the form
        ↓
JavaScript reads the form data
        ↓
Data becomes a JavaScript object / JSON-like structure
        ↓
If no webhook URL is configured:
    Save to browser LocalStorage (demo mode)
Else:
    POST the JSON to your webhook/API
        ↓
Future workflow can send it to:
Google Sheets / Airtable / Notion / CRM / email / Slack
```

## Demo mode

By default, `config.js` contains:

```js
window.REGISTRATION_WEBHOOK_URL = "";
```

Submissions are stored only in the browser. Inspect them in the browser console with:

```js
JSON.parse(localStorage.getItem("adaptToChinaMeetupRegistrations"))
```

## Later: connect n8n

1. Create an n8n **Webhook** node.
2. Copy the production webhook URL.
3. Paste it into `config.js`.
4. Add a **Google Sheets** node after the Webhook.
5. Map incoming JSON fields to spreadsheet columns.

Then the flow becomes:

```text
Landing Page
   ↓ POST JSON
n8n Webhook
   ↓
Google Sheets
   ↓
Optional: welcome email / Slack alert / AI categorization
```

## Product-thinking questions

After the page works, do not stop at “the code runs.” Ask:

- What percentage of visitors start the form?
- What percentage complete it?
- Which field creates the most friction?
- Which acquisition channel sends the best registrants?
- Which topic is selected most often?
- Can the form automatically segment users?
- Can we trigger different follow-up messages by user type?

That is the difference between a **page** and a **growth/product tool**.

## Suggested next iteration

- Connect to n8n
- Write submissions to Google Sheets
- Auto-tag users by topic
- Send a confirmation email
- Add referral parameters such as `?ref=martin`
- Build a simple registration dashboard
