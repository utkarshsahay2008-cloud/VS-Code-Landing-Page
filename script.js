
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const siteSearch = document.getElementById("siteSearch");

// Mobile menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Open search
searchBtn.addEventListener("click", () => {
    searchPanel.hidden = false;
    siteSearch.focus();
});

// Close search
closeSearch.addEventListener("click", () => {
    searchPanel.hidden = true;
});

// Search navigation labels
siteSearch.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const query = siteSearch.value.trim().toLowerCase();

    if (!query) return;

    const link = [...navLinks.querySelectorAll("a")].find((item) =>
        item.textContent.toLowerCase().includes(query)
    );

    if (link) {
        link.click();
        searchPanel.hidden = true;
    } else {
        alert("No matching navigation link found.");
    }
});

console.log("CodePilot loaded successfully!");
