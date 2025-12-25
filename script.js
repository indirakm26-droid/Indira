document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.textContent = "Please fill in all fields.";
    } else {
        error.textContent = "Form submitted successfully!";
        error.style.color = "green";
    }
});

// Highlight section on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});