app.controller('JeffController', function($mdBottomSheet, $mdSidenav){
  console.log("JeffController running");
  var self = this;
  self.share = function(){
    console.log("click works");
    $mdBottomSheet.show({
      templateUrl: "../../views/templates/bottomsheet.html",
      controller: 'JeffController',
      parent: angular.element(document.getElementById('content'))
    })
  }
  self.toggleMenu = function(){
    console.log("clicked");
    $mdSidenav("left").toggle()
    .then(function(){
      console.log('toggled');
   });
  }
});
