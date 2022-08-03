import Image from "next/future/image";

export function Logo({ className = "" }) {
  return (
    <Image
      className={"h-8 w-auto sm:h-10 " + className}
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Talents.tech"
      width={43.75}
      height={40}
    />
  );
}
