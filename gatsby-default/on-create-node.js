"use strict";

const { kebabCase } = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

const onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode });
        const slug =
            typeof node.frontmatter.slug !== "undefined"
                ? node.frontmatter.slug
                : value;
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });

        if (node.frontmatter.tags) {
            const tagSlugs = node.frontmatter.tags.map(
                tag => `/tag/${kebabCase(tag)}/`
            );
            createNodeField({ node, name: "tagSlugs", value: tagSlugs });
        }
    }
};

module.exports = onCreateNode;
