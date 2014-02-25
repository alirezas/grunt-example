module.exports = function(grunt) {
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			build: {
				options: {
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'id-unique': true
				},
				src: ['index.html']
			}
		},
		sass: {
			build: {
				files: {
					'assets/css/style.css': 'assets/dev/css/style.scss'
				}
			}
		},
		cssmin: {
			build: {
				src: 'assets/css/style.css',
				dest: 'assets/css/style.css'
			}
		},
		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			css: {
				files: ['assets/dev/css/*.scss'],
				tasks: ['css']
			}
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('css', ['sass', 'cssmin']);

};