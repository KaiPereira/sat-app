import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

import styles from '../styles/Questions.module.scss';

interface QuestionProps {
  questionNum: number;
}

const QuestionComponent = ({ questionNum }: QuestionProps) => {
  const [rawQuestions, _setRawQuestions] = useLocalStorage<string>(
    'questions',
    '[]'
  );
  const [score, setScore] = useLocalStorage<number[]>('score', []);

  const questions = useMemo(() => JSON.parse(rawQuestions), [rawQuestions]);

  function scoreOption(content: string) {
    if (
      content.replace(/\s/g, '') ==
      questions[questionNum].answer.replace(/\s/g, '')
    ) {
      typeof score[questionNum] == 'number'
        ? (score[questionNum] = 1)
        : score.push(1);
    } else {
      typeof score[questionNum] == 'number'
        ? (score[questionNum] = 0)
        : score.push(0);
    }

    setScore(score);
  }

  const updateScoreToZero = () => {
    if (typeof score[questionNum] !== 'number') {
      setScore([...score, 0]);
    }
  };

  return (
    <>
      {questionNum && questions && (
        <main className={styles.questionMain}>
          <p className={styles.questionMainQuestion}>
            {questions[questionNum].options.map(
              (option: string, index: number) => {
                return (
                  <button
                    key={index}
                    className={styles.multiSelectionButton}
                    onClick={() => scoreOption(option)}
                  >
                    {option}
                  </button>
                );
              }
            )}
          </p>

          <div className={styles.pageControlButtons}>
            {questionNum == 0 ? (
              <Image src="/Arrow.svg" alt="arrow" />
            ) : (
              <Link href={`${questionNum - 1}`}>
                <Image src="/Arrow.svg" alt="arrow" />
              </Link>
            )}
            <p className={styles.pageControlButtonText}>{questionNum}</p>
            <Link
              onClick={updateScoreToZero}
              href={
                questionNum == 22 ? '/results' : `/question/${questionNum + 1}`
              }
            >
              <Image
                src="/Arrow.svg"
                alt="arrow"
                className={styles.pageControlButton2}
              />
            </Link>
          </div>
        </main>
      )}
    </>
  );
};

export default QuestionComponent;
