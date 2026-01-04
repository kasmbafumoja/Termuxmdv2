async function getCode() {
    const num = document.getElementById('phone').value;
    const display = document.getElementById('pair-code');
    
    if(!num) return alert("Entrez un numéro !");
    
    display.innerText = "WAIT...";
    try {
        const response = await fetch('/pair?number=' + num);
        const data = await response.json();
        display.innerText = data.code || data.error;
    } catch (err) {
        display.innerText = "OFFLINE";
    }
}
