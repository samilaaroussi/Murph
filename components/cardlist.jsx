var React = require('react');
var StyleSheet = require('stilr');
var WDJ = require('../components.js');

var cardListStyle = StyleSheet.create({

    cardListWrap: {
        position: 'relative',
        width: '100%'
    },

    cardList: {
        position: 'relative',
        width: '100%',
        height: '100%'
    }
});

var CardList = React.createClass({
    
    render: function () {

        if (!this.props.children) {

            return (
                <div className={cardListStyle.cardListWrap}>
                    <div className={cardListStyle.cardList}>
                        {this.props.dataValue.map(function (item) {
                            if (typeof item == 'string') {
                                
                                return <WDJ.AppCard packageName={item}/>;
                            
                            }

                            else if (typeof item == 'object') {

                                if ('packageName' in item || 'title' in item) {

                                    return <WDJ.AppCard packageName={item.packageName || ''} icon={item.icon} title={item.title} desc={item.desc}/>;
                               
                                } else {

                                    return item;

                                }
                            }

                        })}
                    </div>
                </div>
            );

        }

        return (

            <div className={cardListStyle.cardListWrap}>
                <div className={cardListStyle.cardList}>

                    {this.props.dataValue.map(function (item) {
                         if (typeof item == 'string') {
                             
                             return <WDJ.AppCard packageName={item}/>;
                         
                         }

                         else if (typeof item == 'object') {

                             if ('packageName' in item || 'title' in item) {

                                 return <WDJ.AppCard packageName={item.packageName || ''} icon={item.icon} title={item.title} desc={item.desc}/>;
                            
                             } else {

                                 return item;

                             }
                         }

                    })}               

                    {this.props.children}

                </div>
            </div>
        );
    }
});

module.exports = CardList;