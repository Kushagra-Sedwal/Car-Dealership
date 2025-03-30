angular.module('myApp', [])
.controller('DropdownCtrl', function ($scope) {
    $scope.cars = [
        { 
            name: "Porsche 911", 
            colors: ["Red", "White", "Black"], 
            price: 22700000, 
            accessories: [
                { name: "Alloy Wheels", price: 1100000 },
                { name: "Tinted Windows", price: 25000 },
                { name: "Sound System", price: 750000 },
                { name: "Dashcam", price: 45000 },
                { name: "Leather Seats", price: 350000 }
            ]
        },
        { 
            name: "BMW M5", 
            colors: ["Blue", "Grey", "White"], 
            price: 17000000, 
            accessories: [
                { name: "Alloy Wheels", price: 1100000 },
                { name: "Tinted Windows", price: 25000 },
                { name: "Sunroof", price: 800000 },
                { name: "Sound System", price: 750000 },
                { name: "Dashcam", price: 45000 },
                { name: "Leather Seats", price: 350000  }
            ]
        },
        { 
            name: "BMW M340i", 
            colors: ["Grey", "Blue", "Black"], 
            price: 9000000, 
            accessories: [
                { name: "Alloy Wheels", price: 1100000 },
                { name: "Tinted Windows", price: 25000 },
                { name: "Sunroof", price: 800000 },
                { name: "Sound System", price: 750000 },
                { name: "Dashcam", price: 45000 },
                { name: "Leather Seats", price: 350000  }
            ]
        },
        { 
            name: "Range Rover Velar", 
            colors: ["White", "Blue", "Black"], 
            price: 12000000, 
            accessories: [
                { name: "Alloy Wheels", price: 1100000 },
                { name: "Tinted Windows", price: 25000 },
                { name: "Sunroof", price: 800000 },
                { name: "Sound System", price: 750000 },
                { name: "Dashcam", price: 45000 },
                { name: "Leather Seats", price: 350000  }
            ]
        },
        { 
            name: "Ferrari F8", 
            colors: ["Red", "White", "Black"], 
            price: 45000000, 
            accessories: [
                { name: "Alloy Wheels", price: 1100000 },
                { name: "Tinted Windows", price: 25000 },
                { name: "Sunroof", price: 800000 },
                { name: "Sound System", price: 750000 },
                { name: "Dashcam", price: 45000 },
                { name: "Leather Seats", price: 350000  }
            ]
        },
        { 
            name: "G-wagon", 
            colors: ["Grey", "Blue", "Silver"], 
            price: 50000000, 
            accessories: [
                { name: "Alloy Wheels", price: 1100000 },
                { name: "Tinted Windows", price: 25000 },
                { name: "Sunroof", price: 800000 },
                { name: "Sound System", price: 750000 },
                { name: "Dashcam", price: 45000 },
                { name: "Leather Seats", price: 350000  }
            ]
        },
                    
    ];

    $scope.selectedColor = null;
    $scope.selectedCar = null;
    $scope.calculateTotalPrice = function () {
        var totalPrice = $scope.selectedCar.price;
        angular.forEach($scope.selectedCar.accessories, function (accessory) {
            if (accessory.selected) {
                totalPrice += accessory.price;
            }
        });
        return totalPrice;
    };
});
