"use server";

import { db } from "@/lib/prisma";

// Get all community questions
export async function getCommunityQuestions() {
  return await db.communityQuestion.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// Add a new question (called from QuizResult, not Community page)
export async function addCommunityQuestion(question) {
  return await db.communityQuestion.create({
    data: { question },
  });
}