import { useGetHeadphonesQuery } from "../../redux/services/api";

export const CartHeadphoneItem = ({ id, amount }) => {
  const { data: headphone } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find((item) => item.id === id),
    }),
  });

  const { name } = headphone || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
