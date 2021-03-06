import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cards: [
    {
      id: 1,
      taste: "с фуа-гра",
      quantity: "10",
      weight: "0,5",
      gift: "мышь в подарок",
      happy: false,
      isDisabled: false
    },
    {
      id: 2,
      taste: "с рыбой",
      quantity: "40",
      weight: "2",
      gift: "2 мыши в подарок",
      happy: false,
      isDisabled: false
    },
    {
      id: 3,
      taste: "с курой",
      quantity: "100",
      weight: "5",
      gift: "5 мышей в подарок",
      happy: true,
      isDisabled: true
    },
    // {
    //   id: 4,
    //   taste: "с рыбой",
    //   quantity: "40",
    //   weight: "2",
    //   gift: "2 мыши в подарок",
    //   happy: false,
    //   isDisabled: false
    // },
    // {
    //   id: 5,
    //   taste: "с курой",
    //   quantity: "100",
    //   weight: "5",
    //   gift: "5 мышей в подарок",
    //   happy: true,
    //   isDisabled: true
    // },
  ]
} 

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    
  }
})

export const { addCard, changeCard } = cardsSlice.actions
export default cardsSlice.reducer