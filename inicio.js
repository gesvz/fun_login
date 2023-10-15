/*ojito*/ 
function ojito(icon) {
    const passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        icon.textContent = '👁️';
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
    

    if(userInput.value === 'u' && passwordInput.value === 'pw' ){
    
    // Reproducir el sonido al hacer clic en el botón
    clickSound.play();

    loginForm.style.display = 'none';
    loaderContainer.style.display = 'block';

    setTimeout(() => {
        loaderContainer.style.display = 'none';
        loginForm.classList.add('show');
        playVideo();
    }, 12000);

    } else {
        userInput.style.border = '2px solid red';
        passwordInput.style.border = '2px solid red';

        const failLogin = document.getElementById('fail-login');
        failLogin.style.display = 'block';
    }
}

/*simulador */ 

/*video */ 
function playVideo() {
    const video = document.createElement('video');
    video.src = './assets/video.mp4'; 
    video.autoplay = true;
    video.loop = true;
    document.body.appendChild(video);
}