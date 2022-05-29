module.exports = function(grunt) {
  const DEV_PATH = "/home/foundry/foundrydata/Data/systems/anoxis-engine/";

  // Configuration
  grunt.initConfig({
    // grunt-contrib-copy
    copy: {
      dev: {
        files: [
          {expand: true, src: "lang/", dest: DEV_PATH},
          {expand: true, src: "anoxis-engine.css", dest: DEV_PATH},
          {expand: true, src: "system.json",       dest: DEV_PATH},
          {expand: true, src: "template.json",     dest: DEV_PATH},
          {expand: true, src: "module/**",         dest: DEV_PATH},
//        {expand: true, src: "templates/**", dest: DEV_PATH},
          {expand: true, src: "anoxis-engine.js",  dest: DEV_PATH}
        ]
      }
    },

    // grunt-contrib-less
    less: {
      main: {
        options: {
          paths: ["less/"],
          compress: true
        },
        files: {
          "anoxis-engine.css": "less/anoxis-engine.less"
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-less");

  // Tasks
  grunt.registerTask("default", ["less", "copy:dev"]);
};
