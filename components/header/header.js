const mainNavLinks = document.querySelectorAll(".main-header .navigation a");
const secondaryHeader = document.getElementById("secondary-header");
const secondaryContent = document.getElementById("secondary-content");

// Map for dynamic secondary content
const secondaryContentMap = {
    "learning-outcomes": `
        <li><a href="#LO1" data-section="LO1">LO1</a></li>
        <li><a href="#LO2" data-section="LO2">LO2</a></li>
        <li><a href="#LO3" data-section="LO3">LO3</a></li>
        <li><a href="#LO4" data-section="LO4">LO4</a></li>
    `,
    projects: `
        <li><a href="#blik" data-section="blik">Theatre Blik</a></li>
        <li><a href="#studio" data-section="studio">Studio Branding</a></li>
        <li><a href="#ai-fairytales" data-section="ai-fairytales">AI Fairytales</a></li>
        <li><a href="#fix-that-ux" data-section="fix-that-ux">Fix That UX</a></li>
        <li><a href="#development" data-section="development">Development</a></li>
        <li><a href="#sprint-x" data-section="sprint-x">Sprint X</a></li>
    `,
    about: `
        <li><a href="#about" data-section="about">About me</a></li>
        <li><a href="#cv" data-section="cv">CV</a></li>
    `,
};

// Function to set the active link
const setActiveLink = (links, section) => {
    links.forEach((link) => {
        if (link.dataset.section === section) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};

// Function to update secondary header
const updateSecondaryHeader = (section) => {
    if (secondaryContentMap[section]) {
        secondaryContent.innerHTML = secondaryContentMap[section];
        secondaryHeader.style.display = "flex";

        // Add event listeners to the new secondary links
        const secondaryLinks = secondaryContent.querySelectorAll("a");
        setActiveLink(secondaryLinks, section); // Set default active link
        secondaryLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const subSection = link.dataset.section;
                setActiveLink(secondaryLinks, subSection); // Highlight clicked link
            });
        });
    } else {
        secondaryHeader.style.display = "none";
    }
};

// Initialize active state and content on page load
document.addEventListener("DOMContentLoaded", () => {
    const currentSection = window.location.hash.slice(1) || "learning-outcomes"; // Default section
    setActiveLink(mainNavLinks, currentSection);
    updateSecondaryHeader(currentSection);

    // Add click event listeners to main navigation
    mainNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            setActiveLink(mainNavLinks, section);
            updateSecondaryHeader(section);
        });
    });
});
