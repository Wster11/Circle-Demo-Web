// import WebIM from "./Easemob-chat";
import WebIM from "easemob-websdk/circleSdk/Easemob-chat";

WebIM.conn = new WebIM.connection({
//  Pass your appKey here.
  appKey: "easemob-demo#circle",
});

export default WebIM;
