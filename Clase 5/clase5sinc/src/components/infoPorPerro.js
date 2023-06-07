import perros from '../data/perros.json';

const Perro = () => {
    return (
        <>
        {perros.map(perro=>
            <div>
            <h3>Nombre: {perro.nombre}</h3>
            <ul>
                <li>Edad: {perro.edad}</li>
                <li>Sexo: {perro.sexo}</li>
                <li>Raza: {perro.raza}</li>
                <li>Tamanio: {perro.tamanio}</li>
            </ul>
            </div>
        )
        }
        </>
    )
}
export default Perro;

//`string text ${expression} string text`