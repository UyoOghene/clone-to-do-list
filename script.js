const inputPanel =document.querySelector('.panel');
const inputTask =document.getElementById('task');
const inputDate =document.getElementById('date');
const addtask =document.getElementById('addtask');
const taskNdate =document.querySelector('.taskndate');
const nametask =document.getElementById('nametask');
const datetask =document.getElementById('datetask');
const toDo = document.querySelector('.todo');
const deletebtn =document.getElementById('deletebtn');




addtask.addEventListener('click',addTask);

inputPanel.addEventListener('click',hidePanel);
deletebtn.addEventListener('click',deleteTask);


function hidePanel(){

    inputPanel.innerHTML='hide input panel';
    taskNdate.classList.toggle('hidden');

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
       let node = document.createElement('div');
       node.classList.add("tasklist");
       let node2 = document.createElement('div');
       node2.classList.add("txt");
       node.appendChild(node2);
       let node3 = document.createElement('h3');
       node3.setAttribute("id", "nametask");
       node3.innerHTML = taskvalue;
       node2.appendChild(node3);
       let node4 = document.createElement('p');
       node4.setAttribute("id", "datetask");
       node4.innerHTML = datevalue;
       node2.appendChild(node4);
       let node5 = document.createElement('button');
       node5.setAttribute("id", "deletebtn");
       node5.innerHTML = 'delete';
       node.appendChild(node5);


        toDo.appendChild(node); 



    //    <div class="tasklist">
    //         <div class="txt">
    //             <h3 id="nametask">fdfd</h3>
    //             <p id="datetask">sdfsd</p>
    //         </div>
    //         <button id="delete"><img src="./delete.png" alt="" ></button>`

    //         </div>
    //     datetask.innerHTML= datevalue;
    //     nametask.innerHTML = taskvalue;
    //     let li= document.createElement('li');
    //     li.innerHTML= datevalue;
    //     tlist.appendChild(li);
    }

    inputTask.value ='';
    inputDate.value ='';
    saveData()

}



function deleteTask(){

    const tlist =document.querySelector('.tasklist');
    tlist.style.display ='none';
}


function saveData(){
    localStorage.setItem('data',taskvalue.innerHTML);
    localStorage.setItem('data',datevalue.innerHTML);

}

function showTask(){
taskvalue.innerHTML =localStorage.getItem('data');  
datevalue.innerHTML =localStorage.getItem('data');  
}

showTask();
