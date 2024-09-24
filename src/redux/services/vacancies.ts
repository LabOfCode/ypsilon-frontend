import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IVacancy, VacanciesResponse } from '@/types';

export const vacancyApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://app.ypsilonwork.cz/api' }),
  tagTypes: ['vacancies'],
  endpoints: builder => ({
    getVacancies: builder.query<VacanciesResponse, string>({
      query: () => `/vacancies`,
      providesTags: ['vacancies'],
    }),
    getVacancyById: builder.query<IVacancy, string>({
      query: id => `/vacancies/${id}`,
      providesTags: ['vacancies'],
    }),
    getTopVacancies: builder.query<VacanciesResponse, string>({
      query: () => `/vacancies?isTop=true`,
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
  useGetTopVacanciesQuery,
  useAddVacancyMutation,
  useDeleteVacancyMutation,
} = vacancyApi;
