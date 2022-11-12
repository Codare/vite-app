import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

interface Props {
  text: string;
  ok?: boolean;
  index?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [text, setText] = useState<TextNode>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
