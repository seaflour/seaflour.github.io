module.exports = async function(eleventyConfig) {};

module.exports.config = {
	templateFormats: ["nkj", "md", "html"],
	dir: {
		input: "src",
		includes: "_includes",
		data: "_data",
		output: "www",
	},
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dataTemplateEngine: "njk",
	passthroughFileCopy: false,
};
