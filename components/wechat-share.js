var WDJShareWechat = React.createClass({

	handleClick: function() {
	    campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT');
	},

    render: function(){
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')){
            
            res = <a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a>;
        
        	return res;
        	
        } else {
            
            res = <a href={'http://www.wandoujia.com/qr?c=' + this.props.url} className={this.props.icon} alt={this.props.title}><i></i></a>;
        
        }
        
        return res;

    }
});