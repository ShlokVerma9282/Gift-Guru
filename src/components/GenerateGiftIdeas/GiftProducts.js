import React, { useState } from "react";
import "./GiftProducts.css";
import Amazon1 from "../../img/amazon1.jpg";
import Amazon2 from "../../img/amazon2.jpg";
import Amazon3 from "../../img/amazon3.jpg";
import Amazon4 from "../../img/amazon4.jpg";
import Amazon5 from "../../img/amazon5.jpg";

const data = [
  {
    name: `Clara 925 Sterling Silver Heart Pendant Necklace | With or Without Chain | Gift for Women and Girls`,
    img: Amazon1,
    price: `₹2057`,
    stars: 4, // Placeholder for star rating
    link: `https://www.amazon.in/Sterling-Pendant-Necklace-Rhodium-Zirconia/dp/B09XNB3DZX/ref=lp_90919850031_1_1?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=24T4YV94DEENMF2GX90W`,
  },
  {
    name: `ZAVERI PEARLS Set Of 2 Rose Gold Dazzling Austrian Diamonds Bracelet For Women-ZPFK16864`,
    img: Amazon2,
    price: `₹488`,
    stars: 4, // Placeholder for star rating
    link: `https://www.amazon.in/ZAVERI-PEARLS-Dazzling-Austrian-Women-ZPFK16864/dp/B0CLJL9FCS/ref=sr_1_7?crid=2Y3Z8AIMY85S2&dib=eyJ2IjoiMSJ9.-08jI0CCEQ0UGh_eZ1-uAPgdruXKIc-xehk23PqNzQ5IJYCbiJdjK0O8sO5FLeeRSb0WPoQTBuKr4Xt6yb9ZYX623GJEhnijsSENZYiNH8pchySgxVk2qN7d2QI2EnxPEbYcg9XzCbM_llNV2Pk9JROct5X9M8f4pO4tJQk-DIBSw9hyphjyqnv5fIXEgT4A7QFrUk7oFH6w7TbBmm5Er68zroACz4e5k3qU5zD6FYoX2n2r-3MPdkTg3vy3T3wUGKlGIcS7zh8AygAZBiAJMvsfzT_jzvYlaqMGfmcywDo.u4sEpLdDtYtejLHBYlTBZ32ELLjedHiSRl0GfyX6iks&dib_tag=se&keywords=women+jewellery&qid=1716056381&s=jewelry&sprefix=women+%2Cjewelry%2C224&sr=1-7`,
  },
  {
    name: `Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)`,
    img: Amazon3,
    price: `₹649`,
    stars: 3.8, // Placeholder for star rating
    link: `https://www.amazon.in/Lymio-Cargo-Cotton-Cargos-Cargo-01-04/dp/B0CTQCP2BZ/ref=sr_1_5?crid=33PG2ACNJYYWI&dib=eyJ2IjoiMSJ9._kRgEYwRxnS_S6jIfPMaFcKCDA69yXX0c9L-QQH1yHIn2l80RZjd0_E2IX5Ho7bx97DHeM0uv7N2sKko6K9RrwsnZ7Nwa0-YbWgHvmG9F1gukx_VxT5qFMe74c3AgLnjfwDLP9PI7LEkmpmb91FnW0XCb8MyDQ_xzatZJ6jwrHBZrhUOyccXs4cNHFBeS3Qy2o-9Qjglii30blV3zGKT8KqIcSK4ytwdn2jjeLUcauzPtbVe0YCaHJ59W61GY78qrH5wrQt7CK63mDPJKyObFKnOZwLQi7hjg90T3RW3A1U.TqVc0px-xuylrC1TJzAh3Mt_pgNdHBWCBXjDYk64mXQ&dib_tag=se&keywords=mens+clothes&qid=1716056501&sprefix=mens+clothes%2Caps%2C217&sr=8-5`,
  },
  {
    name: `Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con`,
    img: Amazon4,
    price: `₹31,999`,
    stars: 4.5, // Placeholder for star rating
    link: `https://www.amazon.in/Nintendo-Switch-OLED-model-Neon/dp/B098TNW7NM/ref=sr_1_1?dib=eyJ2IjoiMSJ9.C_IOajk15GzS7oXe9Ii-Rtr1KC5BSqqKg0HqWmNhkUu_1kXGvt2ouvQqF43fCf4n1Vk9Fs69OVEyiOYe_eG04THiVguNca3dqVPWDj7Q3VVhXvujrBk67nUJUXvH5_1On7RGyRPeNxJQVR1VT9h_lV53pDZ3UE7iOnx-VEAwfkrVWIACiWVYTl36ZVvGLAg-2mnYw83SQZv02vwxPvDDhO--7S6PL_vICIbAO8e6cLo.AmPVnhjajngn8Xcm0PewbdniPyvsdjAQZGz5lnbIkn4&dib_tag=se&keywords=nintendo+switch&qid=1716056620&sr=8-1`,
  },
  {
    name: `GoSriKi Women Kurta with Pant`,
    img: Amazon5,
    price: `₹489`,
    stars: 3, // Placeholder for star rating
    link: `https://www.amazon.in/GoSriKi-Womens-Straight-Printed-ANAAR-Beige-GS_S_Beige_Small/dp/B0CWZYRM3G/ref=sr_1_5?crid=RZ42JCRGZFBD&dib=eyJ2IjoiMSJ9.wCKoEdhhpuLBA1dLUiyhyyGhfpYdXr_IX_xRKlTLf4rntZ-CJIjRijX2VT2U3qQmo3gTUcK7JBlRIB4cASujbhsBQhbbJTNQOg1Mlb-EpKR3knEXQnY9Fbwn_atbD_vjfZebikO6n1vxZ8Pra3NCje4exNQ0Rj5avFAyRZS7Ld61o1Yu1qzS-cfBtpbyQw3nfOLfMqByzj5mJ4zmS2nGAMffvsG6onlArMvCbeZCxVWTOsR41MPxFO81ypeWIyy43D8CrMxShj5rOlWy14hylUrDq3m74NoeHXQlAkXzD9k.s6NWK-ZTlKvKULQn4JrE0l-pmI-fIDNaOTzoqPPK8CI&dib_tag=se&keywords=women+clothes&qid=1716056699&sprefix=women+clothe%2Caps%2C228&sr=8-5`,
  },
];

const truncateName = (name) => {
  const words = name.split(" ");
  return words.length > 2 ? `${words.slice(0, 2).join(" ")}...` : name;
};

const GiftProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRetry = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 2 : prevIndex - 2
    );
  };

  return (
    <div>
      <div className="product-grid">
        {data.slice(currentIndex, currentIndex + 2).map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{truncateName(item.name)}</h3>
            <p>{item.price}</p>
            <p>{"⭐".repeat(item.stars)}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
        ))}
      </div>
      <div className="button-group">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleRetry}>Retry</button>
      </div>
    </div>
  );
};

export default GiftProducts;
