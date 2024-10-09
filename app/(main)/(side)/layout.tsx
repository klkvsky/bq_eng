import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit ml-auto">
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
          "flex flex-col relative transition-opacity duration-1000 w-full xl:w-[calc(9*8.33vw)]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
