import { LazyMotion } from "framer-motion";
import { ReactNode } from "react";

// ----------------------------------------------------------------------

// @ts-ignore
const loadFeatures = () => import("./features.js").then((res) => res.default);

type Props = {
  children: ReactNode;
};

export default function MotionLazyContainer({ children }: Props) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
