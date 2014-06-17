## Creep.js

Quickly add smooth scrolling to any links in your site using this simple plugin.

*****

### Getting Started

To get going quickly with Creep, just include the library after jQuery, select your link tags, and run creep on them. This would do it if you're starting fresh:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="jquery.creep.min.js"></script>
<script>
$(function(){
  $("a").creep();
});
</script>
```

### NPM Install

```shell
npm install jquery-creep
```

*****

### Plugin Options

There are only a couple options as of now. Here they are:

```js
$("a").creep({
  offset: 0,
  speed: 1000
});
```

#### `offset`

Add an offset to change the distance above or below anchor destinations. Helpful when you have a fixed menu and you need to scroll a certain number of pixels above the anchor destination so that your menu doesn't cover the content.

#### `speed`

Adjust the scroll time. Set in milliseconds.

*****

### Contributing

To contribute, you'll need [nodejs](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed. Fork and clone the repo, then visit the directory in the terminal and type `npm install`. After that you can simply run the `grunt` command to watch the files in the project. It'll automatically lint, test, compile, and minify the plugin files so you can just code.

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
