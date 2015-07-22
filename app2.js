var React = require('react');
var WDJ = require ('./components.js');

var App = React.createClass({

    render: function () {

        return <WDJ.Pages dir="h" bg="http://icreateconnections.com/wp-content/uploads/revslider/home2/img-33.jpg">

                    <WDJ.Page>
                        <WDJ.AppCard packageName="vstudio.android.camera360" title="Manual Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>
                        <WDJ.AppCard packageName="vstudio.android.camera360" title="Manual Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."/>

                    </WDJ.Page>

                    <WDJ.Page>
                        <WDJ.CardList dataValue={[<WDJ.AppCard packageName="com.xiudang.jiukuaiyou.ui"/>, <WDJ.AppCard packageName="com.youku.phone"/>]}/>
                    </WDJ.Page>

                    <WDJ.Page>
                        <WDJ.Video type="intern" mp4Url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" oggUrl="http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv"/>
                        <WDJ.Video type="youku" id="XMTI1NTgyMTI4OA"/>
                        <div className="share-buttons-wrap">
                            <div className="share-buttons">
                                <b>分享到：</b>

                                <WDJ.ShareWeibo url="http://example.com" icon="share-weibo" title="Weibo Share" pic="http://gdecogne.free.fr/photo-de-chat/photo-de-chat%20%285%29.jpg" desc="Weibo description example"/>
                                
                            </div>
                        </div>
                    </WDJ.Page>

                </WDJ.Pages>
    }

});

React.render(

    <App/>

    , document.body);