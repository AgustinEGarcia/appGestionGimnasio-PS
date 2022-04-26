import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

//constante para hacer referencia a nuestro endpoint
const URI = 'http://localhost:8000/students/'

//componente funcional
const CompShowStudents = () => {
    const [students, setStudent] = useState([])
    
    useEffect(()=>{
        getStudents()
    },[])

    //procedimiento para mostrar todos los estudiantes
    const getStudents = async () => {
        const res = await axios.get(URI)
        setStudent(res.data)
    }

//procedimiento para eliminar un estudiante
    const deleteStudent = async (id) => {
        axios.delete(`${URI}${id}`)
        getStudents()
    }

    return(
        <div className='container'>
            
            <div className='row'>

                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2 btn-lg'><i class="fa-solid fa-circle-plus"></i></Link>
                    <table className="table table-hover">
                        
                        <thead className='table-primary'>

                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>DNI</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Nro. de teléfono</th>
                                <th>Tipo de membresía</th>
                                <th>Turno asignado</th>
                                <th>Estado de membresía</th>
                                <th>Acciones</th>
                            </tr>

                        </thead>

                        <tbody>
                            {students.map ((student) => (
                                <tr key={student.id}>
                                    <td>{student.ID}</td>
                                    <td>{student.Nombre}</td>
                                    <td>{student.Apellido}</td>
                                    <td>{student.DNI}</td>
                                    <td>{student.Fecha_nacimiento}</td>
                                    <td>{student.Nro_telefono}</td>
                                    <td>{student.Tipo_membresia}</td>
                                    <td>{student.Turno_asignado}</td>
                                    <td>{student.Estado_membresia}</td>
                                    <td>
                                        <Link to={`/edit/${student.id}`} className='btn btn-info'><i class="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ () => deleteStudent(student.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
            
        </div>
    )
}



export default CompShowStudents