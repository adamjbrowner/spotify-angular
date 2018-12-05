import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    getHashVariable(variable)
    {
        var query = window.location.hash.substring(1);
        var vars = query.split("#");
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    constructor() { }
}
