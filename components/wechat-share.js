var WDJShareWechat = React.createClass({

    render: function(){
        var res;
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')){
            res = campaignTools.runAppShare(this.props.title, this.props.desc, this.props.url, 'WECHAT');
        }
        else {
            res = <a href={'http://www.wandoujia.com/qr?c=' + this.props.url} className={this.props.icon} alt={this.props.title}><i></i></a>;
        }
        return res;

    }
});