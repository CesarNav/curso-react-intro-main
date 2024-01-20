import './CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <div className="CreateTodoButton">
            <button className="CreateTodoButton button"
            onClick={
                (event) => {
                alert('Aqui deberia abrir el modal')
                console.log(event)
                }}
            >+</button>
        </div>
    )
}

export { CreateTodoButton };