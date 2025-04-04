import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import quizzes from "../data/quizData";

export default function QuizPage() {
  const params = useParams(); // {topic: "html"}
  const { slug } = params;
  const quiz = quizzes.find((quiz) => quiz.slug === slug);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // Falls kein Quiz gefunden wurde: Early return
  if (!quiz) {
    return (
      <div>
        <h1>Sorry, haben wir nicht</h1>
        <Link to="/">Zurück zur Homepage</Link>
      </div>
    );
  }

 
  console.log(quiz.questions);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerClick = (selectedAnswer: string)=>{
    console.log(selectedAnswer)
    setCurrentQuestionIndex((oldIndex) =>(oldIndex + 1))
    console.log(currentQuestionIndex)
  }


  return (
    <main className="page-container">
      <div>
        <h1>{quiz.topic}</h1>
        <p>{currentQuestion.title}</p>
      </div>
      <div className="button-stack">
        {currentQuestion.options.map((option, index) => (
          <button
            className="big-button"
            key={option}
            onClick={()=>(handleAnswerClick(option))}
          >
            <span className="big-button__logo">{["A","B","C","D","E","F"][index]}</span>
            <span className="big-button__text">{option}</span>
          </button>
        ))}
      </div>

    </main>
  );
}
