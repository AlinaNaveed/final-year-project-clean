
"use client";

import { useState } from "react";
import QuizComponent from "@/components/QuizComponent";
import AddCommunityQuestionForm from "@/components/AddCommunityQuestionForm";

export default function QuizPage() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleQuizSubmit(finalScore) {
    setScore(finalScore);
    setQuizCompleted(true);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {!quizCompleted ? (
        <QuizComponent onSubmit={handleQuizSubmit} />
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Your Score: {score}</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {showForm ? "Hide" : "Add Custom Question"}
          </button>

          {showForm && (
            <div className="mt-4">
              <AddCommunityQuestionForm />
            </div>
          )}
        </>
      )}
    </div>
  );
}
