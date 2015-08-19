var React = require('react');
var _ = require('lodash');
var StyleSheet = require('stilr');
var WDJ = require('components');
var LazyLoad = require('react-lazy-load');

var defaultStyle = {

    image : {

        width: '100%',
        height: 'auto'
    }
};

var Image = React.createClass({

    render: function () {

        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);
        
        return (
            <LazyLoad>
            <div><img src={this.props.src} className={style.image}/></div>
            </LazyLoad>
        );
    }

});

module.exports = Image;
