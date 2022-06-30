import { Request, Response } from "express";
import { createAxiosInstance } from "../api/index";
import { setItemsResponse } from "../helpers/index";

export const getItemsBySearch = async (req: Request, res: Response) => {
  const { query } = req;

  try {
    const axiosInstance = createAxiosInstance();

    const responseItems = await axiosInstance.get(
      `/sites/MLA/search?q=${query.q}`
    );

    const response = {
      status: 200,
      data: setItemsResponse(responseItems.data.results),
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "fail",
      data: null,
    });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const { params } = req;

  try {
    const axiosInstance = createAxiosInstance();

    const itemData = await axiosInstance.get(`/items/${params.id}`);

    const descriptionData = await axiosInstance.get(
      `/items/${params.id}/description`
    );

    const response = {
      status: 200,
      data: {
        sold_quantity: itemData.data.sold_quantity,
        description: descriptionData.data.plain_text,
        price: itemData.data.price,
        title: itemData.data.title,
        picture: itemData.data.thumbnail,
        condition: itemData.data.condition,
      },
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "fail",
      data: null,
    });
  }
};
