var StyleSheet = window.stilr;

var styles = StyleSheet.create({

  parallaxBg: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '130%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
  }
});

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

        if (this.props.bg){
            var divStyle = {backgroundImage:'url(' + this.props.bg +')'};
        }

        return (
            <div className={"swiper-container swiper-container-" + this.props.dir}>
                <div className={styles.parallaxBg} style={divStyle} data-swiper-parallax="-23%">
                </div>
                
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>

                <div className={"swiper-pagination swiper-pagination-white swiper-pagination-" + this.props.dir}></div>
            </div>

        );
    }
});

var stylesheet = document.createElement('style');
stylesheet.textContent = StyleSheet.render();
document.head.appendChild(stylesheet);