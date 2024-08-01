import { Portal } from "../../components/portal/component";
import { TestComponent } from "../../components/test-component/component";

export default function Page() {
  return (
    <div>
      <Portal>
        <TestComponent />
      </Portal>
    </div>
  );
}
