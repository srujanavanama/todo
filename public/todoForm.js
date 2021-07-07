console.log("am I connected")
$("#new-todo-form").submit((event) => {
    event.preventDefault()
    const newTodo = $('#todo').val()
    console.log(newTodo)
    $.ajax({
        method: "POST",
        url: "/newtodo",
        data: {
            content: newTodo
        }
    })
})