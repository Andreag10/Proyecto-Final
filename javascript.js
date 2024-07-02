
document.getElementById("imagen_no_encontrada").style.display = "block";
document.getElementById("resultado").style.display = "none";

function encriptarTexto(texto) { 
    return texto.replace(/e/g, "enter")
            .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function desencriptartexto(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function convertirAMinusculas(elemento) {
 return  elemento.value.toLowerCase();
console.log(elemento);
}

document.getElementById('encriptadorBoton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const encryptedText = encriptarTexto(inputText);
    document.getElementById("imagen_no_encontrada").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    console.log("texto", encryptedText);
    document.getElementById('resultado').value = encryptedText;
});

document.getElementById('desencriptadorBoton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const decryptedText = desencriptartexto(inputText);
    document.getElementById('resultado').value = decryptedText;
});

document.getElementById('inputText').addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});

document.getElementById('btn_copiar').addEventListener('click', function() {
    const inputText = document.getElementById('resultado').value.toLowerCase();
    let span = document.getElementById('copia');
     span.innerHTML = inputText;
    console.log(span);

});