import React from 'react';

interface OutputProps {
  answer: string;
}

const Output: React.FC<OutputProps> = ({ answer }) => {
  return (
    <div className="output-container">
      <h3 style={{ marginBottom: "10px" }}>Output:</h3>
      <div className='output-div'>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default React.memo(Output);

