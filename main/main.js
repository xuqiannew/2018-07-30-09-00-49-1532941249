module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.num()}
o) 平均值 = ${sequence.ave()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input ;
  }

  minimum() {
    // Write your code here
    let arr = this.input ;
    let min = arr[0];
    for(let i = 1 ; i < arr.length ; ++i){
      if(arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

  maxmum() {
    let arr = this.input ;
    let max = arr[0];
    for(let i = 1 ; i < arr.length ; ++i){
      if(arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }

  num() {
    let arr = this.input;
    return arr.length;
  }

  ave() {
    let arr = this.input ;
    let sum = 0;
    let length = arr.length;
    for(let i = 0 ; i < length ; ++i){
      sum += arr[i];
    }
     let aveg = sum / length ;
     return aveg.toFixed(2); 
    
  }
 
  
}
