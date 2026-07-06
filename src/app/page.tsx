import dynamic from "next/dynamic";

const DesktopApp = dynamic(() => import("../components/DesktopApp"));

export default function Home() {
  return <DesktopApp />;
}
