const jsFiles = [
	"assets/js/main.js"
];

module.exports = function (grunt) {
	grunt.initConfig({

		// Watcher for CSS & JS development
		watch: {
			styles: {
				files: ["assets/sass/**/*"],
				tasks: ["build-css"],
				options: {
					spawn: false
				},
			},

			scripts: {
				files: ["assets/js/**/*.js"],
				tasks: ["build-js"],
				options: {
					spawn: false
				}
			}
		},

		// SASS compiler
		sass: {
			dist: {
				options: {
					style: "compressed",
					"default-encoding": "UTF-8"
				},
				files: [{
					src: "assets/sass/main.sass",
					dest: "build.css",
				}]
			}
		},

		// JS files concat settings
		concat: {
			basic: {
				src: jsFiles,
				dest: "build.js",
			}
		}
	});

	// Load NPM tasks
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-contrib-concat");

	// Register build task
	grunt.registerTask("build", ["build-css", "build-js"]);
	grunt.registerTask("build-css", ["sass"]);
	grunt.registerTask("build-js", ["concat"]);
};
