module.exports = async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ "src/static": "/" });

	eleventyConfig.addCollection("posts", collection => {
		return collection.getFilteredByGlob("src/posts/*.md").reverse();
	});
};

module.exports.config = {
	templateFormats: ["njk", "md", "html"],
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
