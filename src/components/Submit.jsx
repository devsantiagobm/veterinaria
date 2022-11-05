export default function Submit({edicion}){

    const cambiarValue = () => Object.entries(edicion).length > 0 ? "Editar paciente" : "Nuevo paciente"
    const clases = "text-sm bg-indigo-700 hover:bg-indigo-600 cursor-pointer ease transition text-gray-100 duration-200 py-2" 

    return (
        <input type="submit" value={cambiarValue()} className={clases}/>
    )
}