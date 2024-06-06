const containerRef = document.querySelector('.container');

function addStars(rate) { 

    const maxStars = 5;
    let starContent = '';

    for (let i = 1; i <= maxStars; i++) {
        if (i <= rate) {
            starContent += '<span class="star__filled">&#9733;</span>';
        } else {
            starContent += '<span class="star__notfilled">&#9734;</span>';
        }
    }

    return starContent;
}

function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');

  const content = `<div class="details">
  <span class="product__name">${product.title}</span>
  <br>
  <span class="product__category">${product.category}</span>
  <div class="all__star">
  ${addStars(product.rating.rate)} 
  </div>
  <div class="rating__count">Rating Count : <span>${product.rating.count}</span></div>
  </div>
  <div class="btn">
  <button class="btn__buy">Buy Now</button>
  </div>`;

  card.innerHTML = content;
  containerRef.appendChild(card);
}   

data.forEach((product) => createCard(product)); 