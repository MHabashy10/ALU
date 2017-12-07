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
          url: baseUrl + 'student/stuEdit',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "StuData": StuData }

        }

        return sendReq(req);
      },
      addStu: function (StuData) {
        var req = {
          method: 'POST',
          url: baseUrl + 'student/stuAdd',
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
          url: baseUrl + 'student/stuLogin',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "StuData": StuData }

        }

        return sendReq(req);
      },
      addSub: function (SubData) {
        var req = {
          method: 'POST',
          url: baseUrl + 'subject/subAdd',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "SubData": SubData }

        }

        return sendReq(req);
      },
      getAllSubjects: function () {
        var req = {
          method: 'POST',
          url: baseUrl + 'subject/allSubjects',
          headers: {
            'Content-Type': "application/json"
          }

        }

        return sendReq(req);
      },
      getMySubjects: function (stuId) {
        var req = {
          method: 'POST',
          url: baseUrl + 'subject/mySubjects',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "StuId": stuId }

        }

        return sendReq(req);
      },
      reqStuEdit: function (ReqData) {
        var req = {
          method: 'POST',
          url: baseUrl + 'request/reqStuEdit',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "ReqData": ReqData }

        }

        return sendReq(req);
      },
      reqApprove: function (ReqData) {
        var req = {
          method: 'POST',
          url: baseUrl + 'request/reqApprove',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "ReqData": ReqData }

        }

        return sendReq(req);
      },
      reqDecline: function (ReqData) {
        var req = {
          method: 'POST',
          url: baseUrl + 'request/reqDecline',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "ReqData": ReqData }

        }

        return sendReq(req);
      },
      subStuEdit: function name(SubStuData) {

        var req = {
          method: 'POST',
          url: baseUrl + 'subject/subStuEdit',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "SubStuData": SubStuData }

        }

        return sendReq(req);

      },

      getMyRequests: function (AcaId) {

        var req = {
          method: 'POST',
          url: baseUrl + 'request/myRequests',
          headers: {
            'Content-Type': "application/json"
          },
          data: { "AcaId": AcaId }

        }

        return sendReq(req);

      }





    }


  }])

  .service('BlankService', [function () {

  }]);
