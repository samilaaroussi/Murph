var WDJShareMoments = React.createClass({

    handleClick: function() {
        campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT_TIMELINE');
    },

    render: function() {
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = <div><a href="#" onClick={this.handleClick} alt={this.props.title} className={this.props.icon}><i></i></a></div>;
          
        } else {
            
              res = <div className="modal-button">
                        <Lightbox>
                          <LightboxTrigger>
                              <a href='#' className={this.props.icon} alt={this.props.title}><i></i></a>
                          </LightboxTrigger>
                          <LightboxModal>
                              <WDJQRCode content={'http://www.wandoujia.com/apps' + this.props.url}/>
                          </LightboxModal>
                      </Lightbox>
                    </div>;
        
        }

        return res;
    }
});