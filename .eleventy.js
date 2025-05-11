module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("data");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("pages");
  eleventyConfig.addPassthroughCopy("img");
};