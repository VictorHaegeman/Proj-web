document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const typeDemande = document.getElementById("type-demande");
        const message = document.getElementById("message");

        if (!nom.value.trim() || !prenom.value.trim() || !email.value.trim() || !typeDemande.value || !message.value.trim()) {
            feedback.textContent = "Merci de remplir tous les champs obligatoires.";
            feedback.classList.remove("success");
            feedback.classList.add("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            feedback.textContent = "Merci de saisir une adresse e-mail valide.";
            feedback.classList.remove("success");
            feedback.classList.add("error");
            return;
        }

        feedback.textContent = "Votre message a bien été envoyé (simulation).";
        feedback.classList.remove("error");
        feedback.classList.add("success");

        form.reset();
    });
});


