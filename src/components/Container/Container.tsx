import style from "./Container.module.scss";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.root}>{children}</div>;
};

export default Container;
