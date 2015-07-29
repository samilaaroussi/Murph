var React = require('react');
var StyleSheet = require('stilr');

var ShareWeibo = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'SINA_WEIBO');
    },

    render: function(){

        if (device.isP4 && campaignTools.isInstalled('com.sina.weibo')){
            
            res = <a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a>;
        	
        	return res;

        } else {
            
            res = <a href={'http://service.weibo.com/share/share.php?url=' + this.props.url + '&appkey=&title=' + this.props.title +'&pic=' + this.props.pic + '&ralateUid=&language=zh_cn'} alt={this.props.title} className={this.props.icon}><i></i></a>;
        	return res;
        }

    }
});

module.exports = ShareWeibo;