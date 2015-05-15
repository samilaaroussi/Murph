var WDJAppCard = React.createClass({

    getInitialState: function() {
        return {
            icon: null,
            title: null,
            desc: null
        };
    },

    componentWillMount: function() {

        var url;
        url="http://apps.wandoujia.com/api/v1/apps/" + this.props.packageName;

        $.getJSON(url + "?callback=?", (function(data) {

            return this.setState({
                icon: data.icons.px48,
                title: data.title,
                desc: data.description
            });

        }).bind(this));

    },

    render: function(){

        return (

            <div className="card">

                <div className='view-detail' href='javascript:void(0);' target='_default'>
                    <div className="icon">
                        <img src={this.state.icon} width="50px" height="auto" alt='Title' />
                    </div>
                    <div className="title">{this.state.title}</div>
                </div>
                    <div className="description">{this.state.desc}</div>
                    <a href="javascript:void(0);" className="button install"><i></i><span>安装</span></a>
            </div>
        );
    }
});