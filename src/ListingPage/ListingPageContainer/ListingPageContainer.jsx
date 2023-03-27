import React, { useRef, useEffect, useState } from "react";
import ListigPageComponent from "../ListingPageComponent/ListigPageComponent";
import axios from "axios";

function ListingPageContainer(props) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [productList, setProductList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        // `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=10`
       `https://testbppshop.excelitaiportfolio.com/api/v1/products/discounted-product?limit=5&offset=${currPage}`
      );
      console.log(response.data.products, "<<<");
      if (!response.data.products.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setProductList([...productList, ...response.data.products]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, productList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <ListigPageComponent
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      productList={productList}
    />
  );
}

export default ListingPageContainer;
