function createTxtFile() {
    let textContent = document.getElementById("content").value
    let blob = new Blob([textContent], { type: 'text/plain' })
    let filename = document.getElementById('fileName').value

    if (filename && textContent) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    } else {
        alert("Please enter a text and filename!");
    }
}

document.getElementById('fileName').addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        createTxtFile()
    }
})