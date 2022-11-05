export default function Editar({ id, setEdicion, pacientes, setIdEdicion }){
    const clases = "bg-indigo-700 text-gray-100 py-1.5 px-8 rounded-sm hover:bg-indigo-600 transition duration-200 font-normal text-sm";

    function editarPaciente(){  
        const pacienteAEditar = pacientes.filter( paciente => paciente.key === id)[0]
        setEdicion(pacienteAEditar)
        setIdEdicion(pacienteAEditar.key)   
    }
    
    return (
        <button className={clases} onClick={ () => editarPaciente()}>
            Editar
        </button>
    )
}