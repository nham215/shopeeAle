const cart = localStorage.getItem('cart')
const cartdata = JSON.parse(cart)

var cartbox = document.getElementById('cart-box');
const bienCart = cartdata.map((element, index) => {
    console.log('element,',element.filter);
    return `
        <div class="cart-item-box">
            <div class="box-title">
                <input type="checkbox" name="box-title" id="">
                <img src="${element.filter[0].img}" alt="">
                <div class="box-title-desc">
                    <p>${element.filter[0].ten}</p>
                    <span>Color: Gray</span>
                </div>
            </div>
            <div class="box-price">
                <p>${element.filter[0].price}</p>
                <div class="fashion-list">
                    <button id="onClickGiam"><img src="./image/Path 29.png" alt=""></button>
                    <p id="soluongsp">${element.filter[0].soluong}</p>
                    <button id="onClickTang" class="fashion-list-btn"><img src="./image/Path 30.png" alt=""></button>
                </div>
                <p>$3000</p>

                
                
            </div>

            <button class="remove-cart" data-id=${element.filter[0].id}>
                <img src="./image/Group 10.png" alt="">
            </button>
        </div>
    `
})
cartbox.innerHTML = bienCart.join('')


const sl = document.getElementById('soluongsp');
const tang = document.getElementById('onClickTang');
const giam = document.getElementById('onClickGiam');
var soluongSP = 1;
for (let i = 0; i < cartdata.length; i++) {
    const element = cartdata[i];
    tang.addEventListener('click', () => {
        soluongSP ++;
        soluongsanpham();
    })
    giam.addEventListener('click', () => {
        if (soluongSP > 1) {
            soluongSP --;
            soluongsanpham();
        }
    })
}
function soluongsanpham() {
    sl.textContent = soluongSP;
}


const deleteBtn = document.querySelectorAll('.remove-cart');
deleteBtn.forEach(button => {
    button.addEventListener('click', function() {
        const listItem = this.parentNode;
        const productId = listItem.getAttribute('data-id');
        listItem.remove();
        alert("Bạn chắc chắn xóa???");
    })
})



        

        

        
