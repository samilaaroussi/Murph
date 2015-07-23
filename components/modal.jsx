var React = require('react');
var WDJ = require('../components.js');

var Modal = React.createClass({

    componentDidMount: function() {

        $(function () {
            $('#element').on('click', function () {
                $.fn.custombox( this );
                return false;
            });
        });
    },

    render: function () {

        return (
            <div id="openModal" className="modalDialog">
                <div className="container">
                    <a href="#close" title="Close" className="close">X</a>
                    {this.props.children}
                </div>
            </div>

        );
    }

});

module.exports = Modal;