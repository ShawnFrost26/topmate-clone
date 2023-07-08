import React from 'react';

const DataCards = () => {
  const dataCardsArr = [
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-profile-pics.s3.ap-south-1.amazonaws.com%2Fprofile_pic_6f397772-c0c5-442c-9541-83b42d04bfcb.jpeg&w=256&q=75",
      name: "Frank",
      bio: "Help folks break into data",
    },
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2F9eYMsfh5CCKkwbxLEg7yyg.jpeg&w=256&q=75",
      name: "Zach",
      bio: "Loves to teach folks to uplevel in data",
    },
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FdmDqgFc73tETtmhwSjtjAd.jpeg&w=256&q=75",
      name: "Tobias",
      bio: "Give consultations for AI and ML",
    },
  ];

  return (
    <>
      {dataCardsArr.map((productCard, index) => (
        <div className='card-container'
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

export default DataCards;
