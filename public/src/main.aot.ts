import './polyfills';

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { MaterialAppModuleNgFactory } from "./app/app.module.ngfactory";

enableProdMode();

platformBrowser().bootstrapModuleFactory(MaterialAppModuleNgFactory);
