import React from 'react';

function ContentItemBody({name ,tag}){
    return (
        <div className="content-item-body">
            <h3 className="content-item-title">{name}</h3>
            <p className="content-item-username">@{tag}</p>
        </div>
    );
}

export default ContentItemBody;