function pairNumbers(min, max) {
  let result = "";
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result += i 
      if (i<max){
        result+=','
      }
      }
    }
  return result;
}
export default pairNumbers;


