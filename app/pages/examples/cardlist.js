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

        return <WDJ.Pages
                    dir="v"
                    customStyle={{ parallaxBg: {backgroundColor: '#666'}
                }}>

                    <WDJ.Page>
                        <WDJ.CardList
                        	dataValue={
                        		[
                        			{
                        			"packageName": "com.wandoujia.eyepetizer",
                        			"title": "GoldenEye",
                        			"desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."
                        			}
                        		]
                        	}/>
                    </WDJ.Page>
                </WDJ.Pages>
    }

});

React.render(

    <App/>

    , document.body);