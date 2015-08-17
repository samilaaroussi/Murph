Murph - Single Campaign Generator
===================

Murph is a web page generator & editor for marketing campaigns.
Github repo of the project : https://github.com/wandoulabs/Murph

----------


Templating
-------------

#### <i class="icon-file"></i> Create a new campaign

For creating a new template, first of all, create a new file on *app/pages* directory.

Then, insert this lines :

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
		                return // Insert your web page here
	                }
                });
            
	            React.render(<App/>,document.body);

You can also find examples on the directory *app/examples*.

Generating
-------------

First of all, open the project directory with your terminal and lunch this command lines:

    npm install

#### <i class="icon-refresh"></i> Development

    grunt server
    
This command will generate all templates, create a local server (on localhost:9997) and watch your live modifications from all templates and components


#### <i class="icon-folder-open"></i> Production

    grunt build
    
This command will generate all templates created into */dist* directory.

Components
---------------

####Page
Create a new campaign page.

**Example**

    <AppCard
	    packageName="com.tencent.mm"
		title="Custom Title"
	/>
    
####Pages

Create a new horizontal/vertical group of pages.

**Properties**

- direction
- parallax
- customStyle

**Example**

    <AppCard
	    packageName="com.tencent.mm"
		title="Custom Title"
	/>
####App Card
Display an app card with default or custom datas.

**Example**

    <AppCard
	    packageName="com.tencent.mm" 
	    title="Custom Title"
	/>
    
**Properties**

- packageName
- icon
- title
- description
- customStyle

####Card List

**Properties**
- dataValue
- customStyle

**Example**
  
     <WDJ.CardList
    	    dataValue={
    		    [<WDJ.AppCard
	    		    packageName="com.xiudang.jiukuaiyou.ui"
		    	 />,
    			 <WDJ.AppCard 
    				 packageName="com.youku.phone"/>
    			]
    		}
	/>

####Download Button

**Properties**

- packageName
- customStyle

####Share Buttons (ShareWechat, ShareMoments & ShareWeibo)

**Properties**

- content
- size
- customStyle

**Example**

    <ShareWechat
	    url="http://example.com"
        title="Moments Share"
        desc="Moments description example">
	    <div className="share-wechat">
		    <i></i>
		</div>
	</ShareWechat>

####QR Code

**Properties**

- content
- size
- customStyle

**Example**

    <QRCode
    	size="9" 
    	content="http://www.wandoujia.com"
    />

Custom Style
-------------
For every components, it's possible to add a custom style by the *customStyle* property.

**Example**

    <AppCard
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
		packageName="vstudio.android.camera360"/>