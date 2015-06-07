var WDJAppCard = React.createClass({
    getInitialState: function () {
        return {
            icon: '',
            title: '',
            desc: '',
            count: 0
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

    },

    handleClick: function(event) {

        if (device.isP4) {

            if (campaignTools.isInstalled(this.props.packageName)) {

                campaignTools.openApp(this.props.packageName);
            
            } else {

                campaignTools.installApp(this.props.packageName);
            
            }
            
        } else {

            window.open('http://www.wandoujia.com/apps/' + this.props.packageName)
        }


    },

    getInstalledBtnName: function () {

        if (device.isP4) {

            if (campaignTools.isInstalled(this.props.packageName)) {

                return '开放';
            
            }

            return '安装';

        }

        return '安装';
    },

    render: function () {

        var desc = this.props.desc || this.state.desc.substr(0, 80) + ' ...';

        return (
            <div className="card">
                <div className='view-detail'>
                    <div className="icon">
                        <img src={this.props.icon || this.state.icon} alt={this.props.title || this.state.title} />
                    </div>
                    <div className="title">{this.props.title || this.state.title}</div>
                </div>
                <div className="description" dangerouslySetInnerHTML={{__html: desc}}/>
                <a href="#" onClick={this.handleClick} className="button install"><i></i><span>{this.getInstalledBtnName()}</span></a>
            </div>
        );
    }
});