function squareSum(numbers){
  let sum = 0
  for (let i = 0; i < numbers.length; i++){
    sum += Math.pow(i, 2)
    
  }
  return(sum) 
}


//dBScale

function dBScale(Intensity) {
  return 10 * Math.log10(Intensity/(Math.pow(10, -12)))


}
//count odd numbers below n
function oddCount(n){
  return Math.floor( n / 2)
}


//Find the first non-consecutive number
function firstNonConsecutive(arr){
  for( let i = 1; i < arr.length; i++){
      if( arr[i - 1] + 1 !== arr[i]){
        return arr[i]
      }
        return null
      
  }
}


//convert a string to an array
function stringToArray(string){
return( string.split(' '))
  
}

//merge two sorted arrays into one
function mergeArrays( arr1, arr2) {
  let newArr = arr1.concat(arr2)
  newArr = newArr.sort()
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
        newArr.splice[i]
    }
  }return newArr
}



//rock paper scissors!

function rps (p1, p2) {

  if( p1 === 'rock' && p2 === 'scissors' ||
      p1 === 'scissors' && p2 === 'paper' ||
      p1 === 'paper' && p2 === 'rock' ) {
        return 'Player 1 won!'
      } else if (p1 === p2){
        return 'Draw!'
      } else {
        return 'Player 2 won!'
      }

}

//alternative rps with arrow function

const rps = (p1, p2) => {
  if( p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]){
    return "Player 1 won!";
  }
  else {
      return "plater 2 won!"
  }

}