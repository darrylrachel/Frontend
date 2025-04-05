fetch('../../data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cardsContainer')

    data.forEach(item => {
      const card = document.createElement('div')
      card.className = 'card'
      card.style.width = '18rem'

      card.innerHTML = `
        <img 
          class="card-img-top"
          src="${item.image.desktop}"
          alt="{item.name}"
        />
        <div class="card-body">
          <p class="card-text category preset-4">${item.category}</p>
          <p class="card-text title preset-3">${item.name}</p>
          <p class="card-text price preset-3">$${item.price.toFixed(2)}</p>
        </div>

         <div class="cta-button">
          <a href="#" class="btn btn-primary preset-4-bold addToCartBtn">
            <img
              src="./assets/images/icon-add-to-cart.svg"
              alt="Add to cart icon"
              class="cart-icon"
            />Add to Cart
          </a>
        </div>
      `;

      container.appendChild(card);
    })

    const addToCartBtn = document.querySelectorAll('.addToCartBtn');

    addToCartBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Added to cart:', btn.closest('.card').querySelector('.title').textContent)
      });
    });


  })
  .catch(error => {
    console.error("Error loading Menu:", error);
  })

const cartItem = []




// card
                
// category
// title
// price

