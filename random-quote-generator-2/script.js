// Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote:
      'The best way to get started is to quit talking and begin doing.',
    person: 'Walt Disney',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    person: 'Winston Churchill',
  },
  {
    quote:
      "Believe you can and you're halfway there.",
    person: 'Theodore Roosevelt',
  },
  {
    quote:
      'Do what you can, with what you have, where you are.',
    person: 'Theodore Roosevelt',
  },
  {
    quote:
      "It always seems impossible until it's done.",
    person: 'Nelson Mandela',
  },
  {
    quote:
      'The future depends on what you do today.',
    person: 'Mahatma Gandhi',
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    person: 'Steve Jobs',
  },
  {
    quote:
      'The only way to do great work is to love what you do.',
    person: 'Steve Jobs',
  },
  {
    quote:
      "Opportunities don't happen. You create them.",
    person: 'Chris Grosser',
  },
  {
    quote:
      'Small daily improvements are the key to long-term success.',
    person: 'Tobi Klosckewitz',
  },
]

btn.addEventListener('click', function () {
  let random = Math.floor(
    Math.random() * quotes.length,
  )

  quote.innerText = quotes[random].quote
  person.innerText = quotes[random].person
})
