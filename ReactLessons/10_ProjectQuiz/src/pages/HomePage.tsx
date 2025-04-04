import { Link } from "react-router-dom";
import quizzes from "../data/quizData";

export default function HomePage() {
  return (
    <main className="homepage-container">
      <div>
        <h1 className="homepage-headline">
          Welcome to the <br />
          <strong>Frontend Quiz</strong>
        </h1>
        <p className="homepage-subtitle">
          Select a topic to get started &lt;3 {"<3"}
        </p>
      </div>
      <div className="button-stack"> 
        {quizzes.map((quiz) => (
          <Link
            className="big-button"
            key={quiz.slug}
            to={`/quiz/${quiz.slug.toLowerCase()}`}
          >
            <span className="big-button__logo">{quiz.logo}</span>
            <span className="big-button__text">{quiz.topic}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
