import { cn } from "../../utils/cn";

export default function Button({ ref, ...props }) {
  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        `rounded-3xl bg-primary px-6 py-2.5 text-xl font-thin text-black transition-colors duration-100 focus:outline-primary lg:hover:bg-white lg:hover:text-black`,
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
