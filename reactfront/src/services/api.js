import axios from "axios";

const URI2 = 'http://localhost:8000/students/horariosDisponibles/'

const getHorarios = async () => {
    const res = await axios.get(URI2)

    return res.data
}

export {getHorarios}