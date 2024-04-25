"use client";

import { getProducts } from "@/src/api/getProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CartData, Product } from "../../types";
import { Button } from "../Button";
import { Card } from "../Card";
import { CardsSkeleton } from "../Card/CardSkeleton";
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
        {isFetching && <CardsSkeleton count={6} />}
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
