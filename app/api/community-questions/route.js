import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

// GET – fetch all questions
export async function GET() {
  const questions = await db.communityQuestion.findMany({
    orderBy: { createdAt: "desc" },
  });
  return Response.json(questions);
}

// POST – add a question (requires sign-in)
export async function POST(req) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { question, answer } = await req.json();

  const newQuestion = await db.communityQuestion.create({
    data: { question, answer },
  });

  return Response.json(newQuestion);
}
