var Page = React.createClass({
    
    render: function(){

        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        );
    }
});