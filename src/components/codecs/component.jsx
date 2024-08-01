import { Codec } from "../codec/component";

export async function getCodecsByHeadphoneId(id) {
  const result = await fetch(
    `http://localhost:3001/api/codecs?productId=${id}`
  );

  return result.json();
}

export const Codecs = async ({ headphoneId }) => {
  const data = await getCodecsByHeadphoneId(headphoneId);

  return (
    <div>
      <ul>
        {data.map(({ type, id }) => (
          <li key={id}>
            <Codec type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};
