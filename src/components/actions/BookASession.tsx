import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../ui/CustomButton";

const BookASession = () => {
  return (
    <CustomButton
      label="Book a Session"
      icon={<FiArrowUpRight />}
      variant="primary"
    />
  );
};

export default BookASession;
