const form = document.getElementById("registrationForm");
const statusEl = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

function formToObject(formElement) {
  const formData = new FormData(formElement);

  // Read referral source from the URL
  // Example: ?ref=instagram
  const params = new URLSearchParams(window.location.search);
  const acquisitionSource = params.get("ref") || "direct";

  const data = {
    submittedAt: new Date().toISOString(),
    source: "adapt-to-china-newcomer-night-2026",
    acquisition_source: acquisitionSource,
    topics: []
  };

  for (const [key, value] of formData.entries()) {
    if (key === "topics") {
      data.topics.push(value);
    } else if (key === "consent") {
      data.consent = true;
    } else {
      data[key] = value;
    }
  }

  return data;
}

function saveDemoSubmission(payload) {
  const key = "adaptToChinaMeetupRegistrations";
  const existing = JSON.parse(localStorage.getItem(key) || "[]");

  existing.push(payload);

  localStorage.setItem(key, JSON.stringify(existing));
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const payload = formToObject(form);

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  statusEl.textContent = "";

  try {
    const webhookUrl =
      (window.REGISTRATION_WEBHOOK_URL || "").trim();

    if (!webhookUrl) {
      saveDemoSubmission(payload);

      statusEl.textContent =
        "✅ Demo registration saved in this browser.";
    } else {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}`
        );
      }

      statusEl.textContent =
        "✅ Registration received. See you in Shanghai!";
    }

    form.reset();
  } catch (error) {
    console.error(error);

    statusEl.textContent =
      "⚠️ Something went wrong. Please try again.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Register";
  }
});