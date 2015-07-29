var React = require('react');
var StyleSheet = require('stilr');
var WDJ = require('../components.js');

var wechatStyle = StyleSheet.create({

    modalButton: {

        display: 'inline-block'
    }
});

var ShareWechat = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT');
    },

    render: function() {
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = <div className={wechatStyle.modalButton}><a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a></div>;
            
        } else {
            
            res = <div className={wechatStyle.modalButton}>
                      <WDJ.Modal>
                          <WDJ.QRCode content={'http://www.wandoujia.com/apps' + this.props.url}/>
                      </WDJ.Modal>
                      <a href='#openModal' className={this.props.icon} alt={this.props.title}><i></i></a>
                  </div>;
        }

        return res;
        
    }
});

module.exports = ShareWechat;