function solution(string) {
  let arr = string.split('')
  for (i=0; i<arr.length; i++) {
    if(arr[i]===arr[i].toUpperCase()){
      arr[i]=' '+arr[i]
    }
  }
  let str = arr.join('')
  return str
}
