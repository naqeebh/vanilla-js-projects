const quotes = [
  'Code. Learn. Build. Repeat.',
  'Done is better than perfect.',
  'The best projects start with curiosity.',
  'Every bug is a lesson in disguise.',
  'Consistency compounds over time.',
  "Build the thing you've been thinking about.",
  'Skills pay the bills.',
  "Start before you're ready.",
  'Action creates momentum.',
  'One commit at a time.',
]

const usedIndexes = new Set()
const quoteTag = document.getElementById("quote")

function generateQuote() {
  if (usedIndexes.size >= quotes.length
  ) {
    usedIndexes.clear()
  }

  while (true) {

    const randomIdx = Math.floor(Math.random() * quotes.length)

    if (usedIndexes.has(randomIdx)) continue 
      
    const quote = quotes[randomIdx]
    quoteTag.innerHTML = quote;
    usedIndexes.add(randomIdx)

    break 

  }
}

