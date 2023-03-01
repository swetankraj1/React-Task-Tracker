import { FaTimes } from "react-icons/fa";

const Task = ({ taskH, onDelete, onToggle }) => {
  return (
    <div className={`task ${taskH.reminder ? 'reminder' : "" }`} onDoubleClick={() => onToggle(taskH.id)}>
      <h3>
        {taskH.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(taskH.id)}
        />
      </h3>
      <p>{taskH.day} </p>
    </div>
  );
};

export default Task;
