import React from "react";

interface QuantityProps {
  name: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Quantity: React.FC<QuantityProps> = ({ name, value, onChange }) => {
  return (
    <div>
      <label style={{ display: "block", marginBottom: "6px" }}>
        {name}:
        <div style={{ display: "block", marginTop: "6px" }}>
            <input type="number" name={name} value={value} onChange={onChange} />
        </div>
      </label>
    </div>
  );
};

export default Quantity;
