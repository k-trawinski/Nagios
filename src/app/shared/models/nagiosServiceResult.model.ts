import { NagiosService } from "./nagiosService.model";

export interface NagiosServiceResult {
    id: number;
    nagiosService: NagiosService;
    resultCode: number;
    resultMessage: string;
}