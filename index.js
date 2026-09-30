function copyText() {
    const text = document.getElementById("textToCopy").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Text copied to clipboard");
    });
}