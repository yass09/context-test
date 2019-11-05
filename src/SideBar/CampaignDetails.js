import React, { useState, useEffect } from "react";
import StatusBadge from "../common/StatusBadge";

const CampaignDetails = ({
  campaign: { name, image, status, quantity, initialQuantity, audience, note }
}) => {
  const [currentNote, setCurrentNote] = useState(note);

  useEffect(() => setCurrentNote(note), [note]);

  const handleNoteChange = event => setCurrentNote(event.target.value);
  const handleClearNote = () => setCurrentNote("");

  return (
    <div className='text-center d-flex flex-column align-items-center py-5 px-4'>
      <img
        src={image}
        alt={name}
        className='d-block'
        style={{
          width: "60%"
        }}
      />
      <h2 className='mt-3'>{name}</h2>
      <ul className='text-left'>
        <li>
          Status: <StatusBadge>{status}</StatusBadge>
        </li>
        <li>
          {quantity} / {initialQuantity} left
        </li>
        <li>Audience: {audience}</li>
      </ul>

      <h4>Note</h4>
      <textarea
        className='form-control'
        value={currentNote}
        onChange={handleNoteChange}
      />
      <div className='mt-2 w-100 text-right'>
        <button className='btn btn-sm btn-secondary' onClick={handleClearNote}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default CampaignDetails;
