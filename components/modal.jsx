var WDJModal = React.createClass({

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