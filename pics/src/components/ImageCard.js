import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.ImageRef = React.createRef();
    }

    setSpans = () => {
        const height = this.ImageRef.current.clientHeight;
        const spans = Math.ceil(height /10);
        this.setState({ spans });
    }

    componentDidMount() {
        this.ImageRef.current.addEventListener('load', this.setSpans);
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.ImageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;