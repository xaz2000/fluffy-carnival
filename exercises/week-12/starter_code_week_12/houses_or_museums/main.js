console.log('this works')

// [1] get text
const en_btn = document.querySelector(".en");
const pt_btn = document.querySelector(".pt");

const english_text = document.querySelector("#english_content")
const portuguese_text = document.querySelector("#portuguese_content")


// [2] add event listener
en_btn.addEventListener("click", translatetoEnglish)
pt_btn.addEventListener("click", translatetoPortuguese)

// [3] define the event handler
const translatetoEnglish = () => {}

const translatetoPortuguese = () => {
    english_text.style. display = "none";
    portuguese_text.style.display = "flex";
}

