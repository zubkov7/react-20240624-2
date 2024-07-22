import { Codec } from "../codec/component";

export const CodecList = ({ codecs }) => {
  if (!codecs.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {codecs.map(({ type }) => (
          <li>
            <Codec type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};
