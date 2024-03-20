import Image from "next/image";

export default function ImageWithPlaceholder(props) {
  const { src, alt, ...rest } = props;

  const base64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwQAAnYBc8m/OPYAAAAASUVORK5CYII=";

  const placeholder = `data:image/png;base64,${base64}`;

  return (
    <>
      <Image {...rest} src={src} alt={alt} placeholder={placeholder} />
    </>
  );
}
