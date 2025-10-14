// netlify/functions/lastfm.js
// Netlify Functions için en stabil hale getirildi.
const fetch = require('node-fetch'); // Node.js fetch'i zorlar.

// 1. Last.fm kullanıcı adınızı buraya yerleştirin
const LASTFM_USERNAME = 'myrolith';

// 2. Netlify Çevre Değişkeni (Environment Variable) olarak ayarladığınız API anahtarını çeker.
const API_KEY = process.env.LASTFM_API_KEY; 

// Fonksiyonun ana gövdesi
exports.handler = async (event, context) => {
    
    if (!API_KEY || !LASTFM_USERNAME) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "API key or Username is missing in Netlify settings." })
        };
    }

    const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${API_KEY}&format=json&limit=1`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Netlify Functions'ın doğru yanıt formatı
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                // CORS'u etkinleştir
                "Access-Control-Allow-Origin": "*", 
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("Last.fm'e istek atılırken hata oluştu:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data from Last.fm.", details: error.message })
        };
    }
};