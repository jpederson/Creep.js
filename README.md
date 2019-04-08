## Creep.js

Quickly add smooth scrolling to any links in your site using this simple plugin.

*****

![Available on Github](https://img.shields.io/github/release/jpederson/Creep.js.svg) ![Available on NPM](https://img.shields.io/npm/v/jquery-creep.svg) ![MIT](https://img.shields.io/github/license/jpederson/Creep.js.svg)

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

After that, any link with a anchor associated with it (a `#` in the href) will smoothly scroll instead of jumping.

*****

### Install

#### Github

```shell
git clone https://github.com/jpederson/Creep.js creep
```

#### NPM

```shell
npm install jquery-creep
```

#### Yarn

```shell
yarn install jquery-creep
```

*****

### Plugin Options

This plugin needs only 2 options, as follows:

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

![Built with Grunt](https://img.shields.io/badge/built%20with-grunt-orange.svg)
