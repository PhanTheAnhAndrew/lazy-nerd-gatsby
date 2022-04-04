"use strict";

const config = {
    url: "http://localhost:8000",
    pathPrefix: "/",
    title: "Code from Thinking",
    subtitle: "",
    description: "",
    copyright: "© All rights reserved.",
    disqusShortname: "",
    postsPerPage: 10,
    googleAnalyticsId: "",
    image: "/featured-image.jpg",
    menu: [
        {
            label: "home",
            path: "",
        },
        {
            label: "about me",
            path: "about-me",
        },
        {
            label: "posts",
            path: "posts",
        },
        {
            label: "templates",
            path: "templates",
        },
        {
            label: "components",
            path: "components",
        },
    ],
    authors: [
        {
            name: "Phan The Anh",
            photo: "/author-image.jpg",
            url: "phan-the-anh",
            bio:
                "ReactJS Dev, on the way to becoming a senior dev. Glad to receive any advice from others. Love all !!!.",
            workplace: "Knorex Vietnam",
            contacts: {
                email: "",
                facebook: "#",
                telegram: "#",
                twitter: "#",
                github: "#",
                rss: "",
                vkontakte: "",
                linkedin: "#",
                instagram: "#",
                line: "",
                gitlab: "",
                codepen: "",
                youtube: "",
                soundcloud: "",
                medium: "",
            },
        },
    ],
};

module.exports = config;