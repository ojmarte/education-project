import React from "react";

interface SubSubjectProps {
  name: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SubSubject: React.FC<SubSubjectProps> = ({ name, value, options, onChange }) => {
  return (
    <div>
      <label style={{ display: "block", marginBottom: "6px" }}>
        {name}:
        <div style={{ display: "block", marginTop: "6px" }}>
            <select name={name} value={value} onChange={onChange}>
            <option value="">Select</option>
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

export default SubSubject;
