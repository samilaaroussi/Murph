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
                    dir="v"
                    customStyle={{ parallaxBg: {backgroundColor: '#666'}
                }}>

                    <WDJ.Page>
                        <WDJ.Image src="https://tctechcrunch2011.files.wordpress.com/2013/08/screen-shot-2013-08-21-at-9-32-01-am.png"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec a diam lectus. Sed sit amet ipsum mauris.
                                    Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.</p>
                    </WDJ.Page>
                </WDJ.Pages>
    }

});

React.render(

    <App/>

    , document.body);