document.addEventListener('DOMContentLoaded', function (event) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  getProductDetail(id);
});

function getProductDetail(id) {
  var HTML = '';

  fetch('https://fakestoreapi.com/products/' + id)
    .then((res) => res.json())
    .then((json) => {
      // data geldiğinde
      HTML += '<div class="detail-column">';
      HTML += '<img';
      HTML += ' class="product-box-image"';
      HTML += 'src="' + json.image + '"';
      HTML += 'alt=""';
      HTML += '/>';
      HTML += '</div>';
      HTML += '<div class="detail-column">';
      HTML +=
        '<a href="#" class="product-box-category">' + json.category + '</a>';
      HTML += '<h2 class="product-box-title">' + json.title + '</h2>';
      HTML += '<span class="product-box-price">₺ ' + json.price + '</span>';
      HTML += '<span class="detail-info">' + json.description + '</span>';
      HTML += '<span class="detail-info">Puan: ' + json.rating.rate + '</span>';
      HTML +=
        '<span class="detail-info">Görüntülenme Sayısı: ' +
        json.rating.count +
        '</span>';
      HTML += '</div>';

      document.getElementById('product-detail').innerHTML = HTML;
    });
}
