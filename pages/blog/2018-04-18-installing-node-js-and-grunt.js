import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
npm config set proxy http://proxy.example.org:8080
npm config set https-proxy http://proxy.example.org:8080
`.trim();

const code2 = `
npm install -g grunt-cli
`.trim();


const code3 = `
npm init
`.trim();

const code4 = `
{
  "name": "demo-project",
  "version": "0.0.1",
  "author": "Jennifer Tesolin"
}
`.trim();

const code5 = `npm install grunt --save-dev`.trim();

const code6 = `
"devDependencies": {
    "grunt": "~0.4.1"
}
`.trim();

const code7 = `npm install grunt-contrib --save-dev`.trim();

const code8 = `module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

    });

    // Load call for plugins

    // Default task(s).

};`.trim();

const code9 = `
module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded', /**human readable */
          sourcemap: 'none',
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },
    csslint: {
        strict: {
            src: ['css/style.css']
        },
        lax: {
            options: {
                csslintrc: '.csslintrc' //just check for css errors that would stop code
            },
            src: ['css/style.css']
        }
    },
    concat: {
      css: {
          src: ['node_modules/normalize.css/normalize.css', 'css/style.css'],
          dest: 'css/style.css'
      }
    },
    postcss: {
      options: {
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'css/style.css',
        dest: 'css/style.css'
      }

    },
    cssmin : {
        css:{
            src: 'css/style.css',
            dest: 'css/style.min.css'
        }
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'js/scripts.min.js': ['js/*.js', '!js/*.min.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/*.js', '!js/*.min.js'],
      options: {
        jshintrc: '.jshintrc',
        ignores: '.jshintignore'
      },
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/',      // Src matches are relative to this path.
            src: ['**/*.html'], // Actual pattern(s) to match.
            dest: 'dist/',   // Destination path prefix.
          },
        ],
      }
    },

    imagemin: {
        png: {
          options: {
            optimizationLevel: 7
          },
          files: [
            {
              expand: true,
              cwd: 'img/',
              src: ['**/*.png'],
              dest: 'img/compressed/',
              ext: '.png'
            }
          ]
        },
        jpg: {
          options: {
            progressive: true
          },
          files: [
            {
              expand: true,
              cwd: 'img/',
              src: ['**/*.jpg'],
              dest: 'img/compressed/',
              ext: '.jpg'
            }
          ]
        }
      },
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
              name: 'header-320',
              width: 320
            },
            {
              name: 'header-640',
              width: 640
            },
            {
              name: 'header-768',
              width: 768
            },
            {
              name: 'header-1024',
              width: 1024
            },
            {
              name: 'header-1366',
              width: 1366
            },
            {
              name: 'header-1920',
              width: 1920
            },
            {
              name: "header-2560",
              width: 2560
          }]
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**.{jpg,gif,png}'],
          dest: 'img/resize'
        }]
      }
  },
  clean: {
    build: {
      src: [ 'build' ]
    },
    stylesheets: {
      src: [ 'build/**/*.css', '!build/application.css' ]
    },
    scripts: {
      src: [ 'build/**/*.js', '!build/application.js' ]
    },
    images:{
      src: [ 'img/compressed/**/', 'img/resize/**/']
    }
  },
  watch: {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['jshint'],
    },
    css: {
      files: ['sass/*.scss'],
      tasks: ['sass', 'csslint:lax', 'postcss', 'concat:css']
    },
    js: {
      files: ['js/*.js','!js/*.min.js'],
      tasks: ['jshint'/*,'concat:js','uglify'*/]
    }
  },
  copy: {
      build: {
        cwd: 'source',
        src: [ '**' ],
        dest: 'build',
        expand: true
      },
    }

  }); //end grunt config

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('images', ['clean:images', 'responsive_images','imagemin']);
  grunt.registerTask('css', ['sass', 'csslint:lax', 'postcss','concat:css']);
  grunt.registerTask('jscript', ['jshint']);
  grunt.registerTask('dev', ['jscript', 'css','watch']);
  grunt.registerTask('build', ['clean', 'copy']);

};
`.trim();

const code10 = `
npm uninstall jshint
npm cache clean -f
npm install --save-dev jshint
`.trim();

const blogLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
}

export default function InstallNodeGrunt() {
    const POST_TITLE = 'Installing Node JS and Grunt';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                
                <p>This tutorial focuses on installing the platform, and provides resources for using Grunt.</p>
                <p><em>This was originally from May 8, 2013 and has been re-written for the latest version of Node and Grunt.</em></p>

                <h2>Step 1: Install Node</h2>
                <p><b>If you installed with homebrew, skip to Proxy or Grunt step(s)</b></p> {/* TODO link to homebrew post  */}
                <p>Otherwise, Download the latest stable binary from <a className="underline focus:ring-2" href="https://nodejs.org/en/download/" rel="nofollow noreferrer">nodejs.org</a>. On production servers is recommended to use the latest STABLE version. The default settings will be fine.</p>
                <Image
                    loader={blogLoader}
                    src="/nodejs-home_hckxx5.png"
                    alt=""
                    width={440}
                    height={368}
                />
                <p>Verify your path as per installer message: Make sure that <strong>/usr/local/bin</strong> is in your $PATH.</p>
                <Image
                    loader={blogLoader}
                    src="/node_installer_aargfq.png"
                    alt=""
                    width={400}
                    height={281}
                />
                <p>Note: I found this Stackoverflow post useful: <a className="underline focus:ring-2" href="https://stackoverflow.com/questions/42323485/set-environment-variables-on-mac-os-x-sierra#42323635" rel="nofollow noreferrer">Set environment variables: bash profile</a>. Please note to check that the path in the installer is shown in case it differs between versions. For my install, the path was correctly set.</p>

                <h2>Step 2: Use a proxy with node</h2>
                <p>If you require the use of a proxy with node, you set it with the below (this to this post <a href="https://jjasonclark.com/how-to-setup-node-behind-web-proxy/" rel="nofollow noreferrer">How to setup Node.js and Npm behind a corporate web proxy</a>).</p>
                <PrismCode
                    code={code}
                        language="shell-session"
                    plugins={["line-numbers"]}
                />
                <h2>Step 3: Grunt set-up</h2>
                <h3>Installing Grunt on your machine globally.</h3>
                <p>This section uses grunt <em>0.4.x</em></p>
                <p>Grunt JS is installed by what NodeJS refers to as NPM, or Node Package Manager. To install Grunt from NPM, you will need to use the command line.</p>
                <p>Type following command into the terminal:</p>
                <PrismCode
                    code={code2}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h3>Create a package.json file</h3>
                <p>Go into your project directory, and run the below command. You can use the default settings, as the text file will be edited. My output is below.</p>
                <PrismCode
                    code={code3}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />
                <Image
                    loader={blogLoader}
                    src="/node-npm-init_swbv7j.png"
                    alt=""
                    width={400}
                    height={233}
                    />
                <p>Open your favorite text editor, and edit the file &quot;package.json&quot; replace the text so it will fit your project:</p>
                <PrismCode
                    code={code4}
                    language="json"
                    plugins={["line-numbers"]}
                />

                <p>Now, using the terminal, run the below command in your project directory:</p>
                <PrismCode
                    code={code5}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>This will install grunt locally in your package folder. If you open your package.json, you will find a new section added:</p>
                <PrismCode
                    code={code6}
                    language="json"
                    plugins={["line-numbers"]}
                />

                <h3>Associating plugins with Grunt/package.json</h3>
                <p>Run the below command to use the plugin npm.</p>
                <PrismCode
                    code={code7}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h3>Create your grunt file</h3>
                <p>In your text editor, create a file called &quot;Gruntfile.js&quot; and save this into your project directory. A sample copy is below:</p>
                <PrismCode
                    code={code8}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
                
                <h3>Sample Grunt file</h3>
                <p>TThe various commands you can run in your terminal are as follows:</p>
                <ol className="list-decimal list-inside m-2">
                    <li><kbd>grunt images</kbd>: Will make your images web ready, and create sizes for different screens.</li>
                    <li><kbd>grunt css</kbd>: will convert sass to css, then run through a linter, post css and finally concatenate your css files</li>
                    <li><kbd>grunt jscript</kbd>: runs jshint</li>
                    <li><kbd>grunt dev</kbd>: will run the <code>jscript</code>, and <code>css</code> grunt commands, and will open up <code>watch</code> to monitor changes.</li>
                    <li><kbd>grunt build</kbd>: will run everything and create a build you can use for production.</li>
                </ol>
                <PrismCode
                    code={code9}
                    language="javascript"
                    plugins={["line-numbers"]}
                />

                <h2>Re-install devDependencies or dependencies</h2>
                <p>With the new package.lock file, npm update may not get the latest version if its a major update. Use the below to pick up the latest package. With Thanks to stack overflow (please let me know if you see the post, it was deleted from my notes).</p>
                <PrismCode
                    code={code10}
                    language="shell-script"
                    plugins={["line-numbers"]}
                />


                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://gruntjs.com/getting-started" rel="nofollow noreferrer">Grunt: Getting started documentation</a></li>
                    <li><a className="underline focus:ring-2" href="https://gruntjs.com/getting-started#installing-the-cli" rel="nofollow noreferrer">Grunt: Installing the CLI</a></li>
                    <li><a className="underline focus:ring-2" href="https://gruntjs.com/getting-started#preparing-a-new-grunt-project" rel="nofollow noreferrer">Preparing a new Grunt Package</a></li>
                    <li><a className="underline focus:ring-2" href="https://gruntjs.com/sample-gruntfile" rel="nofollow noreferrer">Gruntjs.com&apos;s Sample Grunt File</a>.</li>
                    <li><a className="underline focus:ring-2" href="https://tutsplus.com/tutorials/search/grunt" rel="nofollow noreferrer">Tutsplus.com&apos;s Grunt tutorials</a></li>
                    <li><a className="underline focus:ring-2" href="https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt" rel="nofollow noreferrer">A Simple Guide to Getting Started With Grunt ― Scotch</a></li>
                    <li><a className="underline focus:ring-2" href="https://chrome.google.com/webstore/detail/grunt-devtools/fbiodiodggnlakggeeckkjccjhhjndnb?hl=en" rel="nofollow noreferrer">Google Chrome Grunt dev tools.</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.justinmccandless.com/post/a-tutorial-for-getting-started-with-grunt/" rel="nofollow noreferrer">A tutorial for getting started with Grunt</a></li>
                    <li><a className="underline focus:ring-2" href="https://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856" rel="nofollow noreferrer">Meet Grunt: The Build Tool for JavaScript</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20170606003354/http://dailyjs.com/post/backbone-tutorial-1" rel="nofollow noreferrer">DailyJS: Backbone.js Tutorial: Build Environment</a></li>
                </ul>
            </section>
        </Layout>
    )
}
