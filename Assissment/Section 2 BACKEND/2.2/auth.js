const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'your_secret_key'; 

const USER = { username: 'admin', password: 'password123' };

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === USER.username && password === USER.password) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

app.post('/products', authenticateJWT, (req, res) => res.json({ message: 'Product created' }));
app.put('/products/:id', authenticateJWT, (req, res) => res.json({ message: 'Product updated' }));
app.delete('/products/:id', authenticateJWT, (req, res) => res.json({ message: 'Product deleted' }));


app.listen(3000, () => console.log('Server running on port 3000'));
