import "@riotjs/hot-reload";
import { component } from "riot";
import Amplify from "aws-amplify";

import App from "./app.riot";
import awsConfig from "./aws-exports";
Amplify.configure(awsConfig);

component(App)(document.getElementById("app"));
