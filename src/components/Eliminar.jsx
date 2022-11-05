export default function Eliminar({ id, pacientes, setPacientes }){
    const clases = "bg-red-700 text-gray-100 py-1.5 px-8 rounded-sm hover:bg-red-600 transition duration-200 font-normal text-sm"

    function eliminarPaciente(){
        const pacientesFiltrados = pacientes.filter(paciente => paciente.key !== id)
        setPacientes(pacientesFiltrados)
    }

    return (
        <button id="eliminar" className={clases} onClick={ eliminarPaciente}>Eliminar</button>
    )
}