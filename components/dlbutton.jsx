var React = require('react');
var StyleSheet = require('stilr');
var _ = require('lodash');
var WDJ = require('components');

var defaultStyle = {

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

};

var DlButton = React.createClass({

    getInitialState: function () {
        return {
            title: '',
            isInstalled: false
        };
    },

    componentWillMount: function () {

        $.ajax({
            url: 'http://apps.wandoujia.com/api/v1/apps/' + this.props.packageName,
            dataType: 'jsonp',

            success: function(data) {
                return this.setState({
                    title: data.title
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

    render: function () {

        var customStyle = this.props.customStyle || '';
        var mergeStyle = _.merge(defaultStyle, customStyle);
        var style = StyleSheet.create(mergeStyle);

        return (
                <a href="#" onClick={this.handleClick} className={style.install + ' ' + style.button}>{this.props.children}</a>

        );
    }

});

module.exports = DlButton;