import React from "react";

import StatusBadge from "../common/StatusBadge";

const CampaignRow = ({ campaign, onSelect }) => {
  const {
    id,
    name,
    image,
    status,
    quantity,
    initialQuantity,
    audience,
    note
  } = campaign;

  return (
    <tr onClick={onSelect}>
      <td>#{id}</td>
      <td style={{ width: 100 }}>
        <img
          src={image}
          style={{
            maxHeight: 50,
            ...(status === "closed" ? { filter: "grayscale(100%)" } : {})
          }}
          alt={name}
        />
      </td>
      <td>
        <StatusBadge className='mr-2'>{status}</StatusBadge>
        {name}
      </td>
      <td>
        {quantity} / {initialQuantity}
      </td>
      <td>{audience}</td>
      <td>{note ? "📝" : undefined}</td>
    </tr>
  );
};

export default CampaignRow;
