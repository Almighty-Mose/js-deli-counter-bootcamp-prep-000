var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var n = 0
    return `The line is currently: 1. ${katzDeliLine[n]}, 2. ${katzDeliLine[n + 1]}, 3. ${katzDeliLine[n + 2]}`
  } else {
    return "The line is currently empty."
  }
}

function currentLine(katzDeliLine) {
  for (i = 0, i < katzDeliLine.length, i++)
}