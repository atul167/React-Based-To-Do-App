export function Todos({ todos }) {
    console.log(todos);
    const TodoElements = [];
    for (let i = 0; i < todos.length; i++) {
        const e = todos[i];
        TodoElements.push(
            <div key={i}>
                <h1>{e.title}</h1>
                <h2>{e.description}</h2>
                <button>{e.completed ? 'Completed' : 'Incomplete'}</button>
            </div>
        )
    }

    return <div>{TodoElements}</div>;
}
