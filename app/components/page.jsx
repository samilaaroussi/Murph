var React = require('react');
var StyleSheet = require('stilr');
var Swiper = require('swiper');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

};

var Page = React.createClass({

    render: function(){

    	var customStyle = this.props.customStyle || '';
    	var mergeStyle = _.merge(defaultStyle, customStyle);
    	var style = StyleSheet.create(mergeStyle);

        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Page;