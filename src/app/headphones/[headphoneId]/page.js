import Link from "next/link";
import { Headphone } from "../../../components/headphone/component";

export function generateStaticParams() {
  return [{ headphoneId: "MLXJ2LLA" }, { headphoneId: "M3IEG" }];
}

export async function getHeadphoneById(id) {
  const result = await fetch(`http://localhost:3001/api/product/${id}`);

  return result.json();
}

export default async function HeadphonePage({ params: { headphoneId } }) {
  const { id, name } = await getHeadphoneById(headphoneId);

  return (
    <div>
      <Link href='/headphones'>Headphones</Link>
      <Headphone id={id} name={name} />
    </div>
  );
}
