import { useEffect, useState } from "react";
import Submit from "./Submit";

export default function Form(props) {
    const { pacientes, setPacientes, edicion, setEdicion, idEdicion, setIdEdicion } = props;

    function validarDatos(e) {
        e.preventDefault();
        
        const informacion = Object.fromEntries(new FormData(e.target))
        const valores = Object.values(informacion)
        const todosCompletos = valores.every(input => input !== "")

        if(!todosCompletos){
            formularioIncompleto()
            return;
        }

        if(Object.entries(edicion).length > 0){
            editarPacientes(informacion)
            return
        }

        informacion.key = generarId()
        nuevoPaciente(informacion)

    }

    function nuevoPaciente(datos) {
        setPacientes([datos, ...pacientes])
        document.querySelector('form').reset()
    }

    const generarId = () => Date.now().toString(36) + Math.random().toString(36)

    function formularioIncompleto() {
        const mensajeError = document.querySelector('.mensaje-error')
        mensajeError.style.maxHeight = `${mensajeError.scrollHeight}px`

        setTimeout(() => mensajeError.style.maxHeight = `0px`, 1500);
    }

    function editarPacientes(informacion){
        setEdicion({})

        informacion.key = idEdicion;
        document.querySelector('form').reset()
        const elementoEditadoOriginal = pacientes.filter(paciente => paciente.key === idEdicion)[0]
        const indiceElementoEditado = pacientes.indexOf(elementoEditadoOriginal)
        const arregloDeReserva = [...pacientes]
        arregloDeReserva[indiceElementoEditado] = informacion

        setPacientes(arregloDeReserva)
        setIdEdicion(null)
    }

    useEffect(() => {
        if(Object.entries(edicion).length > 0){
            const valores = Object.values(edicion)
            const inputs = [nombre, propietario, email, alta, sintomas ]
            
            inputs.forEach((input,i) => {
                input.value = valores[i]
            })
            
        }
    }, [edicion])



    return (

        <div className="md:w-1/2 ">
            
            <h2 className="text-center font-black capitalize text-2xl">Seguimiento pacientes</h2>
            <p className="text-center font-semibold text-sm my-4">Añade Pacientes y
                <span className="text-indigo-700 "> Administralos</span>
            </p>

            <form action="#" method="#" className="bg-gray-100 py-8 px-8 rounded flex flex-col gap-4 shadow-2xl" onSubmit={e => validarDatos(e)}>
                <fieldset>
                    <label htmlFor="nombre" className="font-medium text-sm text-gray-600">Nombre Mascota</label>
                    <input type="text" id="nombre" name="nombre" />
                </fieldset>
                <fieldset>
                    <label htmlFor="propietario" className="font-medium text-sm text-gray-600 ">Nombre Propietario</label>
                    <input type="text" id="propietario" name="propietario" />
                </fieldset>
                <fieldset>
                    <label htmlFor="email" className="font-medium text-sm text-gray-600">Email</label>
                    <input type="text" id="email" name="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="alta" className="font-medium text-sm text-gray-600">Alta</label>
                    <input type="date" id="alta" name="alta" />
                </fieldset>
                <fieldset>
                    <label htmlFor="sintomas" className="font-medium text-sm text-gray-600">Sintomas</label>
                    <textarea id="sintomas" className="h-16 leading-4" name="sintomas"></textarea>
                </fieldset>
                <fieldset>
                    <Submit edicion={edicion} setEdicion={setEdicion}/>
                </fieldset>
                <div className="mensaje-error text-red-600 text-center text-sm max-h-0 overflow-hidden transition-all duration-200">
                    ¡Todos los campos deben estar llenos!
                </div>
            </form>


        </div>
    )
}