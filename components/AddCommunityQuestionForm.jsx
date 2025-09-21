"use client";

import { useState } from "react";
import { SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function AddCommunityQuestionForm({ onNewQuestion }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/community-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, answer }),
    });

    if (res.ok) {
      const saved = await res.json();
      onNewQuestion?.(saved);
      setQuestion("");
      setAnswer("");
    }

    setLoading(false);
  };

  return (
    <SignedIn>
      <Card className="p-4">
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">Add a Question</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
            <Textarea
              placeholder="Enter the correct answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </SignedIn>
  );
}
