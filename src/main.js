import "@riotjs/hot-reload";
import { component } from "riot";
import Amplify from "aws-amplify";

import App from "./app.riot";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

component(App)(document.getElementById("app"), {
  title: "AWS Amplify Tutorial with Riot.js!",
});
