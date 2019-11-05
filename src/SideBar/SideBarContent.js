import React, { useContext } from "react";

import PlaceHolder from "./PlaceHolder";
import CampaignDetails from "./CampaignDetails";
import CampaignsContext from "../campaignsContext";

const SideBarContent = () => {
  const {
    state: { selectedCampaign }
  } = useContext(CampaignsContext);
  if (!selectedCampaign) return <PlaceHolder />;
  return <CampaignDetails campaign={selectedCampaign} />;
};

export default SideBarContent;
