import Draggable from 'react-draggable';
import './ChatNode.css';

const ChatNode = (props) => {
    const node = props.node;

    return (
        <Draggable>
            <span id="chat-node" className={node.type}>
                <span>
                    <span>{node.type}</span>
                    <span>{node.label}</span>
                </span>
            </span>
        </Draggable>
    )
}

export default ChatNode;