let productIdToCheck ;
let selectedProductIds;
let htmlElement;
 selectedProductIds = JSON.parse(localStorage.getItem('selectedProductIds')) || [];
   
document.addEventListener('DOMContentLoaded', function() {
    attachEventListeners();
   
});

function  attachEventListeners(){
    const addToWishlistButtons = document.querySelectorAll('.add_to_wishlist');
    //let selectedProductIds = JSON.parse(localStorage.getItem('selectedProductIds')) || [];
     

    addToWishlistButtons.forEach(function(button) {
        button.addEventListener('click', selectProductEventHanler );
    });
   

    


    const removeFromWishlistButtons = document.querySelectorAll('.remove_from_wishlist');
    removeFromWishlistButtons.forEach(function(button) {
        button.addEventListener('click', removeFromSelectedProductEventHandler );
    })


}

function selectProductEventHanler(e){
   
        const productId = this.getAttribute('data-product-id');
        
        if (!selectedProductIds.includes(productId)) {
            selectedProductIds.push(productId);
        }

        localStorage.setItem('selectedProductIds', JSON.stringify(selectedProductIds));

        htmlElement = document.getElementById(`wishlistBox_${productId}`);
        htmlElement.innerHTML = `
        <button  class="add_to_wishlist wishlist__button" id="a_${productId}" data-product-id="${productId}"> 
                
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.49999 16.9021L8.35208 15.8571C4.27499 12.16 1.58333 9.71375 1.58333 6.72917C1.58333 4.28292 3.49916 2.375 5.93749 2.375C7.31499 2.375 8.63708 3.01625 9.49999 4.02167C10.3629 3.01625 11.685 2.375 13.0625 2.375C15.5008 2.375 17.4167 4.28292 17.4167 6.72917C17.4167 9.71375 14.725 12.16 10.6479 15.8571L9.49999 16.9021Z" fill="#FEFEFE"/>
                </svg>
              </button>
        `;

        document.getElementById(`a_${productId}`).addEventListener('click', removeFromSelectedProductEventHandler)
    
}

function removeFromSelectedProductEventHandler(e){
    // console.log(this)
  
        const productId = this.getAttribute('data-product-id');
        console.log(productId )

     //  selectedProductIds = JSON.parse(localStorage.getItem('selectedProductIds')) || [];

        const indexToRemove = selectedProductIds.indexOf( productId );
        if (indexToRemove !== -1) {
            selectedProductIds.splice(indexToRemove, 1);
            localStorage.setItem('selectedProductIds', JSON.stringify(selectedProductIds));
            console.log(`Продукт з ID ${productId} видалено з localStorage.`);
            htmlElement = document.getElementById(`wishlistBox_${productId}`);
        htmlElement.innerHTML = `
        <button  class="add_to_wishlist wishlist__button" id="a_${productId}"  data-product-id="${productId}"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
       </button>`
        } 
        document.getElementById(`a_${productId}`).addEventListener('click', selectProductEventHanler)
   
}