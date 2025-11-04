import { DateTime } from "luxon";
import footnotes from "eleventy-plugin-footnotes";

export default async function(eleventyConfig) {
	eleventyConfig.addPlugin(footnotes, {
		title: "footnotes",
		baseClass: "footnotes"
	});

	eleventyConfig.addPassthroughCopy({ "src/static": "/" });

	eleventyConfig.addCollection("posts", collection => {
		return collection.getFilteredByGlob("src/posts/*.md").reverse();
	});

	eleventyConfig.addFilter("formatDateDisplay", (date, format, zone) => {
		return DateTime.fromJSDate(date, { zone: zone || "utc" }).toFormat(format || "yyyy-MM-dd ZZZZ");
	});

	eleventyConfig.addFilter("formatDateHtml", (date) => {
		return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	// get first n elements of array
	eleventyConfig.addFilter("header", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}

		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", tags => {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);
};

export const config = {
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
};
