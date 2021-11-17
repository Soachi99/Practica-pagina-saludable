function Calculoimc() {
    let contenido = document.querySelector('#calculo');
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;

    if (!estatura || !peso || estatura == 0 || peso == 0) {
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Oops...',
            text: 'No llenaste todos los campos necesarios o escribiste datos invalidos.',
            footer: 'Vuelve a intentarlo, llenando correctamente los datos en el formulario.'
        })
    }
    else {
        var IMC = peso / (estatura ^ 2);
        IMC = IMC.toFixed(2);
        if (IMC < 18.5) {
            contenido.innerHTML = `
                <h1 class="text-center mt-4">Calculadora de IMC</h1>
                <h2 class="text-center mt-3">Tu IMC es de ${IMC} </h2>
                <h3 class="text-center mt-2">Estas dentro del rango de
                peso mas bajo de lo normal o insuficiencia ponderal, 
                te invitamos a que leas las recomendaciones para Peso Bajo dandole click al botón </h3>
                <button class="boton btn btn-outline-dark mb-4 mt-4 d-block mx-auto fw-bold"
                onclick="location.href='/recomendaciones.html'">Recomendaciones</a>
            `;
        }
        if (IMC >= 18.5 && IMC < 24.9) {
            contenido.innerHTML = `
                <h1 class="text-center mt-4">Calculadora de IMC</h1>
                <h2 class="text-center mt-3">Tu IMC es de ${IMC} </h2>
                <h3 class="text-center mt-2">Estas dentro del rango de
                peso normal, te invitamos igualmente a que leas las recomendaciones para Peso Normal dandole click al botón </h3>
                <button class="boton btn btn-outline-dark mb-4 mt-4 d-block mx-auto fw-bold"
                onclick="location.href='/recomendaciones.html'">Recomendaciones</a>
            `;
        }
        if (IMC >= 25.0 && IMC < 29.9) {
            contenido.innerHTML = `
                <h1 class="text-center mt-4">Calculadora de IMC</h1>
                <h2 class="text-center mt-3">Tu IMC es de ${IMC} </h2>
                <h3 class="text-center mt-2">Estas dentro del rango de
                sobrepeso - Preobesidad, te invitamos a que leas las recomendaciones para bajar de peso dandole click al botón </h3>
                <button class="boton btn btn-outline-dark mb-4 mt-4 d-block mx-auto fw-bold"
                onclick="location.href='/recomendaciones.html'">Recomendaciones</a>
            `;
        }
        if (IMC >= 30 && IMC < 40) {
            contenido.innerHTML = `
                <h1 class="text-center mt-4">Calculadora de IMC</h1>
                <h2 class="text-center mt-3">Tu IMC es de ${IMC} </h2>
                <h3 class="text-center mt-2">Estas dentro del rango de
                Obesidad, te invitamos a que vayas pronto a un nutrionista a que revises tu salud y a que leas las
                recomendaciones para bajar de peso dandole click al botón </h3>
                <button class="boton btn btn-outline-dark mb-4 mt-4 d-block mx-auto fw-bold"
                onclick="location.href='/recomendaciones.html'">Recomendaciones</a>
            `;
        }
        if (IMC < 0 || IMC > 40)
            contenido.innerHTML = `
            <h1 class="text-center mt-4">Calculadora de IMC</h1>            
            <h3 class="text-center mt-2">Digitaste datos fuera de nuestro rango de calculo, te invitamos a volverlos a digitar recargando la pagina o haciendo click a continuación </h3>
            <button class="boton btn btn-outline-dark mb-4 mt-4 d-block mx-auto fw-bold"
            onclick="location.href='/calculo.html'">Vuelve a intentarlo</a>
            `;
    }
}