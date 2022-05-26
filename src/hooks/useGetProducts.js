import { useEffect, useState } from "react";
import axios from 'axios';

export default function useGetProducts(API) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setProducts(response);
        setIsLoading(false);
      });
  }, []);

  return products;
}