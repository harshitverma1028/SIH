function sendMessage() {
  const input = document.getElementById('user-input');
  const msg = input.value;
  if (!msg) return;

  const chatBox = document.getElementById('chat-box');
  
  // User message
  chatBox.innerHTML += `<div class="user-msg">${msg}</div>`;

  // Bot response (simple rules-based)
  let botReply = "I don't understand.";
  if (msg.toLowerCase().includes("hi")) botReply = "Hello! How can I help you?";
  if (msg.toLowerCase().includes("help")) botReply = "Sure! What do you need help with?";

  chatBox.innerHTML += `<div class="bot-msg">${botReply}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
