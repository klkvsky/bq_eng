import { cn } from "@/lib/utils";
import SideFooter from "@/components/side/SideFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "w-screen h-full xl:h-[calc(100vh-44px)] flex flex-col xl:flex-row xl:items-end xl:justify-end"
      )}
    >
      <div
        className="hidden xl:block fixed top-0 right-0 w-[calc(9*8.33vw)] h-full pointer-events-none"
        style={{
          viewTransitionName: "sideshadow",
        }}
      >
        <div className="w-full h-full relative sidesheet-shadow" />
      </div>
      <div
        className={cn(
          "flex flex-col xl:max-h-screen xl:overflow-y-scroll relative transition-opacity duration-1000 w-full xl:w-[calc(9*8.33vw)]"
        )}
      >
        {children}
        <SideFooter />
      </div>
    </div>
  );
}
