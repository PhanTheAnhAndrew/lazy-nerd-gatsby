const siteConfig = require("../../config");
const { kebabCase } = require("lodash");
const path = require("path");

const createTagsPagination = async (graphql, actions) => {
    const { createPage } = actions;
    const { postPerPage } = siteConfig;

    const result = await graphql(`
        {
            allMarkdownRemark (
                filter: {
                    frontmatter: {
                        template: { eq: "post" }
                        draft: { ne: true }
                    }
                }
            ) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);

    const groups = result.data.allMarkdownRemark.group;
    groups.forEach(each => {
        const numPages = Math.ceil(each.totalCount / postPerPage);
        const tagSlug = `/tag/${kebabCase(each.fieldValue)}`;
        console.log(tagSlug);
        for (let i = 0; i < numPages; i += 1) {
            createPage({
                path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
                component: path.resolve("./src/templates/tag-template.js"),
                context: {
                    tag: each.fieldValue,
                    currentPage: i,
                    postsLimit: postsPerPage,
                    postsOffset: i * postsPerPage,
                    prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
                    nextPagePath: `${tagSlug}/page/${i + 1}`,
                    hasPrevPage: i !== 0,
                    hasNextPage: i !== numPages - 1,
                },
            });
        }
    });
};

module.exports = createTagsPagination;
