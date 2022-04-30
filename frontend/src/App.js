import './App.css';
import {Routes, Route} from "react-router-dom";
import SuperherosNav from "./components/Navbar/SuperherosNav";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";
import {useSelector} from "react-redux";


function App() {
  const {superhero} = useSelector(state => state.superheros)
  return (
    <div className="app">
        <SuperherosNav/>
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="addOne" element={<Form buttonName={"Add"}/>}/>
            <Route path="editOne" element={<Form buttonName={"Edit"} superhero={superhero}/>}/>
            <Route path="details" element={<Details/>}/>
        </Routes>
    </div>
  );
}

export default App;
