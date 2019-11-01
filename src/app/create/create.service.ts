import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(
    private _appRef: ApplicationRef,
    private _cfResolver: ComponentFactoryResolver,
    private _injector: Injector
  ) { }
  
}
