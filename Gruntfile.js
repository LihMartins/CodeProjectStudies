grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-cssmin");

grunt.registerTask("default", ["uglify", "cssmin"]);

grunt.initConfig({
uglify: {
    // Options for the uglify task
},
cssmin: {
    // Options for the cssmin task
}
});