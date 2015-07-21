var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('../components.js');

var momentsStyle = StyleSheet.create({

    modalButton: {

        display: 'inline-block'
    }
});

var ShareMoments = React.createClass({

    handleClick: function() {

        var runApp = campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT_TIMELINE');   
        <a href="#" onClick={runApp} alt={this.props.title} className={this.props.icon}><i></i></a>
    
    },

    render: function() {
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = this.HandClick;
          
        } else {
            
            res = <div className={momentsStyle.modalButton}>
                    <WDJ.Modal>
                        <WDJ.QRCode content={'http://www.wandoujia.com/apps' + this.props.url}/>
                    </WDJ.Modal>
                    <a href='#' id="showButton" className={this.props.icon} alt={this.props.title}><i></i></a>
                </div>;
        
        }

        return res;
    }
});

module.exports = ShareMoments;