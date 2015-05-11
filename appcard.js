var AppCard = React.createClass({
            render: function(){
                return (
                    <div className="card">
                    <a className='view-detail' href='javascript:void(0);' target='_default'>
                      <div className="icon">
                        <img src={this.props.icon} width="50px" height="auto" alt='Title' />
                      </div>
                      <div className="title">{this.props.name}</div></a>
                      <div className="description">{this.props.desc}</div>
                      <a href="javascript:void(0);" className="button install"><i></i><span>安装</span></a>
                    </div>
                );
            }
        });

        React.render(<AppCard icon="http://www.yqdown.com/img2015/5/4/2015050450751221_APP.png"
                              desc="榫卯（sǔn mǎo）－这是献给所有木头爱好者的情诗。你可以像玩游戏那般感受中国传统建筑、家具中那精妙绝伦的木质结构连接技艺，也能深刻体会到作者的独具匠心。"
                              name="App Name"/>, document.getElementById('content'));
