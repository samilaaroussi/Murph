var React = require('react');
var _ = require('lodash');
var WDJ = require ('components');
var StyleSheet = require('stilr');

var App = React.createClass({

    componentDidMount: function() {

        var stylesheet = document.createElement('style'); 
        stylesheet.textContent = StyleSheet.render();
        document.head.appendChild(stylesheet);
    },

    render: function () {
        return <WDJ.Pages dir="h" bg="http://icreateconnections.com/wp-content/uploads/revslider/home2/img-33.jpg">

                    <WDJ.Page>
                        <WDJ.AppCard packageName="flipboard.cn" title="手册标题" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                        <WDJ.AppCard packageName="vstudio.android.camera360" title="手册标题 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                        <WDJ.DownloadButton customStyle={{install: {background: 'purple'}}} packageName='flipboard.cn'>
                            Button
                        </WDJ.DownloadButton>
                    </WDJ.Page>
                    <WDJ.Page>
                    <WDJ.CardList dataValue={[<WDJ.AppCard packageName="com.xiudang.jiukuaiyou.ui"/>, <WDJ.AppCard packageName="com.youku.phone"/>]}/>

                        <div className="share-buttons-wrap">
                            <div className="share-buttons">
                                <b>分享到：</b>
                               
                                <WDJ.ShareWeibo url="http://example.com" title="Weibo Share" pic="http://gdecogne.free.fr/photo-de-chat/photo-de-chat%20%285%29.jpg" desc="Weibo description example">
                                    Weibo  
                                </WDJ.ShareWeibo>
                                
                                <WDJ.ShareWechat url="http://example.com" title="Moments Share" desc="Moments description example">
                                    Wechat
                                </WDJ.ShareWechat>
                                
                                <WDJ.ShareMoments url="http://example.com" title="Moments Share" desc="Moments description example">
                                    Moments
                                </WDJ.ShareMoments>
                            </div>
                        </div>
                    </WDJ.Page>

                </WDJ.Pages>
    }

});

React.render(

    <App/>

    , document.body);