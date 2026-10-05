"use strict";

// All content and contact links remain usable without JavaScript.
const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector(".copy-status");
const emailLink = document.querySelector(".email-link");

if (copyButton && copyStatus && emailLink && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      const address = emailLink.getAttribute("href").replace(/^mailto:/, "");
      await navigator.clipboard.writeText(address);
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent = "Please select and copy the email address above.";
    }
  });
}
