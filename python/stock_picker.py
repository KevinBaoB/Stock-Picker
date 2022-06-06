def picker(prices):
    highestRes = 0;
    highestPair = [];
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            result = prices[j] - prices[i];
            if result > highestRes:
                highestRes = result;
                highestPair = [i, j]
      
    return highestPair;