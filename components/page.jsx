var React = require('react');
var WDJ = require('../components.js');

var Page = React.createClass({
    
    render: function(){

        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Page;