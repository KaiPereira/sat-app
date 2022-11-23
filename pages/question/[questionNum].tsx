import { useRouter } from 'next/router';
import { useMemo } from 'react';

import QuestionComponent from '../../components/Questions';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { generateCompletion, parse } from '../../utils/completion';

import type { Question, SetQuestionsFunction } from '../../types';

const QuestionPage = () => {
  const [rawQuestions, setRawQuestions] = useLocalStorage<string>(
    'questions',
    '[]'
  );

  const questions: Question[] = useMemo(
    () => JSON.parse(rawQuestions),
    [rawQuestions]
  );
  const setQuestions: SetQuestionsFunction = useMemo(
    () => (questions: Question[]) => setRawQuestions(JSON.stringify(questions)),
    [setRawQuestions]
  );

  const router = useRouter();

  const query = router.query;
  const questionNum = parseInt(query.questionNum as string);

  const generate = async () => {
    const completion = (await generateCompletion('math'))!;

    questions.push(parse('math', completion) as Question);

    setQuestions(questions);
  };

  generate();

  return (
    <>
      <QuestionComponent questionNum={questionNum} />
    </>
  );
};

export default QuestionPage;
