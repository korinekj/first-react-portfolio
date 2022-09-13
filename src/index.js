import ReactDOM from "react-dom/client"; //tohle se v novém Reactu 18 už dělat nemusí?..
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
