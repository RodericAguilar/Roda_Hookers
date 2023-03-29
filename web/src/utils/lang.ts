import en from "../langs/en.json";
import es from "../langs/es.json";

export const getLang = (langName: string) => {
  switch (langName) {
    case "en":
      return en;
    case "es":
      return es;
    default:
      return en;
  }
};

export const translate = (langName: string, key: string) => {
  const lang = getLang(langName) as any;

  if (!lang[key]) {
    console.log("Translation key not found: " + key);

    return key;
  }

  return lang[key];
};
