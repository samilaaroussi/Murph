var WDJApp = React.createClass({

    render: function () {

        return <Pages dir="v">

                    <Page>
                        <WDJCardList dataValue={[<WDJAppCard packageName="com.xiudang.jiukuaiyou.ui"/>, <WDJAppCard packageName="com.youku.phone"/>]}/>
                    </Page>
                    <Page>
                        <WDJCardList dataValue={[{"packageName": "com.wandoujia.eyepetizer", "title": "GoldenEye", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."}]}>

                            <WDJAppCard packageName="vstudio.android.camera360" title="Manual Title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>

                            <WDJAppCard packageName="vstudio.android.camera360" title="Manual Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                        </WDJCardList>
                    </Page>

                    <Page>
                        <Pages dir="h">
                            <Page>
                                <WDJVideo type="intern" mp4Url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                                             oggUrl="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv"/>
                            </Page>

                            <Page>
                                <WDJVideo type="youku" id="XMTI1NTgyMTI4OA"/>
                            </Page>
                        </Pages>
                    </Page>
                    <Page>
                        <div className="share-buttons-wrap">
                            <div className="share-buttons">
                                <b>分享到：</b>

                                <WDJShareWeibo url="http://example.com" icon="share-weibo" title="Weibo Share" pic="http://gdecogne.free.fr/photo-de-chat/photo-de-chat%20%285%29.jpg" desc="Weibo description example"/>
                                <WDJShareWechat url="http://example.com" icon="share-wechat" title="Moments Share" desc="Moments description example"/>
                                <WDJShareMoments url="http://example.com" icon="share-wechat-timeline" title="Moments Share" desc="Moments description example"/>

                            </div>
                        </div>
                    </Page>

                </Pages>;

    }

});