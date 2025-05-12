import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        // addItem(state, action) {
        //     const addProduct = state.items.find((item) => item.id === action.payload.id)
        //     if (addProduct) {
        //         addProduct.quantity += 1
        //     } else {
        //         state.items.push({
        //             ...action.payload,
        //             quantity: 1
        //         })
        //     }
        //     state.total += action.payload.price
        // },
        addItem(state, action) {
            const { id, selectedSize, selectedColor } = action.payload
            const addProduct = state.items.find((item) => item.id === id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor
            )
            if (addProduct) {
                addProduct.quantity += 1
            } else {
                state.items.push(action.payload)
            }
            state.total += action.payload.price
        },

        // lessItem(state, action) {
        //     const lessProduct = state.items.find((item) => item.id === action.payload.id)
        //     if (lessProduct.quantity === 1) {
        //         const removeIndex2 = state.items.findIndex((item) => item.id === action.payload.id)
        //         if (removeIndex2 > -1) {
        //             const removeItem2 = state.items[removeIndex2]
        //             state.items.splice(removeIndex2, 1)
        //             state.total -= removeItem2.price * removeItem2.quantity
        //         }
        //     }
        //     else {
        //         lessProduct.quantity -= 1
        //         state.total -= action.payload.price
        //     }
        // },
        lessItem(state, action) {
            const { id, selectedSize, selectedColor, quantity } = action.payload
            //find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
            const lessProduct = state.items.find((item) => item.id === id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor)
            if (lessProduct.quantity === 1) {
                const removeIndex = state.items.findIndex((item) => item.id === id &&
                    item.selectedSize === selectedSize &&
                    item.selectedColor === selectedColor)
                if (removeIndex > -1) {
                    const removeItem = state.items[removeIndex]
                    state.items.splice(removeIndex, 1)
                    state.total -= removeItem.price * quantity
                }
            }
            else {
                lessProduct.quantity -= 1
                state.total -= action.payload.price
            }
        },

        removeItem(state, action) {
            const { id, selectedSize, selectedColor, quantity } = action.payload
            // findIndex()  用于找到符合条件的第一个元素的索引值，如果找到符合条件的元素，就会返回该元素的索引值， 如果没找到就会返回-1 
            const removeIndex = state.items.findIndex((item) => item.id === id &&
                item.selectedSize === selectedSize &&
                item.selectedColor === selectedColor)
            if (removeIndex > -1) {
                const removeItem = state.items[removeIndex]
                state.items.splice(removeIndex, 1)
                state.total -= removeItem.price * quantity
            }
        }
    }
})

export const { addItem, removeItem, lessItem } = cartSlice.actions
export default cartSlice.reducer