module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "sample/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        clean: {
            dist: {
                src: ['dist/**']
            }
        },
        uglify: {
            dist: {
                options: {
                    compress: true,
                    sourceMap: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'dist',
                    ext: '.min.js'
                }]
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: '**/*.css',
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*.js',
                tasks: ["uglify:dist"]
            },
            styles: {
                files: 'src/**/*.css',
                tasks: ["cssmin:dist"]
            }
        }
    });

    grunt.registerTask('installBower', ["bower:install"]);
    grunt.registerTask('default', ["clean:dist", "bower:install", "cssmin:dist", "uglify:dist", "watch"]);
    grunt.registerTask('release', ["clean:dist", "cssmin:dist", "uglify:dist"]);
};