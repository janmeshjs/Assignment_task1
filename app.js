document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json')
    .then(response => response.data)
    .then(products => sortAndDisplayData(products))
    .catch(error => console.error('Error fetching data:', error.message));

  function sortAndDisplayData(responseData) {
    if (!responseData.products || typeof responseData.products !== 'object') {
      throw new Error('Invalid data format');
    }

    const products = Object.values(responseData.products);

    const sortedProducts = products.sort((a, b) => b.popularity - a.popularity);

    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    sortedProducts.forEach((product, index) => {
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

    const popularityElement = document.createElement('p'); // Corrected element type to 'p'
    popularityElement.textContent = `Popularity: ${product.popularity}`;

    productContainer.appendChild(titleElement);
    productContainer.appendChild(priceElement);
    productContainer.appendChild(popularityElement);

    return productContainer;
  }
});
