import React, {useState} from 'react';
import './CustomDropdown.css';

type CustomDropdownProps = {
  options: { value: string, label: string }[],
  selectedValue: string,
  onSelect: (value: string) => void;
};

export default function CustomDropdown({
  options, selectedValue, onSelect}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)}>
      <div className="dropdown-header">
        {options.find((option) => option.value === selectedValue)?.label}
        <span className="dropdown-icon">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
