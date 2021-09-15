
function Saludo(prop){
    console.log(typeof prop, prop)
    const {persona, otro} = prop

    console.log('Este es el objeto prop que esta recibiendo mi componente SAludo', prop.persona, otro)
    return (
        <div>
            {
                (persona && persona.edad > 18) ? 
                    <p>Hola, soy {persona.nombre}</p>
                :
                    <p>NOT Allowed</p> 
            }
        </div>
    )
}

const Saludo2 = ({ persona, otro }) =>{
    
    console.log('Este es el objeto prop que esta recibiendo mi componente SAludo', persona, otro)
    return (
        <div>
            {
                (persona && persona.edad > 18) ? 
                    <p>Hola, sigo siendo el mismo componente</p>
                :
                    <p>NOT Allowed</p> 
            }
        </div>
    )
}

export default Saludo