import React from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
    let {bedType} = useParams()
    return (
        <div>
            <h1>You selected {bedType} bed room.</h1>
        </div>
    );
};

export default Book;