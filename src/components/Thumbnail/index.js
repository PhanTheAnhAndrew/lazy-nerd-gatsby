import React from "react";
import Item from "./Item";
import "./styles.scss";

function Thumbnail({ list }) {
    const thumbnailElems = list.map((each, index) => {
        const { image, title, date, description, tags, url } = each;
        return (
            <Item
                key={`thumbnail-${index}`}
                image={image}
                title={title}
                date={date}
                description={description}
                tags={tags}
                url={url}
            />
        );
    });

    return (
        <section className="thumbnail__wrapper">
            {thumbnailElems}
        </section>
    );
}

Thumbnail.propTypes = {};

export default React.memo(Thumbnail);
