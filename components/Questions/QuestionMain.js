import React from "react"
import dummyData from "./dummyData.json"
import Link from "next/link"
import classes from "./QuestionsMain.module.scss"

export default function QuestionMain(props) {
    const [question, changeQuestions] = React.useState()
    const [answerOptions, changeAnswerOptions] = React.useState()
    const randomNumber = Math.floor(Math.random() * 4)

    function score(buttonContent) {
        console.log(buttonContent.replace(/\s/g,''))
        console.log(question[props.questionNum].answer.replace(/\s/g,''))
        // Grab current score or create a new one
        let currentStorage = localStorage.getItem("score") ? JSON.parse(localStorage.getItem("score")) : []

        // If the button clicked is the question answer
        if (buttonContent.replace(/\s/g,'') == question[props.questionNum].answer.replace(/\s/g,'')) {
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


    React.useEffect(() => {
        changeQuestions(localStorage.getItem("questions") ? JSON.parse(localStorage.getItem("questions")) : [])
    }, [])


    React.useEffect(() => {
        if (props.questionNum && question) {
            changeAnswerOptions(
                question[props.questionNum].options.map((option, index) => {
                    return (
                        <button key={index} className={classes.multiSelectionButton} onClick={() => score(option)}>{option}</button>
                    )
                })
            )
        }
    }, [props.questionNum, question])


    return (
        <>
            { (props.questionNum && question) &&
            <main className={classes.questionMain}>
                <p className={classes.questionMainQuestion}>{question[props.questionNum].question}</p>
                <div className={classes.multiSelection}>
                    {answerOptions}
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