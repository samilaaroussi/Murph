var React = require('react');
var WDJ = require('components');

var QRCode = React.createClass({

    render: function(){
        
        return (
            <img src={'http://www.wandoujia.com/qr?c=' + this.props.content + '&s=' + this.props.size}/>
        );
    }
});

module.exports = QRCode;