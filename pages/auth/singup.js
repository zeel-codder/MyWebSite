// import Auth from 'Components/UserLoging/auth'
import React from "react";

import loadable from "@loadable/component";
const Auth = loadable(() => import("Components/UserLoging/auth"));

export default function SingIn({ data }) {
  return <Auth isLogingIn={false} clientId={process.env.clientId}></Auth>;
}
