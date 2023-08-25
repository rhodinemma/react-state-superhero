import { FiEdit3 } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
  MdOutlineSaveAs,
} from "react-icons/md";

const TaskList = () => {
  return (
    <div className="taskListContainer">
      <div className="task">
        <MdOutlineRadioButtonUnchecked />
        <p>Sample task</p>
        <FiEdit3 />
        <CiTrash />
      </div>
      <div className="task">
        <MdOutlineRadioButtonUnchecked />
        <p>Sample task</p>
        <FiEdit3 />
        <CiTrash />
      </div>
      <div className="task">
        <MdOutlineRadioButtonUnchecked />
        <p>Sample task</p>
        <FiEdit3 />
        <CiTrash />
      </div>
    </div>
  );
};

export default TaskList;
