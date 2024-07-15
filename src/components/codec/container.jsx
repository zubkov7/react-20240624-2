import { useSelector } from "react-redux";
import { selectCodecById } from "../../redux/entities/codec";
import { Codec } from "./component";

export const CodecContainer = ({ id }) => {
  const codec = useSelector((state) => selectCodecById(state, id));

  if (!codec) {
    return null;
  }

  return <Codec type={codec.type} />;
};
