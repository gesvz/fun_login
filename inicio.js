const video = document.createElement('video');
video.src = './assets/video.mp4';
//buffer video at the start
video.preload = 'auto';

/*ojito*/ 
function ojito(icon) {
    const passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        icon.textContent = '🙈';
    }
}
/*ojito*/ 

/*simulador */ 
function simuladorLogin() {
    const loginForm = document.getElementById('login-form');
    const loaderContainer = document.getElementById('loader-container');
    const clickSound = document.getElementById('click-sound');

    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');
    //const loginText = document.getElementById('success');

    const failLogin = document.getElementById('fail-login');

    if(userInput.value !== ""){

        //clear inputs
        userInput.value = "";
        passwordInput.value = "";
        // Reproducir el sonido al hacer clic en el botón
        clickSound.play();

        loginForm.style.display = 'none';
        loaderContainer.style.display = 'flex';
        loaderContainer.style.flexDirection = 'column';
        loaderContainer.style.alignItems = 'center';

        //reset failLogin styles
        userInput.style.border = '0px';
        passwordInput.style.border = '0px';
        failLogin.style.display = 'none';

        const ojito = document.getElementsByClassName("password-ojito");
        ojito.textContent = '🙈';

        setTimeout(() => {
            loaderContainer.style.display = 'none';
            loginForm.classList.add('show');
            playVideo();
        }, 12000);

    } else {
        userInput.style.border = '2px solid red';
        passwordInput.style.border = '2px solid red';

        failLogin.style.display = 'block';
    }
}

/*simulador */ 

/*video */ 
function playVideo() {

    video.style.display = 'block';
    video.play();
    video.addEventListener('ended', function () {
        const botonRegresar = document.getElementById('return-button');        
        botonRegresar.style.display = 'block'; // Mostrar el botón cuando termine el video
    });
    document.body.appendChild(video);
}


/*video */ 

/*Regresar al formulario*/ 

function regresarAlFormulario() {    
    
    //or simply reload
    //window.location.reload();
    
    const video = document.querySelector('video');
    const returnButton = document.getElementById('return-button');
    const loginForm = document.getElementById('login-form');

    // Pausa y oculta el video
    video.pause();
    video.style.display = 'none';

    // Oculta el botón de regreso
    returnButton.style.display = 'none';

    // Muestra el formulario de inicio de sesión
    loginForm.style.display = 'block';
    
}
/*Regresar al formulario*/

/*efecto de sangre*/
