//togle icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        } 
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icn
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

//Email Settings

const form = document.querySelector("form");
const fullName= document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "c63f35e8-b886-4a3c-9c62-27e0a38b1b5f",
        To : 'karakusataberkay@gmail.com',
        From : "karakusataberkay@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Mailiniz Başarıyla Yollandı!",
                    text: "En kısa zamanda dönüş yapacağım!",
                    icon: "success"
                  });
            }
        }
    );
};

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});


document.getElementById('downloadCv').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (confirm('CV dosyasını indirmek ister misiniz?')) {
        window.location.href = 'ataBerkayKarakusCV.pdf'; 
    }
});

document.getElementById('downloadCv2').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (confirm('CV dosyasını indirmek ister misiniz?')) {
        window.location.href = 'ataBerkayKarakusCV.pdf'; 
    }
});