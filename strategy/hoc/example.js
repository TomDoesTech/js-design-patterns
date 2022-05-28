const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(arr, func) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const even = filter(data, (n) => n % 2 === 0);

console.log({ even });
