module.exports = grunt => {
    const sass = require('sass');
    const scssSrc = 'src/styles/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    scssSrc + 'global-vars.scss',
                    scssSrc + 'global-classes.scss',
                    scssSrc + 'base.scss',
                    scssSrc + 'navbar.scss',
                    scssSrc + 'main-content.scss',
                    scssSrc + 'price-tag.scss',
                    scssSrc + 'timer.scss',
                    scssSrc + 'service.scss'
                ],
                dest: 'public/styles/style.scss'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/styles/style.css': 'public/styles/style.scss'
                }
            },
            options: {
                implementation: sass,
                sourceMap: true
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('default', ['concat', 'sass']);
};