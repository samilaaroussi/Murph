var WDJShareMoments = React.createClass({

	render: function(){
	    return (<a href={this.props.url} className={this.props.icon} alt={this.props.title}><i></i></a>);
	}
});