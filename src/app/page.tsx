import { TextUtils } from "@/shared/modules/utils/text.utils";
import { routes } from "../subdomains/repositories/routes";

export const metadata = {
  title: TextUtils.toAppTitle("Home"),
};

export default function Page() {
  return <routes.List />;
}
