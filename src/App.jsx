import { useRoutes } from "react-router-dom";
import routeslist from "./routes/routelist";
import "./style.css";

function App() {
    const element = useRoutes(routeslist);

    return element;
}

export default App;
