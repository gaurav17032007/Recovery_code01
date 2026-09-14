import { useState ,useEffect,useRef} from "react";
function Formvalidation() {

    const [input, setinput] = useState("");
    const user=useRef(0);

    useEffect(()=>{
            user.current=user.current+1;
    })
    return (
        <div>
            {user.current}
            <form>
                <input type="text"
                    placeholder="Enter the text"
                    value={input}
                    onChange={(e) => { setinput(e.target.value) }} />
                    <button type="submit">click</button>
            </form>
        </div>
    )
}
export default Formvalidation;