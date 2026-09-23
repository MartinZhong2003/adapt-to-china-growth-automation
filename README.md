# Adapt to China | AI User Needs Intake System

An AI-assisted demand intake and operations workflow built for **Adapt to China**, an English-first platform helping international residents navigate everyday life in China.

🌐 **Live Demo:**  
https://adapttochina.pages.dev/tell-me-your-needs.html?ref=github

🌏 **Adapt to China:**  
https://adapttochina.pages.dev/

## 🚀 What It Does

International users often know what problem they have, but they may not know which guide, service, platform, or local resource can help them.

Instead of asking users to classify their own problems first, this system lets them simply describe their situation in their own words.

The workflow then automatically:

1. Captures the request through an n8n production webhook
2. Tracks where the user came from
3. Uses Google Gemini to understand and classify the request
4. Converts free-text needs into structured operational data
5. Stores the enriched request in Google Sheets
6. Sends a personalized confirmation email

## ⚙️ Workflow

User  
↓  
Tell Me Your Needs Page  
↓  
Referral Tracking  
↓  
n8n Production Webhook  
↓  
Google Gemini  
↓  
AI Need Classification  
↓  
Google Sheets  
↓  
Personalized Email

## 🤖 AI Need Classification

The AI analyzes information such as:

• Current city or destination  
• When the user needs help  
• Preferred type of support  
• Free-text description of the situation  

It then generates structured fields including:

• `primary_need`  
• `secondary_need`  
• `urgency`  
• `user_stage`  
• `suggested_route`  
• `ai_summary`

### Example

A user writes:

> I just arrived in Shanghai and need a short-term apartment near ECNU. I also cannot pay the deposit because I do not have a Chinese bank account yet.

The workflow can automatically generate:

**Primary need:** Renting  
**Secondary need:** Payments  
**Urgency:** High  
**User stage:** New arrival  
**Suggested route:** Personal support  

This turns an unstructured request into information that can be used for operations, user research, and service routing.

## 📈 Referral Tracking

The system also records where requests come from through URL parameters.

For example:

`?ref=instagram`

`?ref=wechat`

`?ref=reddit`

`?ref=website-home`

A user entering through:

`https://adapttochina.pages.dev/tell-me-your-needs.html?ref=instagram`

will be stored with:

`acquisition_source = instagram`

This makes it possible to compare which channels generate requests and what types of needs come from each channel.

## 💡 Why I Built This

I first built a lightweight registration workflow while exploring Vibe Coding and AI-assisted automation.

While testing it, I realized the same architecture could solve a real problem in my own project.

Adapt to China already provides guides, local information, community resources, and personal support. However, users do not always know which page or service matches their situation.

So I turned the prototype into a real user needs intake system.

The product loop is simple:

**Real User Need → Build → Automate → Collect Structured Data → Learn → Iterate**

## 🧠 What the System Can Help Me Learn

As more requests are collected, the structured data can help answer questions such as:

• What problems do international residents ask about most often?  
• Which needs are most urgent?  
• Which requests can already be solved by an existing guide?  
• Which requests require personal support?  
• What content should Adapt to China build next?  
• Which acquisition channels bring different types of users?  

This means the system is not only a support form.

It also functions as a lightweight user research, demand analysis, and growth operations tool.

## 🛠 Tech Stack

**Frontend**

HTML  
CSS  
JavaScript  

**Automation**

n8n  

**AI**

Google Gemini  

**Data & Communication**

Google Sheets  
Gmail  

**Deployment & Version Control**

Cloudflare Pages  
Git  
GitHub  

**Development Approach**

AI-assisted coding  
Vibe Coding  
Rapid prototyping  
Workflow automation  

## 🔐 Implementation Note

The public repository contains:

`needs-config.example.js`

instead of the production webhook configuration.

The actual production endpoint is not stored directly in the public repository.

## 🌏 About Adapt to China

Adapt to China is an English-first platform I built to make everyday life in China easier for international residents.

The wider project includes practical guides and tools covering areas such as:

• Renting  
• Healthcare  
• Payments  
• Daily life  
• Special food  
• Community resources  
• Local support  

Website:

https://adapttochina.pages.dev/

## 📌 Project Status

Current version supports:

✅ Live user request submission  
✅ Production n8n webhook  
✅ AI-powered need classification  
✅ Referral source tracking  
✅ Structured Google Sheets storage  
✅ Personalized confirmation emails  
✅ Live deployment on Cloudflare Pages  

The next stage is to use real user requests to improve routing, content planning, and service design.
