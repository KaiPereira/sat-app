import React from "react"
import classes from "./ResultsMain.module.scss"
import Answer from "./Answer"

export default function ResultsMain() {
    const [score, changeScore] = React.useState([])
    
    React.useEffect(() => {
        if (localStorage.getItem("score")) {
            changeScore(JSON.parse(localStorage.getItem("score")))
        }
    }, [])

    
    const allScore = score.map((answer, index) => {
        return (
            <Answer 
                questionNum={index}
                score={score[index]}
            />
        )
    })
    return (
        <>
        { score.length !== 0 ?
        <main className={classes.main}>
            <h1 className={classes.answersHeader}>Answers</h1>
            <div className={classes.answerMain}>
                {allScore}
            </div>
        </main>
        :
        <main className={classes.main}>
            <h1 className={classes.answersHeader}>Answers</h1>
            <p className={classes.noAnswersText}>Currently No Answers</p>
        </main>
        }
        </>
    )
}