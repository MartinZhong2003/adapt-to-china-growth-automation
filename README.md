# Adapt to China — AI Growth Automation

A lightweight AI-native growth operations tool built for an international newcomer event.

The project turns a simple registration landing page into an automated workflow that tracks acquisition sources, classifies user needs with AI, stores structured user data, and sends personalized confirmation emails.

## 🚀 What It Does

A user arrives from a growth channel such as:

`?ref=instagram`

or

`?ref=wechat`

and completes the registration form.

The system automatically:

1. Captures the registration through a production webhook
2. Tracks the acquisition source
3. Uses Google Gemini to analyze the user's needs
4. Generates structured user labels
5. Stores the enriched data in Google Sheets
6. Sends a personalized confirmation email

## ⚙️ Workflow

Landing Page  
↓  
Referral Tracking  
↓  
n8n Production Webhook  
↓  
Google Gemini AI Classification  
↓  
Google Sheets  
↓  
Personalized Gmail Confirmation

## 🤖 AI User Classification

The workflow analyzes selected topics and free-text user needs.

For example, a user may write:

> I arrived in Shanghai yesterday and urgently need an apartment near my university. I also don't have a Chinese bank account yet.

The system can automatically generate:

- **Primary need:** Renting
- **Secondary need:** Payments
- **Urgency:** High
- **User stage:** New arrival
- **AI summary:** Newly arrived user seeking urgent housing and payment support.

## 📈 Growth Attribution

Different acquisition channels can use different URLs:

`?ref=instagram`

`?ref=wechat`

`?ref=campus`

`?ref=creator`

The referral source is automatically captured and stored with each registration.

This makes it possible to compare which acquisition channels generate registrations and user demand.

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript
- n8n
- Google Gemini
- Google Sheets
- Gmail
- Git / GitHub
- AI-assisted coding

## 💡 Why I Built This

I wanted to explore how an operations or growth idea could be turned into a working tool quickly using AI-assisted coding.

Instead of manually processing registrations, the workflow connects user acquisition, AI analysis, data storage and user communication into one automated system.

The project was built around a simple principle:

**Idea → Build → Automate → Collect Data → Iterate**

## 🌏 Context

This project is connected to **Adapt to China**, an English-first platform I built to help international residents navigate everyday life in China.

Main project:
https://adapttochina.pages.dev/
