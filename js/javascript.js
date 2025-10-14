// ====================================================================
// 1. ANASAYFA FONKSİYONLARI (Toggle, Scroll)
// ====================================================================

// Toggle Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) { // YALNIZCA element varsa çalıştır
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}

// Scroll Mantığı (Header Sticky ve Nav Link Aktifliği)
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
                // document.querySelector'ın null dönme ihtimaline karşı kontrol ekliyoruz
                const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });

            sec.classList.add('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon (Eğer menüIcon varsa)
    if (menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
    
    // footer animasyonu (index.html için)
    let footer = document.querySelector('footer');
    if(footer) {
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    }
}

// ====================================================================
// 2. CV İndirme Butonları (YALNIZCA Varsa Çalıştır)
// ====================================================================

const downloadCvBtn = document.getElementById('downloadCv');
if (downloadCvBtn) { // downloadCv elementi varsa
    downloadCvBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (confirm('CV dosyasını indirmek ister misiniz?')) {
            window.location.href = 'AtaBerkayKarakusCV.pdf';
        }
    });
}

const downloadCv2Btn = document.getElementById('downloadCv2');
if (downloadCv2Btn) { // downloadCv2 elementi varsa
    downloadCv2Btn.addEventListener('click', function (event) {
        event.preventDefault();
        if (confirm('CV dosyasını indirmek ister misiniz?')) {
            window.location.href = 'AtaBerkayKarakusCV.pdf';
        }
    });
}

// ====================================================================
// 3. LAST.FM ENTEGRASYONU (interests.html için)
// ====================================================================

// Lütfen kendi Last.fm kullanıcı adınızı buraya yazın
const LASTFM_USERNAME = 'myrolith'; 

function fetchLastFmTrack() {
    const FUNCTION_URL = '/.netlify/functions/lastfm'; 
    const activityDiv = document.getElementById('spotify-activity');

    if (!activityDiv) return;

    fetch(FUNCTION_URL)
        .then(response => {
            if (!response.ok) {
                // Hata durumunda Netlify Function'ın durumunu konsola yazdır
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
            activityDiv.innerHTML = "Veri çekilirken hata oluştu. Netlify ayarlarını ve fonksiyonunuzu kontrol edin.";
        });
}

// Last.fm aktivitesini interests.html sayfasında başlat ve otomatik güncelle
window.addEventListener('load', () => {
    // Sadece interests.html ise Last.fm'i başlat
    if (window.location.pathname.endsWith('interests.html')) {
        fetchLastFmTrack();
        setInterval(fetchLastFmTrack, 15000); 
    }
});