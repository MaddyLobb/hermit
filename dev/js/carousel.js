import { Fancybox } from "@fancyapps/ui";
import { Carousel } from "@fancyapps/ui";

export function lifeCarousel(){
    const lifeCarousel = new Carousel(document.querySelector(".carousel-1"),{
            'center': false,
            slidesPerPage: 1,
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
          on: {
            change: (that) => {
              lifeCarousel.slideTo(lifeCarousel.findPageForSlide(that.page), {
                friction: 0,
              });
            },
          },
        },
      });
}