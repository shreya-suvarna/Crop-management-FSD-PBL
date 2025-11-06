// // const translations = {
// //     en: {
// //         home: "Home",
// //         dashboardTitle: "My Dashboard",
// //         aboutUs: "About Us",
// //         alerts: "Alerts",
// //         settings: "Settings",
// //         login: "Login",
// //         title: "Welcome to Green Kisan",
// //         subtitle: "A platform connecting farmers with industries for sustainable crop residue management",
// //         getStarted: "Get Started",
// //         chooseLogin: "Choose Your Login Type",
// //         farmerLogin: "Farmer Login",
// //         industryLogin: "Industry Login",
// //         uploadResidue: "Upload crop residue for sale.",
// //         buyResidue: "Purchase crop residue."
// //     },
// //     kn: {
// //         home: "ಮುಖಪುಟ",
// //         dashboardTitle: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
// //         aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
// //         alerts: "ಎಚ್ಚರಿಕೆಗಳು",
// //         settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
// //         login: "ಲಾಗಿನ್",
// //         title: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಸ್ವಾಗತ",
// //         subtitle: "ಕೃಷಿ ಉಳಿಕೆಯ ನಿರ್ವಹಣೆಗೆ ರೈತರನ್ನು ಕೈಗಾರಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ವೇದಿಕೆ",
// //         getStarted: "ಪ್ರಾರಂಭಿಸಿ",
// //         chooseLogin: "ನಿಮ್ಮ ಲಾಗಿನ್ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",
// //         farmerLogin: "ರೈತ ಲಾಗಿನ್",
// //         industryLogin: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
// //         uploadResidue: "ಮಾರಾಟಕ್ಕಾಗಿ ಬೆಳೆ ಉಳಿಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
// //         buyResidue: "ಬೆಳೆ ಉಳಿಕೆ ಖರೀದಿಸಿ."
// //     }
// // };

// // // Select language dropdown
// // const langSelector = document.getElementById("languageSelector");

// // // Set initial language from localStorage or default to English
// // const currentLang = localStorage.getItem("language") || "en";
// // langSelector.value = currentLang;
// // translatePage(currentLang);

// // // Change language when user selects
// // langSelector.addEventListener("change", () => {
// //     const selectedLang = langSelector.value;
// //     localStorage.setItem("language", selectedLang);
// //     translatePage(selectedLang);
// // });

// // function translatePage(lang) {
// //     document.querySelectorAll("[data-translate]").forEach(el => {
// //         const key = el.getAttribute("data-translate");
// //         if (translations[lang][key]) {
// //             el.innerText = translations[lang][key];  // safer than textContent
// //         }
// //     });
// // }

// // weltranslate.js

// // --- Translation content ---
// const translations = {
//   en: {
//     home: "Home",
//     dashboardTitle: "My Dashboard",
//     aboutUs: "About Us",
//     alerts: "Alerts",
//     settings: "Settings",
//     login: "Login",
//     title: "Welcome to Green Kisan",
//     subtitle: "A platform connecting farmers with industries for sustainable crop residue management",
//     getStarted: "Get Started",
//   },
//   kn: {
//     home: "ಮುಖಪುಟ",
//     dashboardTitle: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
//     aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
//     alerts: "ಎಚ್ಚರಿಕೆಗಳು",
//     settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
//     login: "ಲಾಗಿನ್",
//     title: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಸ್ವಾಗತ",
//     subtitle: "ಸ್ಥಿರ ಬೆಳೆ ಅವಶೇಷ ನಿರ್ವಹಣೆಗೆ ರೈತರನ್ನು ಕೈಗಾರಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ವೇದಿಕೆ",
//     getStarted: "ಪ್ರಾರಂಭಿಸಿ",
//   }
// };

// // --- Load saved language or default to English ---
// let currentLang = localStorage.getItem("language") || "en";

// // --- Function to apply translations ---
// function applyTranslations(lang) {
//   document.querySelectorAll("[data-translate]").forEach((el) => {
//     const key = el.getAttribute("data-translate");
//     if (translations[lang][key]) {
//       el.textContent = translations[lang][key];
//     }
//   });
// }

// // --- Apply on page load ---
// applyTranslations(currentLang);

