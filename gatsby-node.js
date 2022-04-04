"use strict";

const createPages = require('./gatsby-default/create-pages');
const onCreateNodes = require('./gatsby-default/on-create-node');

// Custom và tạo page mới
exports.createPages = createPages;

// Thêm node, tạo đường dẫn
exports.onCreateNode = onCreateNodes;
