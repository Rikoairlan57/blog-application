export function wordLimits(teks: string, wordCount: number) {
  const word = teks.split(" ");
  if (word.length <= wordCount) {
    return teks;
  } else {
    const textCutting = word.slice(0, wordCount).join(" ");
    return `${textCutting} ...`;
  }
}
