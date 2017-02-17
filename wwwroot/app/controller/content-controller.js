(function () {
    'use strict'

    angular.module('gab').controller('contentCtrl', ContentCtrl);

    ContentCtrl.$inject = ['$scope', '$location']

    function ContentCtrl($scope, $location) {
        var vm = this;
        vm.scroll = scrollTo;
        vm.speakers = [];
        vm.schedule = [];
        vm.partners = [];
        activate();


        function activate() {

            vm.speakers =
                [

                    {
                        name: 'Andre Baltieri',
                        description: 'Microsoft MVP e CIO do balta.io',
                        social:
                        [
                            { blog: 'http://balta.io/blog/', icon: 'fa fa-rss' },
                            { twitter: 'https://twitter.com/andrebaltier', icon: 'fa fa-twitter' },
                            { github: 'https://github.com/andrebaltieri/', icon: 'fa fa-github' }
                        ]
                    },

                    {
                        name: 'José Roberto Araujo',
                        description: 'Arquiteto de Soluções',
                        social:
                        [
                            { link: 'http://www.jrobertoaraujo.com', icon: 'fa fa-rss' },
                            { link: 'https://twitter.com/jrobertofaraujo', icon: 'fa fa-twitter' },
                            { link: 'https://github.com/jr-araujo', icon: 'fa fa-github' }
                        ]
                    },
                    {
                        name: 'Andre Baltieri',
                        description: 'Microsoft MVP e CIO do balta.io',
                        social:
                        [
                            { blog: 'http://balta.io/blog/', icon: 'fa fa-rss' },
                            { twitter: 'https://twitter.com/andrebaltier', icon: 'fa fa-twitter' },
                            { github: 'https://github.com/andrebaltieri/', icon: 'fa fa-github' }
                        ]
                    },

                    {
                        name: 'José Roberto Araujo',
                        description: 'Arquiteto de Soluções',
                        social:
                        [
                            { link: 'http://www.jrobertoaraujo.com', icon: 'fa fa-rss' },
                            { link: 'https://twitter.com/jrobertofaraujo', icon: 'fa fa-twitter' },
                            { link: 'https://github.com/jr-araujo', icon: 'fa fa-github' }
                        ]
                    },
                    {
                        name: 'Andre Baltieri',
                        description: 'Microsoft MVP e CIO do balta.io',
                        social:
                        [
                            { blog: 'http://balta.io/blog/', icon: 'fa fa-rss' },
                            { twitter: 'https://twitter.com/andrebaltier', icon: 'fa fa-twitter' },
                            { github: 'https://github.com/andrebaltieri/', icon: 'fa fa-github' }
                        ]
                    },

                    {
                        name: 'José Roberto Araujo',
                        description: 'Arquiteto de Soluções',
                        social:
                        [
                            { link: 'http://www.jrobertoaraujo.com', icon: 'fa fa-rss' },
                            { link: 'https://twitter.com/jrobertofaraujo', icon: 'fa fa-twitter' },
                            { link: 'https://github.com/jr-araujo', icon: 'fa fa-github' }
                        ]
                    }
                ];

            vm.schedule =
                [
                    { talk: 'Credenciamento - Welcome Coffe', time: '8:00 - 9:00' },
                    { talk: 'Azure Functions', time: '8:00 - 9:00' },
                    { talk: 'Azure DocumentDB', time: '9:00 - 10:00' },
                    { talk: 'publicando Apis', time: '10:00 - 11:00' },
                    { talk: 'continuos delivery azure e github', time: '11:00 - 12:00' },
                    { talk: 'Almoço', time: '12:00 - 13:00' },
                ];

           vm.partners = 
           [
               {img:'../../../images/placeholder.png',site:''},
               {img:'../../../images/placeholder.png',site:''},
               {img:'../../../images/placeholder.png',site:''},
               {img:'../../../images/placeholder.png',site:''},
               {img:'../../../images/placeholder.png',site:''},
               {img:'../../../images/placeholder.png',site:''}
           ]

        }

        function scrollTo(id) {

            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 1000);

        }
    }
})();