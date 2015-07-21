var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('../components.js');

var appCardStyle = StyleSheet.create({

    card: {
        position: 'relative',
        zIndex: '1',
        maxWidth: '275px',
        margin: '15px auto',
        padding: '10px',
        color: '#333',
        background: '#fff',
        boxShadow: '0px 1px 2px #D6D6D6'
    },
    viewDetail: {
        display: 'block',
        textDecoration: 'none',
        overflow: 'hidden',
        paddingBottom: '10px'
    },
    icon: {
        display: 'block',
        width: '68px',
        height: '68px',
        margin: '0 auto',
        overflow: 'hidden',
        float: 'left'
    },
    title: {
        padding: '15px 0',
        fontSize: '17px',
        lineHeight: '1',
        color: '#333',
        float: 'left',
        marginLeft: '10px'
    },
    count: {
        padding: '6px 0',
        fontSize: '12px',
        lineHeight: '1',
        color: '#999',
        float: 'left',
        marginLeft: '10px'
    },
    description: {
        fontSize: '12px',
        color: '#666',
        lineHeight: '1.5',
        paddingBottom: '0',
        paddingTop: '10px',
        borderTop: '1px solid #eee',
        textAlign: 'left',
    },

    button: {
        display: 'block',
        width: '80px',
        height: '30px',
        margin: '0 auto',
        lineHeight: '32px',
        textDecoration: 'none'
    },
    iconBtn: {
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundImage: 'url(\'http://static.wdjimg.com/www/images/campaign/designaward2014/1x-s325d703603.png\')',
        backgroundPosition: '0 -419px',
        backgroundRepeat: 'no-repeat',
        height: '16px',
        overflow: 'hidden',
        width: '16px'
    },
    install: {
        background: '#4CC9B6',
        color: '#fff',
        position: 'absolute',
        top: '18px',
        right: '10px'
    }
});

var customStyle = StyleSheet.create({

    install: {
        background: 'blue',
    }
});

var AppCard = React.createClass({

    getInitialState: function () {
            return {
                icon: '',
                title: '',
                desc: '',
                count: 0,
                isInstalled: false
            };
    },

    componentWillMount: function () {

        $.ajax({
            url: 'http://apps.wandoujia.com/api/v1/apps/' + this.props.packageName,
            dataType: 'jsonp',

            success: function(data) {
                return this.setState({
                    icon: data.icons.px68,
                    title: data.title,
                    desc: data.description,
                    count: data.downloadCountStr
                });
            }.bind(this)
        });

        if (device.isP4) {

            if (campaignTools.isInstalled(this.props.packageName)) {

                this.state.isInstalled = true;

            }
           
        }

    },

    handleClick: function(event) {

        if (device.isP4) {

            if (this.state.isInstalled) {

                campaignTools.openApp(this.props.packageName);
                
            } else {

                campaignTools.installApp(this.props.packageName);
                
            }
            
        } else {

            window.open('http://www.wandoujia.com/apps/' + this.props.packageName)
        }

    },

    getInstallStateText: function () {

        if (device.isP4) {

            if (this.state.isInstalled) {
    
                return '打开';
                
            }

        }

        return '安装';
    },

    render : function() {

      var desc = this.props.desc || this.state.desc.substr(0, 80) + ' ...';
      var mergeStyle = _.extend(_.values(appCardStyle), _.values(customStyle));
      debugger;

      return (
          <div className={appCardStyle.card}>
              <div className={appCardStyle.viewDetail}>
                  <div className={appCardStyle.icon}>
                      <img src={this.props.icon || this.state.icon} alt={this.props.title || this.state.title} />
                  </div>
                  <div className={appCardStyle.title}>{this.props.title || this.state.title}</div>
              </div>
              <div className={appCardStyle.description} dangerouslySetInnerHTML={{__html: desc}}/>
              <a href="#" onClick={this.handleClick} className={mergeStyle.install + ' ' + appCardStyle.button}><span className={appCardStyle.iconBtn}></span><span>{this.getInstallStateText()}</span></a>
          </div>
      );
    }
});

module.exports = AppCard;