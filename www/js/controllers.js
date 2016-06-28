angular.module('starter.controllers', [])

.controller('AccueilCtrl', function($scope) {
  
})

.controller('PbVehicCtrl', function($scope) {

})

.controller('SaisieKMCtrl', function($scope) {

})

.controller('ReportingCtrl', function($scope) {
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtnbxsLJdtnrWA1xqYTBBdQ1NXgKXPf7Q",
    authDomain: "applikmvehic.firebaseapp.com",
    databaseURL: "https://applikmvehic.firebaseio.com/",
    storageBucket: "applikmvehic.appspot.com",
  };
  firebase.initializeApp(config);

  var donnees;

  firebase.database().ref('/users/').on('value', function(data){
    donnees = data.val();
    //utilisateurs = JSON.stringify(data.val());
    console.log(donnees);
  });

  donnees = [ {"Nom": "Billy" , "Prenom": "Bob"} ,  {"Nom": "Marcel", "Prenom": "Paul"} ];

  $scope.users = donnees;

})

.controller('ParamAppliCtrl', function($scope) {

})

.controller('CheckVehicCtrl', function($scope) {

})

;
