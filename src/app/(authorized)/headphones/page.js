import { Suspense } from "react";
import { Headphones } from "../../component/headphones/component";

export default async function HeadphonesPage() {
  return (
    <div>
      <Suspense fallback={<div>loading.....</div>}>
        <Headphones />
      </Suspense>
    </div>
  );
}
