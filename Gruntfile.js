module.exports = grunt => {
    const sass = require('sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
    
    grunt.loadNpmTasks('grunt-sass');
    
    grunt.registerTask('default', ['sass']);
};