import React, { useState } from 'react';
import './App.css';
import FormComponent from "./components/FormComponent";
import Difficulty from './components/Difficulty';
import QuestionType from './components/QuestionType';
import Subject from './components/Subject';
import Quantity from './components/Quantity';
import SubSubject from './components/SubSubject';
import Language from './components/Languages';
import Output from './components/Output';

function App() {
  const [formData, setFormData] = useState({
    difficulty: "",
    questionType: "",
    subject: "",
    subSubject: "",
    quantity: 0,
    language: "",
  });

  const [apiAnswer, setApiAnswer] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: parseInt(value) });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      difficulty: formData["difficulty"], 
      question_type: formData["questionType"],
      subject: formData["subject"],
      quantity: formData["quantity"],
      sub_subject: formData["subSubject"],
      language: formData["language"]
    }

    const jsonData = JSON.stringify(data)
    
    try {
      const response = await fetch("http://localhost:8000/generate-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        // La petición se realizó correctamente
        const responseData = await response.json();
        setApiAnswer(responseData);
        console.log("Formulario enviado correctamente");
        console.log(responseData)
      } else {
        // La petición falló
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };

  const questionTypes = [
    "Multiple Choice",
    "True or False",
    "Fill in the Blank",
    "Short Answer",
    "Matching",
    "Essay",
  ];

  const subjects = [
    {
      name: "Math",
      subSubjects: ["Geometry", "Trigonometry", "Algebra"],
    },
    {
      name: "Science",
      subSubjects: ["Physics", "Chemistry", "Biology"],
    },
    {
      name: "History",
      subSubjects: ["World History", "American History", "Ancient History"],
    },
  ];

  const languages = ["English", "Spanish", "French", "German"];

  return (
    <div className="app-container">
      <FormComponent onSubmit={handleSubmit}>
        <Difficulty
          name="difficulty"
          value={formData.difficulty}
          options={["hard", "easy", "medium"]}
          onChange={handleInputChange}
        />
        <QuestionType
          name="questionType"
          value={formData.questionType}
          onChange={handleInputChange}
          options={questionTypes}
        />
        <Subject
          name="subject"
          value={formData.subject}
          options={subjects.map((subject) => subject.name)}
          onChange={handleInputChange}
        />
        {formData.subject && (
          <SubSubject
            name="subSubject"
            value={formData.subSubject}
            options={
              subjects.find((subject) => subject.name === formData.subject)?.subSubjects || []
            }
            onChange={handleInputChange}
          />
        )}
        <Quantity
          name="quantity"
          value={formData.quantity}
          onChange={handleQuantityChange}
        />
        <Language
          name="language"
          value={formData.language}
          options={languages}
          onChange={handleInputChange}
        />
      </FormComponent>
      <Output answer={apiAnswer}/>
    </div>
  );
}

export default App;
