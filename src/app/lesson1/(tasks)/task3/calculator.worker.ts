const calculateSum = () => {
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }
  self.postMessage(total);
};

self.addEventListener('message', () => {
  calculateSum();
});
