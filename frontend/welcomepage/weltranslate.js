const translations = {
    en: {
        home: "Home",
        dashboardTitle: "My Dashboard",
        aboutUs: "About Us",
        alerts: "Alerts",
        settings: "Settings",
        login: "Login",
        title: "Welcome to Green Kisan",
        subtitle: "A platform connecting farmers with industries for sustainable crop residue management",
        getStarted: "Get Started",
        chooseLogin: "Choose Your Login Type",
        farmerLogin: "Farmer Login",
        industryLogin: "Industry Login",
        uploadResidue: "Upload crop residue for sale.",
        buyResidue: "Purchase crop residue."
    },
    kn: {
        home: "ಮುಖಪುಟ",
        dashboardTitle: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
        alerts: "ಎಚ್ಚರಿಕೆಗಳು",
        settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
        login: "ಲಾಗಿನ್",
        title: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಸ್ವಾಗತ",
        subtitle: "ಕೃಷಿ ಉಳಿಕೆಯ ನಿರ್ವಹಣೆಗೆ ರೈತರನ್ನು ಕೈಗಾರಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ವೇದಿಕೆ",
        getStarted: "ಪ್ರಾರಂಭಿಸಿ",
        chooseLogin: "ನಿಮ್ಮ ಲಾಗಿನ್ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",
        farmerLogin: "ರೈತ ಲಾಗಿನ್",
        industryLogin: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
        uploadResidue: "ಮಾರಾಟಕ್ಕಾಗಿ ಬೆಳೆ ಉಳಿಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        buyResidue: "ಬೆಳೆ ಉಳಿಕೆ ಖರೀದಿಸಿ."
    }
};

// Select language dropdown
const langSelector = document.getElementById("languageSelector");

// Set initial language from localStorage or default to English
const currentLang = localStorage.getItem("language") || "en";
langSelector.value = currentLang;
translatePage(currentLang);

// Change language when user selects
langSelector.addEventListener("change", () => {
    const selectedLang = langSelector.value;
    localStorage.setItem("language", selectedLang);
    translatePage(selectedLang);
});

function translatePage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];  // safer than textContent
        }
    });
}
