import { useMemo } from 'react';

import Answer from './Answer';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import styles from '../../styles/Results.module.scss';

import type { Question, SetQuestionsFunction } from '../../types';

export default function ResultsMain() {
  const [rawQuestions, setRawQuestions] = useLocalStorage<string>(
    'questions',
    '[]'
  );
  const [score, setScore] = useLocalStorage<number[]>('score', []);

  const questions: Question[] = useMemo(
    () => JSON.parse(rawQuestions),
    [rawQuestions]
  );
  const setQuestions: SetQuestionsFunction = useMemo(
    () => (questions: Question[]) => setRawQuestions(JSON.stringify(questions)),
    [setRawQuestions]
  );

  console.log('score', score);

  // @ts-ignore
  const allScore = score.map((_answer, index) => {
    return (
      <Answer
        key={index}
        questionNum={index}
        score={score[index]}
        question={questions[index].question}
        answer={questions[index].answer}
      />
    );
  });
  return (
    <>
      {score.length !== 0 ? (
        <main className={styles.main}>
          <h1 className={styles.answersHeader}>Answers</h1>
          <div className={styles.answerMain}>{allScore}</div>
        </main>
      ) : (
        <main className={styles.main}>
          <h1 className={styles.answersHeader}>Answers</h1>
          <p className={styles.noAnswersText}>Currently No Answers</p>
        </main>
      )}
    </>
  );
}
