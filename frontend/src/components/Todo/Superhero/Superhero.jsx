import React from 'react';
import {useNavigate} from "react-router-dom";
import {URL_SERVER} from "../../../config";
import {useDeleteSuperherosMutation,useGetAllSuperherosQuery} from "../../../services/superheroService";
import './superhero.css'
import {useDispatch} from "react-redux";
import {setSuperhero} from "../../../store/reducers/superherosSlice"

const Superhero = ({superhero}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [deleteSuperhero,{}] = useDeleteSuperherosMutation()
    const {data: details} = useGetAllSuperherosQuery()

    const getAvatar = (avatarName) => {
        let avatar = ''
        if(!avatarName){
             return avatar = './img/defaultAvatar.png'
        } else {
            return avatar = URL_SERVER + avatarName
        }
    }

    const handleDelete = async (event,id) => {
        event.stopPropagation()
        await deleteSuperhero(id)
    }

    const handleEdit = (event,id) => {
        event.stopPropagation()
        const superheroDetails = details.find(superhero => superhero._id === id)
        dispatch(setSuperhero(superheroDetails))
        navigate("/editOne")

    }
    const handelDetails = async (id) => {
        const superheroDetails = details.find(superhero => superhero._id === id)
        dispatch(setSuperhero(superheroDetails))
        navigate("/details")
    }

    return (
        <div className="superhero-container" onClick={() => handelDetails(superhero._id)}>
            <img className="img-container" src={getAvatar(superhero.avatar)} alt="superhero"/>
            <div className="name-container">{superhero.nickname}</div>
            <div className="button-container">
                <div className="delete-button"
                     onClick={(event) => handleDelete(event,superhero._id)}
                >Delete</div>
                <div className="edit-button"
                     onClick={(event) => handleEdit(event,superhero._id)}
                >Edit</div>
            </div>
        </div>
    );
};

export default Superhero;