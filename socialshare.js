var WDJShare = React.createClass({
          render:function(){

        	var left = {
            display: 'inline-block'

          };

          var top = {
            display: 'block'

          };

          return ( <div className="share-buttons-wrap"><div className="share-buttons">

          <div style={top}>{this.props.shareTitle}</div>

    	     // Weibo button

          <a href={'http://service.weibo.com/share/share.php?url='
          			+ this.props.weiboUrl + '&appkey=&title=' + this.props.weiboTitle +'&pic=' + this.props.weiboPic + '&ralateUid=&language=zh_cn'} alt={this.props.weiboTitle} className={this.props.weiboIcon}><i></i></a>
          			
    	     // Wechat button

          <a href={this.props.wechatUrl} className={this.props.wechatIcon} alt={this.props.wechatTitle}><i></i></a>

           // Wechat moments button

          <a href={this.props.momentsUrl} className={this.props.momentsIcon} alt={this.props.momentsTitle}><i></i></a></div></div>
);


          }
        });

    // Social Share Render

    React.render(<WDJShare shareTitle="Share on: "

                weiboUrl="http://example.com"
    						weiboIcon="share-weibo"
    						weiboTitle="Weibo Share"
    						weiboPic="http://gdecogne.free.fr/photo-de-chat/photo-de-chat%20%285%29.jpg"

    						wechatIcon="share-wechat"
    						wechatUrl="http://www.slt.fr"
    						wechatTitle="Wechat Share"

  						momentsIcon="share-wechat"
    						momentsTitle="Moments Share"
    						momentsUrl="#"/>, document.getElementById('footer'));
