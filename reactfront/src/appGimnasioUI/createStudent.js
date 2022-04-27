import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//constante para hacer referencia a nuestro endpoint
const URI = 'http://localhost:8000/students/'

const CompCreateStudent = () => {

    const [Nombre, setNombre] = useState('')
    const [Apellido, setApellido] = useState('')
    const [DNI, setDNI] = useState('')
    const [Fecha_nacimiento, setFecha_nacimiento] = useState('')
    const [Nro_telefono, setNro_telefono] = useState('')
    const [Tipo_membresia, setTipo_membresia] = useState('')
    const [Turno_asignado, setTurno_asignado] = useState('')
    const [Estado_membresia, setEstado_membresia] = useState('')

    const navigate = useNavigate()

    const save = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Nombre: Nombre, Apellido: Apellido, DNI: DNI.toString(), Fecha_nacimiento: Fecha_nacimiento, 
            Nro_telefono: Nro_telefono.toString(), Tipo_membresia: Tipo_membresia, Turno_asignado: Turno_asignado.toString(), Estado_membresia: Estado_membresia})
        navigate('/')
    }

    return (
        <div className="container">
            <h3>Ingresar Alumno</h3>
            <form onSubmit={save}>
                
                <div className="input-group mt-3">
                    <span className="input-group-text">Nombre</span>
                    <input value={Nombre} onChange={(e) => setNombre(e.target.value)} type="text" aria-label="Nombre" className="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Apellido</span>
                    <input value={Apellido} onChange={(e) => setApellido(e.target.value)} type="text" aria-label="Apellido" className="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">DNI</span>
                    <input value={DNI} onChange={(e) => setDNI(e.target.value)} type="text" aria-label="DNI" className="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Fecha de nacimiento</span>
                    <input value={Fecha_nacimiento} onChange={(e) => setFecha_nacimiento(e.target.value)} type="date" aria-label="Fecha de nacimiento" className="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Nro. de teléfono</span>
                    <input value={Nro_telefono} onChange={(e) => setNro_telefono(e.target.value)} type="text" aria-label="Nro. de teléfono" className="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <label className="input-group-text" for="inputGroupSelect01">Tipo de membresía</label>
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Seleccione una</option>
                        <option value="Común" onChange={(e) => setTipo_membresia(e.target.value)}>Común</option>
                        <option value="Preferencial" onChange={(e) => setTipo_membresia(e.target.value)}>Preferencial</option>
                    </select>
                </div>
                <div className="input-group mt-3">
                    <span className="input-group-text">Turno asignado</span>
                    <input value={Turno_asignado} onChange={(e) => setTurno_asignado(e.target.value)} type="text" aria-label="Turno asignado" className="form-control"></input>
                </div>
                <div className="input-group mt-3">
                    <label className="input-group-text" for="inputGroupSelect02">Estado de membresía</label>
                    <select className="form-select" id="inputGroupSelect02">
                        <option selected>Seleccione una</option>
                        <option value="Al día" onChange={(e) => setEstado_membresia(e.target.value)}>Al día</option>
                        <option value="Atrasada" onChange={(e) => setEstado_membresia(e.target.value)}>Atrasada</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-success mt-3">Guardar</button>

            </form>
        </div>
    )
}

export default CompCreateStudent