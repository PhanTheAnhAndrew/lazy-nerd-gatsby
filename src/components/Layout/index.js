import React, { useState } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useSiteMetadata } from "../../hooks";

import Sidebar from "../Sidebar";
import TempLayout from "../TempLayout";
import Header from "../Header";

import Content from "./Content";
import '../../assets/scss/init.scss';
import OverlayLayout from "../Sidebar/OverlayLayout";
import Col from './Col';

const LayoutWrapper = styled.div`
    outline: none;
    min-height: 100%;
    height: auto;
`;

const ContentWrapper = styled.div``;

const Layout = (props) => {
    const { children } = props;
    const [showMenu, setShowMenu] = useState(false);
    const {
        url,
        title,
        subtitle,
        description,
        image,
    } = useSiteMetadata();
    const finalUrl = props?.url || url;
    const finalTitle = props?.title || title;
    const finalDescription = props?.description || description;
    const finalImageUrl = props?.image?.url || image;
    const finalImageAlt = props?.image?.alt || subtitle;

    const handleShowMenu = () => setShowMenu(true);
    const handleCloseMenu = () => setShowMenu(false);

    return (
        <LayoutWrapper className="flex flex-space-between-column">
            <Helmet>
                <html lang="vi" />
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="author" content={title} />
                <link rel="canonical" href={finalUrl} />
                <meta name="title" content={finalTitle} />
                <meta name="image" content={finalImageUrl} />
                <link rel="icon" type="image/png" href="/static/icon.png" />
                <meta name="description" content={finalDescription} />
                <meta
                    name="keywords"
                    content="Villa Da Lat, Villa Đà Lạt, Villa Daisy, homestay Đà Lạt, homestay Daisy, Villa giá rẻ, Villa cảnh đẹp, Villa gần chợ đêm"
                />
                <meta property="og:url" content={finalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={finalTitle} />
                <meta property="og:title" content={finalTitle} />
                <meta property="og:description" content={finalDescription} />
                <meta property="og:image" content={finalImageUrl} />
                <meta property="og:image:alt" content={finalImageAlt} />
                <meta property="og:image:width" content="460" />
                <meta property="og:image:height" content="295" />
            </Helmet>
            <OverlayLayout show={showMenu} onToggle={handleCloseMenu} />
            <Sidebar show={showMenu} />
            <TempLayout />
            <ContentWrapper className="full-width">
                <Header onToggle={handleShowMenu} />
                <Content>{children}</Content>
            </ContentWrapper>
        </LayoutWrapper>
    );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.objectOf({
        url: PropTypes.string,
        alt: PropTypes.string,
    }),
};

Layout.defaultProps = {
    children: <span></span>,
};

Layout.Col = Col;

export default Layout;
