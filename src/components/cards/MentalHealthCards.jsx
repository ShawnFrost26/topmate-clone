import React from 'react';

const MentalHealthCards = () => {
  const dataCardsArr = [
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2F1qxAdCkAHhY6PeKjTysaMj.jpeg&w=256&q=75",
      name: "Aaliya",
      bio: "helps people find the root cause of their problems & get free",
    },
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2Fr4Em4MRdqaFd7nZ5R1aqDs.jpg&w=256&q=75",
      name: "Shubhika",
      bio: "helps people deal with their trauma",
    },
    {
      image:
        "https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FsSRi9rv7fGTf55KibZHNKM.jpg&w=256&q=75",
      name: "Ankita",
      bio: "provides therapy to those in need",
    },
  ];

  return (
    <>
      {dataCardsArr.map((productCard, index) => (
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

export default MentalHealthCards;
