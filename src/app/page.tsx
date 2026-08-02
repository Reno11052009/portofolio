import dynamic from "next/dynamic";
import { headers } from "next/headers";

const DesktopApp = dynamic(() => import("../components/DesktopApp"));

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse|speed insights|chrome-lighthouse/i.test(userAgent);

  return <DesktopApp isBot={isBot} />;
}
