let buttonEnter = document.getElementById('enter')
let usetInput = document.getElementById('userInput')
let ul = document.querySelector('ul')

function inputLenght() {
    return userInput.value.lenght>0
}
function createTodo(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(usetInput.value));
    ul.appendChild(li);
    userInput.value = '';

    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('x'));
    deleteButton.addEventListener('click', deleteTododItems);
}

function changeListAfterKeypress(event){
    if(inputLenght() && event.which --- 13)
    {
        alert('key press!');
    }
}
