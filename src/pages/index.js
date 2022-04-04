import React, { useMemo } from 'react'
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { useSiteMetadata, useTagList } from '../hooks';
import Layout from '../components/Layout'
import Info from '../components/Info';
import ViewMore from '../components/ViewMore';
import Thumbnail from '../components/Thumbnail'; 
import CustomLink from '../components/CustomLink';
import Tags from '../components/Tags';

const StyledName = styled.div`
    div {
        font-weight: 700;
        font-size: 18px;
    }
`;

const IndexPage = ({ data }) => {
    const {
        allMdx: { nodes }
    } = data;
    const { title: siteTitle, subTitle: siteSubTitle } = useSiteMetadata();
    const tagsFromHook = useTagList();
    
    const transformedThumbnailsData = useMemo(() => (nodes.map((each) => {
        const {
            fields: { slug },
            frontmatter: {
                date,
                title,
                tags,
                description,
                featured_image,
            },
        } = each;
        const image = getImage(featured_image);
        const imgElem = (
            <GatsbyImage
                image={image}
                alt={title}
            />
        );
        return {
            image: imgElem,
            url: `/posts/${slug}`,
            title,
            description,
            tags,
            date,
        };
    })), [nodes]);

    const renderContact = () => (
        <Info title="contact">
            <div className="flex flex-column">
                <CustomLink label="Email" link="/" content="andrew.phan.uit@gmail.com" />
                <CustomLink label="Facebook" link="/" content="Phan The Anh" />
            </div>
        </Info>
    );

    const renderTopics = () => {
        const tagElems = tagsFromHook.map(each => `${each.fieldValue}`);
        return (
            <Info title="topics">
                <div>
                    <Tags tags={tagElems} prefix="/tag" />
                </div>
            </Info>
        );
    };

    return (
        <Layout title={siteTitle} description={siteSubTitle}>
            <div>
                <Info title="Phan The Anh" isMainTitle>
                    <StyledName>
                        <div>Software Engineer LV2 / Knorex Viet Nam</div>
                        <div>Keep practicing until become a senior dev</div>
                    </StyledName>
                </Info>
                <Info title="intro">
                    <p>
                        Well hey there! 👋 I'm Paul and a long long time ago I was a designer but after a few years of pixel pushing I realised code is just better! I’ve held various positions in and around advertising and web development in both permanent and contract positions since 2005, and I once co-founded and ran an award winning digital production agency called Super natural based in London.
                    </p>
                </Info>
                <Layout.Col>
                    {renderContact()}
                    {renderTopics()}
                </Layout.Col>
                <Info title="latest posts">
                    <Thumbnail list={transformedThumbnailsData} />
                </Info>
                <ViewMore
                    url="/posts"
                    text="More posts"
                    customClasses="thumbnail--default-padding view-more--center"
                />
            </div>
        </Layout>
    );
};

export const query = graphql`
    query IndexPageQuery {
        allMdx(filter: {frontmatter: {draft: {ne: true}}}, limit: 6) {
            nodes {
                frontmatter {
                    tags
                    title
                    date(formatString: "DD MMM, YYYY", locale: "vi")
                    description
                    featured_image {
                        childImageSharp {
                            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`;

export default IndexPage;
