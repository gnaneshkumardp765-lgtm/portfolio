/*==================== EMAIL JS ====================*/

(function () {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

/*==================== TYPING EFFECT ====================*/

const roles = [
    "Python Full Stack Developer",
    "Django Developer",
    "Machine Learning Enthusiast",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing-text");

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

/*==================== ACTIVE NAV ====================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*==================== SMOOTH SCROLL ====================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

/*==================== CONTACT FORM ====================*/

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const params = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        params
    )

    .then(function () {

        alert("✅ Message sent successfully!");

        form.reset();

    })

    .catch(function (error) {

        alert("❌ Failed to send message.");

        console.log(error);

    });

});

/*==================== SCROLL ANIMATION ====================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

    observer.observe(section);

});

/*==================== SKILL BAR ANIMATION ====================*/

const skills = document.querySelectorAll(".progress span");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.style.width;

            entry.target.style.width = "0";

            setTimeout(() => {

                entry.target.style.width = width;

            }, 200);

        }

    });

});

skills.forEach(skill => {

    skillObserver.observe(skill);

});

/*==================== BACK TO TOP ====================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#7c3aed;
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 5px 20px rgba(0,0,0,.4);
z-index:1000;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
