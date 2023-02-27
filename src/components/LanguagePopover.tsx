import { useState } from "react";
import useLocales from "../hooks/useLocales";

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(false);
  const { allLang, currentLang, onChangeLang } = useLocales();

  return (
    <div className="languages-container">
      <div className="dialog-button" onClick={() => setOpen(!open)}>
        {currentLang.icon}
      </div>

      <div className={`dialog-list${open ? " open" : ""}`}>
        {allLang.map((option) => (
          <div
            key={option.value}
            className="item"
            // selected={option.value === currentLang.value}
            onClick={() => {
              onChangeLang(option.value);
              setOpen(false);
            }}
            // style={{ py: 1, px: 2.5 }}
          >
            <div>{option.icon}</div>

            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
