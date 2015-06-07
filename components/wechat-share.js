var WDJShareWechat = React.createClass({

    handleClick: function() {

        var runApp = campaignTools.runAppShare(this.props.title, this.props.desc, this.props.pic, this.props.url, 'WECHAT');
        <a href="#" onClick={runApp} alt={this.props.title} className={this.props.icon}><i></i></a>
    
    },

    render: function() {
        
        var res;
        
        if (device.isP4 && campaignTools.isInstalled('com.tencent.mm')) {
            
            res = this.HandClick;
            
        } else {
            
            res = <div className="modal-button">
                      <WDJModal title={this.props.title}>
                          <WDJQRCode content={'http://www.wandoujia.com/apps' + this.props.url}/>
                      </WDJModal>
                      <a href='#openModal' className={this.props.icon} alt={this.props.title}><i></i></a>
                  </div>;
        }

        return res;
        
    }
});