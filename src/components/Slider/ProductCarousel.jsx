// ProductCarousel.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Amazon1 from "../../img/amazon1.jpg";
import Amazon2 from "../../img/amazon2.jpg";
import Amazon3 from "../../img/amazon3.jpg";
import Amazon4 from "../../img/amazon4.jpg";
import Amazon5 from "../../img/amazon5.jpg";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px", // Adjust the padding for center mode
};

const data = [
    {
      name: Clara 925 Sterling Silver Heart Pendant Necklace | With or Without Chain | Gift for Women and Girls,
      img: Amazon1,
      price: ₹2057,
      stars: 4, // Placeholder for star rating
      link: https://www.amazon.in/Sterling-Pendant-Necklace-Rhodium-Zirconia/dp/B09XNB3DZX?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=24T4YV94DEENMF2GX90W&linkCode=ll1&tag=genaigifts-21&linkId=28813b7cfe29d1353c36425292578222&language=en_IN&ref_=as_li_ss_tl    },
    {
      name: ZAVERI PEARLS Set Of 2 Rose Gold Dazzling Austrian Diamonds Bracelet For Women-ZPFK16864,
      img: Amazon2,
      price: ₹488,
      stars: 4, // Placeholder for star rating
      link: https://www.amazon.in/ZAVERI-PEARLS-Dazzling-Austrian-Women-ZPFK16864/dp/B0CLJL9FCS?crid=2Y3Z8AIMY85S2&dib=eyJ2IjoiMSJ9.-08jI0CCEQ0UGh_eZ1-uAPgdruXKIc-xehk23PqNzQ5IJYCbiJdjK0O8sO5FLeeRSb0WPoQTBuKr4Xt6yb9ZYX623GJEhnijsSENZYiNH8pchySgxVk2qN7d2QI2EnxPEbYcg9XzCbM_llNV2Pk9JROct5X9M8f4pO4tJQk-DIBSw9hyphjyqnv5fIXEgT4A7QFrUk7oFH6w7TbBmm5Er68zroACz4e5k3qU5zD6FYoX2n2r-3MPdkTg3vy3T3wUGKlGIcS7zh8AygAZBiAJMvsfzT_jzvYlaqMGfmcywDo.u4sEpLdDtYtejLHBYlTBZ32ELLjedHiSRl0GfyX6iks&dib_tag=se&keywords=women+jewellery&qid=1716056381&s=jewelry&sprefix=women+%2Cjewelry%2C224&sr=1-7&linkCode=ll1&tag=genaigifts-21&linkId=4f075341f7bc9e052814dabd7f84225a&language=en_IN&ref_=as_li_ss_tl
    },
    {
      name: Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04),
      img: Amazon3,
      price: ₹649,
      stars: 3.8, // Placeholder for star rating
      link: https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-01-04/dp/B0CTQCP2BZ?crid=33PG2ACNJYYWI&dib=eyJ2IjoiMSJ9.kRgEYwRxnS_S6jIfPMaFcKCDA69yXX0c9L-QQH1yHIn2l80RZjd0_E2IX5Ho7bx97DHeM0uv7N2sKko6K9RrwsnZ7Nwa0-YbWgHvmG9F1gukx_VxT5qFMe74c3AgLnjfwDLP9PI7LEkmpmb91FnW0XCb8MyDQ_xzatZJ6jwrHBZrhUOyccXs4cNHFBeS3Qy2o-9Qjglii30blV3zGKT8KqIcSK4ytwdn2jjeLUcauzPtbVe0YCaHJ59W61GY78qrH5wrQt7CK63mDPJKyObFKnOZwLQi7hjg90T3RW3A1U.TqVc0px-xuylrC1TJzAh3Mt_pgNdHBWCBXjDYk64mXQ&dib_tag=se&keywords=mens+clothes&qid=1716056501&sprefix=mens+clothes%2Caps%2C217&sr=8-5&linkCode=ll1&tag=genaigifts-21&linkId=0efcb1532f519fd1b355611d89056d28&language=en_IN&ref=as_li_ss_tl
    },
    {
      name: Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con,
      img: Amazon4,
      price: ₹31,999,
      stars: 4.5, // Placeholder for star rating
      link: https://www.amazon.in/Nintendo-Switch-OLED-model-Neon/dp/B098TNW7NM?dib=eyJ2IjoiMSJ9.C_IOajk15GzS7oXe9Ii-Rtr1KC5BSqqKg0HqWmNhkUu_1kXGvt2ouvQqF43fCf4n1Vk9Fs69OVEyiOYe_eG04THiVguNca3dqVPWDj7Q3VVhXvujrBk67nUJUXvH5_1On7RGyRPeNxJQVR1VT9h_lV53pDZ3UE7iOnx-VEAwfkrVWIACiWVYTl36ZVvGLAg-2mnYw83SQZv02vwxPvDDhO--7S6PL_vICIbAO8e6cLo.AmPVnhjajngn8Xcm0PewbdniPyvsdjAQZGz5lnbIkn4&dib_tag=se&keywords=nintendo+switch&qid=1716056620&sr=8-1&linkCode=ll1&tag=genaigifts-21&linkId=b14a14413206b1dc6cdef452c6a17c34&language=en_IN&ref_=as_li_ss_tl
    },
    {
      name: GoSriKi Women Kurta with Pant,
      img: Amazon5,
      price: ₹489,
      stars: 3, // Placeholder for star rating
      link: https://www.amazon.in/GoSriKi-Womens-Straight-Printed-ANAAR-Beige-GS_S_Beige_Small/dp/B0CWZYRM3G?crid=RZ42JCRGZFBD&dib=eyJ2IjoiMSJ9.wCKoEdhhpuLBA1dLUiyhyyGhfpYdXr_IX_xRKlTLf4rntZ-CJIjRijX2VT2U3qQmo3gTUcK7JBlRIB4cASujbhsBQhbbJTNQOg1Mlb-EpKR3knEXQnY9Fbwn_atbD_vjfZebikO6n1vxZ8Pra3NCje4exNQ0Rj5avFAyRZS7Ld61o1Yu1qzS-cfBtpbyQw3nfOLfMqByzj5mJ4zmS2nGAMffvsG6onlArMvCbeZCxVWTOsR41MPxFO81ypeWIyy43D8CrMxShj5rOlWy14hylUrDq3m74NoeHXQlAkXzD9k.s6NWK-ZTlKvKULQn4JrE0l-pmI-fIDNaOTzoqPPK8CI&dib_tag=se&keywords=women+clothes&qid=1716056699&sprefix=women+clothe%2Caps%2C228&sr=8-5&linkCode=ll1&tag=genaigifts-21&linkId=2a225fb44b87816b95e9d79ce3d92098&language=en_IN&ref_=as_li_ss_tl
    },
];

