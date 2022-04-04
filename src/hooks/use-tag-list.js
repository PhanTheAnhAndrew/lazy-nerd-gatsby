import { useStaticQuery, graphql } from "gatsby";

const useTagList = () => {
    const { allMdx } = useStaticQuery(
        graphql`
            query TagListQuery {
                allMdx(filter: {frontmatter: {draft: {ne: true}}}) {
                    group(field: frontmatter___tags) {
                        fieldValue
                        totalCount
                    }
                }
            }
        `
    );

    return allMdx.group;
};

export default useTagList;