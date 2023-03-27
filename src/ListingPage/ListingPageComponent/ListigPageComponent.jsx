import { React } from "react";

function ListingPageComponent({ onScroll, listInnerRef, productList }) {
  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        {productList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <p>Name: {item.id}</p>
              <p>Trips: {item.name}</p>
              <img src={`https://backend.bppshop.com.bd/storage/product/thumbnail/`+item.thumbnail} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingPageComponent;