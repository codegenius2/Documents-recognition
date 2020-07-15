import {ResultItem} from "../models";


export class BaseResultItem implements ResultItem {

    buf_length: number;
    light: number;
    list_idx: number;
    page_idx: number;
    result_type: number;

    constructor(item: ResultItem) {
        this.buf_length = item.buf_length;
        this.light = item.light;
        this.list_idx = item.list_idx;
        this.page_idx = item.page_idx;
        this.result_type = item.result_type;
    }
}