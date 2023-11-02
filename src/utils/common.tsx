export const currentYear = new Date().getFullYear();

export function wordLimits(teks: string, wordCount: number) {
  const word = teks.split(" ");
  if (word.length <= wordCount) {
    return teks;
  } else {
    const textCutting = word.slice(0, wordCount).join(" ");
    return `${textCutting} ...`;
  }
}

export const getFindById = (props: any, idKey: string, id: any) => {
  return props.find((item: any) => item[idKey] === id);
};

export const getFilterById = (props: any, idKey: string, id: any) => {
  return props.filter((item: any) => item[idKey] === id);
};
