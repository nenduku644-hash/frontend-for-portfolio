// ==========================
// EMAILJS INITIALIZATION
// ==========================

emailjs.init({
    publicKey: "LaGYSf6hGbydKOzv-"
});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

const status = document.getElementById("status");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    status.innerHTML = "Sending...";
    status.style.color = "#00ffff";

    // ==========================
    // TEMPLATE PARAMETERS
    // ==========================

    const templateParams = {

        title: "Portfolio Contact",

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        message: document.getElementById("message").value,

        time: new Date().toLocaleString()

    };

    // ==========================
    // SEND EMAIL
    // ==========================

    emailjs.send(

        "service_z6lbsnn",

        "template_kmpg5yc",

        templateParams

    )

    .then(function (response) {

        console.log("SUCCESS!", response);

        status.innerHTML =
            "Message Sent Successfully 🚀";

        status.style.color = "#00ff99";

        contactForm.reset();

    })

    .catch(function (error) {

        console.log("FULL ERROR:", error);

        status.innerHTML =
            "Failed To Send Message";

        status.style.color = "red";

    });

});