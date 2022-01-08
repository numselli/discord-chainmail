window.addEventListener("load",  async() => {
    getIP()
});

const getIP = async () => {
    try {
        const rawIP = await fetch("https://api.ipify.org/?format=json")
        const ipJSON = await rawIP.json();
        document.getElementById('ip').innerHTML=ipJSON.ip
    } catch (error) {
        document.getElementById('ip').innerHTML="error getting ip"
    }
}

document.getElementById('share-btn').addEventListener('click', () => {
    document.getElementById('share-options').classList.toggle('active');
})
document.getElementById('copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText('https://discord-chainmail.numselli.xyz');
})