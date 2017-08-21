import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [RouterModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class SharedModule { }
