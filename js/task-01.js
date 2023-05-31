const list = document.querySelector('#categories')
console.log("Number of categories:", list.children.length)
console.log("")

const listItems = document.querySelectorAll('li.item')
listItems.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent)
    console.log("Elements:", item.lastElementChild.children.length)
    console.log("")
})







