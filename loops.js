function countDownWhile (startingPoint, stoppingPoint) {
  while (startingPoint > stoppingPoint) {
    console.log('while: ' + startingPoint)
    startingPoint--
  }
}

function countDownFor (startingPoint, stoppingPoint) {
  for (; startingPoint > stoppingPoint; startingPoint--) {
    console.log('for: ' + startingPoint)
  }
}

countDownWhile(10, 0)
countDownFor(10, 0)
