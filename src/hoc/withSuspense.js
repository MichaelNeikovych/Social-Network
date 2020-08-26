import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = Component => (props) => {
  return <React.Suspense fallback={<Preloader {...props}/>}>
    <Component/>
  </React.Suspense>
}