export function sendMessage(
    username: string, 
    message: string, 
    addMessage: (msg: { username: string; text: string; timestamp: string }) => void ): void {
        if (username.trim() === "" || message.trim() === "") return;

<<<<<<< HEAD
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { 
            day: "2-digit", month: "2-digit", year: "numeric", 
            hour: "2-digit", minute: "2-digit" 
        };
        const timestamp = now.toLocaleString("it-IT", options); 

        addMessage({ username, text: message, timestamp }); 
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
>>>>>>> 2fe312d5fd1ac57eee194bc203724db40c1b24fd
