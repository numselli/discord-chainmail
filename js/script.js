document.addEventListener("DOMContentLoaded",  async() => {
    getIP()
});

const getIP = async () => {
    try {
        const rawIP = await fetch("https://api.my-ip.io/ip.json")
        const ipJSON = await rawIP.json();
        document.getElementById('ip').innerHTML=ipJSON.ip
    } catch (error) {
        document.getElementById('ip').innerHTML="error getting ip"
    }
}