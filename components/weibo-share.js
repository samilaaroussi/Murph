var WDJShareWeibo = React.createClass({

	render: function(){
	    return (

			<a href={'http://service.weibo.com/share/share.php?url='
			+ this.props.url + '&appkey=&title=' + this.props.title +'&pic='
			+ this.props.pic + '&ralateUid=&language=zh_cn'}
			alt={this.props.title} className={this.props.icon}><i></i></a>

		);
    }
});