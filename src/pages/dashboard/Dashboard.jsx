import React, { useRef, useState, useContext, useEffect } from 'react';
import dummyDialog from '../../utils/dummy.js';
import './dashboard.css';
import ChatDialog from '../../components/ChatDialog';

function Dashboard() {
  const [dialog, setDialog] = useState(dummyDialog);

  function addNode() {
    let d = { ...dialog };
    d.dialogs[2].nodes.push({ nodeId: "d", type: "set" });
    setDialog(d);
  }

  return (
    <>
      <div className="dashboard-root">
        <div className="title">
          <span>{dialog.name}</span>
        </div>
        <div className="dialog-editor">
          <ul className="option-nav">
            <li onClick={() => addNode()}>더하기</li>
            <li>option2</li>
            <li>option3</li>
          </ul>
          <div className="dialog">
            <div className="panel">
              <ChatDialog dialog={dialog}></ChatDialog>
            </div>
            <div className="list">list</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;