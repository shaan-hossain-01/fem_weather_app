const DropdownBtn = ({ children, image }) => {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 bg-neutral-800 rounded-lg cursor-pointer">
      {image && <img src="/src/assets/images/icon-units.svg" alt="Icon" />}
      <div className="font-medium">{children}</div>
      <img src="/src/assets/images/icon-dropdown.svg" alt="Arrow Down" />
    </div>
  );
};

export default DropdownBtn;
