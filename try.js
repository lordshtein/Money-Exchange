function makeExchange(currency) {
  const coins = {};
  if (currency > 0 && currency < 10000) {
    
    let h = Math.floor(currency / 50);
    let q = Math.floor((currency - h * 50)/25);
    let d = Math.floor((currency - h * 50 - q * 25)/10);
    let n = Math.floor((currency - h * 50 - q * 25 - d * 10)/5);
    let p = currency - h * 50 - q * 25 - d * 10 - n * 5;
    console.log(h + 'h',q+ 'q',d+ 'd',n+ 'n',p+ 'p')
    if (h > 0) {coins.H = h};
    if (q > 0) {coins.Q = q};
    if (d > 0) {coins.D = d};
    if (n > 0) {coins.N = n};
    if (p > 0) {coins.P = p};
    console.log(coins);
  } else if (currency = 0) {
      coins['error'] = "You are rich, my friend! We don't have so much coins for exchange"
      };
  return coins
}

makeExchange(0)