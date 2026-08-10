import Welcome from "./Component/pro1";
import Array from "./Component/pro2";
import Context from "./Component/pro3";
import { useRef, useState } from "react";
import { createContext } from "react";
import Pro from "./Component/pro4";
export const Mycontext = createContext();
function App() {
    const [input, setinput] = useState("");
    const [use, set] = useState(0);
    const time = useRef(0);
    function show() {
        return (
            window.alert("Context is run")
        )
    }
    function Timer() {
        setTimeout(() => {
            time.current += 1;
            set(time.current);
            console.log(time.current);
        }, 2000);
    }
    const Input = (e) => {
        e.preventDefault();
        console.log(input);
    }
    return (
        <div>
            <form onSubmit={Input}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)} />
                <button type="submit">Input</button>
            </form>
            <h1>{use}</h1>
            <button onClick={Timer}>click</button>
            <Welcome a={3} b={1} />
            <Array />
            <Mycontext.Provider value={{show,Input}}>
                <Context />
                <Pro/>
            </Mycontext.Provider>
        </div>
    );
}

export default App;     