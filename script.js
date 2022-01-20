const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = ()=>{
    const todoList = document.getElementById("todo-list");
        const todosTemplate = todos.map((t,i) => `<li class='text-white font-bold uppercase text-rigth p-2'> ${i+1}) ${t} <button class='font-bold cursor-pointer text-red'>(Borrar)</button> </li>`);
        todoList.innerHTML = todosTemplate.join('')        
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach((elemento, i)=>{
            elemento.addEventListener('click', ()=>{
                console.log(elemento,i);
                elemento.parentNode.removeChild(elemento);
                todos.splice(i, 1);
                actualizarTodos(todos);
                render();
            });
        });
}

const actualizarTodos = (todos)=>{
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos',todoStrings);
}

window.onload = ()=>{
    render();
    const form = document.getElementById("todo-form");
    form.onsubmit = (e)=>{
        e.preventDefault();
        const todo = document.getElementById("todo"); 
        const todoText = todo.value; 
        todo.value = ""; 
        todos.push(todoText);
        actualizarTodos(todos);
        render();
    }
} 