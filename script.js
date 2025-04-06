/* --- script.js --- */

document.addEventListener("DOMContentLoaded", () => {
  // Loader
  setTimeout(() => document.getElementById("loader-wrapper").style.display = "none", 1000);

  // Testimonial Carousel
  let index = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  setInterval(() => {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[index].classList.add("active");
    index = (index + 1) % testimonials.length;
  }, 4000);

  // Chatbot
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const faq = {
    "what are your working hours": "We are open Monday to Saturday, 8 AM to 5 PM.",
    "do you offer teeth whitening": "Yes, we offer professional teeth whitening services.",
    "how do i make an appointment": "You can call or WhatsApp us at 0786062616 to book your appointment.",
    "where are you located": "We have branches in Durban, Ladysmith, and Ficksburg.",
    "do you accept medical aid": "Yes, we accept most major medical aid schemes."
  };

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userQuestion = input.value.toLowerCase().trim();
      let response = "Sorry, I didn't understand that. Please try again.";

      for (const question in faq) {
        if (userQuestion.includes(question)) {
          response = faq[question];
          break;
        }
      }

      chatbox.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
      chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
      input.value = "";
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  });
});

