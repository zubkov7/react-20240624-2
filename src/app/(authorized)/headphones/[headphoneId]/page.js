export function generateStaticParams() {
  return [{ headphoneId: "MLXJ2LLA" }, { headphoneId: "M3IEG" }];
}

export default function HeadphonePage({ params: { headphoneId } }) {
  return <div>headphone page - {headphoneId}</div>;
}
