import React from 'react';
import styled from 'styled-components';
import {useFilterContext} from '../../contexts/FilterContext';
import {formatPrice, getUniqueValue} from '../../utils/helpers';
import {FaCheck} from 'react-icons/fa';

const ProductsFillter = () => {
  const {
    updateValue,
    products,
    clearFilter,
    filter: {query, category, colors, price, min_price, max_price, shipping},
  } = useFilterContext();

  const filteredCategory = getUniqueValue(products, 'category');
  const filteredCompany = getUniqueValue(products, 'company');
  const filteredColors = getUniqueValue(products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-contorl">
            <input
              onChange={updateValue}
              className="search-input"
              type="text"
              name="query"
              placeholder="search"
              value={query}
            />
          </div>
          <div className="form-contorl">
            <h5>category</h5>
            <div>
              {filteredCategory.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateValue}
                    name="category"
                    className={`${category === item ? 'active' : null}`}
                    value={item}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-contorl">
            <h5>company</h5>
            <select onChange={updateValue} name="company" className="company">
              {filteredCompany.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-contorl">
            <h5>colors</h5>
            <div className="colors">
              {filteredColors.length > 1 &&
                filteredColors.map((item, index) => {
                  if (item === 'all') {
                    return (
                      <button
                        key={index}
                        onClick={updateValue}
                        name="colors"
                        className={`${
                          colors === 'all' ? 'all-btn active' : 'all-btn'
                        }`}
                        value="all"
                      >
                        all
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={index}
                        onClick={updateValue}
                        name="colors"
                        className={`${
                          colors === item ? 'color-btn active' : 'color-btn'
                        }`}
                        value={item}
                        style={{backgroundColor: item}}
                      >
                        {colors === item ? (
                          <FaCheck className="fa-check" />
                        ) : null}
                      </button>
                    );
                  }
                })}
            </div>
          </div>
          <div className="form-contorl">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              onChange={updateValue}
              type="range"
              name="price"
              value={price}
              min={min_price}
              max={max_price}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              onChange={updateValue}
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
            />
          </div>

          <button onClick={clearFilter} className="clear-btn">
            clear filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
    font-weight: bold;
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
    font-weight: bold;
  }
  .all-btn .active {
    text-decoration: underline;
    font-weight: bold;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: tomato;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    transition: all 0.3s linear;
  }
  .clear-btn:hover {
    transform: scale(0.94);
    background: white;
    color: tomato;
    border: 1px solid tomato;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default ProductsFillter;
