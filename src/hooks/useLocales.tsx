import flagForBrazil from "@iconify/icons-emojione-v1/flag-for-brazil";
import flagForUnitedKingdom from "@iconify/icons-emojione-v1/flag-for-united-kingdom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
// material

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: "English",
    value: "en",
    // systemValue: enUS,
    icon: <Icon icon={flagForUnitedKingdom} height="100%" />,
  },
  {
    label: "Português",
    value: "pt_Br",
    // systemValue: ptBR,
    icon: <Icon icon={flagForBrazil} height="100%" />,
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem("i18nextLng");
  const currentLang =
    LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
