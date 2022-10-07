import './App.css';
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div className="App">
            work
        </div>
    )


}
export default App;
