var React = require('react');
var _ = require('lodash');
var WDJ = require ('components');
var StyleSheet = require('stilr');
var Modal = require('react-modal');


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
                    </WDJ.Page>
                    <WDJ.Page>
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
                    </WDJ.Page> 
                    <WDJ.Page>
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
                </WDJ.Pages>
    }

});

React.render(

    <App/>

    , document.body);