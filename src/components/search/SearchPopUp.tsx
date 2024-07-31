import useUIStore from "../../stores/ui.store";

export const SearchPopUp = () => {
  const searchPopup = useUIStore((state) => state.searchPopup);

  const handleSearchPopup = useUIStore((state) => state.handleSearchPopup);

  const closePopup = () => {
    handleSearchPopup();
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
        <form method="GET" className="search-popup-form">
          <input
            type="text"
            id="search"
            className="input-line animate"
            name="search"
            placeholder="What are you looking for...?"
          />
        </form>
        <p className="search-popup-text animate">
          Write what you are looking for and press enter to begin your search!
        </p>
      </div>
      {/* /SEARCH POPUP */}
    </>
  );
};
