import { shuffleArray } from './utils';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

//Using enums increase the level of abstraction and lets the programmer think about what the values mean rather than worry about how they are stored and accessed. This reduces the occurrence of bugs. https://www.thoughtco.com/what-is-an-enum-958326
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;
    // first await the fetch, then await the conversion to json.
    const data = await(await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([question.correct_answer, ...question.incorrect_answers])
        }
    ));
};