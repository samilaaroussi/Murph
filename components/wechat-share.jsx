var StyleSheet = window.stilr;

var wechatStyle = StyleSheet.create({

    modalButton: {

        display: 'inline-block'
    }
});

var WDJShareWechat = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT');
    },

    render: function() {
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = <div className={wechatStyle.modalButton}><a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a></div>;
            
        } else {
            
            res = <div className={wechatStyle.modalButton}>
                      <WDJModal>
                          <WDJQRCode content={'http://www.wandoujia.com/apps' + this.props.url}/>
                      </WDJModal>
                      <a href='#openModal' className={this.props.icon} alt={this.props.title}><i></i></a>
                  </div>;
        }

        return res;
        
    }
});

