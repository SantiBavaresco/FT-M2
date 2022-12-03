import { connect } from "react-redux";
import React from "react";
import "./products.css";
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card.jsx'

export function Products( {list} ) {
  return (
    <>
      <div className="productsBg">
        <h1 className="productsTl">HENRY MARKET</h1>

        <div className="productsList">
          {/* ¡Renderiza aquí todas tus cards! */}
          {list.map( (product, idx) =>
            <Card {...product} key={idx}/>
              // name={pruduct.name} price={product.price} id={product.id}
            )}
        </div>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, null)(Products);
