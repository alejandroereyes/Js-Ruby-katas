var coinChanger = {
  coins: [],
  q: 25,
  d: 10,
  n: 5,
  p: 1,
  change: Function (money) {
    [this.q, this.d, this.n, this.p].forEach(function(value) {
      if (money >= value) {
        var times = Math.floor(money/value); // divide money/value
        var deduction = value * times; // get amount to subtract from money
        for (var i = 0; i < times; i++ ){
          coins.push(value)
        }; // push each value into coins array
        // substract amount from money
      }
    })
  }
};
