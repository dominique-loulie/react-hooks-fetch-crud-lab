import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionsItems, setQuestionItems] = useState([]);

  useEffect (() => {
    fetch("http://localhost:4000/questions")
    .then ((result) => result.json())
    .then ((questions) => setQuestionItems(questions))
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsItems.map((question) => (<QuestionItem question={question}/>))}</ul>
    </section>
  );
}

export default QuestionList;