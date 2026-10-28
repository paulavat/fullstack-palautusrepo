import ReactDom from "react-dom/client";
import App from "./App";
// import axios from "axios";

// const promise = axios.get("http://localhost:3001/persons").then((response) => {
//   const persons = response.data;
//   console.log(persons);
// });
// // console.log(promise);

ReactDom.createRoot(document.getElementById("root")).render(<App />);
