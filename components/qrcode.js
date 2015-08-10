var WDJQRCode = React.createClass({

    render: function(){
    	
        return (
            <div className="container">
            	<img src={'http://www.wandoujia.com/qr?c=' + this.props.content + '&s=' + this.props.size}/>
       			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.</p>
       		</div>
        );
    }
});