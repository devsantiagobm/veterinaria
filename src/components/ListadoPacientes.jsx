import { useEffect } from "react";
import Paciente from "./Paciente";

export default function ListadoPacientes(props) {
    const { pacientes, setEdicion, setIdEdicion, setPacientes } = props;

    useEffect(() => {
        const PACIENTES = document.querySelector('#pacientes')

        PACIENTES.classList.add('show-in')

        setTimeout(() => {
            PACIENTES.classList.remove('show-in')
        }, 800);
    }, [pacientes])


    return (
        <div className="md:w-1/2 ">
            <h2 className="text-center font-black capitalize text-2xl">
                { Boolean(pacientes.length) ? "Listado de pacientes" : "No hay pacientes" }
            </h2>
            <p className="text-center font-semibold text-sm my-4">Administra tus
                <span className="text-indigo-700"> Pacientes y citas</span>
            </p>

            <div className="flex flex-col gap-6 show-in" id="pacientes">

                {
                    pacientes.map(paciente => {
                        return <Paciente
                            id={paciente.key}
                            key={paciente.key}
                            paciente={paciente}
                            setEdicion={setEdicion}
                            pacientes={pacientes}
                            setPacientes={setPacientes}
                            setIdEdicion={setIdEdicion}
                        />
                    })

                }
            </div>


        </div >
    );
}