// // --- Handle language change ---
// const languageSelector = document.getElementById("languageSelector");
// if (languageSelector) {
//   languageSelector.value = currentLang; // set dropdown to saved lang

//   languageSelector.addEventListener("change", (event) => {
//     const selectedLang = event.target.value;
//     localStorage.setItem("language", selectedLang);
//     applyTranslations(selectedLang);
//   });
// }


// weltranslate.js

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
        home: "Home",
        aboutUs: "About Us",
        alerts: "Alerts",
        settings: "Settings",
        login: "Login",
        title: "Welcome to Green Kisan",
        subtitle:"A platform connecting farmers with industries for sustainable crop residue management",
        getStarted: "Get Started",
        chooseLogin: "Choose Your Login Type",
        subtitle: "Please select whether you are a Farmer or an Industry representative.",
        farmerLogin: "Farmer Login",
        industryLogin: "Industry Login",
        uploadResidue: "Upload crop residue for sale.",
        buyResidue: "Purchase crop residue.",
        industryDashboardTitle: "Industry Dashboard - Green Kisan",
        industryDashboard: "Industry Dashboard",
        searchResidue: "Search Residue",
        preBook: "Pre-Book",
         farmerDashboardTitle: "Farmer's Dashboard - Green Kisan",
    farmerDashboard: "Farmer's Dashboard",
    addResidue: "Add Crop Residue",
    sales: "Sales",
     payments: "Payments",
    logout: "Logout",
    govtSchemes: "Govt Schemes",
    myDashboard: "My Dashboard",
    contact: "Contact",
    },
    kn: {
      home: "ಮುಖಪುಟ",
      aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
      alerts: "ಎಚ್ಚರಿಕೆಗಳು",
      settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
      login: "ಲಾಗಿನ್",
      title: "ಗ್ರೀನ್ ಕಿಸಾನ್‌ಗೆ ಸ್ವಾಗತ",
      subtitle:
        "ಸ್ಥಿರ ಬೆಳೆ ಅವಶೇಷ ನಿರ್ವಹಣೆಗೆ ರೈತರನ್ನು ಕೈಗಾರಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ ವೇದಿಕೆ",
      getStarted: "ಪ್ರಾರಂಭಿಸಿ",
        chooseLogin: "ನಿಮ್ಮ ಲಾಗಿನ್ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",
     subtitle: "ದಯವಿಟ್ಟು ನೀವು ರೈತರಾ ಅಥವಾ ಉದ್ಯಮ ಪ್ರತಿನಿಧಿಯರಾ ಎಂದು ಆಯ್ಕೆಮಾಡಿ.",
    farmerLogin: "ರೈತ ಲಾಗಿನ್",
    industryLogin: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
    uploadResidue: "ಮಾರಾಟಕ್ಕಾಗಿ ಬೆಳೆ ಉಳಿಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    buyResidue: "ಬೆಳೆ ಉಳಿಕೆ ಖರೀದಿಸಿ.",
    industryDashboardTitle: "ಉದ್ಯಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಗ್ರೀನ್ ಕಿಸಾನ್",
    industryDashboard: "ಉದ್ಯಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    searchResidue: "ಅವಶೇಷ ಹುಡುಕಿ",
    preBook: "ಪೂರ್ವ-ಬುಕಿಂಗ್",
    farmerDashboardTitle: "ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ - ಗ್ರೀನ್ ಕಿಸಾನ್",
    farmerDashboard: "ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    addResidue: "ಬೆಳೆ ಅವಶೇಷವನ್ನು ಸೇರಿಸಿ",
    sales: "ಮಾರಾಟ",
       payments: "ಪಾವತಿಗಳು",
    logout: "ಲಾಗ್ ಔಟ್",
    govtSchemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    myDashboard: "ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    contact: "ಸಂಪರ್ಕ"

    },
  };

  // Load saved language or default to English
  let currentLang = localStorage.getItem("language") || "en";

  const selector = document.getElementById("languageSelector");

  // --- Function to update text ---
  function applyTranslations(lang) {
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // --- Initial apply ---
  applyTranslations(currentLang);

  // --- Update dropdown ---
  if (selector) selector.value = currentLang;

  // --- Change listener ---
  if (selector) {
    selector.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("language", lang);
      applyTranslations(lang);
    });
  }
});
