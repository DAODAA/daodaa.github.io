// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
  // Animation de défilement doux pour les liens de navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

  // Validation du formulaire de contact
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      // Récupérer les valeurs des champs
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation simple
      let isValid = true;
      let errorMessage = "";

      if (name === "") {
        isValid = false;
        errorMessage += "Le prénom est requis.\n";
      }

      if (email === "") {
        isValid = false;
        errorMessage += "L'email est requis.\n";
      } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += "L'email n'est pas valide.\n";
      }

      if (message === "") {
        isValid = false;
        errorMessage += "Le message est requis.\n";
      }

      // Afficher le message d'erreur ou soumettre le formulaire
      if (!isValid) {
        alert(errorMessage);
      } else {
        // Simuler l'envoi du formulaire
        alert(`Merci ${name} ! Votre message a été envoyé avec succès.`);
        contactForm.reset();
      }
    });
  }

  // Fonction pour valider l'email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Animation des cartes de projet
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", function() {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
  });
});
