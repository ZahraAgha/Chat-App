// Icons
import Envelope from "../../icons/Envelope";
import Trash from "../../icons/Trash";
import Bell from "../../icons/Bell";
import Chat from "../../icons/ChatIcon";

const Menu = () => {
  return (
    <ul className="space-y-7">
      <li>
        <Envelope className="h-5 w-5" color="white" />
      </li>
      <li>
        <Chat className="h-5 w-5" color="#FF3406" />
      </li>
      <li>
        <Bell className="h-5 w-5" color="white" />
      </li>
      <li>
        <Trash className="h-5 w-5" color="white" />
      </li>
    </ul>
  );
};

export default Menu;
