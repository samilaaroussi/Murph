var WDJModal = React.createClass({

    render: function () {

        return (

                <LightboxModal>
                    <div>
                        {this.props.children}
                    </div>
                </LightboxModal>  

        );
    }

});