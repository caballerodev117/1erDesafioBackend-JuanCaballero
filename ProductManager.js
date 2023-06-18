class ProductManager { 
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  generateId() {
    this.lastId += 1;
    return this.lastId;
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const existingProduct = this.products.find((product) => product.code === code);
    if (existingProduct) {
      throw new Error("El código de producto ya está en uso.");
    }

    const newProduct = {
      id: this.generateId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(newProduct);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }

    return product;
  }
}

// Crear instancia de la clase "ProductManager"
const manager = new ProductManager();

// Llamar a "getProducts" recién creada la instancia

console.log(manager.getProducts()); //

// Llamar al método "addProduct" con los campos especificados

manager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

// Llamar nuevamente a "getProducts" para verificar que se agregó el producto

console.log(manager.getProducts());

// Intentar agregar el mismo producto nuevamente (debe arrojar un error)

try {
  manager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
} catch (error) {
  console.error(error.message);
}

// Obtener un producto por su ID (debe devolver el producto)

try {
  const product = manager.getProductById(1);
  console.log(product);
} catch (error) {
  console.error(error.message);
}