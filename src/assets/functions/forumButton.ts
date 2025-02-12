export function sendMessage(
    username: string, 
    message: string, 
    addMessage: (msg: { username: string; text: string; timestamp: string }) => void
): void {
    if (username.trim() === "" || message.trim() === "") return;

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
        day: "2-digit", month: "2-digit", year: "numeric", 
        hour: "2-digit", minute: "2-digit" 
    };
    const timestamp = now.toLocaleString("it-IT", options); // Formatta data e ora senza secondi

    addMessage({ username, text: message, timestamp }); // Aggiunge il timestamp formattato
}
