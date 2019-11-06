function translate(word) {
  
  let vowelCheck = /[aeiouAeiou]/gi;
        if (word[0].match(vowelCheck)) {
            return `${word.toLowerCase()}way`;
        } else {
          let vowelIndice = word.indexOf(word.match(vowelCheck) [0]);
          return word.substr(vowelIndice) + word.substr(0, vowelIndice) + "ay";
        }
  
}


if (typeof module !== "undefined") {
  // Node
  module.exports = { translate };
} else {
  // Browser
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}