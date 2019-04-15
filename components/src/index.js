import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="container ui comments">
            <ApprovalCard>
                <h3>Are you sure?</h3>
                Do whatever it takes!
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 6.00 AM" 
                    content="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5.00 AM" 
                    content="Woow!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="John" 
                    timeAgo="Yeeterday at 2.00 AM" 
                    content="Yes!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);