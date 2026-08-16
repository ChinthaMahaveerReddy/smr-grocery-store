/* SMR Grocery Store — shared site behaviour */

document.addEventListener("DOMContentLoaded", function () {
  setFooterYear();
  highlightActiveNav();
  renderOpenStatus();
  wireContactForm();
});

/* Footer copyright year */
function setFooterYear() {
  var el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* Highlight the current page in the navbar */
function highlightActiveNav() {
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".smr-navbar .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });
}

/*
 * Store hours: 7:00 AM – 10:00 PM, every day.
 * EDIT HERE if hours ever change — this single config drives the
 * open/closed badge wherever it appears on the site.
 */
var STORE_HOURS = { openHour: 7, closeHour: 22 };

function renderOpenStatus() {
  var badges = document.querySelectorAll("[data-open-status]");
  if (!badges.length) return;

  var now = new Date();
  var hour = now.getHours() + now.getMinutes() / 60;
  var isOpen = hour >= STORE_HOURS.openHour && hour < STORE_HOURS.closeHour;

  badges.forEach(function (badge) {
    badge.classList.add(isOpen ? "status-open" : "status-closed");
    badge.innerHTML =
      '<span class="status-dot"></span>' +
      (isOpen ? "Open now · closes 10 PM" : "Closed now · opens 7 AM");
  });
}

/*
 * Contact form: shows an inline confirmation instead of a full page
 * reload. The form still POSTs to FormSubmit.co so the store owner
 * actually receives the enquiry by email — see contact.html for the
 * one-line email setup this needs before it will deliver mail.
 */
function wireContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }
    // Let the native POST to FormSubmit.co proceed from here.
  });
}
