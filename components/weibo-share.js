var WDJShareWeibo = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'SINA_WEIBO');
    },

    render: function() {

        if (device.isP4 && campaignTools.isInstalled('com.sina.weibo')) {
            
            res = <div className="modal-button"><a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a></div>;
            return res;

        } else {
            
            res = <div className="modal-button"><a href={'http://service.weibo.com/share/share.php?url=' + this.props.url + '&appkey=&title=' + this.props.title +'&pic=' + this.props.pic + '&ralateUid=&language=zh_cn'} alt={this.props.title} className={this.props.icon}><i></i></a></div>;
            return res;
        }

    }
});