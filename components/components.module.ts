import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { NavigationLinks } from "./navigation-top/navigation-top";
import { HeaderPart } from "./header-main/header-main";
import { OrderList } from "./order-list/order-list";
import { orderDetails } from "./order-details/order-details";
import { AddressForm } from "./address-form/address-form";
import { ProfileForm } from "./profile-form/profile-form";
import { ProfileDetails } from "./profile-details/profile-details";

@NgModule({
    declarations: [
        NavigationLinks, HeaderPart, OrderList, orderDetails, AddressForm, ProfileForm, ProfileDetails
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CommonModule, NavigationLinks, HeaderPart, OrderList, orderDetails, AddressForm, ProfileForm, ProfileDetails
    ],
})
export class ComponentsModule {
    HeaderPart
}