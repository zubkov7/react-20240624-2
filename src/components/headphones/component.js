import Link from "next/link";

export async function getHeadphones() {
  const result = await fetch("http://localhost:3001/api/products", {
    next: {
      next: { tags: ["headphones"] },
    },
  });

  return result.json();
}

export const Headphones = async () => {
  const data = await getHeadphones();

  return (
    <div>
      {data?.map(({ id, name }) => (
        <div key={id}>
          <Link href={`headphones/${id}`}>{name}</Link>
        </div>
      ))}
    </div>
  );
};
