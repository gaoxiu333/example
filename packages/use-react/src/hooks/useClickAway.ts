import React, { useEffect } from "react";

// 点击外部区域触发回调
export default function useClickAway(ref: any, callback: Function) {
  useEffect(() => {
    function handleClickAway(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref]);
}
