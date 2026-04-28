import Image from "next/image";

type MarqueeProps = {
  items: string[];
  speed?: "slow" | "base";
  reverse?: boolean;
  logos?: boolean;
};

export function Marquee({ items, speed = "base", reverse = false, logos = false }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className={`marquee ${speed === "slow" ? "marquee--slow" : ""} ${
        reverse ? "marquee--reverse" : ""
      } ${logos ? "marquee--logos" : ""}`}
      aria-hidden={logos ? undefined : true}
    >
      <div className="marquee__track">
        {row.map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {logos ? (
              <span className="logo-pill">{item}</span>
            ) : (
              <>
                <span>{item}</span>
                <Image src="/assets/icons/star.svg" width={18} height={18} alt="" />
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
