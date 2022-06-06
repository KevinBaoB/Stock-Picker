exports.picker = function (prices) {
  let highestRes = 0;
  let highestPair = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let result = prices[j] - prices[i];
      if (result > highestRes) {
        highestRes = result;
        highestPair = [i, j];
      }
    }
  }
  return highestPair;
};
