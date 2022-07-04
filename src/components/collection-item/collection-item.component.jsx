import React from 'react';
import './collection-item.style.scss';
import Button from '../button/button.component';

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button>ADD TO CART</Button>
    </div>
)

export default CollectionItem;