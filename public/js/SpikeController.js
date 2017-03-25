function SpikeController($http) {
    const vm = this;
    vm.cart = [];
    vm.$onInit = () => {
        $http
        .get('http://ec2-34-208-34-115.us-west-2.compute.amazonaws.com/products')
        .then(response => {
            vm.products = response.data
        })
        .catch(console.error)
    }
    vm.addToCart = function (item) {
        vm.cart.includes(item) ?
            vm.cart[vm.cart.indexOf(item)].quantity++ :
            vm.cart.push(item)
    }
}

angular
    .module('app')
    .controller('SpikeController', ['$http', SpikeController])