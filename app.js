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

        var verticalAlign = {verticalAlign: 'middle', marginBottom: '3px'};

        return <WDJ.Pages
                    dir="h"
                    parallax="-23%"
                    customStyle={{
                        parallaxBg: {
                            backgroundImage: "url(http://icreateconnections.com/wp-content/uploads/revslider/home2/img-33.jpg)"
                        }
                }}>

                    <WDJ.Page>
                        <WDJ.AppCard
                            packageName="vstudio.android.camera360"/>
                        <WDJ.AppCard
                            packageName="vstudio.android.camera360"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec a diam lectus. Sed sit amet ipsum mauris.
                                    Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                    </WDJ.Page> 
                    <WDJ.Page>
                        <WDJ.AppCard 
                            packageName="vstudio.android.camera360"
                            icon="http://img.wdjimg.com/mms/icon/v1/9/c2/c0d8f5066a18079d49623cd343ba1c29_68_68.png"
                            title="Custom Title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec a diam lectus. Sed sit amet ipsum mauris.
                                    Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                        <WDJ.AppCard
                            customStyle={{
                                installButton: {
                                    background: '#fff'
                                },
                                card: {
                                    backgroundColor: '#333',
                                    color: '#fff'
                                },
                                description : {
                                    color: '#fff',
                                    borderTop: '1px dashed #999'
                                },
                                metaWrap: {
                                    color: '#fff'
                                }
                            }}
                            packageName="vstudio.android.camera360"
                            icon="http://img.wdjimg.com/mms/icon/v1/9/c2/c0d8f5066a18079d49623cd343ba1c29_68_68.png"
                            title="Custom Title"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec a diam lectus. Sed sit amet ipsum mauris.
                                Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>

                    </WDJ.Page> 
                    <WDJ.Page>  
                        <WDJ.CardList dataValue={[<WDJ.AppCard packageName="com.xiudang.jiukuaiyou.ui"/>, <WDJ.AppCard packageName="com.youku.phone"/>]}/>
                    </WDJ.Page>
                    
                    <WDJ.Page>
                        <WDJ.Pages
                            dir="v"
                            customStyle={{
                                parallaxBg: {
                                    background: "#24aa42"
                                }
                        }}>
                        <WDJ.Page>
                            <WDJ.CardList
                                dataValue={[{
                                    "packageName": "com.wandoujia.eyepetizer", "title": "GoldenEye", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."}]}>
                                <WDJ.AppCard
                                    packageName="vstudio.android.camera360"
                                    title="Manual Title"
                                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec a diam lectus. Sed sit amet ipsum mauris.
                                        Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                            </WDJ.CardList>
                        </WDJ.Page>

                        <WDJ.Page>

                        <WDJ.QRCode size="9" content="http://www.wandoujia.com"/>
                        <WDJ.DownloadButton
                            customStyle={{
                                installButton: {
                                    top: '0px',
                                    position: 'relative',
                                    right: '0px',
                                    borderRadius: '4px',
                                    backgroundColor: '#4099FF',
                                    width: 'auto',
                                    margin: '20px',
                                    padding: '4px 10px',
                                    ':hover': {
                                        backgroundColor: '#337acc'
                                    }
                                }
                            }} 
                            packageName='http://apps.wandoujia.com/api/v1/apps/vstudio.android.camera360'>
                            <img src="http://png.findicons.com/files/icons/2779/simple_icons/128/facebook.png" style={verticalAlign} width="30px" height="auto"/>
                            Download
                        </WDJ.DownloadButton>
                        </WDJ.Page>
                        <WDJ.Page>
                            <div className="share-buttons-wrap">
                                <div className="share-buttons">
                                   
                                    <WDJ.ShareWeibo
                                        url="http://example.com"
                                        title="Weibo Share"
                                        pic="http://gdecogne.free.fr/photo-de-chat/photo-de-chat%20%285%29.jpg"
                                        desc="Weibo description example"
                                        customStyle={{
                                            modalButton: {
                                                color: "#fff"
                                            }
                                        }}
                                    >
                                        <p>微博</p>
                                    </WDJ.ShareWeibo>
                                    <WDJ.ShareWechat
                                        url="http://example.com"
                                        title="Moments Share"
                                        desc="Moments description example" 
                                        customStyle={{
                                            modalButton: {
                                                color: "#fff"
                                            }
                                        }}
                                    >
                                        <p>微信</p>
                                    </WDJ.ShareWechat>
                                    
                                    <WDJ.ShareMoments
                                        url="http://example.com"
                                        title="Moments Share"
                                        desc="Moments description example"
                                        customStyle={{
                                            modalButton: {
                                                color: "#fff"
                                            }
                                        }}
                                    >
                                        <p>朋友圈</p>
                                    </WDJ.ShareMoments>
                                </div>
                            </div>
                            <div className="share-buttons-wrap">
                                <div className="share-buttons">
                                    <b>分享到：</b>
                                   
                                    <WDJ.ShareWeibo
                                        url="http://example.com"
                                        title="Weibo Share"
                                        pic="http://gdecogne.free.fr/photo-de-chat/photo-de-chat%20%285%29.jpg"
                                        desc="Weibo description example"/>
                                    <WDJ.ShareWechat
                                        url="http://example.com"
                                        title="Moments Share"
                                        desc="Moments description example"/>
                                    
                                    <WDJ.ShareMoments
                                        url="http://example.com"
                                        title="Moments Share"
                                        desc="Moments description example"/>
                                </div>
                            </div>
                            </WDJ.Page>
                        </WDJ.Pages>
                    </WDJ.Page>

                </WDJ.Pages>
    }

});

React.render(

    <App/>

    , document.body);