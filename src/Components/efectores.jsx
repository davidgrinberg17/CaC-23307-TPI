import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { Link } from "react-router-dom"
import { db } from "../firebaseConfig/firebase"

export const Efectores = () => {

    const [efectores,setEfectores] = useState([]);

    const efectoresCol = collection(db,"efectores");

    const getEfectores = async () => {
        const data = await getDocs(efectoresCol)
        setEfectores(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }

    useEffect(() => {getEfectores()},[])
    console.log(efectores);

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid">
                        <Link to="/crearEf" className="btn btn-secondary">Agregar Efector</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Efector</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {efectores.map((efec) => (
                                <tr key={efec.id}>
                                    <td>{efec.nombre}</td>
                                    <td><Link to={`/equipos/${efec.nombre}`} className="btn btn-light">Listado</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}