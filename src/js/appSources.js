'use strict';

angular.module('appSources', [
  'ui.router',
  'ui.bootstrap',
  'angular-loading-bar',
  'ngAnimate'
  ,
  'auth0', 'angular-storage', 'angular-jwt'
])
.config(function (authProvider) {
  authProvider.init({
    domain: 'pavelcreator.auth0.com',
    clientID: 'MofyQPDJykKQ62FM8ckEs03b2I2u2hzZ'
  });

  authProvider.on('loginSuccess', function ($location, profilePromise, idToken, store) {
    console.log("Login Success");
    profilePromise.then(function (profile) {
      store.set('profile', profile);
      store.set('token', idToken);
    });
    $location.path('/');
  });

  authProvider.on('loginFailure', function () {
    // Error Callback
  });


})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});