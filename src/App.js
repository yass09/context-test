import React, { useReducer } from "react";
import "bootstrap/scss/bootstrap.scss";
import CampaignsList from "./Campaigns/CampaignsList";
import SideBar from "./SideBar";
import CampaignsContext from "./campaignsContext";
import selectCampaignReducer from "./selectCampaignReducer";
import { campaigns } from "./campaignsData";

const App = () => {
  const [state, dispatch] = useReducer(selectCampaignReducer, { campaigns });
  return (
    <CampaignsContext.Provider value={{ state, dispatch }}>
      <div className='d-flex'>
        <div className='flex-grow-1'>
          <div className='m-5'>
            <h1 className='mb-3'>Campaigns</h1>
            <CampaignsList />
          </div>
        </div>
        <SideBar />
      </div>
    </CampaignsContext.Provider>
  );
};

export default App;
