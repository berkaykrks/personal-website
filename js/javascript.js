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
            window.location.href = 'ataBerkayKarakusCV.pdf';
        }
    });
}

const downloadCv2Btn = document.getElementById('downloadCv2');
if (downloadCv2Btn) { // downloadCv2 elementi varsa
    downloadCv2Btn.addEventListener('click', function (event) {
        event.preventDefault();
        if (confirm('CV dosyasını indirmek ister misiniz?')) {
            window.location.href = 'ataBerkayKarakusCV.pdf';
        }
    });
}

// ====================================================================
// 3. LAST.FM ENTEGRASYONU (interests.html için)
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
            if (!response.ok) {
                // Eğer status 404, 500 vb. ise hata fırlat
                throw new Error(`Netlify Function hatası: ${response.status} - Lütfen Netlify loglarını kontrol edin.`);
            }
            return response.json();
        })
        .then(data => {
            // Veri yapısının doğru geldiğini varsayarak ilerliyoruz
            const tracks = data.recenttracks.track;
            
            // Eğer tracks bir dizi değilse veya boşsa
            if (!Array.isArray(tracks) || tracks.length === 0) { 
                activityDiv.innerHTML = "Şu anda dinlemiyor veya veri formatı yanlış.";
                return;
            }

            const track = tracks[0];
            // Anlık dinleniyor mu kontrolü
            const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
            
            // Güvenli veri çekimi
            const artistName = track.artist['#text'];
            const songName = track.name;
            const largeImage = track.image.find(img => img.size === 'large');

            // Eğer large imaj yoksa default bir resim kullan
            const albumArt = largeImage ? largeImage['#text'] : 'images/default_album.png'; 
            const statusText = isNowPlaying ? "Şu an Dinliyor" : "Son Dinlenen";

            activityDiv.innerHTML = `
                <div class="song-info">
                    <img src="${albumArt}" alt="${songName} Albüm Kapağı">
                    <div>
                        <p style="font-size: 1.4rem; margin-bottom: 5px; color: var(--main-color);">${statusText}</p>
                        <p class="song-title">${songName}</p>
                        <p style="opacity: 0.7;">${artistName}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error("Veri çekilemedi veya işlenirken hata oluştu:", error);
            activityDiv.innerHTML = `Hata: ${error.message}. Konsolu kontrol edin.`;
        });
}

// Last.fm aktivitesini interests.html sayfasında başlat ve otomatik güncelle
document.addEventListener('DOMContentLoaded', () => { 
    // Yalnızca 'spotify-activity' div'i varsa (yani sadece interests.html sayfasında) çalıştır.
    const activityDiv = document.getElementById('spotify-activity');
    
    if (activityDiv) {
        
        // 1. Last.fm çağrısını başlat
        fetchLastFmTrack(); 
        
        // 2. Otomatik güncellemeyi başlat
        setInterval(fetchLastFmTrack, 15000); 
        
        // 3. (OPSİYONEL) Eğer filtreleme kodunuz hala bu dosyadaysa, burada çağırın:
        // setupFilter(); 
    }
});