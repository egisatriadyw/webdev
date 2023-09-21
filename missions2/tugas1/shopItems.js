
const shoppingItems = [
    {
        id: 1,
        name: 'Ultra Milk Plain 250ml',
        price: 7000,
        description : 'Ultra Milk Plain 250ml',
        img: 'https://tokoelmanna.com/wp-content/uploads/2021/04/uht-plain.jpg'
    },
    {
        id: 2,
        name: 'Kecap Bango Kecil',
        price: 7000,
        description : 'Kecap Bango Botol 100ml',
        img: 'http://www.waroengindo.sg/image/cache/catalog/Product/bango%20135ml-1200x1200.png'
    },
    {
        id: 3,
        name: 'Saus Indofood Extra Pedas Kecil',
        price: 10000,
        description : 'Saus Indofood Extra Pedas 140ml',
        img: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/12/4155402/4155402_cc555b2f-9304-442b-b625-bdbe355eecb4_800_800.jpg'
    },
    {
        id: 4,
        name: 'Silverqueen Chocolate Chunky Bar',
        price: 13500,
        description : 'Silverqueen Chocolate Cashew Chunky Bar ',
        img: 'https://cf.shopee.co.id/file/92bbcc7aa80909fea3032f6600eb6edf'
    },
    {
        id: 5,
        name: 'Kusuka Lg',
        price: 14000,
        description : 'Keripik Singkong Kusuka 175gram',
        img: 'https://indomerchant.com/cdn/shop/products/kusuka-original_750x.jpg?v=1508987842'
    },
    {
        id: 6,
        name: 'Roti Aoka Keju',
        price: 2500,
        description : 'Roti Aoka Rasa Keju',
        img: 'https://cf.shopee.co.id/file/sg-11134201-22100-gtrbhq4ckoiv02'
    },
    {
        id: 7,
        name: 'Malkist Roma Abon',
        price: 8500,
        description : 'Malkist Roma Rasa Abon',
        img: 'https://warindo.de/wp-content/uploads/2021/08/Malkist-Abon-135g.jpg'
    },
    {
        id: 8,
        name: 'Mizone',
        price: 6000,
        description : 'Minuman Elektrolit Rasa Buah',
        img: 'http://3.bp.blogspot.com/-tSmUTkJ9rMs/UaxQm02m2uI/AAAAAAAAAgs/iRzpMIQFDQA/s1600/mizone.jpg'
    }
]

function renderAllShoppingItems(){
    const shoppingItemsContainer = document.querySelector('#shopping-items-container')
    shoppingItemsContainer.innerHTML = ''

    shoppingItems.forEach(function(item){
        const itemCard = document.createElement('div')
        itemCard.classList = 'col-lg-6 col-12'
        itemCard.innerHTML = `
            <div class="card">
                <img src="${item.img}" style="height: 400px" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">Harga : Rp.${item.price}/pcs</p>             
                    <button type="button" onclick="addToCart(${item.id})" class="btn btn-primary">
                        <i class="fa-solid fa-plus fw-bolder fs-4 me-1"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `
        shoppingItemsContainer.append(itemCard)
    })
}

renderAllShoppingItems()