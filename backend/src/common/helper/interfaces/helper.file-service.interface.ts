import {
    IHelperFileCreateExcelWorkbookOptions,
    IHelperFileReadExcelOptions,
    IHelperFileRows,
    IHelperFileWriteExcelOptions,
} from 'src/common/helper/interfaces/helper.interface';
import { WorkBook } from 'xlsx';

export interface IHelperFileService {
    createExcelWorkbook(rows: IHelperFileRows[], options?: IHelperFileCreateExcelWorkbookOptions): WorkBook;

    writeExcelToBuffer(workbook: WorkBook, options?: IHelperFileWriteExcelOptions): Buffer;

    readExcelFromBuffer(file: Buffer, options?: IHelperFileReadExcelOptions): IHelperFileRows[][];

    convertToBytes(megabytes: string): number | null;

    createJson(path: string, data: Record<string, any>[]): boolean;

    readJson(path: string): Record<string, any>[];
}
