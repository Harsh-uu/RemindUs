import axios from "axios";
import Reminder from "../type";

const url = "http://localhost:3500";
export const productUrlEndPoint = "/reminders"; 

const reminders = axios.create({ baseURL: url });

export const getReminders = async () =>{
    const response = await reminders.get<Reminder[]>(`${productUrlEndPoint}`);
    return response.data;
}

export const createReminder = async (newReminder: Reminder) =>{
    const response = await reminders.post<Reminder>(`${productUrlEndPoint}`, newReminder);
    return response.data;
}

export const updateReminder = async (id: number, updatedReminder: Reminder) =>{
    const response = await reminders.patch<Reminder>(`${productUrlEndPoint}/${id}`, updatedReminder);
    return response.data;
}

export const deleteReminder = async (id: number) =>{
    const response = await reminders.delete<Reminder>(`${productUrlEndPoint}/${id}`);
    return response.data;
}
