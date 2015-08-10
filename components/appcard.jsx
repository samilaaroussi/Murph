var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');

var defaultStyle = {

    card: {
        position: 'relative',
        zIndex: '1',
        maxWidth: '275px',
        margin: '15px auto',
        padding: '10px',
        color: '#333',
        background: '#fff',
        boxShadow: '0px 1px 2px rgba(33,33,33,0.5)'
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
    metaWrap: {
        padding: '15px 0',
        fontSize: '17px',
        lineHeight: '1',
        color: '#333',
        float: 'left',
        marginLeft: '10px',
        textAlign: 'left'
    },
    meta: {
        margin: '7px 0',
        fontSize: '10px',
        color: '#999'
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
    installButton: {
        background: '#4CC9B6',
        color: '#fff',
        position: 'absolute',
        top: '18px',
        right: '10px'
    }

};

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
                    count: data.downloadCountStr,
                    size: data.latestApk.size
                });
            }.bind(this)
        });

        if (device.isP4) {

            if (campaignTools.isInstalled(this.props.packageName)) {

                this.state.isInstalled = true;

            }
           
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

        var WDJ = require('components');

        var desc = this.props.desc || this.state.desc.substr(0, 80) + ' ...';
        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge({}, defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);


        return (
            <div className={style.card}>
              <div className={style.viewDetail}>
                  <div className={style.icon}>
                      <img src={this.props.icon || this.state.icon} alt={this.props.title || this.state.title} />
                  </div>
                  <div className={style.metaWrap}>
                    {this.props.title || this.state.title}
                    <p className={style.meta}>{this.state.count}人安装 {this.state.size}</p>
                  </div>
              </div>
              <div className={style.description || this.state.description} dangerouslySetInnerHTML={{__html: desc}}/>
              <WDJ.DownloadButton customStyle={style.installButton} packageName={this.props.packageName}><span className={style.iconBtn}></span><span>{this.getInstallStateText()}</span></WDJ.DownloadButton>
            </div>
        );
    }
});

module.exports = AppCard;