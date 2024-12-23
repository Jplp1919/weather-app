import weatherTranslations from "../weatherTranslations";

const translateDescription = (description, lang) => {
  if (lang === "pt_br" && weatherTranslations[description]) {
    return weatherTranslations[description][lang];
  }
  return description;
};

export default translateDescription;
