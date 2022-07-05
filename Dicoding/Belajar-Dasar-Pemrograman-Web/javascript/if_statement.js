let language = "Japanese";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayogozaimasu!"
}


console.log(greeting)


let nilaiSiswa = 67
let nilaiAbsen = 98

if (nilaiSiswa >= 78) {
    console.log("Selamat Anda diterima di SMKN 1 Kab.Tangerang")
}
else if (nilaiSiswa < 78 ){
    console.log("Maaf Anda Belum Diterima")
}
