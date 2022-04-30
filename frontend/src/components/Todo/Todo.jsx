import React from 'react';
import Superhero from "./Superhero/Superhero";
import "./todo.css"
import {useGetPageQuery} from "../../services/superheroService";
import {useNavigate} from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import {useSelector} from "react-redux";

const Todo = () => {
    const navigate = useNavigate()
    const page = useSelector(state => state.superheros.page)
    const {data: superherosPage} = useGetPageQuery(page)

    return (
        <div>
            <div className="todo-list">
                <div className="add-container" onClick={() => navigate("/addOne")}>Add New</div>
                {superherosPage && superherosPage.map(superhero => {
                    return <Superhero key={superhero._id} superhero={superhero}/>
                })}
            </div>
            <Pagination ></Pagination>
        </div>
    );
};

export default Todo;