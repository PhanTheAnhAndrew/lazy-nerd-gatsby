"use strict";

// const path = require("path");
// const createMainPagination = require("./pagination/create-main-pagination");
// const createTagsPagination = require("./pagination/create-tags-pagination");
const createTagListPage = require("./pagination/create-tag-list-page");

const createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;

    createRedirect({
      fromPath: "/tag",
      toPath: "/posts",
      isPermanent: true,
      redirectInBrowser: true
    });

    await createTagListPage(graphql, actions);
};

module.exports = createPages;
