export function sendMessage(username: string, message: string, addMessage: (msg: { username: string; text: string }) => void): void {
    if (username.trim() === "" || message.trim() === "") return;

    addMessage({ username, text: message }); // Aggiunge il messaggio alla lista
    console.log("Send by: ", username, ":", message);
}