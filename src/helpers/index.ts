import { ItemsResponse } from "../interfaces";

export const setItemsResponse = (items: ItemsResponse[]) => {
  const newResponse = {
    items: items
      .map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      })
      .slice(0, 4),
  };
  return newResponse;
};
