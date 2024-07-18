import { useSelector } from "react-redux";
import { Codec } from "./component";
import { selectCodecById } from "../../redux/entities/codec/codec";

export const CodecContainer = ({ id }) => {
  const codec = useSelector((state) => selectCodecById(state, id));

  if (!codec) {
    return null;
  }

  return <Codec type={codec.type} />;
};
