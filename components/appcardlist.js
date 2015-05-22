var AppCardList = React.createClass({
	render: function () {
		return (
			<ul>
				{this.props.dataValue.map(function (item) {
					return <li><AppCardListItem packageName={item}/></li>;
				})}
			</ul>
		);
	}
});

var AppCardListItem = React.createClass({
	getInitialState: function() {
		return {
			icon: null,
			title: null,
			desc: null,
			count: null
		};
	},

	componentWillMount: function() {

		$.ajax({
			url: 'http://apps.wandoujia.com/api/v1/apps/' + this.props.packageName,
			beforeSend: function(x) {
				if(x && x.overrideMimeType) {
					x.overrideMimeType("application/j-son;charset=UTF-8");
				}
			},

			dataType: "jsonp",

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

	/* getJSON version

	componentWillMount: function() {

		var url='http://apps.wandoujia.com/api/v1/apps/' + this.props.packageName;

		$.getJSON(url + '?callback=?', (function(data) {

			return this.setState({
				icon: data.icons.px48,
				title: data.title,
				desc: data.description
			});

		}).bind(this));

	},*/

	render: function(){

		var desc = typeof this.state.desc;
		return (
			<div className="card">

				<div className='view-detail' href='javascript:void(0);' target='_default'>
					<div className="icon">
						<img src={this.state.icon} alt={this.state.title} />
					</div>
					<div className="title">{this.state.title}</div>
				</div>
				<div className="description"><span dangerouslySetInnerHTML={{__html: desc}}/></div>
				<a href="javascript:void(0);" className="button install"><i></i><span>安装</span></a>
			</div>
		);
	}
});