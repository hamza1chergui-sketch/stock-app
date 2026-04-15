const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const FILE = "data.json";

function readData() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// GET : lire produits
app.get("/api/products", (req, res) => {
  res.send(readData());
});

// POST : ajouter produit
app.post("/api/products", (req, res) => {
  const data = readData();
  const newProduct = { id: Date.now(), ...req.body };
  data.push(newProduct);
  writeData(data);
  res.send(newProduct);
});

// DELETE : supprimer produit
app.delete("/api/products/:id", (req, res) => {
  let data = readData();
  data = data.filter(p => p.id != req.params.id);
  writeData(data);
  res.send({ message: "supprimé" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur OK sur port " + PORT);
});