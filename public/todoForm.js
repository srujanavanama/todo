console.log("am I connected")
$("#new-todo-form").submit((event) => {
    event.preventDefault()
    const newTodo = $('#todo').val()
    // console.log(newTodo)
    $.ajax({
        method: "POST",
        url: "/newtodo",
        data: {
            content: newTodo
        }
    })
    .done(submittedTodo => {
        // console.log(submittedTodo)
        // $("#todo-list").prepend(`<li>${submittedTodo.content}</li>`)
        $.getJSON('/api/all-todos')
        .then(allTodos => {
            // console.log(allTodos)
            const lastTodo = allTodos[allTodos.length - 1]
            console.log(lastTodo)
            $("#todo-list").prepend(`<li id="todo-${lastTodo.id}">${lastTodo.content}</li>`)
        })
        .catch(err => {
            console.log(err)
        })
        $("#todo").val("")
    })
    .fail(err => {
        console.log(err)
    })
})