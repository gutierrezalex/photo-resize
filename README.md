Photo Resize
============
**Photo Resize** is a jQuery plugin that resizes photo according to browser window.

Originally made by [gutierrezalex] for a question on [stackoverflow]

Additional code by [jjYBdx4IL]

Rewritten by [Anima-t3d]

Example Usage
-------------
```
$('selector').photoResize();

$('selector').photoResize({
	bottomSpacing:"Bottom Spacing adjustment"
});

$('img.test').photoResize({
	bottomSpacing:10,
	rightSpacing:20,
	upscaleImageWidth:true,
	upscaleImageHeight:true
});
```

Options
-------
```bottomSpacing``` this is the spacing below the image *(default: 10)*

```rightSpacing``` this is the spacing on the rightside of the image *(default: 20)*

```upscaleImageWidth``` when false, it keeps max height of the image, no upscaling *(default: true)*

```upscaleImageHeight``` when false, it keeps max width of the image, no upscaling *(default: true)*

**Note:** Scaling is uniform. When one of the 2 upscale options are false, it'll use original size as max sizing.


[gutierrezalex]:https://github.com/gutierrezalex/photo-resize
[stackoverflow]:http://stackoverflow.com/a/6169731/3163075
[jjYBdx4IL]:https://github.com/gutierrezalex/photo-resize/pull/1
[Anima-t3d]:https://github.com/Anima-t3d