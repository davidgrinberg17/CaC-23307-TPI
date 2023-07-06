import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"

export const CrearEf = () =>{

    const [nombre,setNombre] = useState("")

    const navigate = useNavigate()

    const efectoresCol = collection(db,"efectores")

    const crearEfector = async (e) => {
        
        e.preventDefault()
        await addDoc (efectoresCol,{
            nombre: nombre
        })
        navigate("/efectores")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Agregar Efector</h1>
                    <form onSubmit={crearEfector}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input placeholder={nombre} type="text" onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}