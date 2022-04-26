import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/students/'

const CompEditStudent = () => {
    const [Nombre, setNombre] = useState('')
    const [Apellido, setApellido] = useState('')
    const [DNI, setDNI] = useState('')
    const [Fecha_nacimiento, setFecha_nacimiento] = useState('')
    const [Nro_telefono, setNro_telefono] = useState('')
    const [Tipo_membresia, setTipo_membresia] = useState('')
    const [Turno_asignado, setTurno_asignado] = useState('')
    const [Estado_membresia, setEstado_membresia] = useState('')

    const navigate = useNavigate()

    const {id} = useParams()
    console.log(id)
    debugger

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {Nombre: Nombre, Apellido: Apellido, DNI: DNI, Fecha_nacimiento: Fecha_nacimiento, 
            Nro_telefono: Nro_telefono, Tipo_membresia: Tipo_membresia, Turno_asignado: Turno_asignado, 
            Estado_membresia: Estado_membresia
        })
        navigate('/')
    }

    useEffect(()=>{
        getStudentByID()
    },[])

    const getStudentByID = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.Nombre)
        setApellido(res.data.Apellido)
        setDNI(res.data.DNI)
        setFecha_nacimiento(res.data.Fecha_nacimiento)
        setNro_telefono(res.data.Nro_telefono)
        setTipo_membresia(res.data.Tipo_membresia)
        setTurno_asignado(res.data.Turno_asignado)
        setEstado_membresia(res.data.Estado_membresia)
    }

    return(

        <div className="container">
            <h3>Editar Alumno</h3>
            <form onSubmit={update}>
                
                <div className="input-group mt-3">
                    <span className="input-group-text">Nombre</span>
                    <input value={Nombre} onChange={(e) => setNombre(e.target.value)} type="text" aria-label="Nombre" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Apellido</span>
                    <input value={Apellido} onChange={(e) => setApellido(e.target.value)} type="text" aria-label="Apellido" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">DNI</span>
                    <input value={DNI} onChange={(e) => setDNI(e.target.value)} type="text" aria-label="DNI" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Fecha de nacimiento</span>
                    <input value={Fecha_nacimiento} onChange={(e) => setFecha_nacimiento(e.target.value)} type="date" aria-label="Fecha de nacimiento" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Nro. de teléfono</span>
                    <input value={Nro_telefono} onChange={(e) => setNro_telefono(e.target.value)} type="text" aria-label="Nro. de teléfono" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Tipo membresía</span>
                    <input value={Tipo_membresia} onChange={(e) => setTipo_membresia(e.target.value)} type="text" aria-label="Tipo membresía" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Turno asignado</span>
                    <input value={Turno_asignado} onChange={(e) => setTurno_asignado(e.target.value)} type="text" aria-label="Turno asignado" class="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Estado membresía</span>
                    <input value={Estado_membresia} onChange={(e) => setEstado_membresia(e.target.value)} type="text" aria-label="Estado membresía" class="form-control"></input>
                </div>

                <button type="submit" className="btn btn-success mt-3">Guardar</button>

            </form>
        </div>
    )

}

export default CompEditStudent