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

    }
};

var ShareWechat = React.createClass({

    handleClick: function() {

        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT');

        } else {
            
            window.open('');

        }

        return res;
    },

    render: function() {

        var res;
        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = (
                <div className={style.modalButton}>
                        <a href="#" onClick={this.handleClick} className="share-wechat" alt={this.props.title}><i></i></a>{this.props.children}
                </div>
            );

        } else {
            
            res = <div className={style.modalButton}><a href='#openModal' className="share-wechat" alt={this.props.title}><i></i></a>{this.props.children}</div>;
        }

        return res;
    }
});

module.exports = ShareWechat;