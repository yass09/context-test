import { SELECT_CAMPAIGN } from "./actiontypes";

const selectCampaign = campaign => ({
  type: SELECT_CAMPAIGN,
  campaign
});

export default selectCampaign;
