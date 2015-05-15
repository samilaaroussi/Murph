var WDJAppCard = React.createClass({

    render: function(){
        return (
            <div className="card">
                <a className='view-detail' href='javascript:void(0);' target='_default'>
                    <div className="icon">
                        <img src='icon' width="50px" height="auto" alt='Title' />
                    </div>
                    <div className="title">{this.props.name}</div>
                </a>
                    <div className="description">{this.props.desc}</div>
                    <a href="javascript:void(0);" className="button install"><i></i><span>安装</span></a>
            </div>
        );
    }
});
