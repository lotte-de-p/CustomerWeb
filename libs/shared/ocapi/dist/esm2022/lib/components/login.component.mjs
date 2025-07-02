import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { LoginStatusEnum } from '../enums';
import { ConfigConstants } from '@telenet/ng-lib-config';
import { CustomerBrandEnum, QueryParamEnum, } from '@telenet/ng-lib-page';
import { each, isEmpty, some } from 'lodash-es';
import { LoginDetailsConstants } from '../constants';
import { EventNameEnum, EventStatusEnum, EventTypeEnum, } from '@telenet/ng-lib-datalayer';
import { switchMap, takeLast, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services";
import * as i2 from "@telenet/ng-lib-config";
import * as i3 from "@telenet/ng-lib-page";
import * as i4 from "@telenet/ng-lib-datalayer";
import * as i5 from "ngx-cookie-service";
import * as i6 from "@angular/common";
import * as i7 from "@ngx-translate/core";
function LoginComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function LoginComponent_ng_container_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r4 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function LoginComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_container_0_div_2_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r14.mode === "overlay")("ngIfElse", _r2);
} }
function LoginComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LoginComponent_ng_container_0_ng_container_1_Template, 2, 0, "ng-container", 0)(2, LoginComponent_ng_container_0_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isLoggedIn());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isLoggedIn());
} }
function LoginComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12)(2, "span", 13);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 14);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_1_ng_container_1_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.login()); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, "ng.general-login.lbl.not-logged-in"));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-cy", "login-button-link");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, "ng.general-login.btn.not-logged-in"));
} }
function LoginComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_1_div_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.login(true)); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "ng.general.login.lbl.narrowed"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "ng.general.login.btn.narrowed"), " ");
} }
function LoginComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 15);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_1_div_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r23.login(true)); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "ng.general-login.insufficient-rights-link.text"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "ng.general-login.insufficient-rights-link"), " ");
} }
function LoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 9);
    i0.ɵɵtemplate(1, LoginComponent_ng_template_1_ng_container_1_Template, 8, 7, "ng-container", 10)(2, LoginComponent_ng_template_1_div_2_Template, 7, 6, "div", 11)(3, LoginComponent_ng_template_1_div_3_Template, 7, 6, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r1.getLoginStatus());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.loginEnum.NOT_LOGGED_IN);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.loginEnum.NARROWED);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r12 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r12);
} }
function LoginComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r12 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r12);
} }
function LoginComponent_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r10 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function LoginComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
    i0.ɵɵelementStart(1, "div", 17)(2, "div", 18);
    i0.ɵɵelementContainerStart(3, 9);
    i0.ɵɵtemplate(4, LoginComponent_ng_template_3_ng_container_4_Template, 2, 1, "ng-container", 10)(5, LoginComponent_ng_template_3_ng_container_5_Template, 2, 1, "ng-container", 10)(6, LoginComponent_ng_template_3_ng_container_6_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r6 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngTemplateOutlet", _r6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngSwitch", ctx_r3.getLoginStatus());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r3.loginEnum.NOT_LOGGED_IN);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r3.loginEnum.NARROWED);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r3.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.overlay-login-title-insufficient-rights"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "general.lbl.overlay-login-sub-title-insufficient-rights"), " ");
} }
function LoginComponent_ng_template_5_ng_template_2_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.overlay-login-title-abandon-cart"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "general.lbl.overlay-login-sub-title-abandon-cart"), " ");
} }
function LoginComponent_ng_template_5_ng_template_2_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 23);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.overlay-login-title"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 4, "general.lbl.overlay-login-sub-title"), " ");
} }
function LoginComponent_ng_template_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_5_ng_template_2_div_0_div_1_Template, 7, 6, "div", 24)(2, LoginComponent_ng_template_5_ng_template_2_div_0_div_2_Template, 7, 6, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r31.source === "EMAIL");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r31.source !== "EMAIL");
} }
function LoginComponent_ng_template_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, LoginComponent_ng_template_5_ng_template_2_div_0_Template, 3, 2, "div", 0);
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r29.getLoginStatus() !== ctx_r29.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, LoginComponent_ng_template_5_div_1_Template, 7, 6, "div", 20)(2, LoginComponent_ng_template_5_ng_template_2_Template, 1, 1, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r30 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r5.getLoginStatus() === ctx_r5.loginEnum.INSUFFICIENT_PERMISSIONS)("ngIfElse", _r30);
} }
function LoginComponent_ng_template_7_div_5_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 36);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_5_div_1_div_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r38.register("itsme")); });
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.register-with-itsme-help"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, "general.lbl.register-with-itsme"), " ");
} }
function LoginComponent_ng_template_7_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div")(2, "div", 29)(3, "div", 30);
    i0.ɵɵelement(4, "span", 31);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, LoginComponent_ng_template_7_div_5_div_1_div_6_Template, 9, 6, "div", 32);
    i0.ɵɵelementStart(7, "button", 33);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_5_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r40.register("internal")); });
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHtml", i0.ɵɵpipeBind1(5, 3, "general.lbl.need-more-info"), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r36.showItsMeRegistrationOption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 5, "general.lbl.register"), " ");
} }
function LoginComponent_ng_template_7_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_7_div_5_div_1_Template, 10, 7, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r34.styleHint === "sales");
} }
function LoginComponent_ng_template_7_div_6_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 43);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_6_div_1_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r44.register("itsme")); });
    i0.ɵɵelementStart(5, "span", 44);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "general.lbl.register-with-itsme-help"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, "general.lbl.register-with-itsme"), " ");
} }
function LoginComponent_ng_template_7_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "div")(2, "div", 38);
    i0.ɵɵtemplate(3, LoginComponent_ng_template_7_div_6_div_1_div_3_Template, 9, 6, "div", 39);
    i0.ɵɵelementStart(4, "button", 40);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_7_div_6_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r46.register("internal")); });
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r42.showItsMeRegistrationOption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 2, "general.lbl.register"), " ");
} }
function LoginComponent_ng_template_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_7_div_6_div_1_Template, 7, 4, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r35.styleHint === "sales");
} }
const _c0 = a0 => ({ brand: a0 });
function LoginComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 26)(2, "h5", 27);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, LoginComponent_ng_template_7_div_5_Template, 2, 1, "div", 0)(6, LoginComponent_ng_template_7_div_6_Template, 2, 1, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 3, "general.lbl.not-a-customer", i0.ɵɵpureFunction1(6, _c0, ctx_r7.brand)), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.brand !== "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.brand === "BASE");
} }
function LoginComponent_ng_template_9_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.lbl.login-again-insufficient-rights"), " ");
} }
function LoginComponent_ng_template_9_div_3_h5_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.lbl.login-again-abandon-cart"), " ");
} }
function LoginComponent_ng_template_9_div_3_h5_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, "general.lbl.already-a-customer", i0.ɵɵpureFunction1(4, _c0, ctx_r57.brand)), " ");
} }
function LoginComponent_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, LoginComponent_ng_template_9_div_3_h5_1_Template, 3, 3, "h5", 46)(2, LoginComponent_ng_template_9_div_3_h5_2_Template, 3, 6, "h5", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r49.source === "EMAIL");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r49.source !== "EMAIL");
} }
function LoginComponent_ng_template_9_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 53);
} }
function LoginComponent_ng_template_9_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 54);
} }
function LoginComponent_ng_template_9_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 55);
} }
function LoginComponent_ng_template_9_img_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 56);
} }
function LoginComponent_ng_template_9_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_9_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r58.login(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.login-link"), " ");
} }
function LoginComponent_ng_template_9_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function LoginComponent_ng_template_9_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r60.login()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "general.login-link"), " ");
} }
function LoginComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 26);
    i0.ɵɵtemplate(2, LoginComponent_ng_template_9_h5_2_Template, 3, 3, "h5", 46)(3, LoginComponent_ng_template_9_div_3_Template, 3, 2, "div", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 47);
    i0.ɵɵtemplate(5, LoginComponent_ng_template_9_img_5_Template, 1, 0, "img", 48)(6, LoginComponent_ng_template_9_img_6_Template, 1, 0, "img", 49)(7, LoginComponent_ng_template_9_img_7_Template, 1, 0, "img", 50)(8, LoginComponent_ng_template_9_img_8_Template, 1, 0, "img", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, LoginComponent_ng_template_9_button_9_Template, 3, 3, "button", 52)(10, LoginComponent_ng_template_9_button_10_Template, 3, 3, "button", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() === ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() !== ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.brand === "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.brand === "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.brand !== "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.brand !== "BASE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() === ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.getLoginStatus() !== ctx_r9.loginEnum.INSUFFICIENT_PERMISSIONS);
} }
function LoginComponent_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r8 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function LoginComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 8);
    i0.ɵɵtemplate(1, LoginComponent_ng_template_11_ng_container_1_Template, 1, 1, "ng-container", 58);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    const _r10 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r11.showRegistrationOptions());
} }
const _c1 = ["*"];
export class LoginComponent {
    window;
    loginService;
    userDetailsService;
    configService;
    urlService;
    pathCategorisationService;
    languageService;
    dataLayerService;
    cookieService;
    scopes = [];
    messageGroupName;
    autoRedirect = false;
    styleHint = LoginDetailsConstants.STYLE_HINT;
    mode;
    registrationUrl;
    showItsMeRegistrationOption;
    hasInstallableProductType;
    renderOnlyForOriginCustomer = false;
    componentCanRender = new EventEmitter();
    loginDetails;
    show = false;
    loginEnum = LoginStatusEnum;
    brand;
    source;
    action;
    destroy$ = new Subject();
    constructor(window, loginService, userDetailsService, configService, urlService, pathCategorisationService, languageService, dataLayerService, cookieService) {
        this.window = window;
        this.loginService = loginService;
        this.userDetailsService = userDetailsService;
        this.configService = configService;
        this.urlService = urlService;
        this.pathCategorisationService = pathCategorisationService;
        this.languageService = languageService;
        this.dataLayerService = dataLayerService;
        this.cookieService = cookieService;
    }
    ngOnInit() {
        this.action = this.urlService.getRequestParamValue(QueryParamEnum.ACTION, '');
        this.registerBasedOnAction();
        this.brand = this.pathCategorisationService.getCustomerBrand();
        this.initSource();
        this.loginService
            .getAuthenticationStatus()
            .pipe(switchMap((_) => this.userDetailsService.getUserDetails().pipe(takeLast(1))), takeUntil(this.destroy$))
            .subscribe((loginDetails) => {
            this.loginDetails = loginDetails;
            if (this.isLoggedIn() && this.canRenderComponentForLoggedInUser()) {
                this.show = true;
                this.componentCanRender.emit(loginDetails);
            }
            else if (this.autoRedirect && this.configService.getConfig(ConfigConstants.IS_AUTHOR_MODE) !== 'true') {
                this.forceRedirect();
            }
            else {
                this.show = true;
                if (this.mode === 'overlay') {
                    this.sendPageStepData();
                }
            }
        });
    }
    isLoggedIn() {
        return this.getLoginStatus() === LoginStatusEnum.LOGGED_IN;
    }
    canRenderComponentForLoggedInUser() {
        if (this.renderOnlyForOriginCustomer) {
            return this.loginDetails.isBssSystemNetcracker();
        }
        return true;
    }
    getLoginStatus() {
        if (!this.loginDetails?.isLoggedIn()) {
            this.window['telenetgroupLoader']?.hideMask();
            return LoginStatusEnum.NOT_LOGGED_IN;
        }
        if (this.isNarrowed()) {
            return LoginStatusEnum.NARROWED;
        }
        if (!this.hasRequiredScopes() ||
            (this.brand === CustomerBrandEnum.BRAND_BASE && this.hasInstallableProductType && this.loginDetails?.isChild())) {
            this.window['telenetgroupLoader']?.hideMask();
            return LoginStatusEnum.INSUFFICIENT_PERMISSIONS;
        }
        return LoginStatusEnum.LOGGED_IN;
    }
    login(force = false) {
        this.pushEventDataToAnalytics(EventNameEnum.EVENT_NAME_LOGIN);
        const referrerUrl = this.urlService.getCurrentUrl();
        if (!force) {
            this.loginService.login(referrerUrl, this.styleHint);
            return;
        }
        this.loginService.loginWithPrompt(referrerUrl, this.styleHint);
    }
    isNarrowed() {
        return this.loginDetails.isNarrowed();
    }
    showRegistrationOptions() {
        return (this.source !== LoginDetailsConstants.SOURCE_EMAIL &&
            this.getLoginStatus() !== LoginStatusEnum.INSUFFICIENT_PERMISSIONS &&
            !isEmpty(this.styleHint));
    }
    register(idp) {
        const eventName = EventNameEnum.EVENT_NAME_REGISTER + '-' + idp;
        this.pushEventDataToAnalytics(eventName);
        this.redirectToRegistrationURL(idp);
    }
    initSource() {
        this.source = this.urlService.getRequestParamValue(QueryParamEnum.SOURCE, '');
        this.source = this.source && this.source.toUpperCase();
    }
    hasRequiredScopes() {
        if (this.scopes && !this.scopes.length) {
            return true;
        }
        return some(this.scopes, (scope) => {
            return this.loginDetails.hasScope(scope);
        });
    }
    forceRedirect() {
        const loginStatus = this.getLoginStatus();
        const force = loginStatus !== LoginStatusEnum.NOT_LOGGED_IN;
        this.login(force);
    }
    redirectToRegistrationURL(idp) {
        this.cleanCookies();
        if (idp === 'internal') {
            this.redirectToInternalRegistrationURL(this.styleHint);
        }
        else {
            this.redirectToItsMePortal(this.styleHint);
        }
    }
    cleanCookies() {
        const sessionKeys = this.getCookie(LoginDetailsConstants.COOKIE_KEYS);
        if (sessionKeys) {
            const keys = sessionKeys.split(',');
            for (let i = 0; i <= keys.length; i++) {
                this.cookieService.delete(keys[i], '/');
            }
            this.cookieService.delete(LoginDetailsConstants.COOKIE_KEYS, '/');
        }
    }
    initCookies(channel, idp) {
        const requestParameters = this.urlService.getRequestParameters();
        each(requestParameters, (item, key) => {
            this.addCookie(key, item);
        });
        this.addCookie(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL, this.getCustomerRegistrationURL());
        this.addCookie(LoginDetailsConstants.PARAM_CHANNEL, channel);
        this.addCookie(LoginDetailsConstants.PARAM_IDP, idp);
        this.addCookie(LoginDetailsConstants.PARAM_REFERRER_URL, this.urlService.getCurrentUrl());
    }
    addCookie(key, value) {
        this.cookieService.set(key, value, { path: '/' });
        let sessionKeys = this.getCookie(LoginDetailsConstants.COOKIE_KEYS);
        sessionKeys = sessionKeys ? sessionKeys.concat(',', key) : key;
        this.cookieService.set(LoginDetailsConstants.COOKIE_KEYS, sessionKeys, { path: '/' });
    }
    getCookie(key) {
        return this.cookieService.get(key);
    }
    redirectToInternalRegistrationURL(channel) {
        let referrer_url;
        let registrationUrl = this.registrationUrl + '?channel=' + channel + '&idp=' + 'internal';
        const sdata = this.urlService.getRequestParamValue(LoginDetailsConstants.PARAM_SDATA, '');
        if (sdata) {
            registrationUrl += '&sdata=' + sdata;
        }
        if (this.action === 'register') {
            const newUrl = this.urlService.getActionParametersRemovedURL();
            referrer_url = encodeURIComponent(newUrl);
        }
        else {
            referrer_url = encodeURIComponent(this.urlService.getCurrentUrl());
        }
        registrationUrl += '&referrer_url=' + referrer_url;
        this.urlService.redirectTo(registrationUrl);
    }
    redirectToItsMePortal(channel) {
        this.initCookies(channel, 'itsme');
        const redirectURI = this.getRedirectURI();
        const params = {
            redirect_uri: redirectURI,
            language: this.languageService.getLanguage(),
        };
        const itsMePortalUrl = this.getItsMeRegisterUrl() +
            '?language=' +
            params.language +
            '&redirect_uri=' +
            redirectURI +
            '&brand=' +
            this.brand;
        this.urlService.redirectTo(itsMePortalUrl);
    }
    getItsMeRegisterUrl() {
        return this.configService.getConfig(ConfigConstants.OCAPI_URl) + LoginDetailsConstants.ITS_ME_REGISTER_ENDPOINT;
    }
    getRedirectURI() {
        const redirect_uri = this.getCookie(LoginDetailsConstants.CUSTOMER_REGISTRATION_URL);
        return encodeURIComponent(redirect_uri);
    }
    getCustomerRegistrationURL() {
        return this.urlService.getOrigin().concat(this.registrationUrl);
    }
    pushEventDataToAnalytics(eventName) {
        const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypeEnum.EVENT_TYPE_CLICK);
        eventInfoData.setEventStatus(EventStatusEnum.EVENT_STATUS_SUCCESS);
        const attributes = this.buildCommonEventAttributes();
        this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes });
    }
    buildCommonEventAttributes() {
        const styleHint = this.styleHint ? this.styleHint : 'care';
        const flowType = this.urlService.getRequestParamValue(LoginDetailsConstants.PARAM_FLOW, '') || styleHint;
        return { flowType: flowType };
    }
    sendPageStepData() {
        const attributes = this.buildCommonEventAttributes();
        attributes.stepId = LoginDetailsConstants.STEP_ID_LOGIN_REGISTER;
        this.dataLayerService.addStepViewEvent(attributes);
    }
    registerBasedOnAction() {
        if (this.action === 'register') {
            return this.register('internal');
        }
        else if (this.action === 'register-via-itsme') {
            return this.register('external');
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject('Window'), i0.ɵɵdirectiveInject(i1.LoginService), i0.ɵɵdirectiveInject(i1.UserDetailsService), i0.ɵɵdirectiveInject(i2.ConfigService), i0.ɵɵdirectiveInject(i3.UrlService), i0.ɵɵdirectiveInject(i3.PathCategorisationService), i0.ɵɵdirectiveInject(i3.LanguageService), i0.ɵɵdirectiveInject(i4.DataLayerService), i0.ɵɵdirectiveInject(i5.CookieService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["tg-login"]], inputs: { scopes: "scopes", messageGroupName: "messageGroupName", autoRedirect: "autoRedirect", styleHint: "styleHint", mode: "mode", registrationUrl: "registrationUrl", showItsMeRegistrationOption: "showItsMeRegistrationOption", hasInstallableProductType: "hasInstallableProductType", renderOnlyForOriginCustomer: "renderOnlyForOriginCustomer" }, outputs: { componentCanRender: "componentCanRender" }, ngContentSelectors: _c1, decls: 13, vars: 1, consts: [[4, "ngIf"], ["noOverlay", ""], ["overlay", ""], ["headerTitleAndSubtitle", ""], ["onlyRegister", ""], ["onlyLogin", ""], ["loginOrRegister", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "notification notification--warning", 4, "ngSwitchCase"], [1, "notification", "notification--warning"], [1, "icon", "icon-error-shape", "warn"], [1, "button", "button--primary", "cta-secondary", 3, "click"], [1, "icon", "icon-alert-shape", "warn"], [1, "button", "button--primary", "cta-secondary", "button--width-auto", 3, "click"], [1, "end-journey__section__content__action"], [1, "login-sales-journey", "row", "align-items--stretch", "justify-content--center", "col-lg-6", "col-md-10", "col-12", "m--auto", "mb--g"], [1, "login-sales-journey-title", "px--xm", "px--n--md", "col-lg-5", "col-md-7", "col-12", "m--auto"], ["class", "display--flex flex-direction--column", 4, "ngIf", "ngIfElse"], ["otherThanInsufficientRights", ""], [1, "display--flex", "flex-direction--column"], [1, "font--body-regular", "pb--s"], ["class", "display--flex flex-direction--column", 4, "ngIf"], [1, "display--flex", "flex-direction--column", "justify-content--between", "background-white", "col-lg-5", "col-md-4", "col-12", "px--xl", "pb--xl", "pt--xxs"], [1, "text-align--center"], [1, "heading--5"], ["class", "display--block", 4, "ngIf"], [1, "display--block"], ["ng-class", "showItsMeRegistrationOption ? 'mb--xxl' : 'mt--xxxl mb--xs'", 1, "pb--xs", "text-align--center"], [1, "font--caption", 3, "innerHtml"], ["class", "width--full", 4, "ngIf"], [1, "button", "button--secondary", "button--fullwidth", 3, "click"], [1, "width--full"], [1, "font--caption", "text-align--center", "pb--xs"], [1, "button", "button--secondary", "button--fullwidth", "register-with-itsme", 3, "click"], [1, "divider--xxs__mid-grey", "my--xl"], [1, "display--block", "mt--xs"], ["class", "width--full mb--xs", 4, "ngIf"], [1, "button", "button--secondary", "button--fullwidth", "button__icon--position-left", "pt-10", "pb-10", 3, "click"], [1, "width--full", "mb--xs"], [1, "font--caption", "pb--xs", "text-align--center"], [1, "button", "button--secondary", "button--fullwidth", "button__icon--position-left", "register-with-itsme", "pt--m", "pb--m", 3, "click"], [1, "ml--s--md"], [1, "display--flex", "flex-direction--column", "justify-content--between", "background-white", "col-lg-5", "col-md-4", "col-12", "px--xl", "pb--xl", "pt--xxs", "mr--xm--md", "mr--n", "mb--n--md", "mb--m"], ["class", "heading--5", 4, "ngIf"], [1, "m--auto"], ["class", "hide-until-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg", "alt", "login", 4, "ngIf"], ["class", "hide-from-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg", "alt", "login", 4, "ngIf"], ["class", "hide-until-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg", "alt", "login", 4, "ngIf"], ["class", "hide-from-md", "src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg", "alt", "login", 4, "ngIf"], ["class", "button button--primary button--fullwidth", 3, "click", 4, "ngIf"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg", "alt", "login", 1, "hide-until-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg", "alt", "login", 1, "hide-from-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg", "alt", "login", 1, "hide-until-md"], ["src", "/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg", "alt", "login", 1, "hide-from-md"], [1, "button", "button--primary", "button--fullwidth", 3, "click"], [3, "ngTemplateOutlet", 4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, LoginComponent_ng_container_0_Template, 3, 2, "ng-container", 0)(1, LoginComponent_ng_template_1_Template, 4, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(3, LoginComponent_ng_template_3_Template, 7, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, LoginComponent_ng_template_5_Template, 4, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(7, LoginComponent_ng_template_7_Template, 7, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(9, LoginComponent_ng_template_9_Template, 11, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(11, LoginComponent_ng_template_11_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.show);
        } }, dependencies: [i6.NgIf, i6.NgTemplateOutlet, i6.NgSwitch, i6.NgSwitchCase, i7.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'tg-login', template: "<ng-container *ngIf=\"show\">\n  <ng-container *ngIf=\"isLoggedIn()\">\n    <ng-content></ng-content>\n  </ng-container>\n\n  <div *ngIf=\"!isLoggedIn()\">\n    <div *ngIf=\"mode === 'overlay'; else noOverlay\">\n      <ng-container [ngTemplateOutlet]=\"overlay\"> </ng-container>\n    </div>\n  </div>\n</ng-container>\n<ng-template #noOverlay>\n  <ng-container [ngSwitch]=\"getLoginStatus()\">\n    <ng-container *ngSwitchCase=\"loginEnum.NOT_LOGGED_IN\">\n      <div class=\"notification notification--warning\">\n        <span class=\"icon icon-error-shape warn\">{{ 'ng.general-login.lbl.not-logged-in' | translate }}</span>\n        <a (click)=\"login()\" class=\"button button--primary cta-secondary\" [attr.data-cy]=\"'login-button-link'\">{{\n          'ng.general-login.btn.not-logged-in' | translate\n        }}</a>\n      </div>\n    </ng-container>\n\n    <div *ngSwitchCase=\"loginEnum.NARROWED\" class=\"notification notification--warning\">\n      <span class=\"icon icon-error-shape warn\">{{ 'ng.general.login.lbl.narrowed' | translate }}</span>\n      <div (click)=\"login(true)\" class=\"button button--primary cta-secondary\">\n        {{ 'ng.general.login.btn.narrowed' | translate }}\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"loginEnum.INSUFFICIENT_PERMISSIONS\" class=\"notification notification--warning\">\n      <span class=\"icon icon-alert-shape warn\">{{ 'ng.general-login.insufficient-rights-link.text' | translate }}</span>\n      <div (click)=\"login(true)\" class=\"button button--primary cta-secondary button--width-auto\">\n        {{ 'ng.general-login.insufficient-rights-link' | translate }}\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n\n<ng-template #overlay>\n  <ng-container [ngTemplateOutlet]=\"headerTitleAndSubtitle\"> </ng-container>\n  <div class=\"end-journey__section__content__action\">\n    <div\n      class=\"login-sales-journey row align-items--stretch justify-content--center col-lg-6 col-md-10 col-12 m--auto mb--g\">\n      <ng-container [ngSwitch]=\"getLoginStatus()\">\n        <ng-container *ngSwitchCase=\"loginEnum.NOT_LOGGED_IN\">\n          <ng-container [ngTemplateOutlet]=\"loginOrRegister\"> </ng-container>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"loginEnum.NARROWED\">\n          <ng-container [ngTemplateOutlet]=\"loginOrRegister\"> </ng-container>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"loginEnum.INSUFFICIENT_PERMISSIONS\">\n          <ng-container [ngTemplateOutlet]=\"onlyLogin\"> </ng-container>\n        </ng-container>\n      </ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #headerTitleAndSubtitle>\n  <div class=\"login-sales-journey-title px--xm px--n--md col-lg-5 col-md-7 col-12 m--auto\">\n    <div\n      *ngIf=\"getLoginStatus() === loginEnum.INSUFFICIENT_PERMISSIONS; else otherThanInsufficientRights\"\n      class=\"display--flex flex-direction--column\">\n      <h3>\n        {{ 'general.lbl.overlay-login-title-insufficient-rights' | translate }}\n      </h3>\n      <p class=\"font--body-regular pb--s\">\n        {{ 'general.lbl.overlay-login-sub-title-insufficient-rights' | translate }}\n      </p>\n    </div>\n    <ng-template #otherThanInsufficientRights>\n      <div *ngIf=\"getLoginStatus() !== loginEnum.INSUFFICIENT_PERMISSIONS\">\n        <div *ngIf=\"source === 'EMAIL'\" class=\"display--flex flex-direction--column\">\n          <h3>\n            {{ 'general.lbl.overlay-login-title-abandon-cart' | translate }}\n          </h3>\n          <p class=\"font--body-regular pb--s\">\n            {{ 'general.lbl.overlay-login-sub-title-abandon-cart' | translate }}\n          </p>\n        </div>\n        <div *ngIf=\"source !== 'EMAIL'\" class=\"display--flex flex-direction--column\">\n          <h3>\n            {{ 'general.lbl.overlay-login-title' | translate }}\n          </h3>\n          <p class=\"font--body-regular pb--s\">\n            {{ 'general.lbl.overlay-login-sub-title' | translate }}\n          </p>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</ng-template>\n<ng-template #onlyRegister>\n  <div\n    class=\"display--flex flex-direction--column justify-content--between background-white col-lg-5 col-md-4 col-12 px--xl pb--xl pt--xxs\">\n    <div class=\"text-align--center\">\n      <h5 class=\"heading--5\">\n        {{ 'general.lbl.not-a-customer' | translate: { brand: brand } }}\n      </h5>\n    </div>\n    <div *ngIf=\"brand !== 'BASE'\">\n      <div class=\"display--block\" *ngIf=\"styleHint === 'sales'\">\n        <div>\n          <div class=\"display--block\">\n            <div\n              ng-class=\"showItsMeRegistrationOption ? 'mb--xxl' : 'mt--xxxl mb--xs'\"\n              class=\"pb--xs text-align--center\">\n              <span class=\"font--caption\" [innerHtml]=\"'general.lbl.need-more-info' | translate\"> </span>\n            </div>\n            <div *ngIf=\"showItsMeRegistrationOption\" class=\"width--full\">\n              <div class=\"font--caption text-align--center pb--xs\">\n                {{ 'general.lbl.register-with-itsme-help' | translate }}\n              </div>\n              <button\n                class=\"button button--secondary button--fullwidth register-with-itsme\"\n                (click)=\"register('itsme')\">\n                <span>\n                  {{ 'general.lbl.register-with-itsme' | translate }}\n                </span>\n              </button>\n              <div class=\"divider--xxs__mid-grey my--xl\"></div>\n            </div>\n            <button class=\"button button--secondary button--fullwidth\" (click)=\"register('internal')\">\n              {{ 'general.lbl.register' | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"brand === 'BASE'\">\n      <div class=\"display--block\" *ngIf=\"styleHint === 'sales'\">\n        <div>\n          <div class=\"display--block mt--xs\">\n            <div *ngIf=\"showItsMeRegistrationOption\" class=\"width--full mb--xs\">\n              <div class=\"font--caption pb--xs text-align--center\">\n                {{ 'general.lbl.register-with-itsme-help' | translate }}\n              </div>\n              <button\n                class=\"button button--secondary button--fullwidth button__icon--position-left register-with-itsme pt--m pb--m\"\n                (click)=\"register('itsme')\">\n                <span class=\"ml--s--md\">\n                  {{ 'general.lbl.register-with-itsme' | translate }}\n                </span>\n              </button>\n              <div class=\"divider--xxs__mid-grey my--xl\"></div>\n            </div>\n            <button\n              class=\"button button--secondary button--fullwidth button__icon--position-left pt-10 pb-10\"\n              (click)=\"register('internal')\">\n              {{ 'general.lbl.register' | translate }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n<ng-template #onlyLogin>\n  <div\n    class=\"display--flex flex-direction--column justify-content--between background-white col-lg-5 col-md-4 col-12 px--xl pb--xl pt--xxs mr--xm--md mr--n mb--n--md mb--m\">\n    <div class=\"text-align--center\">\n      <h5 class=\"heading--5\" *ngIf=\"getLoginStatus() === loginEnum.INSUFFICIENT_PERMISSIONS\">\n        {{ 'general.lbl.login-again-insufficient-rights' | translate }}\n      </h5>\n      <div *ngIf=\"getLoginStatus() !== loginEnum.INSUFFICIENT_PERMISSIONS\">\n        <h5 class=\"heading--5\" *ngIf=\"source === 'EMAIL'\">\n          {{ 'general.lbl.login-again-abandon-cart' | translate }}\n        </h5>\n        <h5 class=\"heading--5\" *ngIf=\"source !== 'EMAIL'\">\n          {{ 'general.lbl.already-a-customer' | translate: { brand: brand } }}\n        </h5>\n      </div>\n    </div>\n    <div class=\"m--auto\">\n      <img\n        class=\"hide-until-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-desktop.svg\"\n        alt=\"login\"\n        *ngIf=\"brand === 'BASE'\" />\n      <img\n        class=\"hide-from-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/base-login-mobile.svg\"\n        alt=\"login\"\n        *ngIf=\"brand === 'BASE'\" />\n      <img\n        class=\"hide-until-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-desktop.svg\"\n        alt=\"login\"\n        *ngIf=\"brand !== 'BASE'\" />\n      <img\n        class=\"hide-from-md\"\n        src=\"/etc/designs/aff-telenetgroup/atomic/clientlibs/clientlib-atomic/graphics/telenet-login-mobile.svg\"\n        alt=\"login\"\n        *ngIf=\"brand !== 'BASE'\" />\n    </div>\n    <button\n      class=\"button button--primary button--fullwidth\"\n      *ngIf=\"getLoginStatus() === loginEnum.INSUFFICIENT_PERMISSIONS\"\n      (click)=\"login(true)\">\n      {{ 'general.login-link' | translate }}\n    </button>\n    <button\n      class=\"button button--primary button--fullwidth\"\n      *ngIf=\"getLoginStatus() !== loginEnum.INSUFFICIENT_PERMISSIONS\"\n      (click)=\"login()\">\n      {{ 'general.login-link' | translate }}\n    </button>\n  </div>\n</ng-template>\n<ng-template #loginOrRegister>\n  <ng-container [ngTemplateOutlet]=\"onlyLogin\"> </ng-container>\n  <ng-container *ngIf=\"showRegistrationOptions()\" [ngTemplateOutlet]=\"onlyRegister\"> </ng-container>\n</ng-template>\n" }]
    }], () => [{ type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1.LoginService }, { type: i1.UserDetailsService }, { type: i2.ConfigService }, { type: i3.UrlService }, { type: i3.PathCategorisationService }, { type: i3.LanguageService }, { type: i4.DataLayerService }, { type: i5.CookieService }], { scopes: [{
            type: Input
        }], messageGroupName: [{
            type: Input
        }], autoRedirect: [{
            type: Input
        }], styleHint: [{
            type: Input
        }], mode: [{
            type: Input
        }], registrationUrl: [{
            type: Input
        }], showItsMeRegistrationOption: [{
            type: Input
        }], hasInstallableProductType: [{
            type: Input
        }], renderOnlyForOriginCustomer: [{
            type: Input
        }], componentCanRender: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent" }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFpQixNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFDTCxpQkFBaUIsRUFHakIsY0FBYyxHQUVmLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRCxPQUFPLEVBR0wsYUFBYSxFQUNiLGVBQWUsRUFDZixhQUFhLEdBQ2QsTUFBTSwyQkFBMkIsQ0FBQztBQUVuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0lDdEI3Qiw2QkFBbUM7SUFDakMsa0JBQXlCO0lBQzNCLDBCQUFlOzs7SUFHYiwyQkFBZ0Q7SUFDOUMsMkJBQTJEO0lBQzdELGlCQUFNOzs7O0lBRFUsY0FBNEI7SUFBNUIsc0NBQTRCOzs7SUFGOUMsMkJBQTJCO0lBQ3pCLG9GQUVNO0lBQ1IsaUJBQU07Ozs7SUFIRSxjQUEwQjtJQUExQixpREFBMEIsaUJBQUE7OztJQU5wQyw2QkFBMkI7SUFDekIsZ0dB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SyxVQUFVLEVBQUUsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxvQkFBb0IsRUFBRSxDQUFDO1lBQ2hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzt3RUF2UVUsY0FBYyx1QkFxQmYsUUFBUTs2REFyQlAsY0FBYzs7WUM3QjNCLGlGQVVlLG1HQUFBLG1HQUFBLG1HQUFBLG1HQUFBLG9HQUFBLHFHQUFBOztZQVZBLCtCQUFVOzs7aUZENkJaLGNBQWM7Y0FKMUIsU0FBUzsyQkFDRSxVQUFVOztzQkF3QmpCLE1BQU07dUJBQUMsUUFBUTt1UUFwQlQsTUFBTTtrQkFBZCxLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csMkJBQTJCO2tCQUFuQyxLQUFLO1lBQ0cseUJBQXlCO2tCQUFqQyxLQUFLO1lBQ0csMkJBQTJCO2tCQUFuQyxLQUFLO1lBQ0ksa0JBQWtCO2tCQUEzQixNQUFNOztrRkFWSSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2luRGV0YWlscyB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBMb2dpblN0YXR1c0VudW0gfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UsIFVzZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IENvbmZpZ0NvbnN0YW50cywgQ29uZmlnU2VydmljZSB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ3VzdG9tZXJCcmFuZEVudW0sXG4gIExhbmd1YWdlU2VydmljZSxcbiAgUGF0aENhdGVnb3Jpc2F0aW9uU2VydmljZSxcbiAgUXVlcnlQYXJhbUVudW0sXG4gIFVybFNlcnZpY2UsXG59IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1wYWdlJztcbmltcG9ydCB7IGVhY2gsIGlzRW1wdHksIHNvbWUgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgTG9naW5EZXRhaWxzQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIERhdGFMYXllckF0dHJpYnV0ZXMsXG4gIERhdGFMYXllclNlcnZpY2UsXG4gIEV2ZW50TmFtZUVudW0sXG4gIEV2ZW50U3RhdHVzRW51bSxcbiAgRXZlbnRUeXBlRW51bSxcbn0gZnJvbSAnQHRlbGVuZXQvbmctbGliLWRhdGFsYXllcic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZUxhc3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGctbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2NvcGVzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBtZXNzYWdlR3JvdXBOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9SZWRpcmVjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBzdHlsZUhpbnQ6IHN0cmluZyA9IExvZ2luRGV0YWlsc0NvbnN0YW50cy5TVFlMRV9ISU5UO1xuICBASW5wdXQoKSBtb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZ2lzdHJhdGlvblVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93SXRzTWVSZWdpc3RyYXRpb25PcHRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhhc0luc3RhbGxhYmxlUHJvZHVjdFR5cGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlbmRlck9ubHlGb3JPcmlnaW5DdXN0b21lciA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY29tcG9uZW50Q2FuUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxMb2dpbkRldGFpbHM+KCk7XG4gIGxvZ2luRGV0YWlsczogTG9naW5EZXRhaWxzO1xuICBzaG93ID0gZmFsc2U7XG4gIGxvZ2luRW51bSA9IExvZ2luU3RhdHVzRW51bTtcbiAgYnJhbmQ6IHN0cmluZztcbiAgc291cmNlOiBzdHJpbmc7XG4gIGFjdGlvbjogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ1dpbmRvdycpIHJlYWRvbmx5IHdpbmRvdzogV2luZG93LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyRGV0YWlsc1NlcnZpY2U6IFVzZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGF0aENhdGVnb3Jpc2F0aW9uU2VydmljZTogUGF0aENhdGVnb3Jpc2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YUxheWVyU2VydmljZTogRGF0YUxheWVyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aW9uID0gdGhpcy51cmxTZXJ2aWNlLmdldFJlcXVlc3RQYXJhbVZhbHVlKFF1ZXJ5UGFyYW1FbnVtLkFDVElPTiwgJycpO1xuICAgIHRoaXMucmVnaXN0ZXJCYXNlZE9uQWN0aW9uKCk7XG4gICAgdGhpcy5icmFuZCA9IHRoaXMucGF0aENhdGVnb3Jpc2F0aW9uU2VydmljZS5nZXRDdXN0b21lckJyYW5kKCk7XG4gICAgdGhpcy5pbml0U291cmNlKCk7XG4gICAgdGhpcy5sb2dpblNlcnZpY2VcbiAgICAgIC5nZXRBdXRoZW50aWNhdGlvblN0YXR1cygpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChfKSA9PiB0aGlzLnVzZXJEZXRhaWxzU2VydmljZS5nZXRVc2VyRGV0YWlscygpLnBpcGUodGFrZUxhc3QoMSkpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChsb2dpbkRldGFpbHMpID0+IHtcbiAgICAgICAgdGhpcy5sb2dpbkRldGFpbHMgPSBsb2dpbkRldGFpbHM7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpICYmIHRoaXMuY2FuUmVuZGVyQ29tcG9uZW50Rm9yTG9nZ2VkSW5Vc2VyKCkpIHtcbiAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50Q2FuUmVuZGVyLmVtaXQobG9naW5EZXRhaWxzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dG9SZWRpcmVjdCAmJiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnKENvbmZpZ0NvbnN0YW50cy5JU19BVVRIT1JfTU9ERSkgIT09ICd0cnVlJykge1xuICAgICAgICAgIHRoaXMuZm9yY2VSZWRpcmVjdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ292ZXJsYXknKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRQYWdlU3RlcERhdGEoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMb2dpblN0YXR1cygpID09PSBMb2dpblN0YXR1c0VudW0uTE9HR0VEX0lOO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5SZW5kZXJDb21wb25lbnRGb3JMb2dnZWRJblVzZXIoKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyT25seUZvck9yaWdpbkN1c3RvbWVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2dpbkRldGFpbHMuaXNCc3NTeXN0ZW1OZXRjcmFja2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldExvZ2luU3RhdHVzKCk6IExvZ2luU3RhdHVzRW51bSB7XG4gICAgaWYgKCF0aGlzLmxvZ2luRGV0YWlscz8uaXNMb2dnZWRJbigpKSB7XG4gICAgICB0aGlzLndpbmRvd1sndGVsZW5ldGdyb3VwTG9hZGVyJ10/LmhpZGVNYXNrKCk7XG4gICAgICByZXR1cm4gTG9naW5TdGF0dXNFbnVtLk5PVF9MT0dHRURfSU47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNOYXJyb3dlZCgpKSB7XG4gICAgICByZXR1cm4gTG9naW5TdGF0dXNFbnVtLk5BUlJPV0VEO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhdGhpcy5oYXNSZXF1aXJlZFNjb3BlcygpIHx8XG4gICAgICAodGhpcy5icmFuZCA9PT0gQ3VzdG9tZXJCcmFuZEVudW0uQlJBTkRfQkFTRSAmJiB0aGlzLmhhc0luc3RhbGxhYmxlUHJvZHVjdFR5cGUgJiYgdGhpcy5sb2dpbkRldGFpbHM/LmlzQ2hpbGQoKSlcbiAgICApIHtcbiAgICAgIHRoaXMud2luZG93Wyd0ZWxlbmV0Z3JvdXBMb2FkZXInXT8uaGlkZU1hc2soKTtcbiAgICAgIHJldHVybiBMb2dpblN0YXR1c0VudW0uSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TO1xuICAgIH1cblxuICAgIHJldHVybiBMb2dpblN0YXR1c0VudW0uTE9HR0VEX0lOO1xuICB9XG5cbiAgbG9naW4oZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMucHVzaEV2ZW50RGF0YVRvQW5hbHl0aWNzKEV2ZW50TmFtZUVudW0uRVZFTlRfTkFNRV9MT0dJTik7XG4gICAgY29uc3QgcmVmZXJyZXJVcmwgPSB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpO1xuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHJlZmVycmVyVXJsLCB0aGlzLnN0eWxlSGludCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luV2l0aFByb21wdChyZWZlcnJlclVybCwgdGhpcy5zdHlsZUhpbnQpO1xuICB9XG5cbiAgaXNOYXJyb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkRldGFpbHMuaXNOYXJyb3dlZCgpO1xuICB9XG5cbiAgc2hvd1JlZ2lzdHJhdGlvbk9wdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc291cmNlICE9PSBMb2dpbkRldGFpbHNDb25zdGFudHMuU09VUkNFX0VNQUlMICYmXG4gICAgICB0aGlzLmdldExvZ2luU3RhdHVzKCkgIT09IExvZ2luU3RhdHVzRW51bS5JTlNVRkZJQ0lFTlRfUEVSTUlTU0lPTlMgJiZcbiAgICAgICFpc0VtcHR5KHRoaXMuc3R5bGVIaW50KVxuICAgICk7XG4gIH1cblxuICByZWdpc3RlcihpZHA6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IEV2ZW50TmFtZUVudW0uRVZFTlRfTkFNRV9SRUdJU1RFUiArICctJyArIGlkcDtcbiAgICB0aGlzLnB1c2hFdmVudERhdGFUb0FuYWx5dGljcyhldmVudE5hbWUpO1xuICAgIHRoaXMucmVkaXJlY3RUb1JlZ2lzdHJhdGlvblVSTChpZHApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlID0gdGhpcy51cmxTZXJ2aWNlLmdldFJlcXVlc3RQYXJhbVZhbHVlKFF1ZXJ5UGFyYW1FbnVtLlNPVVJDRSwgJycpO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5zb3VyY2UgJiYgdGhpcy5zb3VyY2UudG9VcHBlckNhc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzUmVxdWlyZWRTY29wZXMoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2NvcGVzICYmICF0aGlzLnNjb3Blcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc29tZSh0aGlzLnNjb3BlcywgKHNjb3BlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmxvZ2luRGV0YWlscy5oYXNTY29wZShzY29wZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZvcmNlUmVkaXJlY3QoKSB7XG4gICAgY29uc3QgbG9naW5TdGF0dXMgPSB0aGlzLmdldExvZ2luU3RhdHVzKCk7XG4gICAgY29uc3QgZm9yY2UgPSBsb2dpblN0YXR1cyAhPT0gTG9naW5TdGF0dXNFbnVtLk5PVF9MT0dHRURfSU47XG4gICAgdGhpcy5sb2dpbihmb3JjZSk7XG4gIH1cblxuICBwcml2YXRlIHJlZGlyZWN0VG9SZWdpc3RyYXRpb25VUkwoaWRwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuQ29va2llcygpO1xuXG4gICAgaWYgKGlkcCA9PT0gJ2ludGVybmFsJykge1xuICAgICAgdGhpcy5yZWRpcmVjdFRvSW50ZXJuYWxSZWdpc3RyYXRpb25VUkwodGhpcy5zdHlsZUhpbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZGlyZWN0VG9JdHNNZVBvcnRhbCh0aGlzLnN0eWxlSGludCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkNvb2tpZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgc2Vzc2lvbktleXMgPSB0aGlzLmdldENvb2tpZShMb2dpbkRldGFpbHNDb25zdGFudHMuQ09PS0lFX0tFWVMpO1xuICAgIGlmIChzZXNzaW9uS2V5cykge1xuICAgICAgY29uc3Qga2V5cyA9IHNlc3Npb25LZXlzLnNwbGl0KCcsJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5kZWxldGUoa2V5c1tpXSwgJy8nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29va2llU2VydmljZS5kZWxldGUoTG9naW5EZXRhaWxzQ29uc3RhbnRzLkNPT0tJRV9LRVlTLCAnLycpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvb2tpZXMoY2hhbm5lbDogc3RyaW5nLCBpZHA6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlcXVlc3RQYXJhbWV0ZXJzID0gdGhpcy51cmxTZXJ2aWNlLmdldFJlcXVlc3RQYXJhbWV0ZXJzKCk7XG4gICAgZWFjaChyZXF1ZXN0UGFyYW1ldGVycywgKGl0ZW06IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuYWRkQ29va2llKGtleSwgaXRlbSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvb2tpZShMb2dpbkRldGFpbHNDb25zdGFudHMuQ1VTVE9NRVJfUkVHSVNUUkFUSU9OX1VSTCwgdGhpcy5nZXRDdXN0b21lclJlZ2lzdHJhdGlvblVSTCgpKTtcbiAgICB0aGlzLmFkZENvb2tpZShMb2dpbkRldGFpbHNDb25zdGFudHMuUEFSQU1fQ0hBTk5FTCwgY2hhbm5lbCk7XG4gICAgdGhpcy5hZGRDb29raWUoTG9naW5EZXRhaWxzQ29uc3RhbnRzLlBBUkFNX0lEUCwgaWRwKTtcbiAgICB0aGlzLmFkZENvb2tpZShMb2dpbkRldGFpbHNDb25zdGFudHMuUEFSQU1fUkVGRVJSRVJfVVJMLCB0aGlzLnVybFNlcnZpY2UuZ2V0Q3VycmVudFVybCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29va2llKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb29raWVTZXJ2aWNlLnNldChrZXksIHZhbHVlLCB7IHBhdGg6ICcvJyB9KTtcbiAgICBsZXQgc2Vzc2lvbktleXMgPSB0aGlzLmdldENvb2tpZShMb2dpbkRldGFpbHNDb25zdGFudHMuQ09PS0lFX0tFWVMpO1xuICAgIHNlc3Npb25LZXlzID0gc2Vzc2lvbktleXMgPyBzZXNzaW9uS2V5cy5jb25jYXQoJywnLCBrZXkpIDoga2V5O1xuICAgIHRoaXMuY29va2llU2VydmljZS5zZXQoTG9naW5EZXRhaWxzQ29uc3RhbnRzLkNPT0tJRV9LRVlTLCBzZXNzaW9uS2V5cywgeyBwYXRoOiAnLycgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvb2tpZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29va2llU2VydmljZS5nZXQoa2V5KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkaXJlY3RUb0ludGVybmFsUmVnaXN0cmF0aW9uVVJMKGNoYW5uZWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCByZWZlcnJlcl91cmw7XG4gICAgbGV0IHJlZ2lzdHJhdGlvblVybCA9IHRoaXMucmVnaXN0cmF0aW9uVXJsICsgJz9jaGFubmVsPScgKyBjaGFubmVsICsgJyZpZHA9JyArICdpbnRlcm5hbCc7XG4gICAgY29uc3Qgc2RhdGEgPSB0aGlzLnVybFNlcnZpY2UuZ2V0UmVxdWVzdFBhcmFtVmFsdWUoTG9naW5EZXRhaWxzQ29uc3RhbnRzLlBBUkFNX1NEQVRBLCAnJyk7XG4gICAgaWYgKHNkYXRhKSB7XG4gICAgICByZWdpc3RyYXRpb25VcmwgKz0gJyZzZGF0YT0nICsgc2RhdGE7XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3JlZ2lzdGVyJykge1xuICAgICAgY29uc3QgbmV3VXJsID0gdGhpcy51cmxTZXJ2aWNlLmdldEFjdGlvblBhcmFtZXRlcnNSZW1vdmVkVVJMKCk7XG4gICAgICByZWZlcnJlcl91cmwgPSBlbmNvZGVVUklDb21wb25lbnQobmV3VXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmZXJyZXJfdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXJsU2VydmljZS5nZXRDdXJyZW50VXJsKCkpO1xuICAgIH1cbiAgICByZWdpc3RyYXRpb25VcmwgKz0gJyZyZWZlcnJlcl91cmw9JyArIHJlZmVycmVyX3VybDtcbiAgICB0aGlzLnVybFNlcnZpY2UucmVkaXJlY3RUbyhyZWdpc3RyYXRpb25VcmwpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWRpcmVjdFRvSXRzTWVQb3J0YWwoY2hhbm5lbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbml0Q29va2llcyhjaGFubmVsLCAnaXRzbWUnKTtcbiAgICBjb25zdCByZWRpcmVjdFVSSSA9IHRoaXMuZ2V0UmVkaXJlY3RVUkkoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVUkksXG4gICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKSxcbiAgICB9O1xuXG4gICAgY29uc3QgaXRzTWVQb3J0YWxVcmwgPVxuICAgICAgdGhpcy5nZXRJdHNNZVJlZ2lzdGVyVXJsKCkgK1xuICAgICAgJz9sYW5ndWFnZT0nICtcbiAgICAgIHBhcmFtcy5sYW5ndWFnZSArXG4gICAgICAnJnJlZGlyZWN0X3VyaT0nICtcbiAgICAgIHJlZGlyZWN0VVJJICtcbiAgICAgICcmYnJhbmQ9JyArXG4gICAgICB0aGlzLmJyYW5kO1xuXG4gICAgdGhpcy51cmxTZXJ2aWNlLnJlZGlyZWN0VG8oaXRzTWVQb3J0YWxVcmwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdHNNZVJlZ2lzdGVyVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoQ29uZmlnQ29uc3RhbnRzLk9DQVBJX1VSbCkgKyBMb2dpbkRldGFpbHNDb25zdGFudHMuSVRTX01FX1JFR0lTVEVSX0VORFBPSU5UO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZWRpcmVjdFVSSSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlZGlyZWN0X3VyaSA9IHRoaXMuZ2V0Q29va2llKExvZ2luRGV0YWlsc0NvbnN0YW50cy5DVVNUT01FUl9SRUdJU1RSQVRJT05fVVJMKTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0X3VyaSk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1c3RvbWVyUmVnaXN0cmF0aW9uVVJMKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsU2VydmljZS5nZXRPcmlnaW4oKS5jb25jYXQodGhpcy5yZWdpc3RyYXRpb25VcmwpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXNoRXZlbnREYXRhVG9BbmFseXRpY3MoZXZlbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudEluZm9EYXRhID0gdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLmNyZWF0ZUV2ZW50SW5mbyhldmVudE5hbWUsIEV2ZW50VHlwZUVudW0uRVZFTlRfVFlQRV9DTElDSyk7XG4gICAgZXZlbnRJbmZvRGF0YS5zZXRFdmVudFN0YXR1cyhFdmVudFN0YXR1c0VudW0uRVZFTlRfU1RBVFVTX1NVQ0NFU1MpO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0aGlzLmJ1aWxkQ29tbW9uRXZlbnRBdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5kYXRhTGF5ZXJTZXJ2aWNlLnNlbmRFdmVudCh7IGV2ZW50SW5mbzogZXZlbnRJbmZvRGF0YSwgYXR0cmlidXRlcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb21tb25FdmVudEF0dHJpYnV0ZXMoKTogRGF0YUxheWVyQXR0cmlidXRlcyB7XG4gICAgY29uc3Qgc3R5bGVIaW50ID0gdGhpcy5zdHlsZUhpbnQgPyB0aGlzLnN0eWxlSGludCA6ICdjYXJlJztcbiAgICBjb25zdCBmbG93VHlwZSA9IHRoaXMudXJsU2VydmljZS5nZXRSZXF1ZXN0UGFyYW1WYWx1ZShMb2dpbkRldGFpbHNDb25zdGFudHMuUEFSQU1fRkxPVywgJycpIHx8IHN0eWxlSGludDtcbiAgICByZXR1cm4geyBmbG93VHlwZTogZmxvd1R5cGUgfSBhcyBEYXRhTGF5ZXJBdHRyaWJ1dGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kUGFnZVN0ZXBEYXRhKCk6IHZvaWQge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB0aGlzLmJ1aWxkQ29tbW9uRXZlbnRBdHRyaWJ1dGVzKCk7XG4gICAgYXR0cmlidXRlcy5zdGVwSWQgPSBMb2dpbkRldGFpbHNDb25zdGFudHMuU1RFUF9JRF9MT0dJTl9SRUdJU1RFUjtcbiAgICB0aGlzLmRhdGFMYXllclNlcnZpY2UuYWRkU3RlcFZpZXdFdmVudChhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJCYXNlZE9uQWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3JlZ2lzdGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoJ2ludGVybmFsJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PT0gJ3JlZ2lzdGVyLXZpYS1pdHNtZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKCdleHRlcm5hbCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPGRpdiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5cbiAgICA8ZGl2ICpuZ0lmPVwibW9kZSA9PT0gJ292ZXJsYXknOyBlbHNlIG5vT3ZlcmxheVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJvdmVybGF5XCI+IDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNub092ZXJsYXk+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImdldExvZ2luU3RhdHVzKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJsb2dpbkVudW0uTk9UX0xPR0dFRF9JTlwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLXdhcm5pbmdcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tZXJyb3Itc2hhcGUgd2FyblwiPnt7ICduZy5nZW5lcmFsLWxvZ2luLmxibC5ub3QtbG9nZ2VkLWluJyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgPGEgKGNsaWNrKT1cImxvZ2luKClcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgY3RhLXNlY29uZGFyeVwiIFthdHRyLmRhdGEtY3ldPVwiJ2xvZ2luLWJ1dHRvbi1saW5rJ1wiPnt7XG4gICAgICAgICAgJ25nLmdlbmVyYWwtbG9naW4uYnRuLm5vdC1sb2dnZWQtaW4nIHwgdHJhbnNsYXRlXG4gICAgICAgIH19PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJsb2dpbkVudW0uTkFSUk9XRURcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLXdhcm5pbmdcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yLXNoYXBlIHdhcm5cIj57eyAnbmcuZ2VuZXJhbC5sb2dpbi5sYmwubmFycm93ZWQnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgPGRpdiAoY2xpY2spPVwibG9naW4odHJ1ZSlcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgY3RhLXNlY29uZGFyeVwiPlxuICAgICAgICB7eyAnbmcuZ2VuZXJhbC5sb2dpbi5idG4ubmFycm93ZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cImxvZ2luRW51bS5JTlNVRkZJQ0lFTlRfUEVSTUlTU0lPTlNcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBub3RpZmljYXRpb24tLXdhcm5pbmdcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWFsZXJ0LXNoYXBlIHdhcm5cIj57eyAnbmcuZ2VuZXJhbC1sb2dpbi5pbnN1ZmZpY2llbnQtcmlnaHRzLWxpbmsudGV4dCcgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICA8ZGl2IChjbGljayk9XCJsb2dpbih0cnVlKVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBjdGEtc2Vjb25kYXJ5IGJ1dHRvbi0td2lkdGgtYXV0b1wiPlxuICAgICAgICB7eyAnbmcuZ2VuZXJhbC1sb2dpbi5pbnN1ZmZpY2llbnQtcmlnaHRzLWxpbmsnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI292ZXJsYXk+XG4gIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVGl0bGVBbmRTdWJ0aXRsZVwiPiA8L25nLWNvbnRhaW5lcj5cbiAgPGRpdiBjbGFzcz1cImVuZC1qb3VybmV5X19zZWN0aW9uX19jb250ZW50X19hY3Rpb25cIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImxvZ2luLXNhbGVzLWpvdXJuZXkgcm93IGFsaWduLWl0ZW1zLS1zdHJldGNoIGp1c3RpZnktY29udGVudC0tY2VudGVyIGNvbC1sZy02IGNvbC1tZC0xMCBjb2wtMTIgbS0tYXV0byBtYi0tZ1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZ2V0TG9naW5TdGF0dXMoKVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJsb2dpbkVudW0uTk9UX0xPR0dFRF9JTlwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9naW5PclJlZ2lzdGVyXCI+IDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJsb2dpbkVudW0uTkFSUk9XRURcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvZ2luT3JSZWdpc3RlclwiPiA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwibG9naW5FbnVtLklOU1VGRklDSUVOVF9QRVJNSVNTSU9OU1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwib25seUxvZ2luXCI+IDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjaGVhZGVyVGl0bGVBbmRTdWJ0aXRsZT5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLXNhbGVzLWpvdXJuZXktdGl0bGUgcHgtLXhtIHB4LS1uLS1tZCBjb2wtbGctNSBjb2wtbWQtNyBjb2wtMTIgbS0tYXV0b1wiPlxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwiZ2V0TG9naW5TdGF0dXMoKSA9PT0gbG9naW5FbnVtLklOU1VGRklDSUVOVF9QRVJNSVNTSU9OUzsgZWxzZSBvdGhlclRoYW5JbnN1ZmZpY2llbnRSaWdodHNcIlxuICAgICAgY2xhc3M9XCJkaXNwbGF5LS1mbGV4IGZsZXgtZGlyZWN0aW9uLS1jb2x1bW5cIj5cbiAgICAgIDxoMz5cbiAgICAgICAge3sgJ2dlbmVyYWwubGJsLm92ZXJsYXktbG9naW4tdGl0bGUtaW5zdWZmaWNpZW50LXJpZ2h0cycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvaDM+XG4gICAgICA8cCBjbGFzcz1cImZvbnQtLWJvZHktcmVndWxhciBwYi0tc1wiPlxuICAgICAgICB7eyAnZ2VuZXJhbC5sYmwub3ZlcmxheS1sb2dpbi1zdWItdGl0bGUtaW5zdWZmaWNpZW50LXJpZ2h0cycgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI290aGVyVGhhbkluc3VmZmljaWVudFJpZ2h0cz5cbiAgICAgIDxkaXYgKm5nSWY9XCJnZXRMb2dpblN0YXR1cygpICE9PSBsb2dpbkVudW0uSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzb3VyY2UgPT09ICdFTUFJTCdcIiBjbGFzcz1cImRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtblwiPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIHt7ICdnZW5lcmFsLmxibC5vdmVybGF5LWxvZ2luLXRpdGxlLWFiYW5kb24tY2FydCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC0tYm9keS1yZWd1bGFyIHBiLS1zXCI+XG4gICAgICAgICAgICB7eyAnZ2VuZXJhbC5sYmwub3ZlcmxheS1sb2dpbi1zdWItdGl0bGUtYWJhbmRvbi1jYXJ0JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzb3VyY2UgIT09ICdFTUFJTCdcIiBjbGFzcz1cImRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtblwiPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIHt7ICdnZW5lcmFsLmxibC5vdmVybGF5LWxvZ2luLXRpdGxlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmb250LS1ib2R5LXJlZ3VsYXIgcGItLXNcIj5cbiAgICAgICAgICAgIHt7ICdnZW5lcmFsLmxibC5vdmVybGF5LWxvZ2luLXN1Yi10aXRsZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNvbmx5UmVnaXN0ZXI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImRpc3BsYXktLWZsZXggZmxleC1kaXJlY3Rpb24tLWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtLWJldHdlZW4gYmFja2dyb3VuZC13aGl0ZSBjb2wtbGctNSBjb2wtbWQtNCBjb2wtMTIgcHgtLXhsIHBiLS14bCBwdC0teHhzXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtYWxpZ24tLWNlbnRlclwiPlxuICAgICAgPGg1IGNsYXNzPVwiaGVhZGluZy0tNVwiPlxuICAgICAgICB7eyAnZ2VuZXJhbC5sYmwubm90LWEtY3VzdG9tZXInIHwgdHJhbnNsYXRlOiB7IGJyYW5kOiBicmFuZCB9IH19XG4gICAgICA8L2g1PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJicmFuZCAhPT0gJ0JBU0UnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0tYmxvY2tcIiAqbmdJZj1cInN0eWxlSGludCA9PT0gJ3NhbGVzJ1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LS1ibG9ja1wiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBuZy1jbGFzcz1cInNob3dJdHNNZVJlZ2lzdHJhdGlvbk9wdGlvbiA/ICdtYi0teHhsJyA6ICdtdC0teHh4bCBtYi0teHMnXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwYi0teHMgdGV4dC1hbGlnbi0tY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC0tY2FwdGlvblwiIFtpbm5lckh0bWxdPVwiJ2dlbmVyYWwubGJsLm5lZWQtbW9yZS1pbmZvJyB8IHRyYW5zbGF0ZVwiPiA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzaG93SXRzTWVSZWdpc3RyYXRpb25PcHRpb25cIiBjbGFzcz1cIndpZHRoLS1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LS1jYXB0aW9uIHRleHQtYWxpZ24tLWNlbnRlciBwYi0teHNcIj5cbiAgICAgICAgICAgICAgICB7eyAnZ2VuZXJhbC5sYmwucmVnaXN0ZXItd2l0aC1pdHNtZS1oZWxwJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc2Vjb25kYXJ5IGJ1dHRvbi0tZnVsbHdpZHRoIHJlZ2lzdGVyLXdpdGgtaXRzbWVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZWdpc3RlcignaXRzbWUnKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge3sgJ2dlbmVyYWwubGJsLnJlZ2lzdGVyLXdpdGgtaXRzbWUnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItLXh4c19fbWlkLWdyZXkgbXktLXhsXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zZWNvbmRhcnkgYnV0dG9uLS1mdWxsd2lkdGhcIiAoY2xpY2spPVwicmVnaXN0ZXIoJ2ludGVybmFsJylcIj5cbiAgICAgICAgICAgICAge3sgJ2dlbmVyYWwubGJsLnJlZ2lzdGVyJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImJyYW5kID09PSAnQkFTRSdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LS1ibG9ja1wiICpuZ0lmPVwic3R5bGVIaW50ID09PSAnc2FsZXMnXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktLWJsb2NrIG10LS14c1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNob3dJdHNNZVJlZ2lzdHJhdGlvbk9wdGlvblwiIGNsYXNzPVwid2lkdGgtLWZ1bGwgbWItLXhzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LS1jYXB0aW9uIHBiLS14cyB0ZXh0LWFsaWduLS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7eyAnZ2VuZXJhbC5sYmwucmVnaXN0ZXItd2l0aC1pdHNtZS1oZWxwJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc2Vjb25kYXJ5IGJ1dHRvbi0tZnVsbHdpZHRoIGJ1dHRvbl9faWNvbi0tcG9zaXRpb24tbGVmdCByZWdpc3Rlci13aXRoLWl0c21lIHB0LS1tIHBiLS1tXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVnaXN0ZXIoJ2l0c21lJylcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLS1zLS1tZFwiPlxuICAgICAgICAgICAgICAgICAge3sgJ2dlbmVyYWwubGJsLnJlZ2lzdGVyLXdpdGgtaXRzbWUnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpdmlkZXItLXh4c19fbWlkLWdyZXkgbXktLXhsXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zZWNvbmRhcnkgYnV0dG9uLS1mdWxsd2lkdGggYnV0dG9uX19pY29uLS1wb3NpdGlvbi1sZWZ0IHB0LTEwIHBiLTEwXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJlZ2lzdGVyKCdpbnRlcm5hbCcpXCI+XG4gICAgICAgICAgICAgIHt7ICdnZW5lcmFsLmxibC5yZWdpc3RlcicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI29ubHlMb2dpbj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZGlzcGxheS0tZmxleCBmbGV4LWRpcmVjdGlvbi0tY29sdW1uIGp1c3RpZnktY29udGVudC0tYmV0d2VlbiBiYWNrZ3JvdW5kLXdoaXRlIGNvbC1sZy01IGNvbC1tZC00IGNvbC0xMiBweC0teGwgcGItLXhsIHB0LS14eHMgbXItLXhtLS1tZCBtci0tbiBtYi0tbi0tbWQgbWItLW1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1hbGlnbi0tY2VudGVyXCI+XG4gICAgICA8aDUgY2xhc3M9XCJoZWFkaW5nLS01XCIgKm5nSWY9XCJnZXRMb2dpblN0YXR1cygpID09PSBsb2dpbkVudW0uSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCI+XG4gICAgICAgIHt7ICdnZW5lcmFsLmxibC5sb2dpbi1hZ2Fpbi1pbnN1ZmZpY2llbnQtcmlnaHRzJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9oNT5cbiAgICAgIDxkaXYgKm5nSWY9XCJnZXRMb2dpblN0YXR1cygpICE9PSBsb2dpbkVudW0uSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImhlYWRpbmctLTVcIiAqbmdJZj1cInNvdXJjZSA9PT0gJ0VNQUlMJ1wiPlxuICAgICAgICAgIHt7ICdnZW5lcmFsLmxibC5sb2dpbi1hZ2Fpbi1hYmFuZG9uLWNhcnQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxoNSBjbGFzcz1cImhlYWRpbmctLTVcIiAqbmdJZj1cInNvdXJjZSAhPT0gJ0VNQUlMJ1wiPlxuICAgICAgICAgIHt7ICdnZW5lcmFsLmxibC5hbHJlYWR5LWEtY3VzdG9tZXInIHwgdHJhbnNsYXRlOiB7IGJyYW5kOiBicmFuZCB9IH19XG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibS0tYXV0b1wiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzcz1cImhpZGUtdW50aWwtbWRcIlxuICAgICAgICBzcmM9XCIvZXRjL2Rlc2lnbnMvYWZmLXRlbGVuZXRncm91cC9hdG9taWMvY2xpZW50bGlicy9jbGllbnRsaWItYXRvbWljL2dyYXBoaWNzL2Jhc2UtbG9naW4tZGVza3RvcC5zdmdcIlxuICAgICAgICBhbHQ9XCJsb2dpblwiXG4gICAgICAgICpuZ0lmPVwiYnJhbmQgPT09ICdCQVNFJ1wiIC8+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwiaGlkZS1mcm9tLW1kXCJcbiAgICAgICAgc3JjPVwiL2V0Yy9kZXNpZ25zL2FmZi10ZWxlbmV0Z3JvdXAvYXRvbWljL2NsaWVudGxpYnMvY2xpZW50bGliLWF0b21pYy9ncmFwaGljcy9iYXNlLWxvZ2luLW1vYmlsZS5zdmdcIlxuICAgICAgICBhbHQ9XCJsb2dpblwiXG4gICAgICAgICpuZ0lmPVwiYnJhbmQgPT09ICdCQVNFJ1wiIC8+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwiaGlkZS11bnRpbC1tZFwiXG4gICAgICAgIHNyYz1cIi9ldGMvZGVzaWducy9hZmYtdGVsZW5ldGdyb3VwL2F0b21pYy9jbGllbnRsaWJzL2NsaWVudGxpYi1hdG9taWMvZ3JhcGhpY3MvdGVsZW5ldC1sb2dpbi1kZXNrdG9wLnN2Z1wiXG4gICAgICAgIGFsdD1cImxvZ2luXCJcbiAgICAgICAgKm5nSWY9XCJicmFuZCAhPT0gJ0JBU0UnXCIgLz5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJoaWRlLWZyb20tbWRcIlxuICAgICAgICBzcmM9XCIvZXRjL2Rlc2lnbnMvYWZmLXRlbGVuZXRncm91cC9hdG9taWMvY2xpZW50bGlicy9jbGllbnRsaWItYXRvbWljL2dyYXBoaWNzL3RlbGVuZXQtbG9naW4tbW9iaWxlLnN2Z1wiXG4gICAgICAgIGFsdD1cImxvZ2luXCJcbiAgICAgICAgKm5nSWY9XCJicmFuZCAhPT0gJ0JBU0UnXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1mdWxsd2lkdGhcIlxuICAgICAgKm5nSWY9XCJnZXRMb2dpblN0YXR1cygpID09PSBsb2dpbkVudW0uSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCJcbiAgICAgIChjbGljayk9XCJsb2dpbih0cnVlKVwiPlxuICAgICAge3sgJ2dlbmVyYWwubG9naW4tbGluaycgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1mdWxsd2lkdGhcIlxuICAgICAgKm5nSWY9XCJnZXRMb2dpblN0YXR1cygpICE9PSBsb2dpbkVudW0uSU5TVUZGSUNJRU5UX1BFUk1JU1NJT05TXCJcbiAgICAgIChjbGljayk9XCJsb2dpbigpXCI+XG4gICAgICB7eyAnZ2VuZXJhbC5sb2dpbi1saW5rJyB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2xvZ2luT3JSZWdpc3Rlcj5cbiAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJvbmx5TG9naW5cIj4gPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93UmVnaXN0cmF0aW9uT3B0aW9ucygpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwib25seVJlZ2lzdGVyXCI+IDwvbmctY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==