import React from 'react'

const Jumbotron = () => {
    return (
        <div className="h-100 p-5 bg-light border rounded-3 text-start mt-5">
            <h1 className="display-2">Bienvenido a Japón!</h1>
            <p className="lead">En esta sección presentamos algunos de los lugares turísticos con más encanto de todo Japón. Figuran, entre ellos,
                espacios que han sido declarados Patrimonio de la Humanidad, como Hiraizumi, o que simbolizan el Japón más moderno, como el barrio
                tokiota de Akihabara, conocido por albergar multitud de tiendas de electrónica y electrodomésticos.</p>
            <p className="lead">
                <a className="btn btn-danger btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    )
}

export default Jumbotron