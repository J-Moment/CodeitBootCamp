import sum from "./utils/sum"

export default function Home() {
  const a = 1;
  const b = 2;
  return (
    <div>
      `{a} + {b} = {sum(a, b)}`
    </div>
  );
}
