
// methode dom
document.getElementById("display"); // Mengembalikan elemen yang memiliki nilai id “display”.
document.getElementByName("button"); // Mengembalikan banyak elemen (NodeList) yang memiliki attribute name dengan nilai “button”.
document.getElementsByClassName("button"); // Mengembalikan kumpulan yang memiliki class "button" dalam bentuk HTMLCollection.
document.getElementsByTagName("div") // Mengembalikan banyak <div> elemen berupa HTMLCollection
document.querySelector(".button"); // Mengembalikan elemen pertama yang menerapkan class “button”.
document.querySelectorAll(".button"); // Mengembalikan kumpulan Node beserta turunannya (NodeList) dengan class “button”.

let catImage = document.querySelector("#catImage");
catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg"); // change atribute img with new img

let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Tiga Anak Kucing</em>'

// add new element
let newElement = document.createElement('p');
newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';
document.body.appendChild(newElement);

// add action 
catImage.addEventListener('click', function(event) {
    document.querySelector('#count').innerText++;
});