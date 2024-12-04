document.addEventListener('DOMContentLoaded', () => {
  
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.card-body').forEach((product) => {
        const quantity = parseInt(product.querySelector('.quantity').textContent, 10);
        const unitPrice = parseInt(product.querySelector('.unit-price').textContent, 10);
        total += quantity * unitPrice /2;
      });
      document.querySelector('.total').textContent = `${total} $`;
    }
  
   
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
  
 
    document.querySelectorAll('.fa-trash-alt').forEach((trashBtn) => {
      trashBtn.addEventListener('click', (e) => {
        const productCard = e.target.closest('.card-body');
        productCard.remove();
        updateTotal();
      });
    });
  
    
    document.querySelectorAll('.fa-heart').forEach((heartBtn) => {
      heartBtn.addEventListener('click', () => {
        heartBtn.classList.toggle('text-danger');
      });
    });
  });
  