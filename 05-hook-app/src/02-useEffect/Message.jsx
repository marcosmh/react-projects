import { useEffect, useState } from "react"


export const Message = () => {

    const [cords, setCords] = useState({x: 0, y: 0})

    const onMouseMove = ({ x, y} ) => {
        //const cords = { x, y };
        setCords( { x, y} );
    }

    useEffect(() => {
        window.addEventListener( 'mousemove', onMouseMove);
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove);
      }
    }, [])

    
    return (
        <>
            <h3>El usuario ya existe.</h3>
            {
                JSON.stringify( cords )
            }
        </>
    );
}
