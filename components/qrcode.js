var WDJQRcode = React.createClass({

	render: function(){
		return (
			<div className="qrcode">
			<img src={'http://www.wandoujia.com/qr?c=' + this.props.content + '&s=' + this.props.size}/>
			</div>
		);
	}
});