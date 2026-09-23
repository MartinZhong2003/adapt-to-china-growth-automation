const needsForm = document.getElementById("needsForm");
const needsStatus = document.getElementById("needsStatus");
const needsSubmit = document.getElementById("needsSubmit");

function getAcquisitionSource() {
  const params = new URLSearchParams(window.location.search);
  return (params.get("ref") || "direct").trim().slice(0, 80);
}

function buildNeedsPayload(formElement) {
  const formData = new FormData(formElement);
  const consent = formData.get("consent") === "on";

  return {
    submittedAt: new Date().toISOString(),
    source: "adapt-to-china-user-needs",
    acquisition_source: getAcquisitionSource(),
    source_page: window.location.pathname,
    name: (formData.get("name") || "").trim(),
    email: (formData.get("email") || "").trim(),
    city: (formData.get("city") || "").trim(),
    timing: formData.get("timing") || "",
    support_preference: formData.get("support_preference") || "",
    details: (formData.get("details") || "").trim(),
    consent
  };
}

needsForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!needsForm.checkValidity()) {
    needsForm.reportValidity();
    return;
  }

  const honeypot = document.getElementById("needs-company");
  if (honeypot && honeypot.value.trim()) {
    needsForm.reset();
    needsStatus.textContent = "Thanks. Your request has been received.";
    return;
  }

  const webhookUrl = (window.NEEDS_WEBHOOK_URL || "").trim();
  if (!webhookUrl) {
    needsStatus.innerHTML = 'This intake form is not connected yet. Please use <a href="answers.html">Personal Support</a> for now.';
    return;
  }

  const payload = buildNeedsPayload(needsForm);
  needsSubmit.disabled = true;
  needsSubmit.textContent = "Sending...";
  needsStatus.textContent = "";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    needsForm.reset();
    needsStatus.textContent = "Thanks. Your request is in. I will review it and follow up by email if a reply or local support is needed.";
  } catch (error) {
    console.error(error);
    needsStatus.textContent = "Something went wrong. Please try again in a moment.";
  } finally {
    needsSubmit.disabled = false;
    needsSubmit.textContent = "Send my request →";
  }
});

(function setupMobileNav(){
  const burger = document.querySelector('.nav-burger');
  const links = document.getElementById('nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', function(){
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
