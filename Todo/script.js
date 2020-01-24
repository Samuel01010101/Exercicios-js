let input = document.querySelector('#app input');
let button = document.querySelector('#app button');
let lista = document.querySelector('#app ul');

let array = JSON.parse(localStorage.getItem('lista_array')) || [];

function render() {
    lista.innerHTML = '';
    for(todo of array){

        let item = document.createElement('li');
        let textoLi = document.createTextNode(todo);
        item.appendChild(textoLi);
        

        let excluir = document.createElement('a');
        excluir.setAttribute('href', '#');
        let textoA = document.createTextNode(' Excluir');

        let posicao = array.indexOf(todo);
        excluir.setAttribute('onclick', 'excluir('+ posicao +')');

        excluir.appendChild(textoA);
        item.appendChild(excluir);
        lista.appendChild(item);
    }
}
render();

button.onclick = function adicionar() {
    let texto = input.value;
    let verificar = true;

    if(input.value.length == 0){
        window.alert('Campo Vazio!');
        verificar = false;
    }
        else{
            for(todo of array){
                if(input.value == todo){
                    window.alert('Essa tarefa já existe!');
                    verificar = false;
                }
            }
        }
    if(verificar == true){
        array.push(texto);
        input.value = '';
        input.focus();
        render();
        saveLocalStorage();
        }
    }

function excluir(posicao) {
    array.splice(posicao, 1);
    lista.focus();
    render();
    saveLocalStorage();
}

function saveLocalStorage() {
    localStorage.setItem('lista_array', JSON.stringify(array));
}
