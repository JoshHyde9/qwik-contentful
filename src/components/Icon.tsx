import { component$ } from "@builder.io/qwik";
import { IconNames, Icons } from "~/util/iconLib";

type IconProps = {
  class?: string;
  viewBox?: string;
  style?: any;
  size?: "16" | "24" | "32" | "40";
  name: IconNames;
};

export const Icon = component$<IconProps>(
  ({ viewBox = "0 0 24 24", size = "24", name, ...props }) => (
    <svg width={size} height={size} viewBox={viewBox} {...props}>
      {Icons[name]()}
    </svg>
  )
);
