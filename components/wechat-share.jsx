var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

    modalButton: {

        display: 'inline-block'
    }
};

var ShareWechat = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT');
    },

    render: function() {

        var res;
        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = (
                <div className={style.modalButton}>
                        <a href="#" onClick={this.handleClick} alt={this.props.title}>{this.props.children}</a>
                </div>
            );

        } else {
            
            res = <div className={style.modalButton}><a href='#openModal' alt={this.props.title}>{this.props.children}</a></div>;
        }

        return res;
    }
});

module.exports = ShareWechat;