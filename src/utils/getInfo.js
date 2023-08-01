import { useTranslation } from "react-i18next";
import info from "@data/info.js";

export default function getInfo() {
  const { i18n } = useTranslation()
  const languageKey = i18n.language

  return info[languageKey]
}