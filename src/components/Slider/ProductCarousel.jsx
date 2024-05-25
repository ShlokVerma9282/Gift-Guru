



import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Amazon1 from "../../img/amazon1.jpg";
import Amazon2 from "../../img/amazon2.jpg";
import Amazon3 from "../../img/amazon3.jpg";
import Amazon4 from "../../img/amazon4.jpg";
import Amazon5 from "../../img/amazon5.jpg";
import Amazon6 from "../../img/amazon6.jpg";
import Amazon7 from "../../img/amazon7.jpg";
import "./Slider.css"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "50px",
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "40px",
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "30px",
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "20px",
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 240,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const data = [
    {
        name: `JUGTE Motivational Water Bottle 1 litre Sipper Bottle For Adults With Time Measurement Non-Toxic Water bottle for office,Water bottle for gym (Pink) |Plastic`,
        img: Amazon6,
        price: `₹383`,
        stars: 4, // Placeholder for star rating
        link: `https://www.amazon.in/JUGTE-Motivational-Water-Bottle-Measurement/dp/B0C3ZNLC5Y?crid=1VVOK24XAXRMW&dib=eyJ2IjoiMSJ9.5kzsTg3MZkHwI_qKqbWQXsT1-uUOQhY_LEgAteD05rHsQXxL3_T0TAAwOtkwsNBtyRX0mnoMt-KVU3bP5kKaNXObBfpP6g-be1cITyFoJcpbYp91jnNg-CRayBR378g84UQYrDomlX9yioQQZ6ZJdyrYoD389Hy7KAMDBmR6-c7kle4hzqb40VkPWFGXBSQLMe0VvG4pFKDv_L0xfeLqeBLSWrQk0bQC93jeItr88XwXe1pW0NwGN0NTTScJQqg6-9ReP0KAIxnNLDkcs1QnAj4kBGMxRgv2W31OUZwa2tw.HaAXHIrKxq1j9VsZ0N6Z5cwU1QE0ijlwluOUClWB8ns&dib_tag=se&keywords=water%2Bbottle%2Bfor%2Bhome&qid=1716447784&refinements=p_n_format_browse-bin%3A19560801031&rnid=14277549031&s=kitchen&sprefix=waterb%2Caps%2C194&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=genaigifts-21&linkId=cc345d67672a52a69fcbe7521f6254ea&language=en_IN&ref_=as_li_ss_tl`
    },
    {
      name: `Clara 925 Sterling Silver Heart Pendant Necklace | With or Without Chain | Gift for Women and Girls`,
      img: Amazon1,
      price: `₹2057`,
      stars: 4, // Placeholder for star rating
      link: `https://www.amazon.in/Sterling-Pendant-Necklace-Rhodium-Zirconia/dp/B09XNB3DZX?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=24T4YV94DEENMF2GX90W&linkCode=ll1&tag=genaigifts-21&linkId=28813b7cfe29d1353c36425292578222&language=en_IN&ref_=as_li_ss_tl`
    },
    {
      name: `ZAVERI PEARLS Set Of 2 Rose Gold Dazzling Austrian Diamonds Bracelet For Women-ZPFK16864`,
      img: Amazon2,
      price: `₹488`,
      stars: 4, // Placeholder for star rating
      link: `https://www.amazon.in/ZAVERI-PEARLS-Dazzling-Austrian-Women-ZPFK16864/dp/B0CLJL9FCS?crid=2Y3Z8AIMY85S2&dib=eyJ2IjoiMSJ9.-08jI0CCEQ0UGh_eZ1-uAPgdruXKIc-xehk23PqNzQ5IJYCbiJdjK0O8sO5FLeeRSb0WPoQTBuKr4Xt6yb9ZYX623GJEhnijsSENZYiNH8pchySgxVk2qN7d2QI2EnxPEbYcg9XzCbM_llNV2Pk9JROct5X9M8f4pO4tJQk-DIBSw9hyphjyqnv5fIXEgT4A7QFrUk7oFH6w7TbBmm5Er68zroACz4e5k3qU5zD6FYoX2n2r-3MPdkTg3vy3T3wUGKlGIcS7zh8AygAZBiAJMvsfzT_jzvYlaqMGfmcywDo.u4sEpLdDtYtejLHBYlTBZ32ELLjedHiSRl0GfyX6iks&dib_tag=se&keywords=women+jewellery&qid=1716056381&s=jewelry&sprefix=women+%2Cjewelry%2C224&sr=1-7&linkCode=ll1&tag=genaigifts-21&linkId=4f075341f7bc9e052814dabd7f84225a&language=en_IN&ref_=as_li_ss_tl`
    },
    {
      name: `Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)`,
      img: Amazon3,
      price: `₹649`,
      stars: 3.8, // Placeholder for star rating
      link: `https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-01-04/dp/B0CTQCP2BZ?crid=33PG2ACNJYYWI&dib=eyJ2IjoiMSJ9.kRgEYwRxnS_S6jIfPMaFcKCDA69yXX0c9L-QQH1yHIn2l80RZjd0_E2IX5Ho7bx97DHeM0uv7N2sKko6K9RrwsnZ7Nwa0-YbWgHvmG9F1gukx_Vx6b7kCTJFAet-PvhE4muauIX4Ddz0PY3h4A_L-P_kt7v9YfRhsbCoNwo7UtCp6AAFlf1gcd3oIhz0RR7exzljk6A3eVGHzW5rzOYnep-THbFmvWmVGlNkfhPPcMY-K3idFPNeiVZDeW31SyLJtJvvcshzxF_Uht6AtEGZMr27yfg.C44D1qPrc0iVqqicmsV-N5VxtK0t39ddds2sPxZJ9Kg&dib_tag=se&keywords=men%27s+fashion+clothing&qid=1715633288&refinements=p_n_style_browse-bin%3A19556480031&rnid=19556479031&s=apparel&sprefix=men%27s+fa%2Cfashion%2C220&sr=1-34&linkCode=ll1&tag=genaigifts-21&linkId=6ac24d5f16b57a86f06cf6fdfba69c98&language=en_IN&ref_=as_li_ss_tl`
    },
    {
      name: `DEYARCO Perfect Stickers for Coffee Bottle for Laptop Water Bottle for Kids Cute Aesthetic Scrapbooking Stickers for Mobile Laptop Stickers Random 50 pcs Pack of 1`,
      img: Amazon4,
      price: `₹179`,
      stars: 3.9, // Placeholder for star rating
      link: `https://www.amazon.in/Perfect-Stickers-Coffee-Bottle-Scrapbooking/dp/B09KBG26RF?crid=1G9M3XCLLQF2I&dib=eyJ2IjoiMSJ9.j7zFxq-_TH6mcRs2wUvEdfY0inPhj4KAdMufndb-jz00NEZrfSYsyjxzyyiYmYq7dEIG7pHHfU_wIPrX7VrR5dPq1WIsmdIlA2MiTmARQfDpbw5t8tFr3vqrM6ytHSCF9aNz-cGeTCWiErpZ-0chXvzxok6tbscxZyZ3UNm1gFTkJ58isq8CC6_EK2ZNLwRDNZyTTTEaB72Gvzt1GekMtzNDjs7BQEP5UoyRElb3xttseI25MP2XAc_WwMrpMxozl7tkbTk0iMnvymn-ixXM1T9FqAmQRGE6-cMaCc4Iu8wfaG4EFKShFyxuqdf1I1eF9g.PeyAg-u5hUCeVbM8yCEhdw0YJcVEKJDGcVOcLKrRxIc&dib_tag=se&keywords=water%2Bbottle%2Bfor%2Bhome&qid=1716451893&refinements=p_n_format_browse-bin%3A19560801031&rnid=14277549031&s=kitchen&sprefix=waterb%2Caps%2C194&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMVY3S1hVWTc1RjU5JmVuY3J5cHRlZElkPUEwNjIyNDM4MkI1U1dHRlU2QUdLQyZlbmNyeXB0ZWRBZElkPUEwOTk4MDg5M0s3TEZDTENHWE5QSCZ3aWRnZXROYW1lPXNwX2F0Zg&linkCode=ll1&tag=genaigifts-21&linkId=29b3401f69998f925dd3d6ee9b75b9d5&language=en_IN&ref_=as_li_ss_tl`
    },
    {
      name: `PINNACLE HOME Portable Plastic Manual Grommet Hole Maker Machine Hand Press Tool Punching Machine Grommet Eyelet Machine 3/8 inch`,
      img: Amazon5,
      price: `₹999`,
      stars: 4.1, // Placeholder for star rating
      link: `https://www.amazon.in/Portable-Manual-Grommet-Punching-Eyelet/dp/B0BHRMZTFJ?crid=35OM5VFCGX8FN&dib=eyJ2IjoiMSJ9.KxSBbiCb7P8h0Qs4EfcwlJQ7NBBQxldmCZtUNJ6vLeAyrGSwvNwv-PnBLD9EXFJ8chOtZJ3knPNnlX-cQzW78cVh_rFkfFLCXa-1EOO_e3O4okMiJ1jgmW8jsPyiUzD7U9-MPUr3xz4mkwHoqQZLdtpg5sx8XocId7NW4-j15MP5_nwGdJcYalGy9fFwGGRDKBmskCUzjEjNw2JdBgaxL8J4QO7Q0Q7CvcCynTuS7mfpkZ9EInUp0yo6h5tbkAT0uvDLzKJ8KPr_efSTiA8a4gVjUeCGvExlyJBL_6zDKEuE_WmONg9iVdxxlGDBat3hF2_mQ.rW-g4kWmAnclN-WJRCF1oxom8PnygIfSFZME7tPIFv-I&dib_tag=se&keywords=plastic+products+for+home&qid=1716230995&sprefix=plastic+products%2Ckitchen%2C238&sr=8-12&linkCode=ll1&tag=genaigifts-21&linkId=2d5c5b7cb3d1f3d8e9c2169f5f0a6449&language=en_IN&ref_=as_li_ss_tl`
    },
    {
      name: `Tizum Laptop Sleeve 13.3 inch for MacBook Pro, MacBook Air 13.3 inch - Neoprene Soft Padded Carrying Case Pouch Bag with Extra Side Pocket (13.3 inch, Black)`,
      img: Amazon7,
      price: `₹375`,
      stars: 4.2, // Placeholder for star rating
      link: `https://www.amazon.in/Tizum-Laptop-Sleeve-13-3-inch/dp/B06ZZFZCB2?crid=1OF43G6F82IRX&dib=eyJ2IjoiMSJ9.zBWTH0yQQG6r6VtTW2S-i-AlddE2fiKgtZjB2gWSXG9rIYN9dJ12PrkSDkHC4ckTpxK2iz_TjOox7lsZcQH8DBmbeywPYMmcwKN46mY4KgOF4sX7ocW3nPGg1iy3Di2rzi3DizO_XXgS1oYZXLJ8MRieGv1BWW5uHtpt5B_5RROdFVZC_oUmmfp6ykj-1ai8WoZ69dTZ-9vcCAYJZ0zEE4Qzz0c0YIdGs8ofA-PUwRh6SPAX2yHQDhQTMlJxZbdwR2v-PSO-E4nNO8PC1quMR2_8IzJS7A_9WSpPAH6PCZTdFlkm32WmI-eikgXR7gbSFWFgA.gdd9CcM7nyapENyyxkqJr8PRQ89QWTJY4cP-B2-olCk&dib_tag=se&keywords=laptop%2Bsleeve&qid=1715935271&sr=8-5&th=1&linkCode=ll1&tag=genaigifts-21&linkId=cd4d8d7e56c6c8e1f03f3f0244b04cd2&language=en_IN&ref_=as_li_ss_tl`
    }
];

const ProductCarousel = () => {
    const [showFullNames, setShowFullNames] = useState(false);

    const toggleShowFullNames = () => {
        setShowFullNames(!showFullNames);
    };

    return (
        <div className="product-carousel">
            <Slider {...settings}>
                {data.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.img} alt={product.name} />
                        <div className="product-info">
                            <h3>
                                {showFullNames 
                                    ? product.name 
                                    : product.name.split(' ').slice(0, 2).join(' ') + (product.name.split(' ').length > 2 ? '...' : '')
                                }
                                  
                            </h3>
                            <div><button onClick={toggleShowFullNames} className="read-more-button text-orange-400">
                            {showFullNames ? "Show Less" : "Read More"}
                        </button></div>
                            <p>Price: {product.price}</p>
                            <p>
                                Rating: 
                                {[...Array(Math.round(product.stars))].map((_, i) => (
                                    <span key={i} className="text-yellow-500">&#9733;</span>
                                ))}
                            </p>
                                               
                      <div>  <a href={product.link} target="_blank" rel="noopener noreferrer" className='text-orange-400'>View Product</a></div>
                        </div>
  
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
