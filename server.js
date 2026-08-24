const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

app.get('/api/products', (req, res) => {
    const productsData = {
        watches: [
            { id: 1, name: "Smart Watch Pro", price: "$50", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" },
            { id: 2, name: "Classic Gold Watch", price: "$85", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80" },
            { id: 3, name: "Sport Edition Watch", price: "$65", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80" },
            { id: 4, name: "Minimalist Watch", price: "$40", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=500&q=80" }
        ],
        earbuds: [
            { id: 5, name: "Wireless Pods Pro", price: "$30", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80" },
            { id: 6, name: "Bass Boost Earbuds", price: "$45", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80" },
            { id: 7, name: "Sport Bluetooth Pods", price: "$35", image: "https://images.unsplash.com/photo-1606741965514-55829458f4c4?auto=format&fit=crop&w=500&q=80" },
            { id: 8, name: "Active Noise Pods", price: "$60", image: "https://images.unsplash.com/photo-1593121925328-369ccb259cc0?auto=format&fit=crop&w=500&q=80" }
        ]
    };
    res.json(productsData);
});

app.listen(port, () => {
    console.log(`Zabardast! Apka E-commerce server http://localhost:${port} par chal raha hai.`);
});