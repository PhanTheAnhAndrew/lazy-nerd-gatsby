const siteConfig = require('./config');

module.exports = {
    pathPrefix: siteConfig.pathPrefix,
    siteMetadata: {
        url: siteConfig.url,
        title: siteConfig.title,
        subtitle: siteConfig.subtitle,
        description: siteConfig.description,
        copyright: siteConfig.copyright,
        disqusShortname: siteConfig.disqusShortname,
        menu: siteConfig.menu,
        authors: siteConfig.authors,
        author: siteConfig.authors[0],
        image: siteConfig.image,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-image",
        "gatsby-plugin-offline",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-remark-images",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static`,
                name: "assets",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/images`,
                name: "images",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/svg`,
                name: "svg",
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `${__dirname}/static/svg`,
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/videos`,
                name: "videos",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "blog",
              path: `${__dirname}/blogs`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 936,
                            loading: "lazy",
                            linkImagesToOriginal: true,
                            showCaptions: true,
                        },
                    },
                    "gatsby-remark-autolink-headers",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
                cssLoaderOptions: {
                    exportLocalsConvention: "camelCaseOnly",
                },
            },
        },
    ],
};
