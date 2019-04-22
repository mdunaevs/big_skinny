  //var x = document.getElementById("myCheck").checked;

  var BSApp = angular.module("BSApp", []);
  BSApp.controller("myCtrl", function($scope) {
          $scope.wallets = wallets;

          $scope.filteredWallets = function () {
                  return function (p) {
                      for (var i in $scope.wallets) {
                          var show=false;
                          if ((p.type == "bi-fold") && (document.getElementById("bi-fold").checked))
                            show=true;
                          if ((p.type == "RFID") && (document.getElementById("RFID").checked))
                            show = true;
                          return show;
                      }
                  };
              };

  });

/*
  function filterInventory() {
    var filteredWallets = wallets;  //for now just return all JSON data in inventory.js

    //Max, here is where you need to put your code to filter the 965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH


    return filteredWallets;
  };

  function displayInventory() {
    var filteredInventory = filterInventory();
    $.each(filteredInventory, function (index, value) {

      $('#results').append('<div class = "row"><div class="col-sm-8">' +
      value.itemNumber + '</div><div class="col-sm-4">' + value.itemNumber +
      '</div></div>');
    });
  };

  displayInventory();
*/
