import { NagiosService } from "./nagiosService.model";

export interface NagiosServiceResult {
    id: number;
    resultCode: number;
    resultMessage: string;
}