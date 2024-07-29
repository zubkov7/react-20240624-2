import { App } from "./app";

// export function generateStaticParams() {
//   return [
//     { slug: [""] },
//     { slug: ["headphones"] },
//     { slug: ["headphones", "MLXJ2LLA"] },
//   ];
// }

export default function Page({ params: { slug } }) {
  return (
    <div>
      <div>{slug.join(",")}</div>
      <App />
    </div>
  );
}
