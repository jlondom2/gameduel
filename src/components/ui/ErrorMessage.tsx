import { MdError } from "react-icons/md";

interface Props {
  message: string;
}
export const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="container mb-6 max-w-screen-xl">
      <div className="information-box error inline-block w-auto">
        {/* INFORMATION BOX ICON */}
        <div className="information-box-icon">
          {/* CROSS CB ICON */}
          <MdError className="cross-cb-icon" />

          {/* /CROSS CB ICON */}
        </div>
        {/* /INFORMATION BOX ICON */}
        {/* INFORMATION BOX MESSAGE */}
        <p className="information-box-message">{message}</p>
        {/* /INFORMATION BOX MESSAGE */}
      </div>
    </div>
  );
};
