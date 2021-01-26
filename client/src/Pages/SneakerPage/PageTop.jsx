import React from 'react';
import { FaPlus, FaShareAlt } from 'react-icons/fa';
import ReactImageMagnify from 'react-image-magnify';

const PageTop = ({ Data }) => {
  return (
    <>
      <div className="flex-right">
        <button className="product__btn">
          <FaShareAlt />
          &nbsp;Share
        </button>
        <button className="product__btn">
          <FaPlus />
          &nbsp; Portfolio
        </button>
        <button className="product__btn">
          <FaPlus />
          &nbsp; Follow
        </button>
      </div>
      <h2 className="heading__impact heading__impact--black mb-1">
        {Data.shoes[0].name} ({Data.shoes[0].year})
      </h2>
      <ul className="product__subheading mb-3">
        <li>
          Condition:&nbsp;
          <span className={Data.shoes[0].condition === 'New' ? 'green' : 'yellow'}>New</span>
        </li>
        <li>Ticker: NK-NIAM9ONBN</li>
        <li>100% Authentic</li>
      </ul>

      {/* Size / Sale / Buttons */}
      <div className="product__subheading product__subheading--2 mb-2">
        <div className="divroduct__size">Size: 12</div>
        <div className="product__retail">Last Sale: $274</div>
        <div>
          <div className="product-button">
            <div className="flex-col-2">
              <span className="product-button__price">$194</span>
              <span className="product-button__ask">Lowest Ask</span>
            </div>
            <div className="divider"></div>
            <div className="flex-col-2">
              <span className="product-button__price">Buy</span>
              <div className="product-button__ask">or Bid</div>
            </div>
          </div>
        </div>
        <div>
          <div className="product-button product-button--red">
            <div className="flex-col-2">
              <span className="product-button__price">$254</span>
              <span style={{ color: ' #ffcfcf' }} className="product-button__ask">
                Highest Bid
              </span>
            </div>
            <div className="divider"></div>
            <div className="flex-col-2">
              <span className="product-button__price">Sell</span>
              <div style={{ color: ' #ffcfcf' }} className="product-button__ask">
                or Ask
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__img">
        {/* <img src={Data.shoes[0].img} alt="shoe" /> */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              src: Data.shoes[0].img,
            },
            largeImage: {
              src: Data.shoes[0].img,
              width: 1800,
              height: 600,
            },
          }}
        />

        <div className="product__info">
          <p>
            Description: <span>{Data.shoes[0].description}</span>
          </p>
          <p>
            Style: <span>CT1689-001</span>
          </p>
          <p>
            Color: <span>{Data.shoes[0].color}</span>
          </p>
          <p>
            Retail Price: <span>${Data.shoes[0].price}</span>
          </p>
          <p>
            Release Date: <span>{Data.shoes[0].dateListed}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTop;
