const userEmail = localStorage.getItem("userEmail");

const messageContainer = document.querySelector(".success-message");
console.log(messageContainer);

let emailHTML = `
  A confirmation email has been sent to <b>${userEmail}</b>. Please open it and click the button inside to confirm your subscription.
`;

messageContainer.innerHTML = emailHTML;
