import { useState,useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { db } from "../firebaseConfig/firebase"
import { collection, getDocs, query, where } from "firebase/firestore";

export const Equipos = () => {

    const { nombrEf } = useParams();

    const [equipos,setEquipos] = useState([]);

    const equiposCol = collection(db,"equipos");

    const getEquipos = async () => {
        const test = query(equiposCol, where("Efector", "==", `${nombrEf}`));
        const data = await getDocs(test);
        setEquipos(data.docs.map(doc => ({...doc.data(),id:doc.id})));
    }

    useEffect(() => {
        getEquipos();
    }, [])

    console.log(equipos);


    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid">
                        <Link to="/crearEq" className="btn btn-secondary">Agregar Equipo</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Efector</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.map((equipo) => (
                                <tr key={equipo.id}>
                                    <td>{equipo.Efector}</td>
                                    <td>{equipo.Equipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}