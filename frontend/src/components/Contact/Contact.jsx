// Components
import Contacts from "./Contacts";
import ContactHeader from "./ContactHeader";

const Contact = () => {
  return (
    <div className="h-full col-span-4 flex flex-col gap-2 overflow-y-hidden">
      <ContactHeader />
      <Contacts />
    </div>
  );
};

export default Contact;
