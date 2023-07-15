import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './dashboard.css';
import Draggable from 'react-draggable';

function Dashboard() {
  let init = {
    dialogId: "1",
    nodes: [
      {
        nodeId: "welcome",
        type: "welcome",
        label: "welcome"
      }, {
        nodeId: "1",
        type: "output",
        label: "o1"
      }, {
        nodeId: "2",
        type: "set",
        label: "s2"
      }, {
        nodeId: "3",
        type: "output",
        label: "o3"
      }, {
        nodeId: "anything-else",
        type: "anything-else",
        label: "anything-else"
      }
    ]
  };
  const [dialog, setDialog] = useState(init);

  function addNode() {
    let d = { ...dialog };
    d.nodes.push({ nodeId: "d", type: "set" });
    setDialog(d);
  }

  return (
    <>
      <div className="dashboard-root">
        <div className="title">
          <span>챗봇명: TEST</span>
        </div>
        <div className="dialog-editor">
          <ul className="option-nav">
            <li onClick={() => addNode()}>더하기</li>
            <li>option2</li>
            <li>option3</li>
          </ul>
          <div className="dialog">
            <div className="panel">
              {
                dialog.nodes.map(e => (
                  <Draggable>
                    <span id="node" className={e.type}>
                      <span>
                        <span>{e.type}</span>
                        <span>{e.label}</span>
                      </span>
                    </span>
                  </Draggable>
                ))
              }
            </div>
            <div className="list">list</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;