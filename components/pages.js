var Pages = React.createClass({

    componentDidMount: function() {

        // Initialize Swiper

        var swiperH = new Swiper('.swiper-container-h', {
            pagination: '.swiper-pagination-h',
            paginationClickable: true,
            keyboardControl: 1,
            height: 431,
            spaceBetween: 0
        });
        var swiperV = new Swiper('.swiper-container-v', {
            pagination: '.swiper-pagination-v',
            paginationClickable: true,
            direction: 'vertical',
            height: 431,
            keyboardControl: 1,
            spaceBetween: 0
        });

    },


    render: function () {
        return (

            <div className={"swiper-container swiper-container-" + this.props.dir}>
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
            </div>

        );
    }
});