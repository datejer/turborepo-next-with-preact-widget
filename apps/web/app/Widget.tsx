import Script from "next/script";

export const Widget = () => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <Script src="/widget.js"></Script>
      <div className="my-widget"></div>
    </>
  );
};
