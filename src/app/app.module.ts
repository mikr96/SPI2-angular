import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { PagesModule } from "./pages/pages.module";
import { NeedAuthGuard } from "./auth.guard";
import { APP_BASE_HREF } from "@angular/common";
import { InterceptorModule } from "./interceptor.module";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    PagesModule,
    InterceptorModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [NeedAuthGuard, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
