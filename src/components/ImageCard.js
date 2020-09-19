import React, {Component, createRef} from 'react';


class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        //accessing to the image height in the DOM HTML
        const height = this.imageRef.current.clientHeight;

        //defining  number of spans that it requires; 10px(grid-auto-rows) is the row height
        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    render() {

        const {urls, alt_description} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    src={urls.regular}
                    alt={alt_description}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;