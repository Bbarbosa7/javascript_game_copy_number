// function fazerAcao() {
//     var area = document.getElementById('area');
//     var texto = prompt('Qual seu nome?');

//     area.innerHTML = texto;
// }

// function adicionarIngrediente() {
//     var ingrediente = document.getElementById("ingrediente").value;
//     var listaBolo = document.getElementById("lista").innerHTML;

//     listaBolo = listaBolo + "<li>" + ingrediente + "</li>";

//     document.getElementById('lista').innerHTML = listaBolo;
// }

// Um array é criado usando:
// var array = ["item 1", "item 2", "item 3"];

//Manipulando arrays:

// Mostra a posição do item no array
// array.indexOf("Noah"); // Retorna 2

// Para excluir o último item do array:
// array.pop(); // "Noah"

// Para excluir o primeiro item do array:
// array.shift(); // "Jéssica"

// Para adicionar um ou mais itens em um array:
// array.push("Jéssica", "Noah"); // ["Brayann", "Jéssica", "Noah"]

// if(array.lastIndexOf("Jéssica") > -1){
//     alert("Existe no array");
// } else {
//     alert("Não existe no array");
// }

// Laços de repetição com JS:

// Função while:
// var x = 0;

// document.write("Iniciando o loop... <br />");

// while (x <= 10) {

//     document.write("Número: " + x + "<br />");

//     x++;
// }

// document.write("Finalizou o loop!");

// Função for:
// for(x = 0; x < 10; x++) {
//     document.write("Número: " + x + "<br />");
// }

// Função SWITCH:
// x = prompt("Qual o número?");

// switch (x) {
//     case "1":
//         alert("X é o 1");
//         break;
//     case "2":
//         alert("X é o 2");
//         break;
//     case "3":
//         alert("X é o 3");
//         break;

//     default:
//         alert("Nenhum número foi satisfeito!");
//         break;
// }


function verificar() {
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

    if (n1 == n2) {
        alert("PARABÉNS!!! Você acertou o número.");
    } else {
        alert("ERROOOOOU!!! Você errou o número.");
    }

    reset()
}

function reset() {
    document.getElementById("n2").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = r;
}