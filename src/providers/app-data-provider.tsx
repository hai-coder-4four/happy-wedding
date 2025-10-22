"use client";

import { useEffect, Suspense, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { AppStore, useAppStore } from "@/stores/app-store";
import { COUPLE_DATA } from "@/constants";

type AppDataProviderProps = {
  children: ReactNode;
};

function AppDataProviderInner({ children }: AppDataProviderProps) {
  const { setInfo } = useAppStore();
  const searchParams = useSearchParams();

  useEffect(() => {
    const invitationType = searchParams.get("thiep");
    const coupleKey = (searchParams.get("capdoi") ||
      "demo") as keyof typeof COUPLE_DATA;
    const coupleData = COUPLE_DATA[coupleKey];

    const selectedInfo =
      invitationType === "dau" ? coupleData.bride : coupleData.groom;
    const info = {
      ...selectedInfo,
      eventLocations: coupleData.eventLocations,
    };

    setInfo(info as AppStore["info"]);
  }, [searchParams, setInfo]);

  return <>{children}</>;
}

export function AppDataProvider({ children }: AppDataProviderProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppDataProviderInner>{children}</AppDataProviderInner>
    </Suspense>
  );
}
