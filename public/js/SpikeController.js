function SpikeController() {
    this.cart = [];
    this.products = [
        {
            title: 'ruumy',
            stock: 25,
            quantity: 1,
            price: 7,
            featured: true
        },
        {
            title: 'large',
            stock: 2,
            quantity: 1,
            price: 9
        },
        {
            title: 'small',
            stock: 0,
            quantity: 1,
            price: 5
        }
    ]
    this.addToCart = function (item) {
        this.cart.includes(item) ?
            this.cart[this.cart.indexOf(item)].quantity++ :
            this.cart.push(item)
    }
}

angular
    .module('app')
    .controller('SpikeController', [SpikeController])