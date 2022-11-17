import React from "react"
import dummyData from "./dummyData.json"
import Link from "next/link"
import classes from "./QuestionsMain.module.scss"

export default function QuestionMain(props) {
    const randomNumber = Math.floor(Math.random() * 4)

    function score(num) {
        // Grab current score or create a new one
        let currentStorage = localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : []

        if (num == randomNumber) {
            // If the right button is clicked, change the current score to 1
            typeof currentStorage[props.questionNum] == "number" ? currentStorage[props.questionNum] = 1 : currentStorage.push(1)
        } else {
            typeof currentStorage[props.questionNum] == "number" ? currentStorage[props.questionNum] = 0 : currentStorage.push(0)
        }

        localStorage.setItem("score", JSON.stringify(currentStorage))
        
        // parseInt(props.questionNum) == 22 ? window.location.href = "http://localhost:3000/results" : window.location.href = `http://localhost:3000/question/${parseInt(props.questionNum) + 1}`
    }


    function changeScoreFromLink() {
        let currentStorage = localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : []
        
        if (typeof currentStorage[props.questionNum] !== "number") {
            currentStorage.push(0)
        }

        localStorage.setItem("score", JSON.stringify(currentStorage))
    }


    return (
        <>
            { dummyData[props.questionNum] &&
            <main className={classes.questionMain}>
                <p className={classes.questionMainQuestion}>{dummyData[props.questionNum].question}</p>
                <div className={classes.multiSelection}>
                    <button className={classes.multiSelectionButton} onClick={() => score(0)}>{randomNumber == 0 ? dummyData[props.questionNum].answer : Math.floor(Math.random() * 100)}</button>
                    <button className={classes.multiSelectionButton} onClick={() => score(1)}>{randomNumber == 1 ? dummyData[props.questionNum].answer : Math.floor(Math.random() * 100)}</button>
                    <button className={classes.multiSelectionButton} onClick={() => score(2)}>{randomNumber == 2 ? dummyData[props.questionNum].answer : Math.floor(Math.random() * 100)}</button>
                    <button className={classes.multiSelectionButton} onClick={() => score(3)}>{randomNumber == 3 ? dummyData[props.questionNum].answer : Math.floor(Math.random() * 100)}</button>
                </div>
                <div className={classes.pageControlButtons}>
                    { parseInt(props.questionNum) == 0 ?
                        <img src="/Arrow.svg" />
                        :
                        <Link href={`${parseInt(props.questionNum) - 1}`}>
                            <img src="/Arrow.svg" />
                        </Link>
                    }
                    <p className={classes.pageControlButtonText}>{props.questionNum}</p>
                    <Link onClick={changeScoreFromLink} href={parseInt(props.questionNum) == 22 ? "/results" : `/question/${parseInt(props.questionNum) + 1}`}>
                        <img src="/Arrow.svg" className={classes.pageControlButton2} />
                    </Link>
                </div>
            </main>
            }
        </>
    )
}