const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))


///-----------------------------------------------------///

// Exemplo de callback em evento de clique:

/*
Nesse exemplo, estamos utilizando uma função anônima como callback para o evento de clique em um botão na página. A função é chamada toda vez que o botão é clicado, e imprime uma mensagem no console. Esse é um exemplo comum de uso de callback em eventos de usuário em uma aplicação web.
*/

let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
    console.log("O botão foi clicado!");
});



// Exemplo de callback em requisição AJAX:

/*
Nesse exemplo, estamos utilizando uma função callback para lidar com a resposta de uma requisição AJAX feita para a API do GitHub. A função fazerRequisicao recebe uma URL e uma função callback como argumentos. A função cria um objeto XMLHttpRequest, define uma função callback para lidar com a resposta e faz a requisição. Quando a resposta chega, a função callback é chamada com o conteúdo da resposta como argumento. No exemplo, a função callback é usada para imprimir o nome de usuário de um usuário específico da API do GitHub.
*/

function fazerRequisicao(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

fazerRequisicao("https://api.github.com/johnnymarcelino/octocat", function (resultado) {
    let usuario = JSON.parse(resultado);
    console.log("Nome de usuário:", usuario.login);
});



// Exemplo de callback em uma função de ordenação:

/*
Nesse exemplo, estamos utilizando uma função anônima como callback para a função sort de um array em JavaScript. A função é chamada para comparar pares de elementos do array e determinar a ordem deles. No exemplo, a função callback simplesmente subtrai um número do outro para determinar a ordem crescente dos elementos. Esse é um exemplo comum de uso de callback em funções que envolvem ordenação, filtragem ou mapeamento de elementos de um array.
*/

let numeros = [1, 4, 2, 6, 3, 5];
numeros.sort(function (a, b) {
    return a - b;
});

console.log("Números ordenados:", numeros);



// -------------------------------------------------------- //

// EXEMPLO DE CALLBACK NO BROSWER

{/* <button onclick="mostrarMensagem()">Clique aqui</button> */}

<script>
function mostrarMensagem() {
  alert("Olá, mundo!")
}
</script>


/*
Nesse exemplo, estamos utilizando a função callback mostrarMensagem para exibir uma mensagem de alerta quando o botão é clicado. Ao clicar no botão, o evento onclick é acionado, e a função mostrarMensagem é executada como callback. A mensagem de alerta é exibida no navegador.
*/


// Exemplo 2

{/* <ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul> */}

<script>
let itens = document.getElementsByTagName("li");

for (let i = 0; i < itens.length; i++) {
  itens[i].onclick = function() {
    alert("Você clicou no item " + (i+1));
  }
}
</script>


/*
Nesse exemplo, estamos utilizando a função callback anônima function() {...} como callback para exibir uma mensagem de alerta quando um item da lista é clicado. Estamos utilizando a função getElementsByTagName para obter todos os elementos li na página, e em seguida, adicionando um evento onclick para cada um deles. Quando um item é clicado, a função callback anônima é executada, exibindo uma mensagem de alerta com o número do item clicado.
*/