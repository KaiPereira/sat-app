import React from "react"
import { useRouter } from "next/router";
import QuestionMain from "../../components/Questions/QuestionMain";
import { Configuration, OpenAIApi } from "openai";
const config = new Configuration({ apiKey: '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' });
const openai = new OpenAIApi(config);

export default function Question() {
    const [questions, changeQuestions] = React.useState([])
    const router = useRouter();
    const query = router.query
    const questionNum = query.questionNum;

    const prompt = `
    Generate a SAT exam math question based on format below.

    Question: If t > 0 and t^2-4 = 0, what is the value of t?
    Options: 2, -2, 0, 1
    Answer: 2
    Reasoning: The correct answer is 2. To solve for t, factor the left side of t^2-4 = 0, giving (t+2)(t-2)=0. Therefore, either t-2=0 or t+2=0. If t-2=0, then t=2, and if t+2=0 then t=-2. Since it is given that t > 0, the value of t must be 2.

    Generate another math question for SAT:
    `;

    const generate = async (prompt: string) => {
        
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: prompt,
            max_tokens: 200
        });

        let text = completion.data.choices[0].text

        text = text.split("\n")
        text = text.filter((letter) => letter !== "");

        text = text.map((textItem) => {
            return textItem.replace("Question:", " ").replace("Answer:", " ").replace("Options:", " ").replace("Reasoning:", " ")
        })

        const question = text[0]
        const options = text[1].split(",")
        const answer = text[2]
        const reasoning = text[3]

        let questions = localStorage.getItem("questions") ? JSON.parse(localStorage.getItem("questions")) : []

        questions.push({question, options, answer, reasoning})

        localStorage.setItem("questions", JSON.stringify(questions))
    }

    generate(prompt);


    return (
        <>
            <QuestionMain questionNum={questionNum} />
        </>
    )
}