import axios from "axios"

export const api = axios.create({
    baseURL: 'https://law-firm.devssh.xyz/api/firm_side',
    withCredentials: true,
  });
  