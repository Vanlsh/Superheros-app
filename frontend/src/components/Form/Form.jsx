import React from 'react';
import {useForm} from "react-hook-form";
import {useCreatSuperherosMutation,useUpdateSuperherosMutation} from "../../services/superheroService";
import {useNavigate} from 'react-router-dom'
import "./form.css"

const Form = (props) => {
    const navigate = useNavigate()
    const [addSuperhero,{}] = useCreatSuperherosMutation()
    const [editSuperhero,{}] = useUpdateSuperherosMutation()
    const {register, handleSubmit} = useForm({defaultValues:props.superhero})

    const handleAddSuperhero = async (data) => {
        const dataForm = new FormData()
        if(!data.nickname){
            alert("Nickname can not be empty!")
            return
        }
        dataForm.append("nickname",data.nickname)
        dataForm.append("real_name",data.real_name)
        dataForm.append("origin_description",data.origin_description)
        dataForm.append("superpowers",data.superpowers)
        dataForm.append("catch_phrase",data.catch_phrase)
        data.avatar[0] && dataForm.append("avatar",data.avatar[0])

        if(props.buttonName === "Edit"){
            dataForm.append("id",props.superhero._id)
            await editSuperhero(dataForm).unwrap()
        } else {
            await addSuperhero(dataForm).unwrap()
        }
        navigate("/")
    }

    return (
        <div className="form-container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit(handleAddSuperhero)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input {...(register('nickname'))}
                                   type="text" id="nickname" className="validate"/>
                            <label className="active" htmlFor="nickname">Nickname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input {...register('real_name')} type="text" id="real-name" className="validate"/>
                            <label className="active" htmlFor="real-name">Real Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input {...register('superpowers')} type="text" id="superpowers"  className="validate"/>
                            <label className="active" htmlFor="superpowers">Superpowers</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea {...register('origin_description')} id="description" className="materialize-textarea"/>
                            <label className="active" htmlFor="description">Description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea {...register('catch_phrase')} id="catch-phrase" className="materialize-textarea"/>
                            <label className="active" htmlFor="catch-phrase">Catch Phrase</label>
                        </div>
                    </div>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input {...register('avatar')} type="file" multiple/>
                        </div>
                        <div className="file-path-wrapper">
                            <input  type="text" className="file-path validate" id="fileLoud" placeholder="Upload one file"/>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn btn-custom">{props.buttonName}</button>
                </form>
            </div>
        </div>
    )
}

export default Form;