//reusable network requests using hooks
import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) =>{
    const [ resources, setResources ] = useState([]);

    // const fetchResource = async resource => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        
    //     setResources(response.data);
    // }

    // //lifecycle hooks using useEffect like componentDidMount etc of class based components
    // //useEffect's arrow function is being runned each time the value (resource) is being changed
    // //useEffect with an empty array is similart to componentDidMount --> called only once
    // useEffect(() => {
    //     fetchResource(resource);
    // }, [resource])

    //alternative way
    //define and invoke the arrow function inside the useEffect hook

    useEffect(() => {
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;