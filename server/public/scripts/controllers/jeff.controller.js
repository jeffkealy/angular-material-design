app.controller('JeffController', function($mdBottomSheet){
  console.log("JeffController running");
  var self = this;
  self.share = function(){
    console.log("click works");
    $mdBottomSheet.show({
      templateUrl: "../../views/templates/bottomsheet.html",
      controller: 'JeffController' 
    })

  }
});
