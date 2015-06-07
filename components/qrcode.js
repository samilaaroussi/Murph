var WDJQRCode = React.createClass({

    render: function(){
        
        return (
            <img src={'http://www.wandoujia.com/qr?c=' + this.props.content + '&s=' + this.props.size}/>
        );
    }
});