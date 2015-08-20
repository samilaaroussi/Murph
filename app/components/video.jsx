var React = require('react');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

};

var Image = React.createClass({

    render: function () {

        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

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

            return <iframe frameBorder='0' width='100%' src={'http://player.youku.com/embed/' + this.props.id + '=='}></iframe>;
        }
    }

});

module.exports = Image;
