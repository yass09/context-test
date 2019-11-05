const selectCampaignReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_CAMPAIGN":
      return { ...state, selectedCampaign: action.campaign };
    default:
      return state;
  }
};

export default selectCampaignReducer;
