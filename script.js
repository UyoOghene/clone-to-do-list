const inputPanel =document.getElementById('panel');
const inputTask =document.getElementById('task');
const inputDate =document.getElementById('date');
const addtask =document.getElementById('addtask');
const taskNdate =document.getElementById('taskndate');
const nametask =document.getElementById('nametask');
const datetask =document.getElementById('datetask');
const del =document.getElementById('delete');



addtask.addEventListener('click',addTask);
inputPanel.addEventListener('click',hidePanel);

function hidePanel(){
    taskNdate.remove();
    inputPanel.innerHTML='hide input panel';

}
 

function addTask(){
    let taskvalue= inputTask.value;
    let datevalue=inputDate.value;
    const nametask =document.getElementById('nametask');
    const datetask =document.getElementById('datetask');
    let tlist =document.getElementById('tlist');



    if(inputTask.value === ''){
    alert('write somehing');
    }
    else {
        console.log(taskvalue, datevalue);
        datetask.innerHTML= datevalue;
        nametask.innerHTML = taskvalue;
        let li= document.createElement('li');
        li.innerHTML= datevalue;
        tlist.appendChild(li);
    }
    inputTask.value ='';
    inputDate.value ='';

}

del.addEventListener('click',deleteTask)
function deleteTask(){
    let tlist =document.getElementById('tlist');
    tlist.remove();
    
}

