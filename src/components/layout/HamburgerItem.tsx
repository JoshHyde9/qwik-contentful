import { component$ } from "@builder.io/qwik";

type ItemProps = {
  position: "top" | "middle" | "bottom";
  open: boolean;
  pathName: string;
};

export const HamburgerItem = component$<ItemProps>(
  ({ position, open, pathName }) => {
    const classes =
      "h-1 w-full rounded-lg transform transition-all duration-300 ease-in-out";

    return (
      <>
        {position === "top" ? (
          <span
            class={`${classes} ${
              open
                ? "rotate-45 translate-y-3.5 bg-global-warming"
                : pathName !== "/"
                ? "bg-coral"
                : "bg-global-warming"
            }`}
          />
        ) : position === "middle" ? (
          <span
            class={`${classes} ${
              open
                ? "w-0 bg-global-warming"
                : pathName !== "/"
                ? "w-full bg-coral"
                : "bg-global-warming"
            }`}
          />
        ) : (
          <span
            class={`${classes} ${
              open
                ? "-rotate-45 -translate-y-3.5 bg-global-warming"
                : pathName !== "/"
                ? "bg-coral"
                : "bg-global-warming"
            }`}
          />
        )}
      </>
    );
  }
);
