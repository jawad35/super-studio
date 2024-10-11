import React from 'react';
import { Select } from '@chakra-ui/react';
import 'flag-icons/css/flag-icons.min.css';
 

interface LanguageDropdownProps {
  languages: { code: string; name: string }[]; // An array of objects with language code and name
  onChange: (selectedLanguage: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ languages, onChange }) => {
  return (
    <Select placeholder="Select Language" onChange={(e) => onChange(e.target.value)}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          <span className={`flag-icon flag-icon-${language.code.toLowerCase()}`} /> {language.name}
        </option>
      ))}
    </Select>
  );
};

export default LanguageDropdown;
