let SISTERS = [], initLength = 100;
for (let i = 1; i <= initLength; i++) { 
  SISTERS.push(i)
}

let initialSize = 81
let randomSize = [1, 2, 3, 4]

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let shuffle = (arr) => {
  let ret = arr.slice()
  for (let i = 0; i < ret.length; i++) {
    let j = getRandomInt(0, i)
    let t = ret[i]
    ret[i] = ret[j]
    ret[j] = t
  }
  return ret
}

function getSisterGenerator() {
  const source = SISTERS.slice()
  let initial = true
  return () => {
    if (initial) {
      initial = false
      return source.splice(0, initialSize)
    }
    const size = getRandomInt(0, randomSize.length - 1)
    return source.splice(0, randomSize[size])
  }
}