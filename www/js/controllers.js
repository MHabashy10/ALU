angular.module('app.controllers', [])

  .controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('loginAademicAdvisorCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$rootScope',
    function ($scope, $stateParams, apiService, $state, $rootScope) {
      $scope.AdInfo = {};
      $scope.login = function () {
        apiService.loginAdv($scope.AdInfo)
          .then(function name(response) {
            if (response.data.error) {
              alert(response.data.error);
            } else {
              $rootScope.advisor = response.data.advisor;
              $state.go('menu.welcome');
            }
          }).catch(function name(error) {
            alert(error.data);
          })
      }

    }])


  .controller('signupCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$rootScope',
    function ($scope, $stateParams, apiService, $state, $rootScope) {
      $scope.AdInfo = {};

      $scope.signUp = function () {
        apiService.signUpAdv($scope.AdInfo)
          .then(function name(response) {
            if (response.data.error) {
              alert(response.data.error);
            } else {
              $rootScope.advisor = response.data.advisor;
              $state.go('menu.welcome');
            }
          }).catch(function name(error) {
            alert(error.data);
          })
      }

    }])



  .controller('addNewStudentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('addSubjectCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('studentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {

      $scope.student = $stateParams.student;
    }])

  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('welcomeStudentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('checkScheduleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('PlanForStudentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('editStudentCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {

      $scope.student = $stateParams.student;

      $scope.save = function (student) {
        //menu.student()
        $ionicLoading.show();
        apiService.editStu(student).then(function (response) {

          $ionicLoading.hide();
          if (response.data[0]) {
            $state.go('menu.student', { student: $scope.student }, {reload: true});
          } else {
            alert(response.data.error || "Unexpected error please try again!");
          }

        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })
      }
    }])


  .controller('addSubject2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('scheduleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('modifyScheduleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('myStudentsCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$rootScope', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $rootScope, $ionicLoading) {
      $scope.myStudents = [];

      $ionicLoading.show();

      apiService.getMyStudents($rootScope.advisor.Aca_id)
        .then(function (response) {

          $ionicLoading.hide();
          $scope.myStudents = response.data.students;

        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })
    }])

  .controller('planForAcademicAdvisorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])
