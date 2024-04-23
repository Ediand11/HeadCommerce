import { Card } from "../components/Card";
import CardSkeleton from "../components/Card/CardSkeleton";
import { Container } from "../components/Container";
import style from "./page.module.scss";

export default function Home() {
  return (
    <Container>
      <div className={style.items}>
        <CardSkeleton />
        {[1, 2, 3, 4, 5].map((item, ind) => (
          <Card key={ind} />
        ))}
      </div>
    </Container>
  );
}
