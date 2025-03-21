//import { Fragment } from 'react'
import PropTypes from 'prop-types';

const newMessage = 'Markcode';
const newArray = {
    message: 'Master Jedi ',
    title: 'Mark'
}

function getSaludo() {
    return 'Hola Marcos!!';
}


export const FirstApp = ( { title, subTitle, name }  ) => {
    return (
        <>
            <h1>{ newMessage }</h1>
            <h2>Ingeniero</h2>
            <h3>{  1 +  2 }</h3>
            <code>{ JSON.stringify( newArray) }</code>
            <h3>{ getSaludo() }</h3>
            <p>------------------</p>
            <h3>{ title }</h3>
            <h3>{ subTitle }</h3>
            <h3>{ name }</h3>
          

        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title : 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Markcode Developer'
}