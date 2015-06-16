var Pages = React.createClass({

    componentDidMount: function() {

        // Initialize Swiper


        if (this.props.dir == 'v') {

            var swiperV = new Swiper('.swiper-container-v', {
                pagination: '.swiper-pagination-v',
                paginationClickable: true,
                direction: 'vertical',
                keyboardControl: 1,
                spaceBetween: 0,
                parallax: true,
                speed: 600
            });
        } else { // Horizontal Page Direction by default

            var swiperH = new Swiper('.swiper-container-h', {
                pagination: '.swiper-pagination-h',
                paginationClickable: true,
                keyboardControl: 1,
                spaceBetween: 0,
                parallax: true,
                speed: 600
            });

        }

    },


    render: function () {

        var parallaxBg = null;

        if (this.props.bg) {

            var divStyle = {backgroundImage:'url(' + this.props.bg +')'};
            parallaxBg = <div className="parallax-bg" style={divStyle} data-swiper-parallax="-23%"></div>;
        }

        return (
            <div className={"swiper-container swiper-container-" + this.props.dir}>

                {parallaxBg}
                
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>

                <div className={"swiper-pagination-white swiper-pagination-" + this.props.dir}></div>
            </div>

        );
    }
});