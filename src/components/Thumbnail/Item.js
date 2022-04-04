import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import ViewMore from "../ViewMore";
import Tags from "../Tags";

function ThumbnailItem({ image, title, date, description, tags, url }) {
    const renderImage = () => {
        let imgElem;
        if (typeof image === "string") {
            imgElem = <img src={image} alt="Lazy Nerds'g Blog" />;
        } else {
            imgElem = image;
        }
        return <figure className="thumbnail__image">{imgElem}</figure>;
    };

    const renderInfo = () => {
        const renderTitle = () => <h2 className="thumbnail__title">{title}</h2>;
        const renderDate = () => <div className="thumbnail__date">{date}</div>;
        const renderDescription = () => <div>{description}</div>;
        return (
            <div className="thumbnail__info flex flex-column thumbnail--default-padding">
                {renderTitle()}
                {renderDate()}
                {renderDescription()}
            </div>
        );
    };

    const renderTags = () => (
        <Tags tags={tags} customClasses="thumbnail--default-padding" />
    );

    const renderViewMore = () => (
        <ViewMore url={url} customClasses="thumbnail--default-padding" />
    );

    return (
        <article className="thumbnail flex flex-column">
            {renderImage()}
            {renderInfo()}
            {renderTags()}
            {renderViewMore()}
        </article>
    );
}

ThumbnailItem.propTypes = {
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
};

ThumbnailItem.defaultProps = {};

export default React.memo(ThumbnailItem);
