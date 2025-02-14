/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI
 * Notes API for Learning
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Note,
} from '../models/index';
import {
    NoteFromJSON,
    NoteToJSON,
} from '../models/index';

export interface CreateNoteRequest {
    note: Note;
}

export interface GetAllNotesRequest {
    limit?: number;
    offset?: number;
}

export interface GetNoteByIdRequest {
    noteId: number;
}

/**
 * 
 */
export class NoteApi extends runtime.BaseAPI {

    /**
     * Create new Note
     */
    async createNoteRaw(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Note>> {
        if (requestParameters['note'] == null) {
            throw new runtime.RequiredError(
                'note',
                'Required parameter "note" was null or undefined when calling createNote().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/notes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NoteToJSON(requestParameters['note']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteFromJSON(jsonValue));
    }

    /**
     * Create new Note
     */
    async createNote(requestParameters: CreateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Note> {
        const response = await this.createNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get All Notes with limit and offset
     */
    async getAllNotesRaw(requestParameters: GetAllNotesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Note>>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NoteFromJSON));
    }

    /**
     * Get All Notes with limit and offset
     */
    async getAllNotes(requestParameters: GetAllNotesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Note>> {
        const response = await this.getAllNotesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a single Note
     * Find note by ID
     */
    async getNoteByIdRaw(requestParameters: GetNoteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Note>> {
        if (requestParameters['noteId'] == null) {
            throw new runtime.RequiredError(
                'noteId',
                'Required parameter "noteId" was null or undefined when calling getNoteById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notes/{noteId}`.replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters['noteId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteFromJSON(jsonValue));
    }

    /**
     * Returns a single Note
     * Find note by ID
     */
    async getNoteById(requestParameters: GetNoteByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Note> {
        const response = await this.getNoteByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
