import { component$, QRL } from "@builder.io/qwik";

type DefaultProps = {
  label: string;
  element: "input" | "textarea";
  name: string;
  placeholder: string;
  value: string;
  onChange: QRL<(e: any) => void>;
};

type InputProps =
  | (DefaultProps & {
      element: "input";
      type:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
      rows?: never;
    })
  | (DefaultProps & { element: "textarea"; rows: number; type?: never });

export const FormField = component$<InputProps>(
  ({ label, name, element, type, rows, placeholder, onChange, value }) => {
    const classes =
      "p-2 rounded-md border-2 border-global-warming transition-colors duration-300 focus:border-coral outline-none";

    return (
      <>
        <label class="uppercase font-semibold text-xs mb-1" for={name}>
          {label}
        </label>
        {element === "input" ? (
          <input
            type={type}
            name={name}
            class={classes}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange$={(e) => onChange(e)}
          />
        ) : (
          <textarea
            name={name}
            class={classes}
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange$={(e) => onChange(e)}
          />
        )}
      </>
    );
  }
);
