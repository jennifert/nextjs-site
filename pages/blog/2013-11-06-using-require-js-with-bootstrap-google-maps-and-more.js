import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
<script data-main="js/config" src="js/require.js"></script>
`.trim();

const code2 = `
require.config({
    paths: {
        'jquery': 'http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.8.3',
        'jquery.bootstrap': 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
        'async': 'async',
        'goog': 'goog',
        'propertyParser' : 'propertyParser'
    },
    shim: {
        'jquery.bootstrap': ['jquery']
    }
});
`.trim();

const code3 = `
//require.config code from above here
require(['jquery','jquery.bootstrap','goog!maps,3,other_params:sensor=false'], function($) {
    //jquery code will be moved here
});
`.trim();

const code4 = `
var myLatlng = new google.maps.LatLng(43.65644,-79.380686);

    $(function() {

        //start of modal google map
      $('#mapmodals').on('shown.bs.modal', function () {
        var mapOptions = {
              center: myLatlng,
              zoom: 14,
              mapTypeControl: false,
              center:myLatlng,
              panControl:false,
              rotateControl:false,
              streetViewControl: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map_canvas"),
                mapOptions);

            var contentString = '<div id="mapInfo">'+
            '<p><strong>Cineplex Odeon Yong & Dundas</strong><br>'+
            'Suite 402<br>10 Dundas Street East<br>' +
            'Toronto, ON<br>'+
            'P: (416) 977-9262</p>'+
            '<a href="http://www.google.ca/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CF4QFjAA&url=http%3A%2F%2Fwww.cineplex.com%2FTheatres%2FTheatreDetails%2FCineplex-Odeon-Yonge-Dundas-Cinemas-formerly-AMC-.aspx&ei=wVxnUdfWM8GtqgGc5YGoCQ&usg=AFQjCNFrLpCFDXGjtGx6y1GSkSNvhdrMpA&bvm=bv.45107431,d.aWM" target="_blank">Now Playing</a>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Cineplex Odeon Yong & Dundas",
                  maxWidth: 200,
                  maxHeight: 200
          });


          google.maps.event.addListener(marker, 'click', function() {
             infowindow.open(map,marker);
          });

          google.maps.event.addDomListener(window, 'load');
          google.maps.event.trigger(map, "resize");
          map.setCenter(myLatlng);
      });
      //end of modal google map
    }); //end jquery functions
`.trim();

const code5 = `
require.config({
    paths: {
        'jquery': 'https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.8.3',
        'jquery.bootstrap': 'https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
        'async': 'async',
        'goog': 'goog',
        'propertyParser' : 'propertyParser'
    },
    shim: {
        'jquery.bootstrap': ['jquery']
    }
});

require(['jquery','jquery.bootstrap','goog!maps,3'], function($) {
     var myLatlng = new google.maps.LatLng(43.65644,-79.380686);

    $(function() {

        //start of modal google map
      $('#mapmodals').on('shown.bs.modal', function () {
        var mapOptions = {
              center: myLatlng,
              zoom: 14,
              mapTypeControl: false,
              center:myLatlng,
              panControl:false,
              rotateControl:false,
              streetViewControl: false,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map_canvas"),
                mapOptions);

            var contentString = '<div id="mapInfo">'+
            '<p><strong>Cineplex Odeon Yong & Dundas</strong><br>'+
            'Suite 402<br>10 Dundas Street East<br>' +
            'Toronto, ON<br>'+
            'P: (416) 977-9262</p>'+
            '<a href="http://www.google.ca/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CF4QFjAA&url=http%3A%2F%2Fwww.cineplex.com%2FTheatres%2FTheatreDetails%2FCineplex-Odeon-Yonge-Dundas-Cinemas-formerly-AMC-.aspx&ei=wVxnUdfWM8GtqgGc5YGoCQ&usg=AFQjCNFrLpCFDXGjtGx6y1GSkSNvhdrMpA&bvm=bv.45107431,d.aWM" target="_blank">Now Playing</a>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Cineplex Odeon Yong & Dundas",
                  maxWidth: 200,
                  maxHeight: 200
          });


          google.maps.event.addListener(marker, 'click', function() {
             infowindow.open(map,marker);
          });

          google.maps.event.addDomListener(window, 'load');
          google.maps.event.trigger(map, "resize");
          map.setCenter(myLatlng);
      });
      //end of modal google map
    }); //end jquery functions
});
`.trim();

// const blogLoader = ({ src, width, quality }) => {
//     return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
// }

export default function RequireJs() {
    const POST_TITLE = 'Using Require JS with Bootstrap, Google maps, and more';
    const POST_DESCRIPTION = 'This post describes how to move the previous Google Maps with bootstrap code into a "config" file for use with require JS.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Require JS is a JavaScript file and module loader. Its a great tool for including JavaScript on your website.</p>
                <p>This post describes how to move the previous Google Maps with bootstrap code into a &quot;config&quot; file for use with require JS.</p>
                <Image
                    //loader={blogLoader}
                    src="/require-js-directory-structure_mc7qfo.jpg"
                    alt="Screenshot "
                    width={306}
                    height={367}
                />

                <p>Works off previous Post: <Link
                    href="/blog/2013-11-05-bootstrap-3-and-google-maps"
                    className="underline focus:ring-2">Bootstrap 3 and Google Maps</Link> .</p>

                <h2>Step 1</h2>
                <p>First, we need to <a className="underline focus:ring-2" href="http://requirejs.org/docs/download.html#requirejs" rel="nofollow noreferrer">download the latest version</a> (at the time of writing its 2.1.9). For production, you will want the minified version.</p>

                <h2>Step 2</h2>
                <p>Check out <a className="underline focus:ring-2" href="https://github.com/millermedeiros/requirejs-plugins" rel="nofollow noreferrer">Miller Medeiros GitHub Repository</a> and download any plugins you would be interested in.</p>

                <h2>Step 3</h2>
                <p>For your script tag, you will just need:</p>
                <PrismCode
                    code={code}
                    language="html"
                    plugins={["line-numbers"]}
                />
                <p>For the &quot;data-main&quot; use the path to the javascript config file, but do not add the &quot;.js&quot; extension.</p>

                <h2>Step 4</h2>
                <p>Create a file called config.js and place in js directory. The first part of the file is configuring the locations of the files your going to use.</p>
                <p>Javascript files should be in the same directory as require.js and config.js. When referencing a path, do not add .js extension. The below is whats minimal for Google V3 with Bootstrap 3.</p>
                <PrismCode
                    code={code2}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
                <p>Shims: will make sure jquery loads before bootstrap.</p>

                <h2>Step 5</h2>
                <p>Next, you will need to &quot;require&quot; the items under your config:</p>
                <PrismCode
                    code={code3}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
                
                <h2>Step 5</h2>
                <p>Now, your code will need to be altered a bit for the jquery/bootstrap code to load maps in modal.</p>
                <PrismCode
                    code={code4}
                    language="javascript"
                    plugins={["line-numbers"]}
                />

                <h2>Completed Config.js File</h2>
                <p>The full code is below. Alternatively, you can check out my <a className="underline focus:ring-2" href="https://github.com/jennifert/JavaScript-Demos/tree/master/RequireJs" rel="nofollow noreferrer">JavaScript Repository</a> as well.</p>
                <PrismCode
                    code={code5}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
            </section>
        </Layout>
    );
}
