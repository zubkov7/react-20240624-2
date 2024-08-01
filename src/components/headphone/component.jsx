import { Suspense } from "react";
import { Reviews } from "../reviews/component";
import { Codecs } from "../codecs/component";

export const Headphone = ({ name, id }) => {
  return (
    <div>
      <h2>
        {name} - {id}
      </h2>
      <h3>Reviews</h3>
      <Suspense fallback={<div>loading reviews .....</div>}>
        <Reviews headphoneId={id} />
      </Suspense>
      <h3>Codecs</h3>
      <Suspense fallback={<div>loading codecs .....</div>}>
        <Codecs headphoneId={id} />
      </Suspense>
    </div>
  );
};
