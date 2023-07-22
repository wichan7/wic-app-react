import ChatNodeGroup from './ChatNodeGroup.jsx';
import ChatNode from './ChatNode.jsx';
import './ChatDialog.css';

const ChatDialog = (props) => {
  const dialog = props.dialog;
  const preDialog = dialog.dialogs[0];
  const postDialog = dialog.dialogs[1];
  const mainDialog = dialog.dialogs[2];

  return <>
  { mainDialog.then.map(nodeId => <ChatNodeGroup nodes={mainDialog.nodes} nodeId={nodeId} key={nodeId} />) }
  </>
}

export default ChatDialog;