# Adapt to China — AI User Needs Intake System

An AI-assisted demand intake and operations workflow built for **Adapt to China**, an English-first platform helping international residents navigate everyday life in China.

🌐 **Live Demo:**  
https://adapttochina.pages.dev/tell-me-your-needs.html?ref=github

🌏 **Main Product:**  
https://adapttochina.pages.dev/

## 🚀 What It Does

International users often know what problem they have, but they may not know which category, guide, platform, or local service can help them.

This system lets users simply describe their situation in their own words.

The workflow then automatically:

1. Captures the request through a production webhook
2. Tracks the acquisition source
3. Uses Google Gemini to classify the user's needs
4. Converts unstructured requests into structured operational data
5. Stores the enriched data in Google Sheets
6. Sends a personalized confirmation email

## ⚙️ Workflow

```text
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
