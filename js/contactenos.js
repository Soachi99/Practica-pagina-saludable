function contacto(){
    var nombre = document.getElementById("Nombre").value;
    var email = document.getElementById("email").value;
    var cel = document.getElementById("Telefono").value;
    var asunto = document.getElementById("Asunto").value;
    var mensaje = document.getElementById("Mensaje").value;
    var valoresAceptados = /^[0-9]+$/;

    let contenido = document.querySelector('#contacto');


    if(!nombre || !email || !cel || !asunto || !mensaje)
    {
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Oops...',
            text: 'No llenaste todos los campos necesarios o escribiste datos invalidos.',
            footer: 'Vuelve a intentarlo, llenando correctamente los datos en el formulario.'
        })
    }
    else{
        if(!cel.match(valoresAceptados))
        {
            Swal.fire({
                position: 'bottom-end',
                icon: 'error',
                title: 'Oops...',
                text: 'El numero de telefono introducido es erroneo.',
                footer: 'Vuelve a intentarlo, llenando correctamente los datos en el formulario.'
            })
        }
        else{
            contenido.innerHTML = `
            <h1 class="text-center mt-4">Información recibida</h1>        
            <h4 class="text-center mt-2">Señor/a ${nombre}, confirmamos su mensaje </h4>
            <p class="text-center mt-3">
             Email: ${email} <br>
             Celular: ${cel} <br>
             Asunto: ${asunto} <br>
             Mensaje: ${mensaje} <br>
             </p>
             <h4 class="text-center mt-2"> Estaremos contactandonos con usted proximamente </h4>
            <button class="boton btn btn-outline-dark mb-4 mt-4 d-block mx-auto fw-bold"
            onclick="location.href='/index.html'">Confirmar</a>
        `;
    
        }
    }
    
}