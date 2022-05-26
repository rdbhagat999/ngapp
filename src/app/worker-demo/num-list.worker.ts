/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const numList = [];
  for (let i = 1; i < data.n; i++) {
    numList.push(i);
  }
  postMessage(numList);
});
