// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from "react";
import CartContext from "../../context/CardContext";

const CartWidget = () => {
  const { cartListItems } = useContext(CartContext);

  return (
    <>
      <i
        className="fa-solid fa-cart-shopping m-4"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
        style={{ cursor: "pointer" }}
      ></i>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Productos agregados al carrito
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {cartListItems.length === 0 && (
                <p>No hay productos agregados al carrito</p>
              )}
              {cartListItems.map((item) => {
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
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
