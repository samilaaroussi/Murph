var React = require('react');
var StyleSheet = require('stilr');
var Swiper = require('swiper');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

	swiperSlide: {
	    height: '100%',
	    position: 'relative',
	    textAlign: 'center',
	    fontSize: '18px',
	    /* Center slide text vertically */
	    display: '-webkit-box',
	    display: '-ms-flexbox',
	    display: '-webkit-flex',
	    display: 'flex',
	    WebkitBoxPack: 'center',
	    msFlexPack: 'center',
	    WebkitJustifyContent: 'center',
	    justifyContent: 'center',
	    WebkitBoxAlign: 'center',
	    MsFlexAlign: 'center',
	    WebkitAlignItems: 'center',
	    alignItems: 'center',
	    flexDirection: 'column'
	}

};

var Page = React.createClass({

    render: function(){

    	var customStyle = this.props.customStyle || '';
    	var mergeStyle = _.merge(defaultStyle, customStyle);
    	var style = StyleSheet.create(mergeStyle);

        return (
            <div className={style.swiperSlide}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Page;