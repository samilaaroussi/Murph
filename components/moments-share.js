var WDJShareMoments = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT_TIMELINE');
    },

    render: function() {
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            return <a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a>;
          
        } else {
            
            return <a href={'http://www.wandoujia.com/qr?c=' + this.props.url} className={this.props.icon} alt={this.props.title}><i></i></a>;
        
        }

    }
});