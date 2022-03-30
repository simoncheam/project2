import * as React from 'react';
import { useState, useEffect } from 'react';
import { APIService } from '../services/APIService';

const Template = (props: ITemplateProps) => {
    const [items, setItems] =useState([]);

    useEffect(() => {
        APIService(`/api/chirps`)
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div>
            {items.map(item => (
                <p>{item.prop1}</p>
                <p>{item.prop2}</p>
                <p>{item.prop3}</p>
            ))}            
        </div>
    )
}

interface ITemplateProps {}

export default Template