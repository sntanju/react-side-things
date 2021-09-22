import React from 'react';
import { deleteFromDb } from '../Utilities/Fakedb';
import { addToDB } from '../Utilities/Fakedb';

const Cosmetic = (props) => {


    // console.log(props.cosmetic);
    const {name, gender, _id,  balance} = props.cosmetic;
    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDB(id);
    }

    const handleRemove = id => {
        deleteFromDb(id);
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Gender: {gender}</p>
            <p>_id: {_id}Balance: {balance}</p>
            <button onClick={ () =>handlePurchase(_id)}>Purchase</button>
            <button onClick={ () =>handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;