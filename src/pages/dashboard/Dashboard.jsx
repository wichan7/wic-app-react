import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './dashboard.css';
import ChatNode from '../../components/ChatNode';

function Dashboard() {
  let init = {
    dialogId: "7ac90665-2035-4957-8f46-dd96c123f72a",
    name: "testchatbot",
    dialogs: [
      {
        id: "preDialog",
        name: "preDialog",
        then: []
      }, {
        id: "postDialog",
        name: "postDialog",
        then: []
      }, {
        id: "mainDialog",
        name: "mainDialog",
        then: [
          "welcome",
          "o1",
          "s2",
          "anything-else"
        ],
        nodes: [
          {
            nodeId: "welcome",
            type: "welcome",
            label: "welcome",
            then: [

            ]
          }, {
            nodeId: "o1",
            type: "output",
            label: "o1",
            then: [

            ]
          }, {
            nodeId: "s2",
            type: "set",
            label: "s2",
            then: [

            ]
          }, {
            nodeId: "anything-else",
            type: "anything-else",
            label: "anything-else",
            then: [

            ]
          }
        ]
      }
    ]
  };
  const [dialog, setDialog] = useState(init);

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
              {
                dialog.dialogs[2].nodes.map(e => (<ChatNode node={e}></ChatNode>))
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