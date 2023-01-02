import { component$, Signal, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export const MobileNav = component$(
  ({ open, nav }: { open: Signal<boolean>; nav: RouteNavigate }) => {
    return (
      <div
        class={`absolute top-0 left-0 h-screen w-screen bg-coral z-10 transform ${
          open.value ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
      >
        <div class="flex flex-col mt-9 ml-4">
          <MobileNavItem name="Home" nav={nav} open={open} path="/" />
          <MobileNavItem name="About" nav={nav} open={open} path="/about/" />
          <MobileNavItem
            name="Contact"
            nav={nav}
            open={open}
            path="/contact/"
          />
          <MobileNavItem name="Blog" nav={nav} open={open} path="/blog/" />
        </div>
      </div>
    );
  }
);

export const Navbar = component$(() => {
  const open = useSignal(false);
  const nav = useNavigate();

  return (
    <nav class="flex px-4 py-4 h-20 w-screen items-center">
      <MobileNav open={open} nav={nav} />
      <div class="w-full flex justify-end items-center md:pr-10">
        <div
          class="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick$={() => (open.value = !open.value)}
        >
          {/* hamburger button */}
          <span
            class={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
              open.value
                ? "rotate-45 translate-y-3.5 bg-pink-200"
                : nav.path !== "/"
                ? "bg-coral"
                : "bg-pink-200"
            }`}
          />
          <span
            class={`h-1 w-full rounded-lg transition-all duration-300 ease-in-out ${
              open.value
                ? "w-0 bg-pink-200"
                : nav.path !== "/"
                ? "w-full bg-coral"
                : "bg-pink-200"
            }`}
          />
          <span
            class={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${
              open.value
                ? "-rotate-45 -translate-y-3.5 bg-pink-200"
                : nav.path !== "/"
                ? "bg-coral"
                : "bg-pink-200"
            }`}
          />
        </div>

        <div class="hidden mt-10 md:flex">
          <DesktopNavItem name="Home" path="/" nav={nav} />
          <DesktopNavItem name="About" path="/about/" nav={nav} />
          <DesktopNavItem name="Contact" path="/contact/" nav={nav} />
          <DesktopNavItem name="Blog" path="/blog/" nav={nav} />
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
  nav: RouteNavigate;
}

export interface MobileNavItemProps extends NavItemProps {
  open: Signal<boolean>;
}

export const MobileNavItem = component$(
  ({ name, nav, path, open }: MobileNavItemProps) => {
    return (
      <a
        class={`text-xl font-normal my-4 ${
          nav.path === path && "text-pink-200"
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
  ({ path, name, nav }: NavItemProps) => {
    return (
      <a
        href={path}
        class={`px-4 transition ease-in-out duration-300 relative ${
          nav.path === "/"
            ? `${nav.path === path && "text-pink-200"} hover:text-pink-200`
            : `${nav.path === path && "text-coral"} hover:text-coral/75`
        }`}
      >
        {name}
      </a>
    );
  }
);
