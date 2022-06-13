import db from "../database/db.js";

import { DataTypes } from "sequelize";

const AppModel = db.define(
  "alumno",
  {
    Nombre: { type: DataTypes.STRING },
    Apellido: { type: DataTypes.STRING },
    DNI: { type: DataTypes.STRING },
    Fecha_nacimiento: { type: DataTypes.DATE },
    Nro_telefono: { type: DataTypes.STRING },
    Tipo_membresia: { type: DataTypes.STRING },
    Turno_asignado: { type: DataTypes.STRING },
    Estado_membresia: { type: DataTypes.STRING },
  },
  { freezeTableName: true, timestamps: false }
);

export default AppModel;
