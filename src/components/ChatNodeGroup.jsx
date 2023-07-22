import Draggable from 'react-draggable';
import ChatNode from './ChatNode.jsx';
import './ChatNodeGroup.css';

const ChatNodeGroup = (props) => {
    const {nodes, nodeId} = props;
    const node = nodes.find( node => node.nodeId === nodeId );

    return (
        <div className="chat-node-group">
            <ChatNode node={node}/>
            {node.then.map( nodeId => <ChatNodeGroup key={nodeId} nodeId={nodeId} nodes={nodes}/> )}
        </div>
    )
}

export default ChatNodeGroup;