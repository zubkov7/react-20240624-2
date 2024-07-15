import { CodecContainer } from "../codec/container";

export const CodecList = ({ codecIds }) => {
  if (!codecIds.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {codecIds.map((id) => (
          <li>
            <CodecContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
