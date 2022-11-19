import React from "react"
import classes from "./ResultsMain.module.scss"
import dummyData from "../Questions/dummyData.json"
import Link from "next/link"

export default function Answer(props) {
    const question = dummyData[props.questionNum]

    return (
        <Link href={`/question/${props.questionNum}`}>
            <div className={classes.answer}>
                <p className={classes.answerQuestion}>Question {props.questionNum}:   {props.question.question}</p>
                <div className={classes.answerInformation}>
                    <p><strong>Your answer:</strong> {props.score == 1 ? "Correct" : "Incorrect"}</p>
                    <p><strong>Correct answer:</strong> {props.question.answer}</p>
                </div>
            </div>
        </Link>
    )
}