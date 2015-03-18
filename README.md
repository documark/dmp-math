# Documark Math

[![npm version](https://badge.fury.io/js/dmp-math.svg)](http://badge.fury.io/js/dmp-math)
[![dependency status](https://david-dm.org/documark/dmp-math.svg)](https://david-dm.org/documark/dmp-math)

> Documark plugin for adding math formulas to your document.

## Usage

1. Add plugin to document configuration:

	```yaml
	plugins:
	  - dmp-math
	```

2. This will inject [MathJax JS v2.5][mathjax], so you can use it in your document:

	```jade
	p Here is a random math formula:

	//- Block:
	| $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

	//- Inline:
	p Some other text with inline math %% \sqrt{b^2-4ac} %%. Neat!
	```

3. The output will look something like this:

	![screenshot](assets/screenshot.png)

	See the `Example.pdf` file of the [Documark example][documark-example] for the final result.

[mathjax]: http://www.mathjax.org/
[documark-example]: https://github.com/documark/documark-example
