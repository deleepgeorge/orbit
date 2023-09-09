import { Injectable } from "@angular/core";

@Injectable()
export class AdminDashBoardService{

    getSurveyAggreration() {
        return SDATA;
    }
}

const SDATA = [14,7,18,10,11,18,22,34,10,39,22,38]