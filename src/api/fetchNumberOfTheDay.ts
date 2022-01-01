interface NumberOfTheDayDTO {
  contents: {
    nod: {
      numbers: {
        id: number;
        uuid: number;
        number: number;
      };
    };
  };
}

type ResolveFunction = (value: number) => void;
type RejectFunction = (reason: string) => void;

export const fetchNumberOfTheDay = (
  resolve: ResolveFunction,
  reject: RejectFunction,
) => {
  fetch('https://api.math.tools/numbers/nod')
    .then(result => result.json())
    .then((result: NumberOfTheDayDTO) => {
      resolve(result.contents.nod.numbers.number);
    })
    .catch(error => {
      const message = 'Error while getting NumberOfTheDay via API.';
      reject(message);
      console.error(message, error);
    });
};
