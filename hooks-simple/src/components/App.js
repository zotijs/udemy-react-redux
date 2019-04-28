import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    //where resource is the currentValue
    //similar to this.state.value
    //and setResource is the function that changes the currentValue
    //similar to this.setState({value: newValue})
    const [resource, setResource] = useState('posts');
    return (
        <div>
        <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};

export default App;