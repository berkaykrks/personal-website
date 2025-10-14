// ====================================================================
// 1. ANASAYFA FONKSİYONLARI (Toggle, Scroll, CV)
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
                // index.html'deki bölümlerin aktifliğini ayarlar
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
    if (footer) {
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    }
}

// CV İndirme Butonları (YALNIZCA Varsa Çalıştır)
const downloadCvBtn = document.getElementById('downloadCv');
if (downloadCvBtn) { // downloadCv elementi varsa
    downloadCvBtn.addEventListener('click', function (event) {
        event.preventDefault();
        // NOT: confirm yerine özel UI kullanmanız önerilir, ancak mevcut kodunuzu koruyoruz
        if (confirm('CV dosyasını indirmek ister misiniz?')) {
            window.location.href = 'ataBerkayKarakusCV.pdf';
        }
    });
}

const downloadCv2Btn = document.getElementById('downloadCv2');
if (downloadCv2Btn) { // downloadCv2 elementi varsa
    downloadCv2Btn.addEventListener('click', function (event) {
        event.preventDefault();
        // NOT: confirm yerine özel UI kullanmanız önerilir
        if (confirm('CV dosyasını indirmek ister misiniz?')) {
            window.location.href = 'ataBerkayKarakusCV.pdf';
        }
    });
}

// ====================================================================
// 2. LAST.FM ENTEGRASYONU (index.html ve interests.html için)
// ====================================================================

// Lütfen kendi Last.fm kullanıcı adınızı buraya yazın
const LASTFM_USERNAME = 'myrolith';

function fetchLastFmTrack() {
    // Netlify Fonksiyonu'nu çağırın. Bu, API anahtarınızı güvenle gizler.
    const FUNCTION_URL = '/.netlify/functions/lastfm';

    // index.html ve interests.html'deki her iki hedefi de seçiyoruz
    const targets = [
        document.getElementById('now-listening'),    // index.html için
        document.getElementById('spotify-activity') // interests.html için
    ].filter(el => el !== null); // Yalnızca var olan elementleri al

    if (targets.length === 0) return;

    // Hedeflerin yükleniyor durumunu güncelle
    targets.forEach(el => el.innerHTML = "Yükleniyor...");

    fetch(FUNCTION_URL)
        .then(response => {
            if (!response.ok) {
                // Eğer status 404, 500 vb. ise hata fırlat
                throw new Error(`Netlify Function hatası: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tracks = data.recenttracks.track;

            // Eğer tracks bir dizi değilse veya boşsa
            if (!Array.isArray(tracks) || tracks.length === 0) {
                const message = "Şu anda dinlemiyor.";
                targets.forEach(el => el.innerHTML = message);
                return;
            }

            const track = tracks[0];
            const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

            const artistName = track.artist['#text'];
            const songName = track.name;
            const largeImage = track.image.find(img => img.size === 'large');
            const albumArt = largeImage ? largeImage['#text'] : 'images/default_album.png';
            const statusText = isNowPlaying ? "Şu an Dinliyor" : "Son Dinlenen";


            // YENİ VE GÜZEL TASARIMA UYGUN HTML YAPISI
            const songHTML = `
    <div class="song-info">
        <img src="${albumArt}" alt="${songName} Albüm Kapağı">
        <div class="song-details">
            <span class="song-status">${statusText}</span>
            <span class="song-title">${songName}</span>
            <span class="song-artist">${artistName}</span>
        </div>
    </div>
`;

            // Tüm hedefleri güncelleyin
            targets.forEach(el => el.innerHTML = songHTML);

        })
        .catch(error => {
            console.error("Veri çekilemedi veya işlenirken hata oluştu:", error);
            const errorMessage = `Hata: ${error.message}. Konsolu kontrol edin.`;
            targets.forEach(el => el.innerHTML = errorMessage);
        });
}

// =======================================================
// BAŞLATMA (Hem index.html hem de interests.html için)
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
    // Hem index.html hem de interests.html'de bulunan bir element varsa başlat
    const isInterestsFeatureActive = document.getElementById('now-listening') !== null ||
        document.getElementById('spotify-activity') !== null;

    if (isInterestsFeatureActive) {

        // İlk çağrıyı yap
        fetchLastFmTrack();

        // Otomatik güncellemeyi başlat
        setInterval(fetchLastFmTrack, 15000);
    }
});
