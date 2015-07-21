var WDJVideo = React.createClass({

    render: function () {

        if (this.props.type == 'intern') {
            return (
                <div>
                    <video width={this.props.width} controls>
                        <source src={this.props.mp4Url} type="video/mp4"/>
                        <source src={this.props.oggUrl} type="video/ogg"/>
                        Your browser does not support HTML5 video.
                    </video>
                </div>

            );
        }

        else if (this.props.type == 'youku') {

            return <div><iframe height='288' width='512' src={'http://player.youku.com/embed/' + this.props.id + '=='}></iframe></div>;
        }
    }

});