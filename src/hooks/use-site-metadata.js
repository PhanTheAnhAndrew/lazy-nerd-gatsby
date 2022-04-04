// Tại vì hook này là non-page, cho nên phải dùng useStatisQuery mới call graphql được
import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        menu {
                            label
                            path
                        }
                        url
                        title
                        subtitle
                        copyright
                        disqusShortname
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};

export default useSiteMetadata;
