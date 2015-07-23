var React = require('react');
var WDJ = require('../components.js');

var Video = React.createClass({

    render: function () {

        if (this.props.type == 'intern') {
            return (
                    <video width={this.props.width} controls>
                        <source src={this.props.mp4Url} type="video/mp4"/>
                        <source src={this.props.oggUrl} type="video/ogg"/>
                        Your browser does not support HTML5 video.
                    </video>

            );
        }

        else if (this.props.type == 'youku') {

            return <iframe frameBorder='0' src={'http://player.youku.com/embed/' + this.props.id + '=='}></iframe>;
        }
    }

});

module.exports = Video;
