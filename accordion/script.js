// Variables
const accordionItems = document.querySelectorAll('.content-container')

// Event Listeners
for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
