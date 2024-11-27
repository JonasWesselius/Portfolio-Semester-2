const mainNavLinks = document.querySelectorAll(".main-header .navigation a");
const secondaryHeader = document.getElementById("secondary-header");
const secondaryContent = document.getElementById("secondary-content");

// Dynamic content map
const secondaryContentMap = {
    "learning-outcomes": `
        <li><a href="/learning-outcomes/media-products.html" data-section="LO1">LO1</a></li>
        <li><a href="/learning-outcomes/development.html" data-section="LO2">LO2</a></li>
        <li><a href="/learning-outcomes/iterative-design.html" data-section="LO3">LO3</a></li>
        <li><a href="/learning-outcomes/professional-standard.html" data-section="LO4">LO4</a></li>
    `,
    projects: `
        <li><a href="#blik" data-section="blik">Theatre Blik</a></li>
        <li><a href="#studio" data-section="studio">Studio Branding</a></li>
    `,
    about: `
        <li><a href="#about" data-section="about">About me</a></li>
        <li><a href="#cv" data-section="cv">CV</a></li>
    `,
};

// Inject secondary content on load
const updateSecondaryHeader = (section) => {
    if (secondaryContentMap[section]) {
        secondaryContent.innerHTML = secondaryContentMap[section];
        secondaryHeader.style.display = "flex";

        // Add smooth scrolling functionality
        const secondaryLinks = secondaryContent.querySelectorAll("a");
        secondaryLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    } else {
        secondaryHeader.style.display = "none";
    }
};

// Set active state for navigation links
const setActiveLink = (links, section) => {
    links.forEach((link) => {
        link.classList.toggle("active", link.dataset.section === section);
    });
};

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
    const currentSection = window.location.hash.slice(1) || "learning-outcomes";
    setActiveLink(mainNavLinks, currentSection);
    updateSecondaryHeader(currentSection);

    // Handle clicks on main navigation
    mainNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            setActiveLink(mainNavLinks, section);
            updateSecondaryHeader(section);
        });
    });
});
