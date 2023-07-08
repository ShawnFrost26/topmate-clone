import React from "react";

const ProductCards = () => {
  const productCardsArr = [
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-profile-pics.s3.ap-south-1.amazonaws.com%2Fprofile_pic_1820a61f-0210-46dc-9eb6-de5a1c3170f1.jpeg&w=256&q=75",
      name: "Mirela Mus",
      bio: "Tries to give back to the product community",
    },
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-profile-pics.s3.ap-south-1.amazonaws.com%2Fprofile_pic_8e8597f2-0ccb-42ca-b149-0ab9cb99b270.jpeg&w=256&q=75",
      name: "Ishita",
      bio: "Guides folks to grow in their careers",
    },
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FpdUytqJg8RdsF9WQH7hRLQ.JPG&w=256&q=75",
      name: "Sumit",
      bio: "Loves to teach folks to uplevel in data",
    },
  ];

  return (
    <>
      {productCardsArr.map((productCard, index) => (
        <div className='card-conatiner'
          key={index}
          style={{
            height: "320px",
            width: "250px",
            margin: "20px",
            position: "relative",
            border: "1px solid rgba(0,0,0,.1)",
            borderRadius: "16px",
            cursor:"pointer",
          }}
        >
          <div
             style={{
              height: "116px",
              width: "100%",
              backgroundColor: "pink",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "32px",
              justifyContent: "center",
            }}
          >
            <img
              src={productCard.image}
              alt={productCard.name}
              style={{
                height: "120px",
                width: "120px",
                borderRadius: "50%",
              }}
            />
            <h3>{productCard.name}</h3>
            <p>{productCard.bio}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCards;
