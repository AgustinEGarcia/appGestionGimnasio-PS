import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, getHorarios } from "../services/api";
import "../App.css";

const URI = "http://localhost:8000/students/";

const CompEditStudent = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [DNI, setDNI] = useState("");
  const [Fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [Nro_telefono, setNro_telefono] = useState("");
  const [Tipo_membresia, setTipo_membresia] = useState("");
  const [Turno_asignado, setTurno_asignado] = useState("");
  const [Estado_membresia, setEstado_membresia] = useState("Al día");

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await api.put("/students/" + id, {
      Nombre: Nombre,
      Apellido: Apellido,
      DNI: DNI.toString(),
      Fecha_nacimiento: Fecha_nacimiento,
      Nro_telefono: Nro_telefono.toString(),
      Tipo_membresia: Tipo_membresia,
      Turno_asignado: Turno_asignado !== "-" ? Turno_asignado : null,
      Estado_membresia: Estado_membresia,
    });
    navigate("/");
  };

  const [horariosDisponibles, sethorariosDisponibles] = useState([]);

  useEffect(() => {
    getStudentByID();
    getHorarios().then((horarios) => {
      sethorariosDisponibles(horarios);
    });
  }, []);

  const getStudentByID = async () => {
    const res = await api.get("/students/" + id);
    setNombre(res.data.Nombre);
    setApellido(res.data.Apellido);
    setDNI(res.data.DNI);
    setFecha_nacimiento(res.data.Fecha_nacimiento);
    setNro_telefono(res.data.Nro_telefono);
    setTipo_membresia(res.data.Tipo_membresia);
    setTurno_asignado(res.data.Turno_asignado);
    setEstado_membresia(res.data.Estado_membresia);
  };

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
    <div className="container">
      <h3 className="cabecera_ingresar_alumno">Editar Alumno</h3>
      <form onSubmit={update}>
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
            value={Tipo_membresia}
            className="form-select imput_form_control"
            id="inputGroupSelect01"
            defaultValue={Tipo_membresia}
            onChange={handlerTipoMembresia}
            required
          >
            <option value="Común">Común</option>
            <option value="Preferencial">Preferencial</option>
          </select>
        </div>
        {horariosDisponibles && (
          <div className="input-group mt-3">
            <label
              className="input-group-text imput_group_text"
              for="inputGroupSelect02"
            >
              Turno asignado
            </label>
            <select
              value={Turno_asignado}
              disabled={Tipo_membresia !== "Preferencial"}
              className="form-select imput_form_control"
              id="inputGroupSelect02"
              onChange={(e) => setTurno_asignado(Number(e.target.value))}
            >
              <option>Turno seleccionado: {Turno_asignado}</option>
              {horariosDisponibles.map((element) => (
                <option className="option_value" value={element}>
                  {element}hs
                </option>
              ))}
              ;
            </select>
          </div>
        )}
        <div className="input-group mt-3">
          <span className="input-group-text imput_group_text">
            Estado membresía
          </span>
          <select
            value={Estado_membresia}
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

export default CompEditStudent;
