const inputBox= document.getElementById('inputBox');
const addBtn= document.getElementById('addBtn');
const todoList= document.getElementById('todoList');


let editTodo = null;

//Function to Add to do
const addTodo=()=>
    {
    const inputText= inputBox.value.trim();
    if(inputText.length <=0)
    {
        alert("You must write something in your to do");
        return false;
    }

    if(addBtn.value=="Edit")
    {
        editTodo.target.previousElementSibling.innerHTML=
    inputText;
    addBtn.value ="Add";
    inputBox.value ="";
    }
    else{
  //Creating P tag
    const li= document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);

     //Creating Edit Button
     const editBtn= document.createElement("button");
     editBtn.innerText="Edit";
     editBtn.classList.add("btn" ,"editBtn");
     li.appendChild(editBtn);

    //Creating Delete Button
    const deleteBtn= document.createElement("button");
    deleteBtn.innerText="Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value="";

    //saveLocalTodo(inputText)
    }
}


//Function to Update :(Edit/Delete) To do
const updateTodo =(e)=>
{
    if(e.target.innerHTML=="Remove")
    {
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML=="Edit")
    {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value="Edit";
        editTodo =e;
    }
}

// const saveLocalTodo=(todo) =>
// {
//     let todo=[];
//     todo.push(todo);
//     console.log(todo);
//}
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click', updateTodo);