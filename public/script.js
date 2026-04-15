async function loadProducts() {
  const res = await fetch("/api/products");
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.name} - ${p.quantity} - ${p.price}
      <button onclick="deleteProduct('${p.id}')">❌</button>
    `;
    list.appendChild(li);
  });
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, quantity, price })
  });

  loadProducts();
}

async function deleteProduct(id) {
  await fetch("/api/products/" + id, { method: "DELETE" });
  loadProducts();
}

loadProducts();
async function loadProducts() {
  const res = await fetch("/api/products");
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.name} - ${p.quantity} - ${p.price}
      <button onclick="deleteProduct('${p.id}')">❌</button>
    `;
    list.appendChild(li);
  });
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, quantity, price })
  });

  loadProducts();
}

async function deleteProduct(id) {
  await fetch("/api/products/" + id, { method: "DELETE" });
  loadProducts();
}

loadProducts();
async function loadProducts() {
  const res = await fetch("/api/products");
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.name} - ${p.quantity} - ${p.price}
      <button onclick="deleteProduct('${p.id}')">❌</button>
    `;
    list.appendChild(li);
  });
}

async function addProduct() {
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, quantity, price })
  });

  loadProducts();
}

async function deleteProduct(id) {
  await fetch("/api/products/" + id, { method: "DELETE" });
  loadProducts();
}

loadProducts();