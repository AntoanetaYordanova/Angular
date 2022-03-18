import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class ParamsActivate implements CanActivate {
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree  {
        const { data : { paramsActivate, paramsActivateRedirectUrl } } = route;
        if( !paramsActivate || !Array.isArray(paramsActivate) || paramsActivate.length == 0 ) {
            return true;
        }
        const hasAllRouteParams = paramsActivate.reduce((acc, currentParam) => {
            return !!route.params[currentParam] && acc;
        }, true);

        if(hasAllRouteParams) {
            return true 
        } 
        return this.router.parseUrl(paramsActivateRedirectUrl || '/');    
    }
}

 