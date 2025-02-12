export function sendMessage(
    username: string, 
    message: string, 
    addMessage: (msg: { username: string; text: string; timestamp: string }) => void
): void {
    if (username.trim() === "" || message.trim() === "") return;

<<<<<<< HEAD
    addMessage({ username, text: message }); // Aggiunge il messaggio alla lista
    console.log("Send by: ", username, ":", message);
}
=======
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
        day: "2-digit", month: "2-digit", year: "numeric", 
        hour: "2-digit", minute: "2-digit" 
    };
    const timestamp = now.toLocaleString("it-IT", options); // Formatta data e ora senza secondi

    addMessage({ username, text: message, timestamp }); // Aggiunge il timestamp formattato
}
>>>>>>> c2c573110bb3cfae06077b8be9680e32a0c6307c
