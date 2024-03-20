const inputPanel = document.querySelector('.panel');
const inputTask = document.getElementById('task');
const inputDate = document.getElementById('date');
const addtask = document.getElementById('addtask');
const taskNdate = document.querySelector('.show');
const nametask = document.getElementById('nametask');
const datetask = document.getElementById('datetask');
const toDo = document.querySelector('.todo');
let count = 0;
localStorage.setItem('taskv', []);



addtask.addEventListener('click', addTask);

inputPanel.addEventListener('click', hidePanel);

function hidePanel(){
    taskNdate.classList.toggle('hide');
        if(taskNdate.classList.contains('hide')){
            inputPanel.innerHTML = 'show input panel';
        }
        else{
            inputPanel.innerHTML = 'hide input panel';
        }
    } 
 
function addTask(){
    localStorage.setItem('taskv', inputTask.value);

    if(inputTask.value === ''){
    alert('write somehing');
    }
    else {
        console.log(inputTask.value);
       let node = document.createElement('div');
       node.classList.add("tasklist");
       node.setAttribute('id','tasklist' + count);
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
       node5.setAttribute("id", "deletebtn" + count );
       node5.innerHTML = 'delete';
       node.appendChild(node5);

        toDo.appendChild(node); 
        // const deleteBtn = document.getElementById('deletebtn');
        node5.addEventListener('click', delTask);
    }

    inputTask.value ='';
    inputDate.value ='';
    // saveData();
    count = count+1;
}

function delTask(){
    console.log('deletefunction');
    const tlist = document.querySelector('.tasklist');
    tlist.remove();
}


function saveData(){
    // localStorage.setItem('taskv', inputTask.value);
    // localStorage.setItem('datev', inputDate.value);
}

function showTask(){
    // inputTask.value = localStorage.getItem('taskv');  
    // inputDate.value = localStorage.getItem('datev');  
}

showTask();

// localStorage.setItem("person", "{ name : 'uyo', age : 32}")
// console.log(localStorage);

let pers = localStorage.getItem('person');
console.log(pers);

