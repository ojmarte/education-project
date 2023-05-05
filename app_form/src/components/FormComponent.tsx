import React, { ReactNode, FormEvent } from "react";

interface FormComponentProps {
  children: ReactNode;
  onSubmit: (event: FormEvent) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ children, onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;


