var WDJShareWeibo = React.createClass({

	render: function(){
        var weibo = device.isWeibo;
        if (weibo && campaignTools.isInstalled('com.sina.weibo')){
    	    
    		res = <a href={'http://www.wandoujia.com/qr?c=http://service.weibo.com/share/share.php?url=' + this.props.url + '&appkey=&title=' + this.props.title +'&pic=' + this.props.pic + '&ralateUid=&language=zh_cn'} alt={this.props.title} className={this.props.icon}><i></i></a>
        }

        else{
            
            res = <a href={'http://service.weibo.com/share/share.php?url=' + this.props.url + '&appkey=&title=' + this.props.title +'&pic=' + this.props.pic + '&ralateUid=&language=zh_cn'} alt={this.props.title} className={this.props.icon}><i></i></a>

        }
        return res;
    }
});