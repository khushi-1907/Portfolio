"use client";

import { useState, useEffect } from "react";

export function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    isMobile: false,
    isIOS: false,
    isLowPower: false,
    gpuTier: 2, // 0: low, 1: mid, 2: high
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect User Agent
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);

    // Detect Connection Speed (Rough Proxy for Device Power sometimes)
    // @ts-ignore - navigator.connection is inclusive
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection ? ["slow-2g", "2g", "3g"].includes(connection.effectiveType) : false;

    // Detect Hardware Concurrency (CPU Cores)
    const cores = navigator.hardwareConcurrency || 4;
    const isLowPowerCPU = cores <= 4;

    // Determine GPU Tier (Heuristic)
    // iOS devices are generally powerful but strict on memory/WebGL contexts
    let gpuTier = 2; // Default High
    if (isMobile) gpuTier = 1; // Mid
    if (isSlowConnection || isLowPowerCPU) gpuTier = 0; // Low
    if (isIOS) gpuTier = isMobile ? 0 : 1; // iOS Mobile = limit aggressively due to memory crashes

    setCapabilities({
      isMobile,
      isIOS,
      isLowPower: isSlowConnection || isLowPowerCPU,
      gpuTier,
    });
  }, []);

  return capabilities;
}
