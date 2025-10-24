
const translations = {
  en: {
    chooseLogin: "Choose Your Login Type",
    subtitle: "Please select whether you are a Farmer or an Industry representative.",
    farmerLogin: "Farmer Login",
    industryLogin: "Industry Login",
    uploadResidue: "Upload crop residue for sale.",
    buyResidue: "Purchase crop residue."
  },
  kn: {
    chooseLogin: "ನಿಮ್ಮ ಲಾಗಿನ್ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",
     subtitle: "ದಯವಿಟ್ಟು ನೀವು ರೈತರಾ ಅಥವಾ ಉದ್ಯಮ ಪ್ರತಿನಿಧಿಯರಾ ಎಂದು ಆಯ್ಕೆಮಾಡಿ.",
    farmerLogin: "ರೈತ ಲಾಗಿನ್",
    industryLogin: "ಕೈಗಾರಿಕಾ ಲಾಗಿನ್",
    uploadResidue: "ಮಾರಾಟಕ್ಕಾಗಿ ಬೆಳೆ ಉಳಿಕೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
    buyResidue: "ಬೆಳೆ ಉಳಿಕೆ ಖರೀದಿಸಿ."
  }
};

const lang = localStorage.getItem("language") || "en";
lang = document.getElementById("languageSelector").value ;
translatePage(lang);

// Change on selection
document.getElementById("languageSelector").addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  localStorage.setItem("language", selectedLang);
  translatePage(selectedLang);
});

function translatePage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}
