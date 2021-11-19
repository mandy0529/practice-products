import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {AddToCart} from '../components';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../contexts/AppContext';
import {formatPrice, single_product_url} from '../utils/helpers';

const SingleProduct = () => {
  const {id} = useParams();
  const {getSingleData, single_products: products} = useGlobalContext();

  useEffect(() => {
    getSingleData(`${single_product_url}${id}`);
  }, [id]);

  const {
    name,
    price,
    description,
    stock,
    id: productId,
    company,
    images,
  } = products;

  const img = images && images[0].url;

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <img className="main" src={img} alt="img" />
          <section className="content">
            <h2>{name}</h2>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available :</span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className="info">
              <span>sku :</span>
              {productId}
            </p>
            <p className="info">
              <span>brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart products={products} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .btn {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    background: #eaded7;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
