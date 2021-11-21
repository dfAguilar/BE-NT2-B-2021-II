/**
 * {
 *  nombre,
 *  telefono,
 *  etc
 * }
 */

 const CANTIDAD_DATOS = 5

 const nombres =['Dario', 'Emiliano', 'Noelia', 'Gustavo', 'Pedro']
 const apellidos = ['Garcia', 'Figuera', 'Loughry', 'Maenhout', 'Nielsen']
 
 const random = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min
 
 const generarNombre = () => `${nombres[random(nombres.length -1)]} ${apellidos[random(apellidos.length -1)]}`
 // Emiliano Garcia 


 const generarTelefono = () => `${random(99, 10)}-${random(999, 100)}-${random(999, 100)}`
 // 55-555-555
 
 
 const crearContacto = () => {
     return {
         nombre: generarNombre(),
         telefono: generarTelefono()
     }
 }
 
 const contacts = Array.from({
     length: CANTIDAD_DATOS
 }, crearContacto)
 .map((item, index) => ({...item, id: index})) 
 
 export default contacts