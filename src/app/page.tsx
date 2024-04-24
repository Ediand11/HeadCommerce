import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Container } from "../components/Container";
import { getProducts } from "../components/getProducts";
import { Products } from "../components/Products";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 0,
  });

  return (
    <Container>
      <div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Products />
        </HydrationBoundary>
      </div>
    </Container>
  );
}
