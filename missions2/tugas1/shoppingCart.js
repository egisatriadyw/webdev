localStorage.setItem('cartItems', JSON.stringify([]))

function addToCart(id){
    const item = shoppingItems.find(function(item){
        return item.id == id
    })
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    
    if(cartItems.length == 0){
        cartItems.push({
            ...item,
            quantity: 1
        })
    }else{
        const itemInCart = cartItems.find(function(item){
            return item.id == id
        })
        if(itemInCart){
            itemInCart.quantity++
        }else{
            cartItems.push({
                ...item,
                quantity: 1
            })
        }
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    console.log(cartItems)
    renderCartItems()
    renderCheckoutItems()
}

function renderCartItems(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.querySelector('#cart-items-container')
    cartItemsContainer.innerHTML = ''

    if (cartItems.length == 0) {
        cartItemsContainer.innerHTML = `
            <div class="d-flex justify-content-center fst-italic">
                <h5 class="text-center">Cart is Empty</h5>
            </div>
        `
    }
    cartItems.forEach(function(item){
        const cartItem = document.createElement('div')
        cartItem.classList = 'card mb-3'
        cartItem.innerHTML = `
            <div class="d-flex">
                <div class="">
                    <img src="${item.img}" width="125px" class="rounded-start" alt="...">
                </div>
                <div class="w-75">
                    <div class="card-body h-100 d-flex justify-content-between">
                        <div class="d-flex flex-column justify-content-between">                                        
                            <div class="card-text">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">
                                    <small>
                                        Rp.${item.price} x ${item.quantity} 
                                    </small>
                                </p>
                            </div>
                            <div class="d-flex w-50 mb-0">
                                <button class="btn btn-secondary py-1 px-2" type="button" id="button-addon2" onclick="decreaseQuantity(${item.id})">
                                    -
                                </button>
                                <input type="number" class="form-control text-center" style="min-width:50px" value="${item.quantity}">
                                <button class="btn btn-secondary py-1 px-2" type="button" id="button-addon2" onclick="increaseQuantity(${item.id})">
                                +
                                </button>
                            </div>         
                        </div>
                        <div class="d-flex flex-column justify-content-between align-items-end text-end">
                            <button type="button" class="btn btn-danger p-1 py-0 text-center" style="width: 25px" onclick="removeFromCart(${item.id})">
                                x
                            </button>
                            <h6 class="card-title mb-0">Rp.${item.price * item.quantity}</h6>
                        </div>  
                    </div>
                </div>
            </div>
        `
        cartItemsContainer.append(cartItem)
    })

    if (cartItems.length > 0) {
        const cartHandler = document.getElementById('cart-handler')
        cartHandler.classList.remove('d-none')
        cartHandler.classList.add('d-grid')
    }else{
        const cartHandler = document.getElementById('cart-handler')
        cartHandler.classList.add('d-none')
    }
}

function increaseQuantity(id){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemInCart = cartItems.find(function(item){
        return item.id == id
    })
    itemInCart.quantity++
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    renderCartItems()
    renderCheckoutItems()
}

function decreaseQuantity(id){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemInCart = cartItems.find(function(item){
        return item.id == id
    })
    if(itemInCart.quantity == 1){
        removeFromCart(id)
        return
    }
    itemInCart.quantity--
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    renderCartItems()
    renderCheckoutItems()
}

function removeFromCart(id){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const itemInCart = cartItems.find(function(item){
        return item.id == id
    })
    const index = cartItems.indexOf(itemInCart)
    cartItems.splice(index, 1)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    renderCartItems()
    renderCheckoutItems()
}

function checkout(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const total = cartItems.reduce(function(total, item){
        return total + (item.price * item.quantity)
    }, 0)
    alert(`Total: ${total}`)
    localStorage.setItem('cartItems', JSON.stringify([]))
}

function clearCartItems(){
    localStorage.setItem('cartItems', JSON.stringify([]))
    renderCartItems()
    renderCheckoutItems()
}

function renderCheckoutItems(){
    const checkoutItemList = document.getElementById('checkout-items')
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    checkoutItemList.innerHTML = ``
    
    let number = 1
    cartItems.forEach(function(item){
        const checkoutItem = document.createElement('tr');
        checkoutItem.innerHTML = `
            <th scope="row">${number}</th>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
        `
        checkoutItemList.append(checkoutItem)
        number++
    })

    const totalRow = document.createElement('tr')
    totalRow.innerHTML = `
        <th scope="row">Total Items</th>
        <td></td>
        <td></td>
        <td>${sumTotalItems()}</td>
        <td>${sumTotalPayment()}</td>
    `
    checkoutItemList.append(totalRow)
}

function sumTotalPayment(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const total = cartItems.reduce(function(total, item){
        return total + (item.price * item.quantity)
    }, 0)
    return total
}

function sumTotalItems(){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const total = cartItems.reduce(function(total, item){
        return total + item.quantity
    }, 0)
    return total
}

renderCheckoutItems()

renderCartItems()
