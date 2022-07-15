//  create p element
const newParagraph = document.createElement("p")
newParagraph.innerText  = "Hallo ini paragraph baru"

// html format 
newParagraph.innerHTML = "<b>Halo ini paragraph baru dengan style bold</b>"

// create img element
const newImg = document.createElement("img")
newImg.setAttribute("src", "https://picsum.photos/200/300")