import { FiEdit3 } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import {
  MdOutlineRadioButtonUnchecked,
  MdOutlineRadioButtonChecked,
  MdOutlineSaveAs,
} from "react-icons/md";
import Icon from "./Icon";

const TaskList = () => {
  return (
    <div className="taskListContainer">
      <div className="task">
        <Icon IconName={MdOutlineRadioButtonUnchecked} />
        <p>Sample task</p>
        <Icon IconName={FiEdit3} />
        <Icon IconName={CiTrash} />
      </div>
      <div className="task">
        <Icon IconName={MdOutlineRadioButtonUnchecked} />
        <p>Sample task</p>
        <Icon IconName={FiEdit3} />
        <Icon IconName={CiTrash} />
      </div>
      <div className="task">
        <Icon IconName={MdOutlineRadioButtonUnchecked} />
        <p>Sample task</p>
        <Icon IconName={FiEdit3} />
        <Icon IconName={CiTrash} />
      </div>
    </div>
  );
};

export default TaskList;
