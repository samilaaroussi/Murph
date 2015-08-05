var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

    iconButton: {
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
        display: 'block',
        width: '80px',
        height: '30px',
        margin: '0 auto',
        lineHeight: '32px',
        textDecoration: 'none',
        background: '#4CC9B6',
        color: '#fff',
        position: 'relative',
        top: '18px',
        right: '10px'
    }

};

var DownloadButton = React.createClass({

    getInitialState: function () {
        return {
            isInstalled: false
        };
    },

    componentWillMount: function () {


        if (device.isP4) {

            if (campaignTools.isInstalled(this.props.packageName)) {

                this.state.isInstalled = true;

            }
           
        }
    },


    handleClick: function(event) {

        var apk = this.props.packageName;

            if (apk.indexOf('http://apps.wandoujia.com/api/v1/apps/' === 0)){

                apk = apk.substring(apk.lastIndexOf("/")+1);
            }

        if (device.isP4) {

            if (this.state.isInstalled) {

                campaignTools.openApp(apk);
                
            } else {

                campaignTools.installApp(apk);
                
            }
            
        } else {

            window.open('http://www.wandoujia.com/apps/' + apk)
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

    render: function () {

        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

        return (
            <a href="#" onClick={this.handleClick} className={style.installButton}>{this.props.children}</a>

        );
    }

});

module.exports = DownloadButton;