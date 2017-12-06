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
          url: baseUrl + 'advisor/advSignUp',

          headers: {
            'Content-Type': "application/json"
          },
          data: { "AdvData": AdvData }
        }

        return sendReq(req);

      },

      loginAdv: function (AdvData) {

        var req = {
          method: 'POST',
          url: baseUrl + 'advisor/advLogin',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "AdvData": AdvData }
        }

        return sendReq(req);
      },
      getMyStudents: function (advId) {
        var req = {
          method: 'POST',
          url: baseUrl + 'advisor/myStudents',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "AdvId": advId }

        }

        return sendReq(req);
      },
      editStu: function (StuData) {
        var req = {
          method: 'POST',
          url: baseUrl + '/student/stuEdit',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "StuData": StuData }

        }

        return sendReq(req);
      },
      addStudent: function (StuData) {
        var req = {
          method: 'POST',
          url: baseUrl + '/student/stuAdd',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "StuData": StuData }

        }

        return sendReq(req);
      },
      loginStu: function (StuData) {
        var req = {
          method: 'POST',
          url: baseUrl + '/student/stuLogin',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "StuData": StuData }

        }

        return sendReq(req);
      }





    }


  }])

  .service('BlankService', [function () {

  }]);
