const inputPanel = document.querySelector('.panel');
const inputTask = document.getElementById('task');
const inputDate = document.getElementById('date');
const addtask = document.getElementById('addtask');
const taskNdate = document.querySelector('#taskndate');
const nametask = document.getElementById('nametask');
const datetask = document.getElementById('datetask');
const toDo = document.querySelector('.todo');


addtask.addEventListener('click', addTask);

inputPanel.addEventListener('click', hidePanel);

function hidePanel(){
    if( inputPanel.innerHTML === 'hide input panel'){
        inputPanel.innerHTML='Show input Panel';
        taskNdate.classList.toggle('hide');
    }
    else{
        inputPanel.innerHTML === 'Show input Panel';
        taskNdate.classList.toggle('hide');
    } 
}
 
function addTask(){
    if(inputTask.value === ''){
    alert('write somehing');
    }
    else {
        console.log(inputTask.value);
       let node = document.createElement('div');
       node.classList.add("tasklist");
       let node2 = document.createElement('div');
       node2.classList.add("txt");
       node.appendChild(node2);
       let node3 = document.createElement('h3');
       node3.setAttribute("id", "nametask");
       node3.innerHTML = inputTask.value;
       node2.appendChild(node3);
       let node4 = document.createElement('p');
       node4.setAttribute("id", "datetask");
       node4.innerHTML = inputDate.value;
       node2.appendChild(node4);
       let node5 = document.createElement('button');
       node5.setAttribute("id", "deletebtn");
    //    node5.addEventListener('click', delTask);
       node5.innerHTML = 'delete';
       node.appendChild(node5);

        toDo.appendChild(node); 
        const deleteBtn = document.getElementById('deletebtn');
        deleteBtn.addEventListener('click', delTask);
    }
    inputTask.value ='';
    inputDate.value ='';
    saveData();
}

function delTask(){
    console.log('hello');
    const tlist = document.querySelector('.tasklist');
    tlist.style.display ='none';
}


function saveData(){
    localStorage.setItem('data', inputDate.value);
    localStorage.setItem('data', inputTask.value);


}

function showTask(){
inputDate.value =localStorage.getItem('data');  
inputTask.value =localStorage.getItem('data');  
}

showTask();
