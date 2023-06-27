import { createSlice } from "@reduxjs/toolkit";
import { data } from "../constantData";


const contactSlice = createSlice({
    name: "contactInfo",
    initialState: data,

    reducers: {
        addContact: (state, action) => {
            state.push(action.payload);
        },
        updateContact: (state, action) => {
            const { id, name, mobile, email } = action.payload;
            const updateDetails = state.find(data => data.id == id)
            if (updateDetails) {
                updateDetails.name = name,
                    updateDetails.mobile = mobile,
                    updateDetails.email = email
            }
        },

        deleteContact: (state, action) =>{
            const { id } = action.payload;
            const updateDetails = state.find(data => data.id == id)
            if (updateDetails) {
                return state.filter(data => data.id !== id)
            }
        }
    }
})

export const { addContact, updateContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;