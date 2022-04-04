const { kebabCase } = require("lodash");
const path = require("path");

const createTagsPagination = async (graphql, actions) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allMdx(filter: {frontmatter: {draft: {ne: true}}}) {
                group(field: frontmatter___tags) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);

    const { data: { allMdx: { group } } } = result;
    group.forEach(each => {
        const tagSlug = `/tag/${kebabCase(each.fieldValue.toLowerCase())}`;
        createPage({
            path: tagSlug,
            component: path.resolve("./src/templates/tag-list-template.js"),
            context: {
                tag: each.fieldValue,
            },
        });
    });
};

module.exports = createTagsPagination;
