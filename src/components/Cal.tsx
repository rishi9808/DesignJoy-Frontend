import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("floatingButton", {"calLink":"designsvault/30min","config":{"layout":"month_view","theme":"auto"},"buttonText":"Let's Talk","hideButtonIcon":false,"buttonColor":"#e67c00"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#e67c00"},"dark":{"cal-brand":"#e67c00"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
};