// const totalprice = document.getElementsByClassName("total");
// const basketbtninc = document.getElementById("basket+");
// const basketbtndec = document.getElementById("basket-");
// const basketsize = document.getElementById("basketsize");

// basketbtninc.addEventListener('onclick', () => {
//     let value = parseInt(basketsize.textContent, 10);
//     console.log(basketsize);
//     basketsize.textContent = value + 1;
//     console.log(basketsize);
// });

document.addEventListener('DOMContentLoaded', () => {
    // Function to update total price
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.card-body').forEach((product) => {
        const quantity = parseInt(product.querySelector('.quantity').textContent, 10);
        const unitPrice = parseInt(product.querySelector('.unit-price').textContent, 10);
        total += quantity * unitPrice;
      });
      document.querySelector('.total').textContent = `${total} $`;
    }
  
    // Handling "+" and "-" buttons
    document.querySelectorAll('.card-body').forEach((product) => {
      const plusBtn = product.querySelector('.fa-plus-circle');
      const minusBtn = product.querySelector('.fa-minus-circle');
      const quantitySpan = product.querySelector('.quantity');
  
      plusBtn.addEventListener('click', () => {
        quantitySpan.textContent = parseInt(quantitySpan.textContent, 10) + 1;
        updateTotal();
      });
  
      minusBtn.addEventListener('click', () => {
        if (parseInt(quantitySpan.textContent, 10) > 0) {
          quantitySpan.textContent = parseInt(quantitySpan.textContent, 10) - 1;
          updateTotal();
        }
      });
    });
  
    // Handling item deletion
    document.querySelectorAll('.fa-trash-alt').forEach((trashBtn) => {
      trashBtn.addEventListener('click', (e) => {
        const productCard = e.target.closest('.card-body');
        productCard.remove();
        updateTotal();
      });
    });
  
    // Handling "like" button toggle
    document.querySelectorAll('.fa-heart').forEach((heartBtn) => {
      heartBtn.addEventListener('click', () => {
        heartBtn.classList.toggle('text-danger');
      });
    });
  });
  