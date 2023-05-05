import React from "react";

interface QuestionTypeProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const QuestionType: React.FC<QuestionTypeProps> = ({ name, value, onChange, options }) => {
  return (
    <div>
      <label>
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

export default QuestionType;

