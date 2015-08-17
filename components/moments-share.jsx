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

var ShareMoments = React.createClass({

    handleClick: function() {
    
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT_TIMELINE');

        } else {
            
            window.open('http://www.slt.fr');
        
        }
    },

    render: function() {
        
        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

        var res = (
            <div className={style.modalButton}>
                <a href="#" onClick={this.handleClick} alt={this.props.title} className="share-wechat-timeline"><i></i></a>
                {this.props.children}
            </div>
        );

        return res;
    }
});

module.exports = ShareMoments;