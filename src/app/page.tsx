import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import { Container } from "../components/Container";
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
