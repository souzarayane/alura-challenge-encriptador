// Função para criptografar o texto do textarea e mostrar no lugar da imagem
function encryptText() {
    // Obtém o elemento textarea pelo seu ID
    var textArea = document.getElementById('msg');

    // Obtém o valor do texto digitado
    var text = textArea.value;

    // Criptografa o texto
    var encryptedText = encrypt(text);

    // Obtém o elemento de destino para exibir o texto criptografado
    var textImage = document.getElementById('image-field');

    // Define o texto criptografado como o conteúdo da div
    textImage.innerText = encryptedText;

    // Adiciona um botão "Copiar" dinamicamente
    var copyButton = document.createElement('button');
    copyButton.innerText = 'Copiar';
    copyButton.classList.add('btn-copiar'); // Adiciona uma classe ao botão para estilização CSS
    copyButton.onclick = function () {
        copy(encryptedText); // Chama a função copy() passando o texto criptografado como argumento
    };

    // Adiciona o botão "Copiar" ao elemento de destino
    textImage.appendChild(copyButton);

    var mensagem = document.getElementById("msg").value;

    if (verificarEntrada(mensagem)) {
        // Se a entrada for válida, prossegue com a criptografia
        var encryptedText = encrypt(mensagem);

        // Resto do código para exibir o texto criptografado e o botão de copiar
    } else {
        // Se a entrada não for válida, exibe uma mensagem de erro na página HTML
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.";
    }

}

// Função para descriptografar o texto do textarea e mostrar no lugar da imagem
function decryptText() {
    // Obtém o elemento textarea pelo seu ID
    var textArea = document.getElementById('msg');

    // Obtém o valor do texto criptografado
    var encryptedText = textArea.value;

    // Descriptografa o texto
    var decryptedText = decrypt(encryptedText);

    // Obtém o elemento de destino para exibir o texto descriptografado
    var textImage = document.getElementById('image-field');

    // Define o texto descriptografado como o conteúdo da div
    textImage.innerText = decryptedText;
}

// Função para encriptografar
function encrypt(word) {
    // Substitui as letras de acordo com as regras
    word = word.replace(/e/g, 'enter');
    word = word.replace(/i/g, 'imes');
    word = word.replace(/a/g, 'ai');
    word = word.replace(/o/g, 'ober');
    word = word.replace(/u/g, 'ufat');

    return word;
}

// Função para descriptografar
function decrypt(encryptWord) {
    // Substitui as letras criptografadas de volta para as originais
    encryptWord = encryptWord.replace(/enter/g, 'e');
    encryptWord = encryptWord.replace(/imes/g, 'i');
    encryptWord = encryptWord.replace(/ai/g, 'a');
    encryptWord = encryptWord.replace(/ober/g, 'o');
    encryptWord = encryptWord.replace(/ufat/g, 'u');

    return encryptWord;
}

// Função para copiar o texto
function copy(text) {
    // Cria um elemento textarea oculto
    var textarea = document.createElement('textarea');
    textarea.value = text; // Define o texto a ser copiado

    // Adiciona o textarea à página
    document.body.appendChild(textarea);

    // Seleciona o texto dentro do textarea
    textarea.select();

    // Executa o comando de cópia
    document.execCommand('copy');

    // Remove o textarea da página
    document.body.removeChild(textarea);

    // Exibe uma mensagem de alerta
    console.log("Texto copiado: ", text);
}

// Função que verifica se o texto contém letras minúsculas e não tem acentos/caracteres especiais
function verificarEntrada(texto) {
    // Expressão regular para verificar se o texto contém apenas letras minúsculas sem acentos ou caracteres especiais
    const regex = /^[a-z]+$/;

    if (regex.test(texto)) {
        return true; // Retorna verdadeiro se o texto for válido
    } else {
        return false; // Retorna falso se o texto for inválido
    }
}
