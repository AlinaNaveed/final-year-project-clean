"use client";

import { useEffect, useState } from "react";
import CommunityQuestionButton from "@/components/CommunityQuestionButton";

export default function CommunityPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/community-questions")
      .then((res) => res.json())
      .then(setQuestions)
      .catch(console.error);
  }, []);

  const handleNewQuestion = (q) => setQuestions((prev) => [q, ...prev]);

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Community Questions</h1>
        <p className="text-gray-600">
          Browse and share real interview questions.
        </p>
      </header>

      {/* Floating add-question button */}
      <CommunityQuestionButton onNewQuestion={handleNewQuestion} />

      <section className="space-y-6">
        {questions.length === 0 && (
          <p className="text-center text-gray-500">No questions yet.</p>
        )}
        {questions.map((q) => (
          <div
            key={q.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <p className="font-semibold text-lg mb-1">{q.question}</p>
            {q.answer && (
              <p className="text-sm text-gray-700">Answer: {q.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
