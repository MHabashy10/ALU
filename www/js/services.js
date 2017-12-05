angular.module('app.services', [])

  .factory('apiService', ['$http', function ($http) {
    var baseUrl = "/api/";
    function sendReq(req) {
      return $http(req)

    }
    return {
      signUpAdv: function (AdvData) {
        var req = {
          method: 'POST',
          url: baseUrl + 'advSignUp',

          headers: {
            'Content-Type': "application/json"
          },
          data: { "AdvData": JSON.stringify(AdvData) }
        }

        return sendReq(req);

      },

      loginAdv: function (AdvData) {

        var req = {
          method: 'POST',
          url: baseUrl + 'advLogin',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "AdvData": JSON.stringify(AdvData) }
        }

        return sendReq(req);
      },
      getPlanTiers: function () {
        var req = {
          method: 'POST',
          url: '/ordering/api/getPlanTiers',
          headers: {
            'Content-Type': "application/json"
          }

        }

        return sendReq(req);
      },
      getPlans: function () {
        var req = {
          method: 'POST',
          url: '/ordering/api/getPlans',
          headers: {
            'Content-Type': "application/json"
          }

        }

        return sendReq(req);
      },
      reCaptcha: function () {
        var req = {
          method: 'POST',
          url: '/ordering/api/fetchReCaptcha',
          headers: {
            'Content-Type': "application/json"
          }

        }

        return sendReq(req);
      }





    }


  }])

  .service('BlankService', [function () {

  }]);
