

setInterval(() => {
    const element = document.querySelector('.clock');
    const sound = document.querySelector('.audio');
    const time = new Date();
    const options = {
    timeZone: 'Asia/Kolkata',
    hour:'2-digit',  
    minute: '2-digit',
    second: '2-digit',
}
element.textContent = time.toLocaleTimeString('en-US', options);
sound.play();
}, 1000);