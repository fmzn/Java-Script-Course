document.addEventListener("DOMContentLoaded", () => {
    const originalText = document.querySelector("div.animate-title");

    let text = "";

    for (let letter of originalText.innerHTML.trim()) {
        text = text + "<span>" + letter + "</span>";
    }

    console.log("Text: ", text);

    originalText.innerHTML = text
});
