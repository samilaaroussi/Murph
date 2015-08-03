var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

    modalButton: {

        display: 'inline-block'
    }
};

var ShareWeibo = React.createClass({

    ShareApp: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'SINA_WEIBO');
    },

    ShareWeb: function() {
        window.open('http://service.weibo.com/share/share.php?url=' + this.props.url + '&appkey=&title=' + this.props.title +'&pic=' + this.props.pic + '&ralateUid=&language=zh_cn');
    },

    render: function() {

        var res;
        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

        if (device.isP4 && campaignTools.isInstalled('com.sina.weibo')) {
            
            res = <div className={style.modalButton}><a href="#" onClick={this.ShareWeb} alt={this.props.title}>{this.props.children}</a></div>;
        } else {
            
            res = <div className={style.modalButton}><a href="#" onClick={this.ShareApp} alt={this.props.title}>{this.props.children}</a></div>;
        }
        
        return res;
    }
});

module.exports = ShareWeibo;