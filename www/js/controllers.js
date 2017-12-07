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

  .controller('welcomeStudentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])
  .controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])
  .controller('requestsCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {
      $scope.requests = [];
    
      $ionicLoading.show();

      apiService.getMyRequests(Aca_id)
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.requests = response.data.requests;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })

    }])

  .controller('scheduleCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {
      $scope.subjects = [];
      var Stu_id = $stateParams.student.Stu_id;
      $ionicLoading.show();

      apiService.getMySubjects(Stu_id)
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.subjects = response.data.subjects;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })


    }])

  .controller('modifyScheduleCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading', '$ionicListDelegate',
    function ($scope, $stateParams, apiService, $state, $ionicLoading, $ionicListDelegate) {
      $scope.subjects = [];
      var Stu_id = $stateParams.student.Stu_id;
      $ionicLoading.show();

      apiService.getAllSubjects()
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.subjects = response.data.subjects;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })

      $scope.subStuEdit = function (Sub_id, Status) {
        var ReqData = {
          Sub_id: Sub_id,
          Stu_id: Stu_id,
          Status: Status
        }

        $ionicLoading.show();
        $ionicListDelegate.closeOptionButtons();
        apiService.subStuEdit(ReqData)
          .then(function (response) {

            $ionicLoading.hide();
            if (response.data.error) {
              alert(response.data.error);
            } else {
              alert("Subject Modification has been submitted successfully!")
            }
          }).catch(function (error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }

      $scope.checkSchedule = function () {
        $state.go("menu.schedule", { student: $stateParams.student });
      }

    }])

  .controller('loginAademicAdvisorCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$rootScope', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $rootScope, $ionicLoading) {
      $scope.AdInfo = {};
      $scope.login = function () {
        $ionicLoading.show();
        apiService.loginAdv($scope.AdInfo)
          .then(function name(response) {
            $ionicLoading.hide();
            if (response.data.error) {
              alert(response.data.error);
            } else {
              $rootScope.advisor = response.data.advisor;
              $state.go('menu.welcome');
            }
          }).catch(function name(error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }

    }])


  .controller('signupCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$rootScope', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $rootScope, $ionicLoading) {
      $scope.AdInfo = {};

      $scope.signUp = function () {
        $ionicLoading.show();
        apiService.signUpAdv($scope.AdInfo)
          .then(function name(response) {
            $ionicLoading.hide();
            if (response.data.error) {
              alert(response.data.error);
            } else {
              $rootScope.advisor = response.data.advisor;
              $state.go('menu.welcome');
            }
          }).catch(function name(error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }

    }])



  .controller('addNewStudentCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {

      $scope.student = {};

      $scope.add = function (student) {
        $ionicLoading.show();

        apiService.addStu(student)

          .then(function name(response) {

            $ionicLoading.hide();

            if (response.data.error) {

              alert(response.data.error);

            } else {

              $state.go('menu.myStudents');
            }
          }).catch(function name(error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }
    }])

  .controller('addSubjectCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {
      $scope.subject = {};

      $scope.add = function (subject) {
        $ionicLoading.show();
        apiService.addSub(subject)
          .then(function name(response) {
            $ionicLoading.hide();
            if (response.data.error) {
              alert(response.data.error);
            } else {

              $state.go('menu.planForAcademicAdvisor');
            }
          }).catch(function name(error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }

    }])

  .controller('studentCtrl', ['$scope', '$stateParams', '$ionicNavBarDelegate',
    function ($scope, $stateParams, $ionicNavBarDelegate) {

      $scope.student = $stateParams.student;
      $scope.$on('$ionicView.enter', function (e) {
        $ionicNavBarDelegate.showBar(true);
      });
    }])

  .controller('loginCtrl', ['$scope', '$stateParams', '$state', 'apiService', '$rootScope', '$ionicLoading',
    function ($scope, $stateParams, $state, apiService, $rootScope, $ionicLoading) {
      $scope.student = {};

      $scope.login = function (student) {
        $ionicLoading.show();
        apiService.loginStu(student)
          .then(function (response) {

            $ionicLoading.hide();
            if (response.data.error) {
              alert(response.data.error || "Unexpected error please try again!");

            } else {
              $rootScope.student = response.data.student;
              $state.go('welcomeStudent');
            }

          }).catch(function (error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }

    }])



  .controller('checkScheduleCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading', '$rootScope', '$ionicListDelegate',
    function ($scope, $stateParams, apiService, $state, $ionicLoading, $rootScope, $ionicListDelegate) {

      $scope.subjects = [];

      $ionicLoading.show();

      apiService.getMySubjects($rootScope.student.Stu_id)
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.subjects = response.data.subjects;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })

      $scope.reqRemove = function (Sub_id, Stu_id, Aca_id) {
        // console.log(Sub_id, Stu_id, Aca_id)
        var ReqData = {
          Sub_id: Sub_id,
          Stu_id: Stu_id,
          Aca_id: Aca_id,
          Reason: "Remove"
        }
        $ionicLoading.show();
        $ionicListDelegate.closeOptionButtons();
        apiService.reqStuEdit(ReqData)
          .then(function (response) {

            $ionicLoading.hide();
            if (response.data.error) {
              alert(response.data.error);
            } else {
              alert("Your Request has been sent to your advisor for reviewal!")
            }
          }).catch(function (error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }
    }])
  .controller('addSubject2Ctrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading', '$rootScope',
    function ($scope, $stateParams, apiService, $state, $ionicLoading, $rootScope) {
      $scope.subject = {};

      $scope.reqAdd = function (Sub_id, Stu_id, Aca_id) {
        //console.log(Sub_id, Stu_id, Aca_id);
        var ReqData = {
          Sub_id: Sub_id,
          Stu_id: Stu_id,
          Aca_id: Aca_id,
          Reason: "Add"
        }
        $ionicLoading.show();
        apiService.reqStuEdit(ReqData).then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert("Your Request has been sent to your advisor for reviewal!");
            $state.go("checkSchedule");
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })
      }

    }])


  .controller('PlanForStudentCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading', '$rootScope',
    function ($scope, $stateParams, apiService, $state, $ionicLoading, $rootScope) {
      $scope.subjects = [];

      $ionicLoading.show();

      apiService.getAllSubjects()
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.subjects = response.data.subjects;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })

    }])

  .controller('editStudentCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {

      $scope.student = $stateParams.student;
      $scope.student.oldStuId = $stateParams.student.Stu_id;

      $scope.save = function (student) {
        //menu.student()
        $ionicLoading.show();
        apiService.editStu(student)
          .then(function (response) {

            $ionicLoading.hide();
            if (response.data[0]) {
              $state.go('menu.student', { student: $scope.student }, { reload: true });
            } else {
              alert(response.data.error || "Unexpected error please try again!");
            }

          }).catch(function (error) {
            $ionicLoading.hide();
            alert(error.data);
          })
      }
    }])



  .controller('myStudentsCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$rootScope', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $rootScope, $ionicLoading) {
      $scope.myStudents = [];

      $ionicLoading.show();

      apiService.getMyStudents($rootScope.advisor.Aca_id)
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.myStudents = response.data.students;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })
    }])

  .controller('planForAcademicAdvisorCtrl', ['$scope', '$stateParams', 'apiService', '$state', '$ionicLoading',
    function ($scope, $stateParams, apiService, $state, $ionicLoading) {
      $scope.subjects = [];

      $ionicLoading.show();

      apiService.getAllSubjects()
        .then(function (response) {

          $ionicLoading.hide();
          if (response.data.error) {
            alert(response.data.error);
          } else {
            $scope.subjects = response.data.subjects;
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          alert(error.data);
        })

    }])
