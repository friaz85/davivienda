import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MenubarModule} from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ContentPagesRoutingModule } from "./content-pages-routing.module";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { ErrorPageComponent } from "./error/error-page.component";

import { IndexPageComponent } from './index-page/index-page.component';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule ,
        ReactiveFormsModule,
        NgbModule,
        NgxSpinnerModule,
        MenubarModule,
        CarouselModule,
        RadioButtonModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [
        ErrorPageComponent,
        IndexPageComponent
    ]
})
export class ContentPagesModule { }
