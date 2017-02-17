module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            sitecss: {
                files: {
                    'wwwroot/public/dist/assets/css/styles-1.0.0.min.css': [
                        'css/bootstrap.min.css',
                        'css/font-awesome.min.css',
                        'css/css/pe-icon-7-stroke.css',
                        'css/owl.carousel.css',
                        'css/animate.css',
                        'css/style.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'js/jquery.min.js',
                    'js/bootstrap.min.js',
                    'js/owl.carousel.min.js',
                    'js/jquery.counterup.min.js',
                    'js/wow.min.js',
                    'js/jquery.nav.js',
                    'js/smoothscroll.js',
                    'js/app.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'wwwroot/app/global-azure-bootcamp.js',
                    'wwwroot/app/routes.js',
                    'wwwroot/app/controller/content-controller.js',
                ],
                dest: 'wwwroot/public/dist/assets/js/scripts-1.0.0.min.js'
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd:'fonts',
                    src: '**',
                    dest: 'wwwroot/public/dist/assets/fonts',
                    flatten: false,
                }],
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: '**',
                    dest: 'wwwroot/public/dist/assets/imgs',
                    flatten: false,
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'wwwroot/public/dist/pages/content.html': 'wwwroot/public/dev/pages/content.html'
                }
            }
        }
    });

    grunt.registerTask("dist", [
        'cssmin',
        'uglify',
        'copy',
        'htmlmin'
    ]);

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};



  