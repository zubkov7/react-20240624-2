import { useGetHeadphonesQuery } from "../../redux/services/api";

export const CartHeadphoneItem = ({ id, amount }) => {
  const { data: headphones } = useGetHeadphonesQuery();

  const { name } = headphones?.find((item) => item.id === id) || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
