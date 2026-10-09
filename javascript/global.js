function copyText() {
    const text = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Text copied to clipboard");
    });
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light");
    document.getElementById("toggleTheme").textContent = isLight ? "dark" : "light";
}