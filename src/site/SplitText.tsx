import { useMemo } from "react";

type Props = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  by?: "letter" | "word";
  className?: string;
  letterClass?: string;
};

export function SplitText({
  text,
  as: Tag = "span",
  by = "letter",
  className,
  letterClass,
}: Props) {
  const parts = useMemo(() => {
    const words = text.split(" ");
    return words.map((word, wIdx) => {
      if (by === "word") {
        return (
          <span key={wIdx} className="split-line" aria-hidden="true">
            <span className={`split-word ${letterClass ?? ""}`}>{word}</span>
            {wIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      }
      return (
        <span key={wIdx} className="split-line" aria-hidden="true">
          <span className="split-word" style={{ whiteSpace: "nowrap" }}>
            {word.split("").map((char, lIdx) => (
              <span key={lIdx} className={`split-letter ${letterClass ?? ""}`}>
                {char}
              </span>
            ))}
          </span>
          {wIdx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      );
    });
  }, [text, by, letterClass]);

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      {parts}
    </Tag>
  );
}
