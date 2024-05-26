import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Card({ id, imageUrl, title, subTitle, description, harga, rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} color="black" key={i} />);
    }
    return stars;
  };

  const getRoute = (id) => {
    switch (id) {
      case '1':
        return `/panglipuran/${id}`;
      case '2':
        return `/goaGajah/${id}`;
      case '3':
        return `/puraAgungBesakih/${id}`;
      default:
        return `/destination/${id}`;
    }
  };

  return (
    <div className="card custom-card mb-3" style={{ width: '20rem', borderRadius: '15px' }}>
      <img src={imageUrl} className="card-img-top" alt={title} style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }} />
      <div className="card-body" style={{ height: '180px', backgroundColor: '#EEE8DC', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
        <div className="detail">
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-title bold-text" style={{ textAlign: 'left', fontSize: '20px', marginBottom: '0' }}>{title}</p>
            <div>{renderStars()}</div>
          </div>
          <p style={{ textAlign: 'left' }}>{subTitle}</p>
          <p className="card-text" style={{ textAlign: 'left', fontSize: '15px' }}>{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ textAlign: 'left' }}>{harga}</p>
            <Link to={getRoute(id)}>
              <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px', color: 'black'}} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
