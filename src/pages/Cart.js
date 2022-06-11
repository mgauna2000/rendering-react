import React, { useContext } from 'react'
// import CartContext from '../context/CardContext';

const Cart = () => {

    // const { addToCart } = useContext(CartContext);

  return (
      <>
      <div className='container'>
          {/* {console.log("item: ", addToCart)} */}
      {/* {addToCart.map((item) => {
                return (
                  <div
                    className="products-container"
                    key={item.id}
                    style={{ display: "flex" }}
                  >
                    <img
                      src={`./${item.image}`}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div style={{ flexDirection: "column" }}>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        <small className="text-muted">$ {item.price}</small>
                      </p>
                      <p className="card-text">4</p>
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                );
              })} */}
              </div>
    </>
  )
}

export default Cart