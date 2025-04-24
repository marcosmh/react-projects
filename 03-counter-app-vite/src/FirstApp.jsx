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
            {/* <h1>{ title }</h1> */}
            <div data-testid="test-title">{ title }</div>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    //title : 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Markcode Developer'
}