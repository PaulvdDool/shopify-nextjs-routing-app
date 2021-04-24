import { RoutePropagator as ShopifyRoutePropagator } from "@shopify/react-shopify-app-route-propagator";
import { Context as AppBridgeContext } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import Router, { useRouter } from "next/router";

const RoutePropagator = () => {
  const router = useRouter();
  // using asPath instead of route to display query value (customerId) instead of query key
  // route: "customers/[customerId]"
  // asPath: "customers/123456"
  const { asPath } = router;
  const appBridge = React.useContext(AppBridgeContext);

  React.useEffect(() => {
    appBridge.subscribe(Redirect.ActionType.APP, ({ path }) => {
      Router.push(path);
    });
  }, []);

  return appBridge && asPath ? (
    <ShopifyRoutePropagator location={asPath} app={appBridge} />
  ) : null;
}

export default RoutePropagator;
