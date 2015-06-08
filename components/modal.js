var WDJModal = React.createClass({

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