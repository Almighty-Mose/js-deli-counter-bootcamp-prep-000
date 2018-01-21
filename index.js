var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.shift(name)
  return `Welcome, ${name}. You are ${parseInt(katzDeliLine[katzDeliLine.length])} in line.`
}