var WDJShareMoments = React.createClass({

    render: function(){
    	var res;
	    	if(device.isWechat && campaignTools.isInstalled('com.tencent.mm')){
				res = <a href={this.props.url} className={this.props.icon} alt={this.props.title}><i></i></a>;
	    	}
			else{
				res = <a href={'http://www.wandoujia.com/qr?c=' + this.props.url} className={this.props.icon} alt={this.props.title}><i></i></a>;
			}
        return res;

    }
});