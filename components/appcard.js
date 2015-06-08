var WDJAppCard = React.createClass({
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
                <a href="#" onClick={this.handleClick} className="button install"><i></i><span>{this.getInstallStateText()}</span></a>
            </div>
            );
    }
});