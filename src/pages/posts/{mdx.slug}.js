import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout';
import PostSummary from '../../components/PostSummary';
import { useSiteMetadata } from '../../hooks';

const BlogPost = ({ data }) => {
    const { title: siteTitle } = useSiteMetadata();
    const {
        id, body,
        frontmatter: {
            author,
            date,
            description,
            title,
            social_image: { publicURL },
            featured_image,
            tags,
        },
        wordCount: { words },
        timeToRead,
    } = data.mdx;
    const image = getImage(featured_image);
    const imageElem = <GatsbyImage image={image} alt={title} />;

    return (
        <Layout
            title={`${title} - ${siteTitle}`}
            description={description}
            image={{
                url: publicURL,
                alt: title,
            }}
        >
            <>
                <PostSummary
                    title={title}
                    tags={tags}
                    date={date}
                    timeToRead={timeToRead}
                    wordCount={words}
                    author={author}
                    description={description}
                    image={imageElem}
                    id={id}
                />
                <MDXRenderer>
                    {body}
                </MDXRenderer>
            </>

        </Layout>
    );
}

export const query = graphql`
    query PostBySlugQuery($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            id
            body
            fields {
                slug
            }
            frontmatter {
                author
                date(formatString: "MMM DD, YYYY", locale: "en")
                description
                title
                social_image {
                    publicURL
                }
                featured_image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                tags
            }
            timeToRead
            wordCount {
                words
            }
        }
    }
  
`

export default BlogPost