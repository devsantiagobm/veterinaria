import { useEffect } from "react"

export default function AvisoEdicion({ edicion }) {

    useEffect( () => {
        const elemento = document.querySelector('.edicion')
        Object.values( edicion).length > 0 ?
        elemento.classList.remove('opacity-0'):
        elemento.classList.add('opacity-0')
        
    }, [edicion])


    return (
        <>
            <div className={"flex gap-4 bg-indigo-700 fixed bottom-6 left-6 edicion opacity-0"}>
                <picture className="p-4">
                    {/* <img src={icon} alt="" width={24} /> */}
                </picture>
            </div>

        </>
    )
}