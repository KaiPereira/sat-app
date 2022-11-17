import React from "react"
import { useRouter } from "next/router";
import QuestionMain from "../../components/Questions/QuestionMain";

export default function Question() {
    const router = useRouter();
    const query = router.query;
    const questionNum = query.questionNum;

    return (
        <>
            <QuestionMain questionNum={questionNum} />
        </>
    )
}