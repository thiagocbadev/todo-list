const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className='content'>

                <img
                    src={todo.imageUrl}
                    alt={`Foto referente à ${todo.category}`}
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '15px',
                        objectFit: 'cover'
                    }}
                />

                <div className="text-group">
                    <p>{todo.text}</p>
                    <p className='category'>({todo.category})</p>
                </div>

                <div>
                    <button className="complete" onClick={() => completeTodo(todo.id)} >Completar</button>
                    <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;