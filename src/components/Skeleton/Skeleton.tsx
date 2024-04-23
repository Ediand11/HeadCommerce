import classNames from "classnames";
import style from "./Skeleton.module.scss";

const Skeleton = ({ className }: { className?: string }) => (
  <div className={classNames(style.root, className)} />
);
export default Skeleton;
