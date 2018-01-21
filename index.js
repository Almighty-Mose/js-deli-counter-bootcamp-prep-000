var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.shift(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line.`
}