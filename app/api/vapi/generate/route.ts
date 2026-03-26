import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";

export async function GET() {
    return Response.json(
        { success: true, data: "THANK YOU!" },
        { status: 200 }
    );
}

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } =
        await request.json();

    let parsedQuestions: string[] = [];
    let isAIGenerated = true;

    try {
        const { text } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: `Prepare questions for a job interview.
The job role is ${role}.
The job experience level is ${level}.
The tech stack used in the job is: ${techstack}.
The focus between behavioural and technical questions should lean towards: ${type}.
The amount of questions required is: ${amount}.

Return ONLY a valid JSON array like:
["Question 1", "Question 2"]

No extra text.`,
        });

        try {
            parsedQuestions = JSON.parse(text);
        } catch (jsonError) {
            console.log("JSON parse failed, fixing format...");
            parsedQuestions = text
                .replace(/[\[\]"]/g, "")
                .split(",")
                .map((q) => q.trim())
                .filter(Boolean);
        }
    } catch (apiError) {
        console.log("API failed, using fallback questions");

        isAIGenerated = false;

        parsedQuestions = [
            "Tell me about yourself",
            "Explain your experience with Next.js",
            "How do you optimize frontend performance",
            "Explain SSR vs CSR",
            "How do you handle state management",
            "Describe a challenging bug you solved",
            "How do you design scalable frontend apps",
        ];
    }

    try {
        const interview = {
            role,
            type,
            level,
            techstack: techstack.split(","),
            questions: parsedQuestions,
            userId: userid,
            finalized: true,
            isAIGenerated,
            coverImage: getRandomInterviewCover(),
            createdAt: new Date().toISOString(),
        };

        await db.collection("interviews").add(interview);

        return Response.json(
            { success: true, data: interview },
            { status: 200 }
        );
    } catch (dbError) {
        console.error("Firestore error:", dbError);

        return Response.json(
            { success: false, error: "Database error" },
            { status: 500 }
        );
    }
}