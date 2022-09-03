document.addEventListener('DOMContentLoaded', function (event) {
  getProducts();
});

function getProducts() {
  var HTML = '';

  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
      json.forEach((element) => {
        HTML += '<div class="product-box">';
        HTML += '<a href="detail.html?id=' + element.id + '">';
        HTML += '<img ';
        HTML += 'src="' + element.image + '"';
        HTML += 'alt=""';
        HTML += 'class="product-box-image"';
        HTML += '/>';
        HTML += '</a>';
        HTML += '<div class="product-box-text">';
        HTML += '<a href="#" class="product-box-category">';
        HTML += element.category;
        HTML += '</a>';
        HTML += '<h2 class="product-box-title">' + element.title + '</h2>';
        HTML += '<span class="product-box-price">₺' + element.price + '</span>';
        HTML += '</div>';
        HTML += '</div>';
      });

      document.getElementById('products').innerHTML = HTML;
    });

    
}











