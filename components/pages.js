var Pages = React.createClass({

    componentDidMount: function() {

        // Initialize Swiper


        if (this.props.dir == 'v') {

            var swiperV = new Swiper('.swiper-container-v', {
                pagination: '.swiper-pagination-v',
                paginationClickable: true,
                direction: 'vertical',
                keyboardControl: 1,
                spaceBetween: 0
            });
        }

        else { // Horizontal Page Direction by default

            var swiperH = new Swiper('.swiper-container-h', {
                pagination: '.swiper-pagination-h',
                paginationClickable: true,
                keyboardControl: 1,
                spaceBetween: 0

            });

        }

        $(window).resize(function(){
            var height = $(window).height();
            var width  = $(window).width();
            $('.swiper-container, .swiper-slide').height(height);
            $('.swiper-container, .swiper-slide').width(width);

        })
        $(window).resize();

    },


    render: function () {
        return (

            <div className={"swiper-container swiper-container-" + this.props.dir}>
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>

                <div className={"swiper-pagination swiper-pagination-" + this.props.dir}></div>
            </div>

        );
    }
});