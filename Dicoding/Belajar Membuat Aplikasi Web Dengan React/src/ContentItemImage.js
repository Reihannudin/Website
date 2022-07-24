import React from 'react';

function ContactItemImage({ imageUrl }){
    return (
        <div className="contact-item-image">
            <img src={imageUrl} alt="photo profile"/>
        </div>
    );
}

export default ContactItemImage;