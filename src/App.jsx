import { useState, useEffect } from "react";
import ListadoPacientes from "./components/ListadoPacientes";
import Form from "./components/Form";
import Header from "./components/Header";
import AvisoEdicion from "./components/AvisoEdicion";

function App() {
    const obtenerLocalStorage = JSON.parse(localStorage.getItem("pacientes")) || []
    const [pacientes, setPacientes] = useState(obtenerLocalStorage);
    const [edicion, setEdicion] = useState({});
    const [idEdicion, setIdEdicion] = useState(null);

    useEffect( () => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
    }, [pacientes])


    return (
        <div className="py-16 w-full bg-gray-200 min-h-screen">
            <Header />
            <div className="flex my-12 w-5/6 mx-auto gap-4 flex-col md:flex-row md:gap-8">

                <Form
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    edicion={edicion} 
                    setEdicion={setEdicion}
                    idEdicion={idEdicion}
                    setIdEdicion={setIdEdicion}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    setEdicion={setEdicion}
                    setIdEdicion={setIdEdicion}
                />
                

            </div>
            <AvisoEdicion edicion={edicion}/>
        </div>
    )
}

export default App
