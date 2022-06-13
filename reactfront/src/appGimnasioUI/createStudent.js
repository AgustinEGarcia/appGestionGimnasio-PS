import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHorarios } from "../services/api";
import "../App.css";

//constante para hacer referencia a nuestro endpoint
const URI = "http://localhost:8000/students/";

const CompCreateStudent = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [DNI, setDNI] = useState("");
  const [Fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [Nro_telefono, setNro_telefono] = useState("");
  const [Tipo_membresia, setTipo_membresia] = useState("Común");
  const [Turno_asignado, setTurno_asignado] = useState("-");
  const [Estado_membresia, setEstado_membresia] = useState("Al día");

  const navigate = useNavigate();

  const save = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      Nombre: Nombre,
      Apellido: Apellido,
      DNI: DNI.toString(),
      Fecha_nacimiento: Fecha_nacimiento,
      Nro_telefono: Nro_telefono.toString(),
      Tipo_membresia: Tipo_membresia,
      Turno_asignado: Turno_asignado !== "-" ? Turno_asignado : null,
      Estado_membresia: Estado_membresia.toString(),
    });

    navigate("/");
  };

  const [horariosDisponibles, sethorariosDisponibles] = useState([]);

  useEffect(() => {
    getHorarios().then((horarios) => {
      sethorariosDisponibles(horarios);
    });
  }, []);

  useEffect(() => {
    if (Tipo_membresia !== "Preferencial") {
      setTurno_asignado("");
    }
  }, [Tipo_membresia]);

  const handlerSelectMembresia = (e) => {
    setEstado_membresia(e.target.value);
  };

  const handlerTipoMembresia = (e) => {
    const selected = e.target.value;

    if (selected === "Común") {
      setTurno_asignado("-");
    }

    setTipo_membresia(selected);
  };

  return (
    <div className="container_grilla_ingresar">
      <h3 className="cabecera_ingresar_alumno">Ingresar Alumno</h3>
      <form onSubmit={save}>
        <div className="input-group mt-3">
          <span className="input-group-text imput_group_text">Nombre</span>
          <input
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            aria-label="Nombre"
            className="form-control imput_form_control"
            required
          ></input>
        </div>
        <div className="input-group mt-3">
          <span className="input-group-text imput_group_text">Apellido</span>
          <input
            value={Apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            aria-label="Apellido"
            className="form-control imput_form_control"
            required
          ></input>
        </div>
        <div className="input-group mt-3">
          <span className="input-group-text imput_group_text">DNI</span>
          <input
            value={DNI}
            onChange={(e) => setDNI(e.target.value)}
            type="number"
            aria-label="DNI"
            className="form-control imput_form_control"
            required
          ></input>
        </div>
        <div className="input-group mt-3">
          <span className="input-group-text imput_group_text">
            Fecha de nacimiento
          </span>
          <input
            value={Fecha_nacimiento}
            onChange={(e) => setFecha_nacimiento(e.target.value)}
            type="date"
            aria-label="Fecha de nacimiento"
            className="form-control imput_form_control"
            required
          ></input>
        </div>
        <div className="input-group mt-3">
          <span className="input-group-text imput_group_text">
            Nro. de teléfono
          </span>
          <input
            value={Nro_telefono}
            onChange={(e) => setNro_telefono(e.target.value)}
            type="number"
            aria-label="Nro. de teléfono"
            className="form-control imput_form_control"
            required
          ></input>
        </div>
        <div className="input-group mt-3">
          <label
            className="input-group-text imput_group_text"
            htmlFor="inputGroupSelect01"
          >
            Tipo de membresía
          </label>
          <select
            className="form-select imput_form_control"
            id="inputGroupSelect01"
            onChange={handlerTipoMembresia}
            required
          >
            <option value="Común">Común</option>
            <option value="Preferencial">Preferencial</option>
          </select>
        </div>
        {handlerTipoMembresia}
        <div className="input-group mt-3">
          <label
            className="input-group-text imput_group_text"
            htmlFor="inputGroupSelect02"
          >
            Turno asignado
          </label>
          <select
            disabled={Tipo_membresia !== "Preferencial"}
            value={Turno_asignado}
            className="form-select imput_form_control"
            id="inputGroupSelect02"
            onChange={(e) => setTurno_asignado(e.target.value)}
          >
            <option value={null}>Turno seleccionado: {Turno_asignado}hs</option>
            {horariosDisponibles.map((element, index) => (
              <option className="option_value" key={index} value={element}>
                {element}hs
              </option>
            ))};
          </select>
        </div>
        <div className="input-group mt-3">
          <label
            className="input-group-text imput_group_text"
            htmlFor="inputGroupSelect03"
          >
            Estado de membresía
          </label>
          <select
            className="form-select imput_form_control"
            id="inputGroupSelect03"
            onChange={handlerSelectMembresia}
            required
          >
            <option value="Al día">Al día</option>
            <option value="Atrasada">Atrasada</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success mt-3 boton_guardar">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CompCreateStudent;
