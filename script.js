let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function visitESokoli() {
    window.location.href = 'https://www.e-sokoli.com/'
}

function visitAAB() {
    window.location.href = 'https://aab-edu.net/'
}

function emailSender(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:benet.nezaj@universitetiaab.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + fullName + "\nPhone Number: " + phoneNumber)}`;

    console.log('Mailto Link:', mailtoLink);

    window.location.href = mailtoLink;
}

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

menuIcon.onmouseover = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}