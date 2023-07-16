import Draggable from 'react-draggable';
import ChatNode from './ChatNode.jsx';
import './ChatNodeGroup.css';

const ChatNodeGroup = (props) => {
    const group = props.group;

    return (
        <div>
            {group.map( node => (<ChatNode node={node}></ChatNode>) )}
        </div>
    )
}

export default ChatNodeGroup;