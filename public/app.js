document.addEventListener('DOMContentLoaded', () => {
    fetch('/products')
      .then(response => response.json())
      .then(products => displayData(products))
      .catch(error => console.error('Error fetching data:', error.message));
  
    function displayData(products) {
      const productListDiv = document.getElementById('productList');
  
      productListDiv.innerHTML = '';
  
      products.forEach((product, index) => {
        const productElement = createProductElement(product);
        productListDiv.appendChild(productElement);
      });
    }
  
    function createProductElement(product) {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = product.title;
  
      const priceElement = document.createElement('p');
      priceElement.textContent = `Price: ${product.price}`;
  
      const popularityElement = document.createElement('p');
      popularityElement.textContent = `Popularity: ${product.popularity}`;
  
      productContainer.appendChild(titleElement);
      productContainer.appendChild(priceElement);
      productContainer.appendChild(popularityElement);
  
      return productContainer;
    }
  });
  