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




document.getElementById('downloadCv').addEventListener('click', function (event) {
    event.preventDefault();
    if (confirm('CV dosyasını indirmek ister misiniz?')) {
        window.location.href = 'ataBerkayKarakusCV.pdf';
    }
});

document.getElementById('downloadCv2').addEventListener('click', function (event) {
    event.preventDefault();
    if (confirm('CV dosyasını indirmek ister misiniz?')) {
        window.location.href = 'ataBerkayKarakusCV.pdf';
    }
});


// interests.html sayfasında animasyonları otomatik olarak çalıştırma mantığı
// Sayfa yüklendiğinde veya kaydırma başladığında tüm '.animate.scroll' öğelerini tetikle.

function activateScrollAnimations() {
    // Sadece interests.html sayfasındaysak devam et (URL kontrolü)
    if (window.location.pathname.endsWith('interests.html') || window.location.hash === '#interests-page') {

        // Bu sayfadaki tüm animasyonlu elementleri seç
        const animatedElements = document.querySelectorAll('.animate.scroll');

        animatedElements.forEach(element => {
            // Elementin görünür olup olmadığını kontrol etmeden direkt tetikle
            // Ya da basit bir gecikme ile tetikle

            // Eğer element zaten görünür alana yakınsa (veya bu sayfadaysak varsayarak)
            // 'show-animate' sınıfını ekleyerek efekti çalıştır.

            element.classList.add('show-animate');
        });

        // Ayrıca, ana kapsayıcıya da animasyonu ekleyelim (mevcut stilinizde varsa)
        const interestsPage = document.getElementById('interests-page');
        if (interestsPage) {
            interestsPage.classList.add('show-animate');
        }
    }
}

// 1. Sayfa yüklendiğinde bir kez çalıştır
window.addEventListener('load', activateScrollAnimations);


// ====================================================================
// 2. LAST.FM ENTEGRASYONU (interests.html için)
// ====================================================================

// Lütfen kendi Last.fm kullanıcı adınızı buraya yazın
const LASTFM_USERNAME = 'myrolith'; 

function fetchLastFmTrack() {
    // Netlify Fonksiyonu'nu çağırın. Bu, API anahtarınızı güvenle gizler.
    const FUNCTION_URL = '/.netlify/functions/lastfm'; 
    const activityDiv = document.getElementById('spotify-activity');

    if (!activityDiv) return;

    fetch(FUNCTION_URL)
        .then(response => {
            // Başarılı olmayan yanıtları (404, 500) kontrol et
            if (!response.ok) {
                throw new Error(`Netlify Function hatası: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tracks = data.recenttracks.track;
            
            if (!tracks || tracks.length === 0 || !tracks[0]) {
                activityDiv.innerHTML = "Şu anda dinlemiyor.";
                return;
            }

            const track = tracks[0];
            const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
            
            // Eğer Last.fm'de resim yoksa, boş bir resim URL'si kullan (Hata önleme)
            const albumArt = track.image.find(img => img.size === 'large')['#text'] || 'images/default_album.png'; 
            const statusText = isNowPlaying ? "Şu an Dinliyor" : "Son Dinlenen";

            activityDiv.innerHTML = `
                <div class="song-info">
                    <img src="${albumArt}" alt="${track.name} Albüm Kapağı">
                    <div>
                        <p style="font-size: 1.4rem; margin-bottom: 5px; color: var(--main-color);">${statusText}</p>
                        <p class="song-title">${track.name}</p>
                        <p style="opacity: 0.7;">${track.artist['#text']}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error("Veri çekilemedi:", error);
            activityDiv.innerHTML = "Veri çekilirken hata oluştu. Ayarları kontrol edin.";
        });
}

// Last.fm aktivitesini interests.html sayfasında başlat ve otomatik güncelle
window.addEventListener('load', () => {
    if (window.location.pathname.endsWith('interests.html')) {
        fetchLastFmTrack();
        // Her 15 saniyede bir güncellemeyi sağlar (dinamiklik)
        setInterval(fetchLastFmTrack, 15000); 
    }
});
