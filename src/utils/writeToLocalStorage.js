export const writeToLocalStorage = (data) => {
  const hasData = localStorage.getItem('result');

  if (hasData) {
    const array = [];
    array.push(...JSON.parse(hasData));
    array.push(data);
    localStorage.setItem('result', JSON.stringify(array));
  } else {
    const array = [];
    array.push(data);
    localStorage.setItem('result', JSON.stringify(array));
  }
};
