Creep.js
=========

Quickly add smooth scrolling to any links in your site using this simple plugin.


What You Need
=========

The only file you need (besides a jQuery library) is jquery.creep.min.js. The included css file is only for the example page. Since it's so small, it should ideally get minified and included with your other JS in a single file where possible.


Usage
=========

For the most basic usage of the plugin, all you need is the code below. Of course, you may need to adjust src properties based on where you store files, and you'll need some links and anchors to see it in action - but the core functionality will be there.

	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="jquery.creep.min.js"></script>
	<script>
	$(document).ready(function(){
		$(".calculator").accrue();
	});
	</script>

For more information on the different options and customizations, refer to the index.html file in this repo, or visit http://jpederson.github.io/creepjs to see the example file live.

