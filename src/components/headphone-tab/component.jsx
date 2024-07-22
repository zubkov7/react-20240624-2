export const HeadphoneTab = ({ name, onClick, isActive }) => {
  return (
    <button disabled={isActive} onClick={onClick}>
      {name}
    </button>
  );
};
