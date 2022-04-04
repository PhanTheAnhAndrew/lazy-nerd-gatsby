import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Tags from "../Tags";

import * as styles from './styles.module.scss';

function PostSummary({
    tags,
    title,
    author,
    date,
    timeToRead,
    wordCount,
    description,
    isPage,
    image,
    id,
}) {
    const postRef = useRef();

    useEffect(() => {
        postRef.current.scrollIntoView();
    }, [id]);

    const renderTitle = () => <h1>{title}</h1>;
    const renderTags = () => <Tags tags={tags} />;
    const renderDescription = () => <p>{description}</p>;

    const renderPostInfo = () => {
        if (isPage) {
            return null;
        }

        const minuteUnit = timeToRead > 1 ? 'minutes' : 'minute';
        const wordUnit = wordCount > 1 ? 'words' : 'word';

        return (
            <section className={classNames('flex flex-center-row--lg flex-space-between-column flex-column--md', styles.postSummary__info)}>
                <div className={classNames('flex flex-column', styles.firstCol)}>
                    <div>Latest Update: {date}</div>
                    <div>
                        {timeToRead} {minuteUnit} / {wordCount} {wordUnit}
                    </div>
                    {renderTags()}
                </div>
                <div className="flex flex-column">Author: {author}</div>
            </section>
        );
    };

    return (
        // <div className={styles.postSummary}>
        <div>
            <div ref={postRef} />
            {image}
            {renderTitle()}
            {renderPostInfo()}
            {renderDescription()}
        </div>
    );
}

PostSummary.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    timeToRead: PropTypes.number,
    wordCount: PropTypes.number,
    description: PropTypes.string,
    isPage: PropTypes.bool,
    image: PropTypes.element,
    id: PropTypes.string.isRequired,
};

PostSummary.defaultProps = {
    banner: null,
    tags: [],
    title: "Lazy Nerds' Blog",
    date: "Today",
    author: "Lazy Nerd member",
    timeToRead: 1,
    wordCount: 100,
    isPage: false,
    image: <span></span>,
};

export default React.memo(PostSummary);