const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
        return `${name.substring(0, maxLength)}...`;
    }
    return name;
};

const ProductCarousel = () => {
  return (
    <Slider {...settings}>
            {data.map((d) => (
                <a key={d.name} href={d.link} target="_blank" rel="noopener noreferrer" className="block bg-white text-black rounded-2xl shadow-md border-solid mx-2 no-underline">
                    <div className='h-60 bg-white rounded-2xl overflow-hidden'>
                        <img src={d.img} alt={d.name} className="h-full w-full object-cover"/>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">{truncateName(d.name, 30)}</p>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: Math.floor(d.stars) }, (_, index) => (
                                    <svg key={index} className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.822 1.255c.33-.91 1.539-.91 1.87 0l1.605 4.432a1.25 1.25 0 001.155.797l4.642.374c.935.076 1.308 1.287.605 1.914l-3.686 3.343a1.25 1.25 0 00-.368 1.11l1.26 4.596c.188.688-.612 1.242-1.261.893l-3.904-2.573a1.25 1.25 0 00-1.429 0l-3.905 2.573c-.649.43-1.449-.205-1.262-.893l1.259-4.596a1.25 1.25 0 00-.368-1.11L2.54 9.637c-.703-.627-.33-1.838.605-1.914l4.642-.374a1.25 1.25 0 001.155-.797l1.605-4.432z"/>
                                    </svg>
                                ))}
                                {d.stars % 1 !== 0 && (
                                    <svg className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 1.518l1.792 5.602h5.765l-4.655 3.385 1.793 5.598L10 14.627l-4.695 3.476 1.794-5.598-4.656-3.385h5.765L10 1.518z"/>
                                    </svg>
                                )}
                            </div>
                        </div>
                        <p className="text-center font-bold">{d.price}</p>
                    </div>
                </a>
            ))}
        </Slider>
  );
};

export default ProductCarousel;
