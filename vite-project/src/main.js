import { products } from "./data"

const app = document.getElementById("app")
const search = document.getElementById("search")


function render(arr) {
    app.innerHTML = `
    <ul class="product-list">
        ${arr.map(product => `
            <li class="product-item">
                <h2 class="name">${product.name}</h2>
                <p class="price">Price: ${product.price}</p>
                <p class="description">${product.description}</p>
            </li>
        `).join("")}
    </ul>`
}

render(products)

search.addEventListener("input", () => {
    const value = search.value.toLowerCase()
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(value)
    })
    render(filteredProducts)
})