import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IVacancy } from '@/types';

export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ypsilon-backend.onrender.com/api' }),
  tagTypes: ['vacancies'],
  endpoints: builder => ({
    getVacancies: builder.query<IVacancy, string>({
      query: () => `/vacancies`,
      providesTags: ['vacancies'],
    }),
    getVacancyById: builder.query<IVacancy, string>({
      query: id => `/vacancies/${id}`,
      providesTags: ['vacancies'],
    }),
    addVacancy: builder.mutation({
      query: newVacancy => ({
        url: `/vacancies`,
        method: 'POST',
        body: { vacancy: newVacancy },
      }),
      invalidatesTags: ['vacancies'],
    }),
    deleteVacancy: builder.mutation({
      query: id => ({
        url: `/vacancies/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['vacancies'],
    }),
  }),
});
export const {
  useGetVacanciesQuery,
  useGetVacancyByIdQuery,
  useAddVacancyMutation,
  useDeleteVacancyMutation,
} = vacancyApi;
