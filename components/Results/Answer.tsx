import Link from 'next/link';

import styles from '../../styles/Results.module.scss';

interface AnswerProps {
  questionNum: number;
  question: string;
  score: number;
  answer: string;
}

const Answer = ({ questionNum, question, score, answer }: AnswerProps) => {
  return (
    <Link href={`/question/${questionNum}`}>
      <div className={styles.answer}>
        <p className={styles.answerQuestion}>
          Question {questionNum}: {question}
        </p>
        <div className={styles.answerInformation}>
          <p>
            <strong>Your answer:</strong> {score == 1 ? 'Correct' : 'Incorrect'}
          </p>
          <p>
            <strong>Correct answer:</strong> {answer}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Answer;
