let buttonEnter = document.getElementById('enter');
let usetInput = document.getElementById('userInput');
let ul = document.querySelector('ul');

function inputLength() {
    return userInput.value.length>0;
}
function createTodo(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';
    /*let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('x'));
    deleteButton.addEventListener('click', deleteTododItems);
    */
}
function changeListAfterKeypress(event){
    if(inputLength() && event.which===13);
    {
        createTodo();
        //alert('key press!');
    }
}
userInput.addEventListener('keypress',changeListAfterKeypress);