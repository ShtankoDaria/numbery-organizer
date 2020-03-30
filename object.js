const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
    if (typeof param === 'string') {
			if (isNaN(param)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
  },
  addString: function (param) {
    if (typeof param === 'string') {
      if (isNaN(param)) {
        this.NaNyStrings.push(param);
     
      } else {
        this.numberyStrings.push(param);
        return true;
      }
      }
      else{
        return false;
      }
		
  },
  allStrings: function () {
  return [...this.numberyStrings,...this.NaNyStrings];
},

  evenStrings: function () {
    return this.numberyStrings.filter(val => val % 2 === 0);
      
  },
  oddStrings: function () {
    return this.numberyStrings.filter(val => val % 2 !== 0);
  },
  negativeStrings: function () {
    return this.numberyStrings.filter(val => val< 0);
  },
  positiveStrings: function () {
    return this.numberyStrings.filter(val => val>= 0);
  },
  zeroStrings: function () {
    return this.numberyStrings.filter(val => val == 0);
  },
  numberyAsNumbers: function () {
    return this.numberyStrings.map(val => Number(val));
  },
  NaNyAsNumbers: function () {
    return this.NaNyStrings.map(val => Number(val));
  },
  sumOfNumbery: function () {
    
    return this.numberyStrings.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
       0);
  },
  sumOfNaNy: function () {
    return this.NaNyStrings.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
     0);
  },
};


