import "@riotjs/hot-reload";
import { component, register } from "riot";
import Amplify from "aws-amplify";
import { Router, Route } from '@riotjs/route';

import App from "./app.riot";
import awsConfig from "./aws-exports";

register('router', Router);
register('route', Route);

Amplify.configure(awsConfig);

component(App)(document.getElementById("app"));
