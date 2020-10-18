const removeCommas = (str) => {
  var a = str;
  a = a.toString().replace(/\,/g, ""); // 1125, but a string, so convert it to number
  a = parseInt(a, 10);
  return a;
};
export const getBaketTotal = (basket) => {
  const basketTotalValue = basket.reduce(
    (tot, arr) =>
      // return the sum with previous value
      removeCommas(tot) + removeCommas(arr.price),

    // set initial value as 0
    0
  );
  return basketTotalValue;
};

// export const getBaketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);
