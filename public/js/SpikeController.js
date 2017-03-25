function SpikeController() {
    this.products = [
        {
            title: 'ruumy',
            price: 7
        },
        {
            title: 'large',
            price: 9
        },
        {
            title: 'small',
            price: 5
        }
    ]
}

angular
    .module('app')
    .controller('SpikeController', [SpikeController])