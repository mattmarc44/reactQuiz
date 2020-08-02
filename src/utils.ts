//this will shuffle our unpacked data in API.ts shuffling the collection of both correct and incorrect
//answers so the correct answer isn't always in the same place. When called, of course.
export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);