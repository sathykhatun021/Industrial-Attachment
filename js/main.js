var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')): {
    todo:[],
    completed:[]
};

//remove and complete icons in png format
var removeIMG = '<img class="fill" src="icon/sKeVCeVI-removebg-preview.png" alt="">';
var completeIMG = '<img class="fill" src="icon/kblHjz_s-removebg-preview.png" alt="">';

renderTodoList();

//user clicked on the add button
//If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function () {
    var value = document.getElementById('item').value;
    if (value){
        addItem(value);
    } 
});

document.getElementById('item').addEventListener('keydown',function(e){
    var value = this.value;
    if(e.code === 'Enter' && value){
        addItem(value);
    }
});

function addItem(value){
        addItemToDOM(value);
        document.getElementById('item').value='';

        data.todo.push(value);
        dataObjectUpdated();
}

function renderTodoList(){
    if(!data.todo.length && !data.completed.length) return;

    for(var i=0; i<data.todo.length; i++){
        var value = data.todo[i];
        addItemToDOM(value);
    }

    for(var j=0; j<data.completed.length; j++){
        var value = data.completed[i];
        addItemToDOM(value,true);
    }
}
function dataObjectUpdated(){
    localStorage.setItem('todoList',JSON.stringify(data));
}

//function for remove item from todo list
function removeItem(){
    var item=this.parentNode.parentNode;
    var parent = item.parentNode;
    var id=parent.id;
    var value=item.innerText;

    if(id==='todo'){
        data.todo.splice(data.todo.indexOf(data),1);
    }
    else{
        data.completed.splice(data.completed.indexOf(value),1);
    }
    dataObjectUpdated();

    parent.removeChild(item);
}

function completeItem(){ 
    var item=this.parentNode.parentNode;
    var parent = item.parentNode;
    var id=parent.id; 
    var value=item.innerText;

    if(id==='todo'){
        data.todo.splice(data.todo.indexOf(data),1);
        data.completed.push(value);
    }
    else{
        data.completed.splice(data.completed.indexOf(value),1);
        data.todo.push(value);
    }

    dataObjectUpdated();

    //check if the item should added to completed list or to to re-added to todo list
    var target=(id==='todo')?document.getElementById('completed'):document.getElementById('todo');
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

//add a new item to the todo list
function addItemToDOM(text, completed) {
    var list = (completed)? document.getElementById('completed'): document.getElementById('todo');


    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIMG;

    //add click event for removing item
    remove.addEventListener('click',removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIMG;

    //add click event for completing item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}