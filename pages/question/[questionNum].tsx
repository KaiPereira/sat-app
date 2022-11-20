import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Configuration, OpenAIApi } from 'openai';

import QuestionComponent from '../../components/Questions';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import type { Question, SetQuestionsFunction } from '../../types';

const config = new Configuration({
  apiKey: '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'
});
const openai = new OpenAIApi(config);

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
      model: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 200
    });

    let text = completion.data.choices[0].text;
    let filteredText = text!.split('\n').filter(letter => letter !== '');

    filteredText = filteredText.map(textItem => {
      return textItem
        .replace('Question:', ' ')
        .replace('Answer:', ' ')
        .replace('Options:', ' ')
        .replace('Reasoning:', ' ');
    });

    const question = filteredText[0];
    const options = filteredText[1].split(',');
    const answer = filteredText[2];
    const reasoning = filteredText[3];

    questions.push({ question, options, answer, reasoning });

    setQuestions(questions);
  };

  generate(prompt);

  return (
    <>
      <QuestionComponent questionNum={questionNum} />
    </>
  );
};

export default QuestionPage;
