import { component$, Signal, useSignal } from "@builder.io/qwik";
import { type RouteLocation, useLocation } from "@builder.io/qwik-city";

export const MobileNav = component$(
  ({ open, loc }: { open: Signal<boolean>; loc: RouteLocation }) => {
    return (
      <div
        class={`absolute top-0 left-0 h-screen w-screen bg-coral z-10 transform ${
          open.value ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
      >
        <div class="flex flex-col mt-9 ml-4">
          <MobileNavItem name="Home" loc={loc} open={open} path="/" />
          <MobileNavItem name="About" loc={loc} open={open} path="/about/" />
          <MobileNavItem
            name="Contact"
            loc={loc}
            open={open}
            path="/contact/"
          />
          <MobileNavItem name="Blog" loc={loc} open={open} path="/blog/" />
        </div>
      </div>
    );
  }
);

export const Navbar = component$(() => {
  const open = useSignal(false);
  const loc = useLocation();

  return (
    <nav class="flex px-4 py-4 h-20 w-screen items-center">
      <MobileNav open={open} loc={loc} />
      <div class="w-full flex justify-end items-center md:pr-10">
        <div
          class="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick$={() => (open.value = !open.value)}
        >
          {/* hamburger button */}
          <span
            class={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
              open.value
                ? "rotate-45 translate-y-3.5 bg-global-warming"
                : loc.pathname !== "/"
                ? "bg-coral"
                : "bg-global-warming"
            }`}
          />
          <span
            class={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${
              open.value
                ? "w-0 bg-global-warming"
                : loc.pathname !== "/"
                ? "w-full bg-coral"
                : "bg-global-warming"
            }`}
          />
          <span
            class={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
              open.value
                ? "-rotate-45 -translate-y-3.5 bg-global-warming"
                : loc.pathname !== "/"
                ? "bg-coral"
                : "bg-global-warming"
            }`}
          />
        </div>

        <div class="hidden mt-10 md:flex">
          <DesktopNavItem name="Home" path="/" loc={loc} />
          <DesktopNavItem name="About" path="/about/" loc={loc} />
          <DesktopNavItem name="Contact" path="/contact/" loc={loc} />
          <DesktopNavItem name="Blog" path="/blog/" loc={loc} />
        </div>
      </div>
    </nav>
  );
});

export interface RouteNavigate {
  path: string;
}

export interface NavItemProps {
  name: string;
  path: string;
  loc: RouteLocation;
}

export interface MobileNavItemProps extends NavItemProps {
  open: Signal<boolean>;
}

export const MobileNavItem = component$(
  ({ name, loc, path, open }: MobileNavItemProps) => {
    return (
      <a
        class={`text-xl font-normal my-4 ${
          loc.pathname === path && "text-global-warming"
        }`}
        href={path}
        onClick$={() => (open.value = false)}
      >
        {name}
      </a>
    );
  }
);

export const DesktopNavItem = component$(
  ({ path, name, loc }: NavItemProps) => {
    return (
      <a
        href={path}
        class={`px-4 transition ease-in-out duration-300 relative ${
          loc.pathname === "/"
            ? `${
                loc.pathname === path && "text-global-warming"
              } hover:text-global-warming`
            : `${loc.pathname === path && "text-coral"} hover:text-coral/75`
        }`}
      >
        {name}
      </a>
    );
  }
);
