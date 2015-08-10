var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

    modalButton: {

        display: 'inline-block',
        fontSize: '13px',
        lineHeight: '0.5em',
        color: '#333'

    },

    icon: {

        backgroundImage: 'url(\'http://static.wdjimg.com/www/images/campaign/designaward2014/1x-s325d703603.png\')',
        backgroundPosition: '0 -530px',
        backgroundRepeat: 'no-repeat',
        height: '25px',
        overflow: 'hidden',
        width: '25px'
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
            
            res = <div className={style.modalButton}><a href="#" onClick={this.ShareApp} className="share-weibo" alt={this.props.title}><i></i></a>{this.props.children}</div>;
        } else {
            
            res = <div className={style.modalButton}><a href="#" onClick={this.ShareWeb} className="share-weibo" alt={this.props.title}><i></i></a>{this.props.children}</div>;
        }
        
        return res;
    }
});

module.exports = ShareWeibo;