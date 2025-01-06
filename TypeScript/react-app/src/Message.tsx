//function based component


//PascalCasing
function Message() {
    // JSX: JavaScript XML
    // check babeljs.io/repl

    const name = "Mahin"; //keep it empty to show hello world, otherwise give any name to show it.

    if(name)
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}

export default Message;