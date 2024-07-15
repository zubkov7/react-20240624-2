import { CodecList } from "../codec-list/component";
import { Counter } from "../counter/component";
import { ReviewList } from "../review-list/component";

export const Headphone = ({ name, id, reviewIds, codecIds }) => {
  return (
    <div>
      <h2>
        {name} - {id}
      </h2>
      <ReviewList reviewIds={reviewIds} />
      <CodecList codecIds={codecIds} />
      <Counter />
    </div>
  );
};
