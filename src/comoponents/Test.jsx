import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

function Test() {
  const [questions, setQuestions] = useState([]);
  const [ques, setQues] = useState("");
  const [options, setOptions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(""); // declare selectedOption state

  useEffect(() => {
    axios.get(`${apiUrl}/quiz-questions/`)
      .then(response => {
        setQuestions(response.data.sort(()=>Math.random()-0.5));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (questions[index]) {
      setOptions([
        questions[index].answer_text,
        questions[index].distractor_1_text,
        questions[index].distractor_2_text,
        questions[index].distractor_3_text
      ].sort(() => Math.random() - 0.5));
      setQues(questions[index].question_text);
    }
  }, [index, questions]);

  function handleAnswer(option) {
    let flag = false;
    if (questions[index] && option === questions[index].answer_text) {
      alert('Correct Answer');
      setScore(score + 1);
    }else {
      alert('Wrong Answer');
      flag = true;
    }
    setIndex(index + 1);
    if (index === questions.length - 1) {
      //prevent going beyond last question
      flag = true;
    }
    if(flag === true) {
      setIndex(-1);
    }
  }
  if(index === -1) {
    return (
      <h2>Final Score: {score} Correct Answer out of {questions.length} question.</h2>
    );
  }
  return (
    <div className='test-container'>
          <h2 className='question'>{ques}</h2>
          <ul className='options'>
            {options.map( (option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={`option${idx}`}
                  name="option"
                  value={option}
                  checked={selectedOption === option} // set checked state based on selectedOption
                  onChange={() => setSelectedOption(option)}
                />
                <label htmlFor={`option${idx}`}>{option}</label>
              </div>
            ))}
          </ul>
          <button className="submit" onClick={() => handleAnswer(selectedOption)}>Submit</button>
          <p className="score" >Score: {score}</p>
    </div>
  );
}

export default Test;
