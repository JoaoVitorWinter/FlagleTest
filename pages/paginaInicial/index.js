document.getElementById("inputGuess").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        if (document.getElementById("inputGuess").value.toLowerCase() == "barbados") {
            alert("Acertou!")
        } else {
            alert("Errou!")
        }
    }
})