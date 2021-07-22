import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
---
---
[
    {% for post in site.posts %}
    {
      "title"    : "{{ post.title }}",
      "href"     : "{{ post.url }}",
      "summary"     : "{{ post.content | strip_html | strip_newlines | truncatewords: 30 | escape }}",
      "category" : [{% for category in post.categories %}"{{ category }}",{% endfor %} null],
      "tags"     : [{% for tag in post.tags %}"{{ tag }}",{% endfor %} null],
      "date"     : "{{ post.date | date: "%b %-d, %Y" }}"
    }
    {% unless forloop.last %},{% endunless %}
    {% endfor %}
]
`.trim();

const code2 = `
<form role="search" method="get" class="navbar-form navbar-right form-inline" action="/search.html">
    <div class="form-group" id="searchdiv">
    <input type="search" id="searchbox" name="searchbox" class="form-control search" placeholder="Search ... ">
    <label class="hide">Search for:</label>
    </div>
    <button type="submit" class="btn btn-success search"> <i class="fa fa-search"></i></button>
</form>
`.trim();

const code3 = `
---
layout: default
title: Search Results
---
<h1 id="searchHeader">Search results</h1>
<noscript><p>Sorry, the current site search is only available in JavaScript. Please try this link to search from Google.</p></noscript>
<div id="buildResults"></div>
`.trim();

const code4 = `
 /*start search function;*/
var getSearchResults = function(url) {

    var count = 0;
    var searchedFor = getParameterByName('searchbox'); /*get the query parameter from search box*/
    var searchedForTest = searchedFor.toLowerCase();
    $('#searchbox').val(searchedFor); /*update input field with what was searched for*/

    $.getJSON('/search.json', function(data) {
    $('div#results').append('<section class="col-xs-12 col-sm-6 col-md-12">');
    $.each(data, function(key, val){

        /*values to variable to use more than once.*/
        var blogTitle = val.title;
        var blogCategory = val.category;
        var blogTags = val.tags;
        var blogLink = val.href;
        var blogDate = val.date;
        var blogSummary = val.summary;

        /*search array for*/
        var testCategory = $.inArray(searchedForTest, blogCategory );
        var testTags = $.inArray(searchedForTest, blogTags );

        if ( (blogTitle.toLowerCase().indexOf(searchedForTest) > -1 )  || (testCategory > -1 ) ||  (testTags > -1 ) ) {
        displyResult(blogTitle,blogCategory,blogTags,blogLink,blogDate,blogSummary);
            count++;
        } else {
            /*result not found. Do NOT increment count here.*/
        }

    }); /*end for each*/

        $('h1#searchHeader').after('<h2 class="lead"><strong class="text-danger">'+ count+'</strong> results were found for the search for <strong class="text-danger">'+ searchedFor+'</strong></h2>');
        $('div#rbuildResults').append('</section>');

    }); /*end getjson*/

};/*end get search results*/
`.trim();

const code5 = `
var displyResult = function(blogTitle,blogCategory,blogTags,blogLink,blogDate,blogSummary) {

var results = '<article class="posts blogpage">'+
    '<h2 class="entry-title">'+
    '<a class="post-link" href="'+blogLink+'">'+blogTitle+'</a>'+
    '</h2>'+
    '<div class="entry-summary">'+
        '<p>'+
        blogSummary +
        '<a href="'+blogLink+'">Continued</a>'+
        '</p>'+
    '</div>'+
    '<span class="badge blog-date">'+
    '<time class="published">'+
    blogDate+
    '</time>'+
    '</span>'+
    '<div class="pull-right">';

for (var j in blogTags) {
    if (blogTags[j]  === null){
    } else {
        results = results + ' <span class="label label-primary taggedPost"><a href="/search.html?searchbox='+blogTags[j]+'">' + blogTags[j] + '</a></span> ';
    }
}

results = results + '</div>'+
'</article>';

$('div#buildResults').append(results);
};

getSearchResults('/search.json');
`.trim();

export default function JekyllSearchJSONjQuery() {
    const POST_TITLE = 'Jekyll: Easy searching with JSON and jQuery';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Jekyll is a great tool to build web sites, unfortunately there is no built in search. This post will describe how to create one a basic search using JSON and jQuery.</p>
                <h2>Step 1: Create search.json</h2>
                <p>There are quite a few methods to create a search.json file. For me, I wanted to use built in Jekyll methods (no plugins). For that, I based the code from <a className="underline focus:ring-2" href="https://web.archive.org/web/20180428084131/http://jekyllsnippets.com/excluding-jsonify-your-site/" rel="nofollow noreferrer">JSONify your Jekyll Site</a> as well as other aspects of my site. The new code will look for attributes in one of your site posts. Below is what my <code>search.json</code> looks like, it can also be found on <a className="underline focus:ring-2" href="https://github.com/jennifert/jekyll-site/blob/master/search.json" rel="nofollow noreferrer">my github Repository.</a></p>
                <PrismCode
                    code={code}
                    language="liquid"
                    plugins={["line-numbers"]}
                />

                <h2>Step 2: Update your HTML code</h2>
                <p>Next, we need to update the search form:</p>
                <PrismCode
                    code={code2}
                    language="html"
                    plugins={["line-numbers"]}
                />

                <h2>Step 3: Create your search.html page</h2>
                <p>Thirdly, we need to create a basic html page that basically has our title, and a div to hold the jQuery results. Here is the code:</p>
                <PrismCode
                    code={code3}
                    language="html"
                    plugins={["line-numbers"]}
                />

                <h2>Step 4: Add the jQuery to your site</h2>
                <p>To query the search.json, I used jQuery's <code>getJSON</code> method. For this, you will need the below code first:</p>

                <h3>Function 1:</h3>
                <PrismCode
                    code={code4}
                    language="javascript"
                    plugins={["line-numbers"]}
                />

                <h3>Function 2:</h3>
                <PrismCode
                    code={code5}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
                <p>This wraps up the post on how to easily add a search to your Jekyll site.</p>
                {/* <ul className="list-disc list-inside m-2">

                </ul>

                <ol className="list-decimal list-inside m-2">

                </ol> */}

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://stackoverflow.com/questions/3390930/any-way-to-make-jquery-inarray-case-insensitive" rel="nofollow noreferrer">Extend inArray to be case insensitive</a></li>
                    <li><a className="underline focus:ring-2" href="https://stackoverflow.com/questions/9501690/javascript-documentation-on-getparameterbyname" rel="nofollow noreferrer">Get parameter by name</a></li>
                    <li><a className="underline focus:ring-2" href="https://medium.com/devseed/using-jekyll-and-github-pages-for-our-site-a0267edf27fa" rel="nofollow noreferrer">Using Jekyll and GitHub Pages for Our Site</a></li>
                    <li><a className="underline focus:ring-2" href="https://stackoverflow.com/questions/11887929/how-do-i-loop-through-tags-in-a-jekyll-post/" rel="nofollow noreferrer">Stack overflow: How do I loop through tags</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20180322140444/http://www.marran.com/tech/jquery-full-text-indexing-on-jekyll" rel="nofollow noreferrer">jQuery Full-Text Indexing on Jekyll</a></li>
                    <li><a className="underline focus:ring-2" href="https://danreev.es/writing/jekyll-search-with-typeahead-js" rel="nofollow noreferrer">Search a Jekyll Blog With Typeahead.js</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20180428084131/https://jekyllsnippets.com/excluding-jsonify-your-site/" rel="nofollow noreferrer">JSONify your Jekyll Site</a></li>
                </ul>
            </section>
        </Layout>
    )
}
