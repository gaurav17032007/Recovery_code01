import { useRef } from "react";

function App() {
    const countRef = useRef(0);

    function handleClick() {
        countRef.current++;
        console.log(countRef.current);
    }

    let arr = [
        { name: "Nitin", age: 20, skill: "Javascript" },
        { name: "Vikas", age: 25, skill: "Javascript" },
        { name: "Mohan", age: 30, skill: "Javascript" }
    ];

    return (
        <div>
            {arr.map((user,key) => (
                <p>{key.name}</p>
            ))}

            <button onClick={handleClick}>
                Click
            </button>
        </div>
    );
}

export default App;