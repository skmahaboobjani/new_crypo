
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = { 'X-RapidAPI-Key': '39ae9bba50msh371e76aea8fe6c6p1da168jsnf873be6a0157',
                            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	
};

const baseUrl ='https://coinranking1.p.rapidapi.com';

const creatRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "createApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => creatRequest(`/coins?limit=${count}`),
		}),

		getCryptoDetails: builder.query({
			query: (coinId) => creatRequest(`/coin/${coinId}`),
		}),

		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				creatRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;