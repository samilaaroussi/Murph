var WDJCardList = React.createClass({

    render: function () {

        var cardList = this.props.dataValue.map(function (item) {
            if (typeof item == 'string') {
                return <li><WDJAppCard packageName={item}/></li>;
            }

            else if (typeof item == 'object') {
                return <li>{item}</li>;
            }

        });

        return (
            <ul>
                {cardList}
            </ul>
        );
    }
});

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

            success: function(data){
                return this.setState({
                    icon: data.icons.px68,
                    title: data.title,
                    desc: data.description,
                    count: data.downloadCountStr
                });
            }.bind(this)
        });

    },

    handleClick: function() {

        if (campaignTools.isInstalled(this.props.packageName)){

            campaignTools.openApp(this.props.packageName);

        } else{

            campaignTools.installApp(this.props.packageName);

        }
    },

    render: function (){

        /*if(campaignTools.isInstalled(this.props.packageName)){

            var btn = '开放';
        }

        else{
            var btn = '安装';
        }*/

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
                <a href="#" onClick={this.handleClick} className="button install"><i></i><span>打开</span></a>
            </div>
        );
    }
});