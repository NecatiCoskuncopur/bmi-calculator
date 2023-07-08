export const getResultsFromLocalStorage = () => {
  const localStorageData = localStorage.getItem('result');
  const array = [];
  if (localStorageData) {
    array.push(...JSON.parse(localStorageData));
  }
  return array;
};
