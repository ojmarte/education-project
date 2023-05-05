import React from "react";

interface SubjectProps {
  name: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Subject: React.FC<SubjectProps> = ({ name, value, options, onChange }) => {
  return (
    <div>
      <label style={{ display: "block", marginBottom: "6px" }}>
        {name}:
        <div style={{ display: "block", marginTop: "6px" }}>
            <select name={name} value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        </div>
      </label>
    </div>
  );
};

export default Subject;
