import Editar from "./Editar"
import Eliminar from "./Eliminar"



export default function Paciente({paciente, id, setEdicion, pacientes, setIdEdicion, setPacientes}) {
    const {nombre, propietario, email, alta, sintomas} = paciente

    return (

        <div className="font-medium bg-gray-100 py-8 px-8 rounded gap-4 text-sm shadow-lg flex flex-col paciente" >
            <div className="flex gap-1">
                Nombre: 
                <span className="font-normal capitalize"> {nombre}</span>
            </div>
            <div className="flex gap-1">
                Propietario:
                <span className="font-normal capitalize"> {propietario}</span>
            </div>
            <div className="flex gap-1">
                Email:
                <span className="font-normal capitalize">{email}</span>
            </div>
            <div className="flex gap-1">
                Fecha alta:
                <span className="font-normal capitalize"> {alta}</span>
            </div>
            <div className="flex gap-1">
                Sintomas:
                <span className="font-normal capitalize"> {sintomas}</span>
            </div>
            <div className="flex gap-1 justify-between">
                <Editar id={id} setEdicion={setEdicion} pacientes={pacientes} setIdEdicion={setIdEdicion}/>
                <Eliminar id={id} pacientes={pacientes} setPacientes={setPacientes}/>
            </div>
        </div>
    )
}