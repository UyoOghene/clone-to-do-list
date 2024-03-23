const inputPanel = document.querySelector('.panel');
const inputTask = document.getElementById('task');
const inputDate = document.getElementById('date');
const addtask = document.getElementById('addtask');
const taskNdate = document.querySelector('.show');
const nametask = document.getElementById('nametask');
const datetask = document.getElementById('datetask');
const toDo = document.querySelector('.todo');
const toDolist = document.querySelector('#todolist');


addtask.addEventListener('click', addTask);
inputPanel.addEventListener('click', hidePanel);
toDolist.addEventListener('click', delTask);


inputTask.addEventListener('keypress',function(event) {
    if (event.key === "Enter" ){
        console.log('eee');
        addTask();
    } 
      });



function hidePanel(){
    taskNdate.classList.toggle('hide');
    if(taskNdate.classList.contains('hide')){
        inputPanel.innerHTML = 'show input panel';
    }
    else{
        inputPanel.innerHTML = 'hide input panel';
    }
} 

function showTask(){
    toDolist.innerHTML = localStorage.getItem('list');  
    console.log(toDolist);
    
}

 
function saveData(){
    localStorage.setItem('list', toDolist.innerHTML);
}

function delTask(e){
    console.log('deletefunction');
    if(e.target.tagName === 'IMG'){
    // if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }

    saveData();
}

function addTask(){
    if(inputTask.value === ''){
        alert('write something');
    }
    else {
        let node = document.createElement('div');
        node.classList.add("tasklist");
        node.setAttribute('id','tasklist' );
        let node2 = document.createElement('div');
        node2.classList.add("txt");
        node.appendChild(node2);
        let node3 = document.createElement('h3');
        node3.setAttribute("id", "nametask");
        node3.innerText = inputTask.value;
        node2.appendChild(node3);
        let node4 = document.createElement('p');
        node4.setAttribute("id", "datetask");
        node4.innerText = inputDate.value;
        node2.appendChild(node4);
        let node5 = document.createElement("IMG");
        node5.setAttribute("src", "delete.png");
        // let node5 = document.createElement('button');
        node5.setAttribute("id", "deletebtn" );
        node5.innerText = 'delete';
        node.appendChild(node5);
        toDo.appendChild(toDolist); 
        toDolist.appendChild(node);

        inputTask.value ='';
        inputDate.value ='';
        saveData();

    } 
}

function saveData(){
    localStorage.setItem('list', toDolist.innerHTML);
}

function showTask(){
    toDolist.innerHTML = localStorage.getItem('list');  
}
showTask();