import { SITE_NAME } from "@/data/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className, size = 44 }: { className?: string; size?: number }) {
  return (
    <img
      src="/brand/logo-mark-sm.png"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo-lockup.png"
      alt={SITE_NAME}
      width={900}
      height={741}
      className={cn("w-full h-auto object-contain", className)}
    />
  );
}

export function LogoPlate({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-paper p-1.5 border border-white/20",
        className,
      )}
    >
      <LogoMark className={markClassName} size={56} />
    </span>
  );
}
