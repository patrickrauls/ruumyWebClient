function SpikeController($http) {
    const vm = this;
    vm.cart = [];
    vm.$onInit = () => {
        $http
        .get('https://4n0ta2gd99.execute-api.us-west-2.amazonaws.com/beta')
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