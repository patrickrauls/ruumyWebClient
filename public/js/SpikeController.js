function SpikeController($http) {
    const vm = this;
    vm.cart = [];
    vm.$onInit = () => {
        $http
        .get('https://ewgyjtvpbe.execute-api.us-west-2.amazonaws.com/v1/products')
        .then(response => {
            console.log(response);
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