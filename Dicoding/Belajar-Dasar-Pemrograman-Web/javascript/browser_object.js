const firstName = prompt("Siapa nama depan kamu? ")
const lastName = prompt("Siapa nama belakang kamu? ")
const language = prompt("Kamu biasa menggunakan bahasa apa? ")


const user = {
    name : {
        first : firstName,
        last : lastName,
    },
    language : language
};

if (user.language === "English"){
    alert("Nice to meet you " + user.name.first + user.name.last + "!!");
}else if (user.language === "French") {
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
}else if (user.language === "Indonesia"){
    alert("Haii " + user.name.first + " " + user.name.last + " senang bertemu dengan mu!!")
}else{
    alert("Can be repeated, sorry for the following languages: English, French, Japanese, and Indonesian")
}