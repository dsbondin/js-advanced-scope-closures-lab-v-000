const produceDrivingRange = function(blockRange) {
  return function(start, end) {
    const distance = Math.abs(start.slice(0,2) - end.slice(0,2));
    const difference = blockRange - distance;
    if (difference >= 0) {
      return `within range by ${difference}`;
    } else {
      return `${-difference} blocks out of range`;
    }
  }
}

const produceTipCalculator = function(tipPercent) {
  return function (checkAmount) {
    return checkAmount * tipPercent;
  }
}
