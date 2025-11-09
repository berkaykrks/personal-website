// js/data.js

const myInterests = [
    // --- KİTAPLAR ---
    {
        id: 1,
        title: "Olağanüstü Bir Gece",
        author: "Stefan Zweig",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book33.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 2,
        title: "Satranç",
        author: "Stefan Zweig",
        category: "book",
        status: "Tamamlandı",
        rating: "yorum yok",
        image: "others/book32.jpg",
        tagClass: "completed"
    },

    // --- DİZİLER ---
    {
        id: 3,
        title: "The Walking Dead",
        author: "Tür: Suç, Dram",
        category: "series",
        status: "İzlenildi",
        rating: "Bekleniyor",
        image: "others/dizi1.jpg",
        tagClass: "completed"
    },
    
    // --- FİLMLER ---
    {
        id: 4,
        title: "Inception",
        author: "Yönetmen: C. Nolan",
        category: "movie",
        status: "İzlenildi",
        rating: "4.9/5",
        image: "others/film1.jpg", 
        tagClass: "completed"
    },
    {
        id: 5,
        title: "Dune",
        author: "Yönetmen: D. Villeneuve",
        category: "movie",
        status: "İzlendi",
        rating: "Beklemede",
        image: "others/film2.jpg",
        tagClass: "completed"
    },
    {
        id: 6,
        title: "Dune 2",
        author: "Yönetmen: D. Villeneuve",
        category: "movie",
        status: "İzlendi",
        rating: "Beklemede",
        image: "others/film3.jpg",
        tagClass: "completed"
    },
    {
        id: 7,
        title: "Ready One Player",
        author: "Yönetmen: D. Villeneuve",
        category: "movie",
        status: "İzlendi",
        rating: "Beklemede",
        image: "others/film4.jpg",
        tagClass: "completed"
    },
    {
        id: 8,
        title: "Esaretin Bedeli",
        author: "Yönetmen: D. Villeneuve",
        category: "movie",
        status: "İzlendi",
        rating: "Beklemede",
        image: "others/film5.png",
        tagClass: "completed"
    },
    {
        id: 9,
        title: "Martin Eden ",
        author: "Yönetmen: D. Villeneuve",
        category: "book",
        status: "Okundu",
        rating: "yorumsuz",
        image: "others/book34.jpg",
        tagClass: "completed"
    },
    {
        id: 10,
        title: "Dexter",
        author: "Yönetmen: D. Villeneuve",
        category: "series",
        status: "İzlendi",
        rating: "Beklemede",
        image: "others/dizi2.jpg",
        tagClass: "completed"
    },
    //---- Book Category ---  
    {
        id: 11,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 12,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book2.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 13,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book3.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 14,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book4.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 15,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book5.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 16,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book6.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 17,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book7.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 18,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book8.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 19,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book9.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 20,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book10.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 21,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book11.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 22,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book12.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 23,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book13.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 24,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book14.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 25,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book15.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 26,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book16.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 27,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book17.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 28,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book18.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 29,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book19.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 30,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book20.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 31,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book21.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 32,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book22.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 33,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book23.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 34,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book24.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },
    {
        id: 35,
        title: "Şeker Portakalı",
        author: "Yuval Noah Harari",
        category: "book",
        status: "Tamamlandı",
        rating: "4.5/5",
        image: "others/book25.jpg", // HTML'deki karşılığı
        tagClass: "completed"
    },

    {
        id: 36,
        title: "3 Body Problem",
        author: "Yönetmen: D. Villeneuve",
        category: "series",
        status: "İzlenecek",
        rating: "Beklemede",
        image: "others/dizi3.jpg",
        tagClass: "watchlist"
    },
    {
        id: 37,
        title: "The Boys",
        author: "Yönetmen: D. Villeneuve",
        category: "series",
        status: "İzlendi",
        rating: "4.5/5",
        image: "others/dizi4.jpg",
        tagClass: "completed"
    },
    {
        id: 38,
        title: "Silo",
        author: "Yönetmen: D. Villeneuve",
        category: "series",
        status: "İzlendi",
        rating: "4.1/5",
        image: "others/dizi5.jpg",
        tagClass: "completed"
    },
    {
        id: 39,
        title: "Stranger Things",
        author: "Yönetmen: D. Villeneuve",
        category: "series",
        status: "İzlendi",
        rating: "4.6/5",
        image: "others/dizi6.jpg",
        tagClass: "completed"
    },
    {
        id: 40,
        title: "Mr Robot",
        author: "Yönetmen: D. Villeneuve",
        category: "series",
        status: "İzlendi",
        rating: "4.5/5",
        image: "others/dizi7.jpg",
        tagClass: "completed"
    },
    {
        id: 41,
        title: "Dune Prophecy",
        author: "Yönetmen: Johan Renck",
        category: "series",
        status: "İzlendi",
        rating: "4.5/5",
        image: "others/dizi8.jpg",
        tagClass: "completed"
    },
    {
        id: 42,
        title: "Looper",
        author: "Yönetmen: Johan Renck",
        category: "movie",
        status: "İzlendi",
        rating: "4.5/5",
        image: "others/film6.jpg",
        tagClass: "completed"
    },
];