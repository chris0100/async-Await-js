
async function obtenerClientes() {
    const clientes = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(`clientes descargados...`);
        },2000)
    });

    //error o no..
    const error = false;
    if (!error){
        return await clientes;
    }
    else{
        await Promise.reject(`Hubo un error...`);
    }
} //await obtenerClientes()


obtenerClientes()
.then(res => console.log(res))
.catch(error => console.log(error));



async function leerTodos() {

    //espera que se ejecute el acceso al link
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //Procede cuando la respuesta se ejecute
    return await respuesta.json();
}

leerTodos()
    .then(usuarios => console.log(usuarios));
