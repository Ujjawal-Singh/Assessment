const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


const db = new sqlite3.Database("./products.db", (err) => {
    if (err) console.error(err.message);
    else console.log("Connected to SQLite database.");
});


db.run(
    `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL,
        stock INTEGER NOT NULL
    )`
);

app.post("/products", (req, res) => {
    const { name, description, price, stock } = req.body;
    const sql = `INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [name, description, price, stock], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, message: "Product added successfully" });
    });
});

app.get("/products", (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.get("/products/:id", (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ?`;
    db.get(sql, [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Product not found" });
        res.json(row);
    });
});


app.put("/products/:id", (req, res) => {
    const { name, description, price, stock } = req.body;
    const sql = `UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?`;
    
    db.run(sql, [name, description, price, stock, req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product updated successfully" });
    });
});

app.delete("/products/:id", (req, res) => {
    const sql = `DELETE FROM products WHERE id = ?`;
    
    db.run(sql, [req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product deleted successfully" });
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
