const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/.js", "./src/**/.jsx"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        tailwindcss("./tailwind.js"),
        require("autoprefixer"),
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ],
};
