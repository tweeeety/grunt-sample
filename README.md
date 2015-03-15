# grunt-sample
this is grunt base sample.

## install Node.js
##### homebrew install
```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

##### Node.js(npm) install
```bash
$ brew install node
```

## grunt-cli install
```
$ npm install -g grunt-cli
```

## initialize project
```
$ cd [path_to_projekt_dir]

$ npm init
```

###### package.json sample
```javascript
{
  "name": "grunt-sample",
  "version": "1.0.0",
  "description": "grunt base sample.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/tweeeety/grunt-sample.git"
  },
  "author": "tweeeety",
  "license": "(BSD) MIT",
  "bugs": {
    "url": "https://github.com/tweeeety/grunt-sample/issues"
  },
  "homepage": "https://github.com/tweeeety/grunt-sample"
}
```

## install grunt and grunt plugin
##### grunt
```bash
$ npm install grunt --save-dev
```

##### grunt plugin
```
$ npm install grunt-contrib-uglify grunt-contrib-watch --save-dev
```

## setting grant task
```
$ vim Gruntfile.js
```

###### Gruntfile.js sample
```javascript
module.exports = function(grunt) {
  // Gruntの設定
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // 各タスクの設定
  grunt.initConfig({
    uglify : {
      main : {
        files : {
          'js/sample.min.js' : ['js/sample.js']
        }
      }
    },
    watch: {
      styles: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // defaultタスクの設定
  grunt.registerTask('default', ['uglify', 'watch']);
};
```

## exec grunt
##### exec default tasks
```
$ grunt
```
##### exec task
```
$ grunt watch
```

