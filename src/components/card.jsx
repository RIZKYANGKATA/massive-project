import React from 'react';


function Card({ imageUrl, title, subTitle, description, harga }) {
  return (
    <div className="card custom-card mb-3" style={{ width: '20rem', borderRadius: '15px' }}>
      <img src={imageUrl} className="card-img-top" alt={title}  style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} />
      <div className="card-body" style={{ height: '180px', backgroundColor: '#F2DCC2', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
        <div className="detail">
        <p className="card-title bold-text" style={{ textAlign: 'left', fontSize: '20px'}} >{title} </p>
        <p style={{ textAlign: 'left'}} >{subTitle}</p>
        <p className="card-text" style={{ textAlign: 'left', fontSize: '15px'}}>{description}</p>
        <p style={{ textAlign: 'left'}}>{harga}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
