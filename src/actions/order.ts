'use server'
import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";




export const createOrder = async (cartProducts: CartProduct[], userId: string) => {
  const order = await prismaClient.order.create({
    data: {
      userId,
      status: "WAITING_FOR_PAYMENT",
    },
  });

  return order;
};
