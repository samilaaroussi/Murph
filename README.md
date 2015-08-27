Murph - Single Campaign Generator
===================

Murph is a web page generator & editor for marketing campaigns.
Github repo of the project : https://github.com/wandoulabs/Murph

----------

Template
-------------

#### Create a new campaign

Create a new file from *app/pages* directory and insert these lines :

```
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
        return (
            // Insert your app here
        );
    }
});

React.render(<App/>,document.body);
```
You can also find usage examples in *app/pages/examples*.

Generation
-------------

Open the project directory with your terminal and lunch this command line :

```
 npm install
```

#### Development

```
grunt server
```
    
This command will generate all templates, create a local server (*localhost:9997*) and watch your live modifications from all **templates** and **components**.


#### Production

```
grunt build
```
    
This command will generate all templates created into */dist* directory.

Components
---------------

####Pages

Create a new horizontal/vertical group of pages (contain multiple pages).

**Properties**

- direction: define slides direction (values: "horizontal" or "vertical")
- parallax: speed in percentage for parallax image background
- customStyle:
    - background

**Example**
```
<Pages>
    <WDJ.Page>...</WDJ.Page>
    <WDJ.Page>...</WDJ.Page>
</Pages>
```

####Page

Create a new campaign page.

**Example**
```
<Page>
    <WDJ.Image
        image="http://www.wandoujia.com/logo.png"
    />
</Page>
```

####Image

**Properties**

- image: source url
- customStyle:
    - image

**Example**
``` 
<WDJ.Image
    image="http://www.wandoujia.com/logo.png"
/>
``` 

####App Card

Display an app card with default or custom datas.

![App Card](screenshots/appCard.png)

**Properties**

- packageName
- icon: defining a custom app icon
- title: defining a custom app title
- description: defining a custom description
- customStyle:
    - card
    - viewDetail
    - icon
    - metaWrap
    - meta
    - description
    - iconButton
    - installButton

**Example**
```
<WDJ.AppCard
    packageName="com.tencent.mm" 
    title="Custom Title"
/>
```

####Card List

![Card List](screenshots/cardList.png)

**Properties**

- dataValue
- customStyle:
    - cardListWrap
    - cardList

**Example**
  
```
<WDJ.CardList
    dataValue={
        [
        <AppCard
            packageName="com.xiudang.jiukuaiyou.ui"
         />,
         <AppCard 
            packageName="com.youku.phone"/>
        ]
    }
/>
```

####Download Button

![Download Button](screenshots/download.png)

**Properties**

- packageName
- customStyle:
    - iconButton
    - installButton

**Example**
```
<WDJ.DownloadButton
    packageName="com.youku.phone">
    Button
</WDJ.DownloadButton>
```

####Share Buttons (ShareWechat / ShareMoments / ShareWeibo)

![Social Share](screenshots/socialShare.png)

**Properties**

- content
- size
- customStyle:
    - modalButton
    - shareButton

**Example**

```
<WDJ.ShareWechat
    url="http://example.com"
    title="Moments Share"
    desc="Moments description example">

</WDJ.ShareWechat>
```

####QR Code

**Properties**

- content
- size

**Example**
```
<WDJ.QRCode
    size="9" 
    content="http://www.wandoujia.com"
/>
```

Custom Style
-------------

For each components, you can add or modify existing class names or modifying existing ones. To do it, use the property *customStyle*.

**Example**


This is a simple example with existing classnames from App Card component.

```
<WDJ.AppCard customStyle={{
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
```

TODO
-------------

[ ] UI Builder
[ ] Text component
[ ] Advanced Video Component