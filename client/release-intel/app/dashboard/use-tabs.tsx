"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function useTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const [tabs, setTabs] = useState<string[]>(() =>
    pathname ? [pathname] : []
  );

  const openTab = (path: string) => {
    setTabs(prev => (prev.includes(path) ? prev : [...prev, path]));
    router.push(path);
  };

  const closeTab = (tab: string) => {
    setTabs(prev => prev.filter(t => t !== tab));

    if (pathname === tab) {
      router.push("/dashboard");
    }
  };

  return { tabs, pathname, openTab, closeTab };
}
