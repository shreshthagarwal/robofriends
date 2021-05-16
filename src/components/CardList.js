import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    const CardComponent = robots.map((user, i) => {
        return <Card  key = {i} name = {robots[i].name} id = {robots[i].id} email = {robots[i].email}/>
    });
    return (
        <div>
            {CardComponent}
        </div>
    );
}

export default CardList;