import { useForm } from "react-hook-form";
import useUIStore from "../../stores/ui.store";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const SearchPopUp = () => {
  const searchPopup = useUIStore((state) => state.searchPopup);

  const closePopup = () => {
    handleSearchPopup();
  };

  type Inputs = {
    search: string;
  };

  const [datainput, setDatainput] = useState<string>("lo");

  const navigate = useNavigate();

  const handleSearchPopup = useUIStore((state) => state.handleSearchPopup);

  const {
    register,

    formState: { errors },
  } = useForm<Inputs>();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate({ to: `/search`, search: { q: datainput } });
      handleSearchPopup();
    }
  };

  return (
    <>
      {/* SEARCH POPUP */}
      <div className={`search-popup ${searchPopup ? "open" : ""}`}>
        {/* CROSS ICON */}

        <button onClick={closePopup}>
          <svg className="cross-icon big close-button search-popup-close">
            <svg>
              <path d="M15.997,13.093L13.089,16l-5.093-5.092l-5.085,5.085l-2.908-2.908L5.088,8L0.003,2.915l2.908-2.908l5.085,5.085l5.093-5.093l2.908,2.908L10.904,8L15.997,13.093z" />
            </svg>
          </svg>
        </button>

        {/* /CROSS ICON */}
        <form className="search-popup-form">
          <input
            type="text"
            {...register("search", { required: true })}
            className="input-line animate"
            placeholder="What are you looking for...?"
            onChange={(event) => setDatainput(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event.nativeEvent)}
          />

          {errors.search && <span>This field is required</span>}
        </form>
        <p className="search-popup-text animate">
          Write what you are looking for and press enter to begin your search!
        </p>
      </div>
      {/* /SEARCH POPUP */}
    </>
  );
};
