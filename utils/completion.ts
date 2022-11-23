import { openai } from '../lib/openai';

const types = Object.freeze({
  math: `Generate a SAT exam math question based on format below.

    Question: If t > 0 and t^2-4 = 0, what is the value of t?
    Options: 2, -2, 0, 1
    Answer: 2
    Reasoning: The correct answer is 2. To solve for t, factor the left side of t^2-4 = 0, giving (t+2)(t-2)=0. Therefore, either t-2=0 or t+2=0. If t-2=0, then t=2, and if t+2=0 then t=-2. Since it is given that t > 0, the value of t must be 2.

    Generate another math question for SAT:`
});

export const generateCompletion = async (
  type: keyof typeof types,
  maxTokens: number = 100
) => {
  const response = await openai.generate(types[type], maxTokens);

  return response;
};

// Define and register parsers for various types of question types
const parsers: Record<string, (text: string) => Record<string, any>> = {};

export const parse = (key: keyof typeof types, text: string) => {
  if (!parsers[key]) {
    throw new Error(`Parser for ${key} not found.`);
  }

  return parsers[key](text);
};

const registerParser = (
  key: string,
  parser: (text: string) => Record<string, any>
) => {
  parsers[key] = parser;
};

registerParser('math', (text: string) => {
  let filteredText = text.split('\n').filter(letter => letter !== '');

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

  return {
    question,
    options,
    answer,
    reasoning
  } as Record<string, any>;
});
