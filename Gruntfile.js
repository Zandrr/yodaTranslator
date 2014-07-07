module.exports = function(grunt){

grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['sass']);

grunt.initConfig({
  sass: {                             
    dist: {                            
      options: {                     
        style: 'expanded'
      },
      // files: {                        
      //   './public': './public/sass/spinner.scss'       
      // }
    }
  }
});
};