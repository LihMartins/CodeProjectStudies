// esversion: 6

const acceptAllBtn = document.getElementById("accept-all-cookies");
const closeBtn = document.querySelector(".close-button");

acceptAllBtn.addEventListener("click", () => {
storeUserConsent("all");
hideBanner();
});

closeBtn.addEventListener("click", hideBanner);

function storeUserConsent(consent) {
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Set expiration for 1 year

  document.cookie = "userConsent=true; expires=" + expirationDate.toUTCString() + "; path=/";
}

  // ... code to hide the banner visually ...
function hideBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
}
