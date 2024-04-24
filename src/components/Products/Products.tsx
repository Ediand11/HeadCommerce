"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "../Button";
import { Card } from "../Card";
import CardSkeleton from "../Card/CardSkeleton";
import { getProducts } from "../getProducts";
import { CartData, Product } from "../types";
import style from "./Products.module.scss";

const TOTAL_ITEMS = 100;

const Products = () => {
  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => allPages.length * 5,
  });

  let products: Product[] = [];

  if (data?.pages) {
    const cartsData = data.pages as CartData[];
    const carts = cartsData.map(({ carts }) => carts).flat(1);
    products = carts.map(({ products }) => products).flat(1);
  }

  const hasMore = products.length < TOTAL_ITEMS;

  return (
    <>
      <div className={style.items}>
        {products.map((product, ind) => (
          <Card key={product.id + product.title + ind} {...product} />
        ))}
        {isFetching && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
      <div className={style.button}>
        {hasMore && (
          <Button
            theme={"primary"}
            onClick={() => {
              fetchNextPage();
            }}
          >
            {isFetching ? "Loading..." : "Show More"}
          </Button>
        )}
      </div>
    </>
  );
};

export default Products;
