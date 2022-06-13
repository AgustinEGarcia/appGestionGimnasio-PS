import axios from "axios";

const api = axios.create({baseURL:process.env.REACT_APP_API_URI})

console.log(process.env.REACT_APP_API_URI)

const getHorarios = async () => {
    const res = await api.get("/students/horariosDisponibles/")

    return res.data
}

export {getHorarios, api}