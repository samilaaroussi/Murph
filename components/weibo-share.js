var WDJShareWeibo = React.createClass({

    render: function(){
        if (device.isP4 && campaignTools.isInstalled('com.sina.weibo')){
            res = campaignTools.runAppShare(this.props.title, this.props.desc, this.props.url, 'WEIBO');
        }

        else {
            res = <a href={'http://service.weibo.com/share/share.php?url=' + this.props.url + '&appkey=&title=' + this.props.title +'&pic=' + this.props.pic + '&ralateUid=&language=zh_cn'} alt={this.props.title} className={this.props.icon}><i></i></a>;
        }
        return res;
    }
});