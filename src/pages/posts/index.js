import React, { useMemo, useState } from 'react'
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useSiteMetadata } from '../../hooks';
import Layout from '../../components/Layout'
import Info from '../../components/Info';
import ViewMore from '../../components/ViewMore';
import Thumbnail from '../../components/Thumbnail';
import SearchInput from '../../components/SearchInput';

const IndexPage = ({ data }) => {
    const [filteredData, setFilteredData] = useState(null);
    const [query, setQuery] = useState('');
    const {
        allMdx: { nodes }
    } = data;
    const { title: siteTitle, subTitle } = useSiteMetadata();
    
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

    const pageTitle = query ? `result for: ${query}` : 'all posts';

    return (
        <Layout title={`posts - ${siteTitle}`} description={subTitle}>
            <div>
                <SearchInput
                    onChange={setFilteredData}
                    dataset={transformedThumbnailsData}
                    setCustomQuery={setQuery}
                />
                <Info title={pageTitle} isMainTitle>
                    <Thumbnail list={filteredData || transformedThumbnailsData} />
                </Info>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query BlogListPageQuery {
        allMdx(
            filter: {frontmatter: {draft: {ne: true}}}
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

export default IndexPage;
