angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.navBar.alignTitle('center')
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('home', {
        url: '/page1',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })

      .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      })

      .state('signup', {
        url: '/page6',
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      })

      .state('menu.addNewStudent', {
        url: '/page7',
        views: {
          'side-menu21': {
            templateUrl: 'templates/addNewStudent.html',
            controller: 'addNewStudentCtrl'
          }
        }
      })

      .state('menu.addSubject', {
        url: '/page8',
        views: {
          'side-menu21': {
            templateUrl: 'templates/addSubject.html',
            controller: 'addSubjectCtrl'
          }
        }
      })

      .state('menu.student', {
        url: '/page10',

        views: {
          'side-menu21': {
            templateUrl: 'templates/student.html',
            controller: 'studentCtrl'
          }
        },
        params: { student: null }
      })

      .state('login', {
        url: '/page11',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('welcomeStudent', {
        url: '/page12',
        templateUrl: 'templates/welcomeStudent.html',
        controller: 'welcomeStudentCtrl'
      })

      .state('checkSchedule', {
        url: '/page13',
        templateUrl: 'templates/checkSchedule.html',
        controller: 'checkScheduleCtrl'
      })

      .state('PlanForStudent', {
        url: '/page15',
        templateUrl: 'templates/PlanForStudent.html',
        controller: 'PlanForStudentCtrl'
      })

      .state('menu.student.editStudent', {
        url: '/page17',
        views: {
          'side-menu21@menu': {
            templateUrl: 'templates/editStudent.html',
            controller: 'editStudentCtrl',
          }
        },
        params: { student: null }
      })

      .state('loginAademicAdvisor', {
        url: '/page23',
        templateUrl: 'templates/loginAademicAdvisor.html',
        controller: 'loginAademicAdvisorCtrl'
      })

      .state('addSubject2', {
        url: '/page24',
        templateUrl: 'templates/addSubject2.html',
        controller: 'addSubject2Ctrl'
      })

      .state('menu.welcome', {
        url: '/page26',
        views: {
          'side-menu21': {
            templateUrl: 'templates/welcome.html',
            controller: 'welcomeCtrl'
          }
        }
      })

      .state('menu.schedule', {
        url: '/page27',
        views: {
          'side-menu21': {
            templateUrl: 'templates/schedule.html',
            controller: 'scheduleCtrl'
          }
        }
      })

      .state('menu.modifySchedule', {
        url: '/page18',
        views: {
          'side-menu21': {
            templateUrl: 'templates/modifySchedule.html',
            controller: 'modifyScheduleCtrl'
          }
        },
        params: { student: null }
      })

      .state('menu.myStudents', {
        url: '/page14',
        cache: false,
        views: {
          'side-menu21': {
            templateUrl: 'templates/myStudents.html',
            controller: 'myStudentsCtrl'
          }
        }
      })

      .state('menu.planForAcademicAdvisor', {
        url: '/page9',
        views: {
          'side-menu21': {
            templateUrl: 'templates/planForAcademicAdvisor.html',
            controller: 'planForAcademicAdvisorCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/page1')


  });
