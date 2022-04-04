import React, { useMemo } from 'react'
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useSiteMetadata } from '../hooks';
import Layout from '../components/layout'
import Info from '../components/Info';
import ViewMore from '../components/ViewMore';
import Thumbnail from '../components/Thumbnail';

const TagListPage = ({ data, pageContext }) => {
    const {
        allMdx: { nodes }
    } = data;
    const { title: siteTitle, subTitle } = useSiteMetadata();
    const { tag } = pageContext;
    
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

    return (
        <Layout title={`posts - ${siteTitle}`} description={subTitle}>
            <div>
                <Info title={`Tag: ${tag}`}>
                    <Thumbnail list={transformedThumbnailsData} />
                </Info>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query TagListPageQuery($tag: String!) {
        allMdx(
            filter: {frontmatter: {draft: {ne: true}, tags: {in: [$tag] }}}
            sort: { order: DESC, fields: [frontmatter___date] }    
        ) {
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

export default TagListPage;
