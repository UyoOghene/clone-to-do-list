const inputPanel =document.getElementById('panel');
const inputTask =document.getElementById('task');
const inputDate =document.getElementById('date');
const addtask =document.getElementById('addtask');
const taskNdate =document.getElementById('taskndate');
const nametask =document.getElementById('nametask');
const datetask =document.getElementById('datetask');
const del =document.getElementById('delete');
const toDo = document.querySelector('.todo');



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
       node5.setAttribute("id", "delete");
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

}

// del.addEventListener('click',deleteTask)
// function deleteTask(){
//     let tlist =document.getElementById('tlist');
//     tlist.remove();
    
// }

