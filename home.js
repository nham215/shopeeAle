
const apple = [
    {
        id: 1,
        img: './image/unsplash_h1MnFsRI-_I.png',
        ten: 'Apple Watch Seris 7',
        mota: 'Midnight Alumium Case with Sports Band',
        soluong: 1,
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 15030,
        remaining: 5,
    },
    {
        id: 2,
        img: './image/unsplash_h1MnFsRI-_I.png',
        ten: 'Apple Watch Seris 4',
        mota: 'Midnight Alumium Case with Sports Band',
        soluong: 1,
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 150,
        remaining: 5,
    },

    {
        id: 3,
        img: './image/unsplash_h1MnFsRI-_I.png',
        ten: 'Apple Watch Seris 9',
        mota: 'Midnight Alumium Case with Sports Band',
        soluong: 1,
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 1604,
        remaining: 55,
    },

    {
        id: 4,
        img: './image/unsplash_h1MnFsRI-_I.png',
        ten: 'Apple Watch Seris 9',
        mota: 'Midnight Alumium Case with Sports Band',
        soluong: 1,
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 1562,
        remaining: 55,
    },

  
]

const iphone = [
    {
        id: 1,
        img: './image/iphone.png',
        ten: 'Iphone 1 ProMax',
        mota: 'Midnight Alumium Case with Sports Band kk',
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 1566,
        remaining: 55,
    },
    {
        id: 2,
        img: './image/iphone.png',
        ten: 'Iphone 13 ProMax',
        mota: 'Midnight Alumium Case with Sports Band',
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 1500,
        remaining: 5,
    },
    {
        id: 3,
        img: './image/iphone.png',
        ten: 'Iphone 19 ProMax Vip',
        mota: 'Midnight Alumium Case with Sports Band',
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 1056,
        remaining: 12,
    },

    {
        id: 4,
        img: './image/iphone.png',
        ten: 'Iphone 16 ProMax',
        mota: 'Midnight Alumium Case with Sports Band',
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 150056,
        remaining: 15,
    },
    {
        id: 5,
        img: './image/iphone.png',
        ten: 'Iphone 16 ProMax',
        mota: 'Midnight Alumium Case with Sports Band',
        mau: {
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
            xanh: 'Xanh',
        },
        price: 150056,
        remaining: 15,
    },
]

//  for (let index = 0; index < apple.length; index++) {
//     const element = apple[index];
//      console.log('sss',element);
// }

var applebox = document.getElementById('apple-item');
const bien = apple.map((element, index) => {
    console.log(element);
    return `
    <div class="apple-item-box">
        <div class="app-item-box-image">
            <img src="${element.img}" alt="">

        </div>
        <div class="apple-item-box-info">
            <div class="apple-item-box-info-name">
                <p>${element.ten}</p>
                <button>Availabie</button>
            </div>
            <p class="apple-item-box-info-desc">${element.mota}</p>
            <div class="apple-item-box-info-color">
                <div class="apple-item-radio-title">
                    <p>Colors: </p>
                </div>
                
                <div class="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                </div>
                <div style="width: 30%;">

                </div>
                
            </div>
            <p class="apple-item-box-info-remaining">Remaining <span>: ${element.remaining}</span></p>
            <div class="apple-item-box-info-price">
                <p><span>$</span>${element.price}</p>
                
                <button class="apple-item-box-info-price-btn" data-id=${element.id} >
                    <img src="./image/Shape.png" alt="">
                </button>
            </div>
        </div>
    </div>
    `
})


var iphonebox = document.getElementById('iphone-item');
const bienIphone = iphone.map((element, index) => {
    console.log(element);
    return `
    <div class="apple-item-box">
        <div class="app-item-box-image">
            <img src="${element.img}" alt="">

        </div>
        <div class="apple-item-box-info">
            <div class="apple-item-box-info-name">
                <p>${element.ten}</p>
                <button>Availabie</button>
            </div>
            <p class="apple-item-box-info-desc">${element.mota}</p>
            <div class="apple-item-box-info-color">
                <div class="apple-item-radio-title">
                    <p>Colors: </p>
                </div>
                
                <div class="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                    <input type="radio" name="apple-item-radio">
                </div>
                <div style="width: 30%;">

                </div>
                
            </div>
            <p class="apple-item-box-info-remaining">Remaining <span>: ${element.remaining}</span></p>
            <div class="apple-item-box-info-price">
                <p>${element.price}</p>
                <button class="apple-item-box-info-price-btn" data-id=${element.id}>
                    <img src="./image/Shape.png" alt="">
                </button>
            </div>
        </div>
    </div>
    `
})


applebox.innerHTML = bien.join('')

iphonebox.innerHTML = bienIphone.join('')



const cart = [
    
]


const cartAdd = document.querySelectorAll('.apple-item-box-info-price-btn')
cartAdd.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        const id = ele.getAttribute('data-id')
        console.log(id);
        console.log(ele);


        const filter = apple.filter((e) => {
            return e.id == id
        })
        cart.push({filter})

        localStorage.setItem('cart', JSON.stringify([...cart]))

        // const filterIphone = iphone.filter((e) => {
        //     return e.id == id
        // })
        // cart.push({filterIphone})


        console.log(cart);

        
    })
})



