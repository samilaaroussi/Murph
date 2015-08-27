var React = require('react');
var _ = require('lodash');
var StyleSheet = require('stilr');
var WDJ = require('components');

var defaultStyle = {

    image : {

    }
};

var Image = React.createClass({

    render: function () {

        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);
        
        return (
            <img src={this.props.src} className={style.image}/>
        );
    }

});

module.exports = Image;
