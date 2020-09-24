import { Permutation } from "js-combinatorics";

const generateWordLists = (wordList) => {
  const relevantWords = wordList
    .split("\n")
    .filter((w) => w.length >= 3 && w.length <= 7)
    .map((w) => w.toLowerCase());

  const relevantWordsSet = new Set(relevantWords);

  const sevenLetterWords = relevantWords.filter((w) => w.length === 7);

  const validWords = sevenLetterWords
    .map((word) => {
      return [3, 4, 5, 6, 7]
        .flatMap((n) => [
          ...new Set(
            [...new Permutation(word, n)]
              .map((w) => w.join(""))
              .filter((w) => relevantWordsSet.has(w))
          ),
        ])
        .sort((a, b) => b.length - a.length);
    })
    .filter((words) => words.length >= 5);

  return validWords;
};

export default generateWordLists;
