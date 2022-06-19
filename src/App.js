import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";

function App() {

    // const [loaderValue, setLoaderValue] = useState(true);

    // const preload = document.getElementById('preloader');

    // if (preload) {
    //     setTimeout(() => {
    //         preload.style.display = "none";
    //         setLoaderValue(false);
    //     }, 2000);
    // }   

    return (
        <div className="App">
           <NavRoutes />
        </div>
    );
}

export default App;
