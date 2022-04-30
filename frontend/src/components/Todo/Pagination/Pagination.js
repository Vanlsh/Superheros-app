import React from 'react';
import {useGetAllSuperherosQuery} from "../../../services/superheroService";
import './pagination.css'
import {setPage} from "../../../store/reducers/superherosSlice";
import {useDispatch, useSelector} from "react-redux";

const Pagination = () => {
    const page = useSelector(state => state.superheros.page)
    const dispatch = useDispatch()
    const {data: superheros} = useGetAllSuperherosQuery('')
    const addItem = (index) => {
        if(index % 5 === 0){
            return (
                <div
                className="pagination-item"
                key={index / 5 + 1}
                onClick={() => dispatch(setPage(index / 5 + 1))}
                >{index / 5 + 1}
                </div>)
        }
        return ''
    }
    const handelFlipAhead = () => {
        if(Math.ceil(superheros.length / 5) > page) dispatch(setPage(page + 1));
    }
    const handelFlipBack = () => {
        if(1 < page) dispatch(setPage(page - 1));
    }

    return (
        <div className="pagination-container">
            <i className="material-icons" onClick={handelFlipBack}>chevron_left</i>
            {superheros && superheros.map((superhero,index) => addItem(index))}
            <i className="material-icons" onClick={handelFlipAhead}>chevron_right</i>
        </div>
    );
};
export default Pagination;