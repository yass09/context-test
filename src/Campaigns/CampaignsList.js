import React, { useContext } from "react";

import CampaignsContext from "../campaignsContext";
import selectCampaign from "../actions/selectCampaignActionCreator";
import CampaignRow from "./CampaignRow";

const CampaignsList = () => {
  const {
    state: { campaigns },
    dispatch
  } = useContext(CampaignsContext);
  const handleSelectCampaign = campaign => {
    dispatch(selectCampaign(campaign));
  };

  return (
    <table className='table table-hover'>
      <thead className='thead-light'>
        <tr>
          <th>#</th>
          <th colSpan='2'>Campaign</th>
          <th>Quantity</th>
          <th>Audience</th>
          <th>Note?</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map(campaign => (
          <CampaignRow
            key={campaign.id}
            campaign={campaign}
            onSelect={() => handleSelectCampaign(campaign)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CampaignsList;
