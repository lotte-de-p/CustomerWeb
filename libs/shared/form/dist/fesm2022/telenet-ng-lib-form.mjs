import * as i0 from '@angular/core';
import { Directive, Input, Injectable, EventEmitter, Component, ChangeDetectionStrategy, Optional, Output, ViewChild, Pipe, forwardRef, HostListener, inject, Inject, ViewChildren, Host, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormGroup, NgControl, NG_VALUE_ACCESSOR, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { forEach, floor, times, isEmpty, isNil, each, filter, groupBy } from 'lodash-es';
import { of, Subject } from 'rxjs';
import * as i1 from '@telenet/ng-lib-page';
import { LabelKeyType, CustomerCategoryEnum, LanguageEnum, ImageSrcPathModule } from '@telenet/ng-lib-page';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import * as i1$1 from '@angular/common';
import { DOCUMENT, CommonModule, DatePipe } from '@angular/common';
import * as i4 from 'ngx-slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as i3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import dayjs from 'dayjs';
import * as i5 from 'ngx-mask';
import { provideEnvironmentNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import * as i1$2 from '@telenet/ng-lib-datalayer';
import { DatalayerEventNames, EventTypes } from '@telenet/ng-lib-datalayer';
import * as i3$1 from '@angular/material/form-field';
import * as i4$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5$1 from '@angular/material/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import * as i4$2 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i5$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4$3 from 'ng-inline-svg-2';
import { InlineSVGConfig, InlineSVGModule } from 'ng-inline-svg-2';
import * as i1$3 from '@angular/common/http';
import { isDefined } from '@telenet/ng-lib-shared';
import * as i1$4 from '@telenet/ng-lib-omapi';

class RegexConstants {
    static FIXED_PHONE_NUMBER = /^[0-9]{8,9}$/;
    static BELGIAN_EID_NUMBER = /^[a-zA-Z0-9]{3}-\d{7}-\d{2}$/;
    static FOREIGN_EID_NUMBER_REGEX = /^[a-zA-Z0-9.-]{1,20}$/;
    static NATIONAL_REGISTRY_NUMBER = /^\d{2}.\d{2}.\d{2}-\d{3}.\d{2}$/;
    static DELIVERY_PHONE_NUMBER = /^(((0032|032|\+32|32)\d{8})|((0032|032|\+32|32)4\d{8})|((\+)(?!32)\d{7,15})|((0|00)(?!32)([1-9])\d{8})|((0|00)4\d{8})|(4\d{7,8})|(([1-9])\d{7}))$/;
    static TELENET_PHONE_NUMBER = /^(((0|0032|\+32)4\d{8})|((00|\+)(?!32)\d{7,12}))$/;
    static EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,25})$/i;
    static NETWORK_NAME = /([\^`,"'])/;
    static NO_START_SPACE_REGEX = /^\s/;
    static MAC_ADDRESS = /^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$/i;
    static NUMBER_ONLY_REGEX = '^[0-9]*$';
    static COMPANY_REGEX = /^([a-zA-Z0-9àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ\s.\-’']+)$/;
}

class AppointmentTransformerModel {
    slots;
}

var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["MOBILE"] = 0] = "MOBILE";
    ScreenType[ScreenType["DESKTOP"] = 1] = "DESKTOP";
})(ScreenType || (ScreenType = {}));

var LineEnum;
(function (LineEnum) {
    LineEnum["IDTV"] = "IDTV";
    LineEnum["INTERNET"] = "INTERNET";
    LineEnum["ANALOGTV"] = "ANALOGTV";
    LineEnum["PHONE"] = "PHONE";
})(LineEnum || (LineEnum = {}));

var TimeslotMomentEnum;
(function (TimeslotMomentEnum) {
    TimeslotMomentEnum[TimeslotMomentEnum["ALL_DAY"] = 0] = "ALL_DAY";
    TimeslotMomentEnum["DAY"] = "DAY";
    TimeslotMomentEnum["MORNING"] = "MORNING";
    TimeslotMomentEnum["LUNCH"] = "LUNCH";
    TimeslotMomentEnum["AFTERNOON"] = "AFTERNOON";
    TimeslotMomentEnum["EVENING"] = "EVENING";
})(TimeslotMomentEnum || (TimeslotMomentEnum = {}));
class TimeslotMoment {
    static DAY = {
        key: TimeslotMomentEnum.DAY,
        startHours: '08',
        startMinutes: '00',
        endHours: '18',
        endMinutes: '00',
    };
    static MORNING = {
        key: TimeslotMomentEnum.MORNING,
        startHours: '08',
        startMinutes: '00',
        endHours: '13',
        endMinutes: '00',
    };
    static LUNCH = {
        key: TimeslotMomentEnum.LUNCH,
        startHours: '10',
        startMinutes: '00',
        endHours: '14',
        endMinutes: '30',
    };
    static AFTERNOON = {
        key: TimeslotMomentEnum.AFTERNOON,
        startHours: '12',
        startMinutes: '30',
        endHours: '18',
        endMinutes: '00',
    };
    static EVENING = {
        key: TimeslotMomentEnum.EVENING,
        startHours: '17',
        startMinutes: '00',
        endHours: '20',
        endMinutes: '00',
    };
}

var TaxTypeEnum;
(function (TaxTypeEnum) {
    TaxTypeEnum["INCLUSIVE"] = "taxInclPrices";
    TaxTypeEnum["EXCLUSIVE"] = "taxExclPrices";
})(TaxTypeEnum || (TaxTypeEnum = {}));

class AppointmentTransformerSlot {
    date;
    timeSlots = [];
    isCustomMoment = false;
    hasAvailableMoments() {
        return this.timeSlots.some((slots) => {
            return slots.code;
        });
    }
    hasAvailableMoment(momentKey) {
        if (momentKey === TimeslotMomentEnum.ALL_DAY) {
            return this.hasAvailableMoments();
        }
        return this.timeSlots.some((slots) => {
            return slots.code === momentKey;
        });
    }
    getTimeslotMoment(momentKey) {
        return this.timeSlots
            .filter((slot) => slot.code === momentKey)
            .map((slot) => slot.timeslotMoment)
            .shift();
    }
}

class CafeTimeSlotList {
    firstDays;
    timeslots = [];
    firstAvailableSlotMonth;
    getFirstTimeslot() {
        const sortedTimeslots = [...this.timeslots].sort(this.compareTimeslot);
        return sortedTimeslots[0];
    }
    getLastTimeslot() {
        const sortedTimeslots = [...this.timeslots].sort(this.compareTimeslot);
        return sortedTimeslots[this.timeslots.length - 1];
    }
    compareTimeslot(timeslotA, timeslotB) {
        if (timeslotA.date > timeslotB.date) {
            return 1;
        }
        else if (timeslotA.date < timeslotB.date) {
            return -1;
        }
        return 0;
    }
}

var CallexcellResponseType;
(function (CallexcellResponseType) {
    CallexcellResponseType["SUCCESS_SCHEDULED"] = "success_scheduled";
    CallexcellResponseType["CALLBACK_EXISTS"] = "callback_exists";
    CallexcellResponseType["SUCCESS_IMMEDIATE"] = "success_immediate";
    CallexcellResponseType["FAILED"] = "failed";
})(CallexcellResponseType || (CallexcellResponseType = {}));

class CafeTimeSlot {
    date;
    moments = [];
    momentObjects = [];
    isCustomMoment = false;
    constructor(date, moments) {
        if (date) {
            this.date = date;
        }
        if (moments) {
            this.moments = moments;
        }
    }
    hasAvailableMoments() {
        return this.moments.length > 0;
    }
    hasAvailableMoment(momentKey) {
        if (momentKey === TimeslotMomentEnum.ALL_DAY) {
            return this.hasAvailableMoments();
        }
        return !!this.moments.find((moment) => {
            return moment === momentKey;
        });
    }
}

class CallexcellTimeslot extends CafeTimeSlot {
    momentObjects = [];
    isCustomMoment = true;
    constructor(date, moments, momentObjects) {
        super(date, moments);
        if (momentObjects) {
            this.momentObjects = momentObjects;
        }
    }
}

class InstallTypePriceModel {
    price;
    originalPrice;
    isPromo;
    constructor(price, promoPrice = null) {
        this.price = this.replaceCommaByDot(price);
        this.originalPrice = this.replaceCommaByDot(promoPrice);
        this.isPromo = !!promoPrice;
    }
    static installPriceWithPromo(priceAttributes) {
        return new InstallTypePriceModel(priceAttributes.oneTimeDiscounted, priceAttributes.oneTimeTotal);
    }
    static installPriceWithoutPromo(priceAttributes) {
        return new InstallTypePriceModel(priceAttributes.oneTimeDiscounted);
    }
    replaceCommaByDot(price) {
        return price?.replace(',', '.') || '';
    }
}

class InstallTypePriceTestFactory {
    static installPriceWithPromo(oneTimeTotal, oneTimeDiscounted) {
        const withPromo = {
            oneTimeTotal: oneTimeTotal,
            oneTimeDiscounted: oneTimeDiscounted,
        };
        return InstallTypePriceModel.installPriceWithPromo(withPromo);
    }
    static installPriceWithoutPromo(oneTimeDiscounted) {
        const withoutPromo = {
            oneTimeDiscounted: oneTimeDiscounted,
        };
        return InstallTypePriceModel.installPriceWithoutPromo(withoutPromo);
    }
}

class NCTimeSlot {
    date;
    timeSlots = [];
    hasAvailableMoments() {
        return this.timeSlots.some((slots) => {
            return slots.code;
        });
    }
    hasAvailableMoment(momentKey) {
        if (momentKey === TimeslotMomentEnum.ALL_DAY) {
            return this.hasAvailableMoments();
        }
        return this.timeSlots.some((slots) => {
            return slots.code === momentKey;
        });
    }
}

class NCTimeSlotAvailability {
    timeFormat;
    code;
    specUrl;
    availabilityId;
    productInfo;
}

class NCTimeSlotList {
    availabilities = [];
    isFtthAppointment;
    getFirstTimeslot() {
        const sortedTimeslots = [...this.availabilities].sort(this.compareTimeslot);
        return sortedTimeslots[0];
    }
    getLastTimeslot() {
        const sortedTimeslots = [...this.availabilities].sort(this.compareTimeslot);
        return sortedTimeslots[this.availabilities.length - 1];
    }
    compareTimeslot(timeslotA, timeslotB) {
        if (timeslotA.date > timeslotB.date) {
            return 1;
        }
        else if (timeslotA.date < timeslotB.date) {
            return -1;
        }
        return 0;
    }
}

var AppointmentPickerConsumerTypeEnum;
(function (AppointmentPickerConsumerTypeEnum) {
    AppointmentPickerConsumerTypeEnum["CAFE"] = "CAFE";
    AppointmentPickerConsumerTypeEnum["NC"] = "NC";
})(AppointmentPickerConsumerTypeEnum || (AppointmentPickerConsumerTypeEnum = {}));

class TimeslotUtil {
    static stringToEnum(moment) {
        switch (moment) {
            case 'MORNING':
                return TimeslotMomentEnum.MORNING;
            case 'LUNCH':
                return TimeslotMomentEnum.LUNCH;
            case 'AFTERNOON':
                return TimeslotMomentEnum.AFTERNOON;
            case 'EVENING':
                return TimeslotMomentEnum.EVENING;
            case 'DAY':
                return TimeslotMomentEnum.DAY;
            default:
                return undefined;
        }
    }
    static enumToString(moment) {
        switch (moment) {
            case TimeslotMomentEnum.MORNING:
                return 'MORNING';
            case TimeslotMomentEnum.LUNCH:
                return 'LUNCH';
            case TimeslotMomentEnum.AFTERNOON:
                return 'AFTERNOON';
            case TimeslotMomentEnum.EVENING:
                return 'EVENING';
            case TimeslotMomentEnum.DAY:
                return 'DAY';
            default:
                return undefined;
        }
    }
    static enumToMomentObject(moment) {
        if (!moment) {
            return undefined;
        }
        switch (moment) {
            case TimeslotMomentEnum.DAY:
                return TimeslotMoment.DAY;
            case TimeslotMomentEnum.MORNING:
                return TimeslotMoment.MORNING;
            case TimeslotMomentEnum.LUNCH:
                return TimeslotMoment.LUNCH;
            case TimeslotMomentEnum.AFTERNOON:
                return TimeslotMoment.AFTERNOON;
            case TimeslotMomentEnum.EVENING:
                return TimeslotMoment.EVENING;
            default:
                return undefined;
        }
    }
    static objectToEnum(moment) {
        switch (moment) {
            case TimeslotMoment.DAY:
                return TimeslotMomentEnum.DAY;
            case TimeslotMoment.MORNING:
                return TimeslotMomentEnum.MORNING;
            case TimeslotMoment.LUNCH:
                return TimeslotMomentEnum.LUNCH;
            case TimeslotMoment.AFTERNOON:
                return TimeslotMomentEnum.AFTERNOON;
            case TimeslotMoment.EVENING:
                return TimeslotMomentEnum.EVENING;
            default:
                return undefined;
        }
    }
    static calculateTimeSlotsAvailability(slots, disableNoAvailableSlots) {
        return of(disableNoAvailableSlots || slots.some((slot) => slot.timeSlots.length > 0));
    }
    static shouldUpdateTimeSlots(updateSlots, timeSlots) {
        return (updateSlots &&
            timeSlots[timeSlots.length - 1]?.date.getTime() !== updateSlots[updateSlots.length - 1]?.date.getTime());
    }
}

class AppointmentTransformerUtil {
    static doTransform(timeSlots, consumerType) {
        switch (consumerType) {
            case AppointmentPickerConsumerTypeEnum.CAFE:
                return this.doCafeTransform(timeSlots);
            case AppointmentPickerConsumerTypeEnum.NC:
                return this.doNCTransform(timeSlots);
        }
    }
    static doCafeTransform(cafeTimeSlots) {
        const appointmentTransformerModel = new AppointmentTransformerModel();
        appointmentTransformerModel.slots = [];
        forEach(cafeTimeSlots, (cafeTimeSlot) => {
            if (cafeTimeSlot) {
                appointmentTransformerModel.slots.push(this.getCafeTransformedAvailability(cafeTimeSlot));
            }
        });
        return appointmentTransformerModel;
    }
    static getCafeTransformedAvailability(timeSlot) {
        const appointmentTransformedSlot = new AppointmentTransformerSlot();
        appointmentTransformedSlot.timeSlots = [];
        const cafeTimeSlot = timeSlot;
        const isCustomMoment = cafeTimeSlot.isCustomMoment;
        if (cafeTimeSlot.date) {
            appointmentTransformedSlot.date = cafeTimeSlot.date;
        }
        if (cafeTimeSlot.moments) {
            forEach(cafeTimeSlot.moments, (availability) => {
                appointmentTransformedSlot.timeSlots.push(this.getCafeAvailability(false, availability));
            });
        }
        if (isCustomMoment && cafeTimeSlot.momentObjects) {
            appointmentTransformedSlot.isCustomMoment = true;
            appointmentTransformedSlot.timeSlots = cafeTimeSlot.momentObjects.map((timeslotMoment) => this.getCafeAvailability(true, timeslotMoment.key, timeslotMoment));
        }
        return appointmentTransformedSlot;
    }
    static getCafeAvailability(isCustomMoment, timeslotKey, timeslotMoment) {
        const timeslotMomentObj = isCustomMoment ? timeslotMoment : TimeslotUtil.enumToMomentObject(timeslotKey);
        return { code: timeslotKey, timeslotMoment: timeslotMomentObj };
    }
    static doNCTransform(timeSlots) {
        const transformerModel = new AppointmentTransformerModel();
        transformerModel.slots = [];
        forEach(timeSlots, (timeSlot) => {
            if (timeSlot && timeSlot instanceof NCTimeSlot) {
                transformerModel.slots.push(this.getNCTransformedAvailability(timeSlot));
            }
        });
        return transformerModel;
    }
    static getNCTransformedAvailability(timeSlot) {
        const appointmentTransformedSlot = new AppointmentTransformerSlot();
        appointmentTransformedSlot.timeSlots = [];
        if (timeSlot.date) {
            appointmentTransformedSlot.date = timeSlot.date;
        }
        if (timeSlot instanceof NCTimeSlot && timeSlot.timeSlots) {
            forEach(timeSlot.timeSlots, (nCTimeSlotAvailability) => {
                appointmentTransformedSlot.timeSlots.push(this.getNCAvailability(nCTimeSlotAvailability));
            });
        }
        return appointmentTransformedSlot;
    }
    static getNCAvailability(nCTimeSlotAvailability) {
        const transformedAvailability = {};
        transformedAvailability.specUrl = nCTimeSlotAvailability.specUrl;
        transformedAvailability.code = nCTimeSlotAvailability.code;
        transformedAvailability.availabiltyId = nCTimeSlotAvailability.availabilityId;
        transformedAvailability.timeFormat = nCTimeSlotAvailability.timeFormat;
        transformedAvailability.productInfo = nCTimeSlotAvailability.productInfo;
        return transformedAvailability;
    }
}

class LabelUtil {
    static LABEL_PREFIX = 'ng';
    static getLabelKeyWithTypeLabel(key) {
        return this.parseKey(key, LabelKeyType.LABEL);
    }
    static getLabelKeyWithTypeTitle(key) {
        return this.parseKey(key, LabelKeyType.TITLE);
    }
    static getLabelKeyWithTypePlaceholder(key) {
        return this.parseKey(key, LabelKeyType.PLACEHOLDER);
    }
    static getLabelKeyWithTypeText(key) {
        return this.parseKey(key, LabelKeyType.TXT);
    }
    static getLabelKeyWithTypeError(key) {
        return this.parseKey(key, LabelKeyType.ERROR);
    }
    static getLabelKeyWithTypeButton(key) {
        return this.parseKey(key, LabelKeyType.BUTTON);
    }
    static getLabelKeyWithTypeTooltip(key) {
        return this.parseKey(key, LabelKeyType.TOOLTIP);
    }
    static getLabelKeyByType(key, type) {
        return this.parseKey(key, type);
    }
    static normalizeKey(key) {
        return key
            .replace(/ /g, '-')
            .replace(/_/g, '-')
            .replace(/[^.0-9a-zA-Z_-]/g, '')
            .toLowerCase();
    }
    static parseKey(key, labelKeyType) {
        if (Array.isArray(key)) {
            return this.joinKeys([this.LABEL_PREFIX, this.joinKeys(key), labelKeyType]);
        }
        return this.joinKeys([this.LABEL_PREFIX, key, labelKeyType]);
    }
    static joinKeys(values) {
        return values.join('.');
    }
}

const extractFormDetails = (control) => {
    if (!(control instanceof FormGroup)) {
        return {
            _value: control?.value,
            _touched: control?.touched,
            _valid: control?.valid,
            _dirty: control?.dirty,
            _errors: control?.errors,
            _enabled: control?.enabled,
        };
    }
    const details = {};
    Object.keys(control.controls).forEach((key) => {
        details[key] = extractFormDetails(control.controls[key]);
    });
    return details;
};

class FormDirective {
    messageGroup;
    static ɵfac = function FormDirective_Factory(t) { return new (t || FormDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FormDirective, selectors: [["form"]], inputs: { messageGroup: "messageGroup" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormDirective, [{
        type: Directive,
        args: [{
                selector: 'form',
            }]
    }], null, { messageGroup: [{
            type: Input
        }] }); })();

class FormErrorService {
    submit$ = new Subject();
    reset$ = new Subject();
    static ɵfac = function FormErrorService_Factory(t) { return new (t || FormErrorService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormErrorService, factory: FormErrorService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormErrorService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

class MessageGroupDirective {
    messageGroup;
    static ɵfac = function MessageGroupDirective_Factory(t) { return new (t || MessageGroupDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MessageGroupDirective, selectors: [["", "messageGroup", ""]], inputs: { messageGroup: "messageGroup" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageGroupDirective, [{
        type: Directive,
        args: [{
                selector: '[messageGroup]',
            }]
    }], null, { messageGroup: [{
            type: Input
        }] }); })();

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let InputAbstractComponent = class InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    valueChangesSubscription$;
    formSubscription$;
    messageGroup = '';
    labelPrefix;
    error = undefined;
    formControlName;
    trackingEvent = new EventEmitter();
    key;
    control;
    constructor(languageService, formService, messageGroupDirective, injector) {
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    ngOnInit() {
        this.control = this.injector?.get(NgControl);
        this.key = this.formControlName;
        this.initMessageGroup();
    }
    ngAfterViewInit() {
        this.valueChangesSubscription$ = this.control?.valueChanges?.pipe(untilDestroyed(this)).subscribe(() => {
            this.setError(this.control.errors);
        });
        this.formSubscription$ = this.formService.submit$.pipe(untilDestroyed(this)).subscribe(() => {
            this.setError(this.control.errors);
        });
    }
    initMessageGroup() {
        if (!this.messageGroup && this.messageGroupDirective && this.messageGroupDirective.messageGroup) {
            this.messageGroup = this.messageGroupDirective.messageGroup;
        }
    }
    getLabel(customLabel) {
        return LabelUtil.getLabelKeyWithTypeLabel(this.generateLabelKey(customLabel));
    }
    getTooltip(customLabel) {
        return LabelUtil.getLabelKeyWithTypeTooltip(this.generateLabelKey(customLabel));
    }
    setError(value) {
        if (value) {
            this.error = Object.keys(value)[0];
        }
        else {
            this.error = undefined;
        }
    }
    getPlaceholder(customLabel) {
        return LabelUtil.getLabelKeyWithTypePlaceholder(this.generateLabelKey(customLabel));
    }
    registerOnChange(_) {
        // empty implementation
    }
    registerOnTouched(_fn) {
        // empty implementation
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    writeValue(_obj) {
        // empty implementation
    }
    getText() {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        keyList.push(this.formControlName.toString().toLowerCase());
        keyList.push(this.error?.toString()?.toLowerCase());
        return LabelUtil.getLabelKeyWithTypeError(keyList.join('.'));
    }
    generateLabelKey(customLabel) {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        if (customLabel) {
            keyList.push(this.camelCaseToKebapCase(customLabel));
        }
        else {
            keyList.push(this.camelCaseToKebapCase(this.key || this.formControlName));
        }
        return keyList.join('.');
    }
    camelCaseToKebapCase(input) {
        return input
            ? input
                .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
                .toLowerCase()
            : '';
    }
    static ɵfac = function InputAbstractComponent_Factory(t) { return new (t || InputAbstractComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAbstractComponent, selectors: [["input-abstract-component"]], inputs: { messageGroup: "messageGroup", labelPrefix: "labelPrefix", error: "error", formControlName: "formControlName" }, outputs: { trackingEvent: "trackingEvent" }, decls: 0, vars: 0, template: function InputAbstractComponent_Template(rf, ctx) { }, encapsulation: 2 });
};
InputAbstractComponent = __decorate$4([
    UntilDestroy()
], InputAbstractComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAbstractComponent, [{
        type: Component,
        args: [{
                selector: 'input-abstract-component',
                template: '',
                changeDetection: ChangeDetectionStrategy.Default,
            }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { messageGroup: [{
            type: Input
        }], labelPrefix: [{
            type: Input
        }], error: [{
            type: Input
        }], formControlName: [{
            type: Input
        }], trackingEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAbstractComponent, { className: "InputAbstractComponent" }); })();

var AppointmentPickerTypeEnum;
(function (AppointmentPickerTypeEnum) {
    AppointmentPickerTypeEnum[AppointmentPickerTypeEnum["BY_DATE"] = 0] = "BY_DATE";
    AppointmentPickerTypeEnum[AppointmentPickerTypeEnum["BY_MOMENT"] = 1] = "BY_MOMENT";
    AppointmentPickerTypeEnum[AppointmentPickerTypeEnum["BY_TIME"] = 2] = "BY_TIME";
})(AppointmentPickerTypeEnum || (AppointmentPickerTypeEnum = {}));

class AppointmentSlotOption {
    date;
    moment;
    slots;
    constructor(date, moment) {
        this.date = date;
        this.moment = moment;
    }
}

class AbstractAppointmentPickerByTemporalComponent {
    setSelectedAppointmentMoment(moment) {
        this.getComponent().selectedAppointmentMoment = moment;
        this.setInputValue();
    }
    hasError(errorString) {
        return this.getComponent().error === errorString;
    }
    setInputValue() {
        this.getComponent().appointmentSlotSelected.emit(this.getSelectedAppointment());
    }
    loadMoreSlots(loadPreviousSlots) {
        this.getComponent().loadMore.emit(loadPreviousSlots);
    }
    scrollToSection(section) {
        this.getComponent().scrollTo.emit(section);
    }
    setLabels(labelKeys) {
        this.setDatePickerLabel([...labelKeys, 'date-picker']);
        this.setDateMomentLabel([...labelKeys, 'moment-picker']);
        this.setDatePickerErrorLabel([...labelKeys, 'date-picker-error']);
        this.setDateMomentErrorLabel([...labelKeys, 'moment-picker-error']);
    }
    setDatePickerLabel(labelKeys) {
        this.getComponent().datePickerLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
    }
    setDateMomentLabel(labelKeys) {
        this.getComponent().momentPickerLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
    }
    setDatePickerErrorLabel(labelKeys) {
        this.getComponent().datePickerErrorLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
    }
    setDateMomentErrorLabel(labelKeys) {
        this.getComponent().momentPickerErrorLabel = LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
    }
}

const _c0$m = a0 => ({ "button--disabled": a0 });
class NoAvailableAppointmentDateComponent {
    languageService;
    loadMoreSlots = new EventEmitter();
    messageGroup;
    disableLoadMore;
    constructor(languageService) {
        this.languageService = languageService;
    }
    loadSlots() {
        this.loadMoreSlots.emit();
    }
    static ɵfac = function NoAvailableAppointmentDateComponent_Factory(t) { return new (t || NoAvailableAppointmentDateComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoAvailableAppointmentDateComponent, selectors: [["app-no-available-appointment-date"]], inputs: { messageGroup: "messageGroup", disableLoadMore: "disableLoadMore" }, outputs: { loadMoreSlots: "loadMoreSlots" }, decls: 8, vars: 9, consts: [[1, "Container", "text-align--center", "px--xxs", "px--l--sm", "py--xxl", "background-shade_08", "border--all--r", "border-width--all--r", "border-style--all--solid", "border-color--all--shade_24"], [1, "mb--xxs"], [1, "button", "button--secondary", "width--full", "width--auto--sm", 3, "ngClass", "click"]], template: function NoAvailableAppointmentDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵlistener("click", function NoAvailableAppointmentDateComponent_Template_div_click_4_listener() { return ctx.loadSlots(); });
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, "ng." + ctx.messageGroup + ".unavailable-timeslots.lbl"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$m, ctx.disableLoadMore));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 5, "ng." + ctx.messageGroup + ".load-more-timeslots.lbl"));
        } }, dependencies: [i1$1.NgClass, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoAvailableAppointmentDateComponent, [{
        type: Component,
        args: [{ selector: 'app-no-available-appointment-date', template: "<div\n  class=\"Container text-align--center px--xxs px--l--sm py--xxl background-shade_08 border--all--r border-width--all--r border-style--all--solid border-color--all--shade_24\">\n  <p class=\"mb--xxs\">{{'ng.' + messageGroup + '.unavailable-timeslots.lbl' | translate}}</p>\n  <div\n    class=\"button button--secondary width--full width--auto--sm\"\n    [ngClass]=\"{'button--disabled' : disableLoadMore}\"\n    (click)=\"loadSlots()\">\n    <span>{{'ng.' + messageGroup + '.load-more-timeslots.lbl' | translate}}</span>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }], { loadMoreSlots: [{
            type: Output
        }], messageGroup: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NoAvailableAppointmentDateComponent, { className: "NoAvailableAppointmentDateComponent" }); })();

const _c0$l = ["slickModal"];
function InputAppointmentDatePickerComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 6);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "i", 22)(2, "i", 23)(3, "i", 24)(4, "i", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const appointmentSlot_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.MORNING));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.LUNCH));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.AFTERNOON));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r12.hasAvailableMoment(ctx_r14.appointmentMomentEnum.EVENING));
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelement(2, "input", 12);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementStart(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "label", 16);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const appointmentSlot_r12 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r16.selectInstallSlotDay(appointmentSlot_r12)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 17);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 18);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_div_14_Template, 5, 8, "div", 19);
    i0.ɵɵelementStart(15, "div", 20);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵattribute("style", ctx_r11.consumerType === ctx_r11.consumerTypeEnum.NC ? ctx_r11.getSlideUpAnimationStyling(0) : ctx_r11.getSlideUpAnimationStyling(i_r13), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind2(3, 13, appointmentSlot_r12.date, "ddmm"));
    i0.ɵɵpropertyInterpolate1("id", "day-", i_r13, "");
    i0.ɵɵproperty("disabled", ctx_r11.isDisabled(appointmentSlot_r12))("checked", appointmentSlot_r12 === ctx_r11.selectedTimeslot);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r11.isDisabled(appointmentSlot_r12));
    i0.ɵɵattribute("data-cy", "appointment-date-picker-" + i_r13);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "day-", i_r13, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 16, appointmentSlot_r12.date, "EEEE"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(13, 19, appointmentSlot_r12.date, "dd"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.shouldRenderMoment());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(17, 22, appointmentSlot_r12.date, "MMMM yyyy"), " ");
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_ng_container_1_Template, 18, 25, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r9.timeslots);
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 26);
    i0.ɵɵlistener("ngSubmit", function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r18.loadMoreSlots()); });
    i0.ɵɵelement(1, "button", 27);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r10.disableLoadMore);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, "ng.sales-checkout.appointment.date-loadmore.lbl"), i0.ɵɵsanitizeHtml);
} }
function InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-slick-carousel", 7, 8);
    i0.ɵɵtemplate(2, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_ng_container_2_Template, 2, 1, "ng-container", 0)(3, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_form_3_Template, 3, 5, "form", 9);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r7.slideConfig);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r7.reRender);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r7.showLoadMore && !ctx_r7.reRender && i0.ɵɵpipeBind1(4, 3, ctx_r7.appointmentsAvailable$));
} }
function InputAppointmentDatePickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h6", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, InputAppointmentDatePickerComponent_ng_container_0_ng_container_4_Template, 1, 1, "ng-container", 4);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, InputAppointmentDatePickerComponent_ng_container_0_ngx_slick_carousel_6_Template, 5, 5, "ngx-slick-carousel", 5);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.datePickerLabel));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(5, 5, ctx_r0.appointmentsAvailable$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 7, ctx_r0.appointmentsAvailable$));
} }
const _c1$e = a0 => ({ "disableLoadMore": a0 });
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 36);
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1$e, ctx_r20.disableNext));
} }
const _c2$5 = (a0, a1) => ({ appointmentSlot: a0, i: a1 });
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2$5, appointmentSlot_r25, i_r26));
} }
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r23 = i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2$5, appointmentSlot_r27, i_r28 + ctx_r23.noOfAppointmentSlotsPerPage / 2));
} }
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r24 = i0.ɵɵnextContext(3);
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2$5, appointmentSlot_r29, i_r30 + ctx_r24.noOfAppointmentSlotsPerPage));
} }
function InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37)(2, "div", 38)(3, "div", 39);
    i0.ɵɵtemplate(4, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_4_Template, 2, 5, "ng-container", 10);
    i0.ɵɵpipe(5, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 38)(7, "div", 39);
    i0.ɵɵtemplate(8, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_8_Template, 2, 5, "ng-container", 10);
    i0.ɵɵpipe(9, "slice");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 40)(11, "div", 41)(12, "div", 42);
    i0.ɵɵtemplate(13, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_ng_container_13_Template, 2, 5, "ng-container", 10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("style", ctx_r21.consumerType === ctx_r21.consumerTypeEnum.NC ? ctx_r21.getSlideUpAnimationStyling(0) : ctx_r21.getSlideUpAnimationStyling(0), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(5, 6, ctx_r21.currentSlots, 0, ctx_r21.noOfAppointmentSlotsPerPage / 2));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("style", ctx_r21.consumerType === ctx_r21.consumerTypeEnum.NC ? ctx_r21.getSlideUpAnimationStyling(0) : ctx_r21.getSlideUpAnimationStyling(1), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(9, 10, ctx_r21.currentSlots, ctx_r21.noOfAppointmentSlotsPerPage / 2, ctx_r21.noOfAppointmentSlotsPerPage));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("style", ctx_r21.consumerType === ctx_r21.consumerTypeEnum.NC ? ctx_r21.getSlideUpAnimationStyling(0) : ctx_r21.getSlideUpAnimationStyling(0), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r21.currentSlots);
} }
const _c3$1 = a0 => ({ "disabled": a0 });
function InputAppointmentDatePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28)(2, "h6", 3);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 29)(6, "a", 30);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.loadPreviousSlots()); });
    i0.ɵɵelement(7, "i", 31);
    i0.ɵɵelementStart(8, "span", 32);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "a", 33);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_container_1_Template_a_click_11_listener() { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.loadMoreSlots()); });
    i0.ɵɵelement(12, "i", 34);
    i0.ɵɵelementStart(13, "span", 32);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(16, "div");
    i0.ɵɵtemplate(17, InputAppointmentDatePickerComponent_ng_container_1_ng_container_17_Template, 1, 4, "ng-container", 35);
    i0.ɵɵpipe(18, "async");
    i0.ɵɵtemplate(19, InputAppointmentDatePickerComponent_ng_container_1_ng_container_19_Template, 14, 14, "ng-container", 0);
    i0.ɵɵpipe(20, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 7, ctx_r1.datePickerLabel));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c3$1, ctx_r1.disablePrevious));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, "ng.sales-checkout.appointment.previous.button"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(19, _c3$1, ctx_r1.disableNext));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 11, "ng.sales-checkout.appointment.next.button"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(18, 13, ctx_r1.appointmentsAvailable$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.reRender && i0.ɵɵpipeBind1(20, 15, ctx_r1.appointmentsAvailable$));
} }
function InputAppointmentDatePickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 43)(1, "label", 44);
    i0.ɵɵlistener("click", function InputAppointmentDatePickerComponent_ng_template_2_Template_label_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r37); const appointmentSlot_r34 = restoredCtx.appointmentSlot; const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.selectInstallSlotDay(appointmentSlot_r34)); });
    i0.ɵɵelement(2, "input", 45);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementStart(4, "div", 46)(5, "div", 47)(6, "div", 48)(7, "div", 49);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "titlecase");
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 50);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 51);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const appointmentSlot_r34 = ctx.appointmentSlot;
    const i_r35 = ctx.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "day-", i_r35, "");
    i0.ɵɵattribute("data-cy", "appointment-date-" + i_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind2(3, 9, appointmentSlot_r34.date, "ddmm"));
    i0.ɵɵpropertyInterpolate1("id", "day-", i_r35, "");
    i0.ɵɵproperty("checked", appointmentSlot_r34 === ctx_r2.selectedTimeslot)("disabled", ctx_r2.isDisabled(appointmentSlot_r34));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 12, i0.ɵɵpipeBind2(10, 14, appointmentSlot_r34.date, "EEEE")));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 17, appointmentSlot_r34.date, "dd/MM"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 20, appointmentSlot_r34.date, "dd/MM"));
} }
function InputAppointmentDatePickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 52);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentDatePickerComponent_ng_template_4_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r39.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const disableLoadMore_r38 = ctx.disableLoadMore;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r4.messageGroup)("disableLoadMore", disableLoadMore_r38);
} }
class InputAppointmentDatePickerComponent {
    languageService;
    cdr;
    messageGroup;
    startDate = new Date();
    endDate;
    timeslots;
    selectedTimeslot;
    momentFilter;
    initialSlide = 0;
    slidesToScroll;
    slidesToShow;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    enableAppointmentsUI;
    appointmentPickerType;
    isDeviceLandscape;
    datePickerLabel;
    appointmentSelected = new EventEmitter();
    loadMore = new EventEmitter();
    scrollTo = new EventEmitter();
    slickModal;
    appointmentsAvailable$;
    currentSlots;
    reRender = false;
    noOfAppointmentSlotsPerPage = 14;
    appointmentMomentEnum = TimeslotMomentEnum;
    disablePrevious = true;
    disableNext = false;
    startDateToDisableNext;
    currentDate = new Date();
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    slideConfig = {
        infinite: false,
        initialSlide: 0,
        mobileFirst: true,
        arrows: true,
        nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
        prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 6,
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                },
            },
        ],
    };
    constructor(languageService, cdr) {
        this.languageService = languageService;
        this.cdr = cdr;
    }
    selectInstallSlotDay(appointmentSlot) {
        if (appointmentSlot.hasAvailableMoments() &&
            (this.momentFilter ? appointmentSlot.hasAvailableMoment(this.momentFilter) : true)) {
            this.selectedTimeslot = appointmentSlot;
            this.appointmentSelected.emit(appointmentSlot);
            this.scrollTo.emit(AppointmentPickerTypeEnum.BY_MOMENT);
        }
    }
    isDisabled(appointmentSlot) {
        return (!appointmentSlot.hasAvailableMoments() ||
            (this.momentFilter ? !appointmentSlot.hasAvailableMoment(this.momentFilter) : false));
    }
    ngOnInit() {
        this.slideConfig.slidesToScroll = this.slidesToScroll ? this.slidesToScroll : this.slideConfig.slidesToScroll;
        this.slideConfig.slidesToShow = this.slidesToShow ? this.slidesToShow : this.slideConfig.slidesToShow;
        this.scrollToSelectedSlides();
        if (this.enableAppointmentsUI) {
            this.currentSlots = this.updateSlots?.length > 0 ? this.updateSlots : this.timeslots;
        }
    }
    scrollToSelectedSlides() {
        if (this.selectedTimeslot) {
            const selectedSlotIndex = this.timeslots.findIndex((slot) => {
                return slot.date.getTime() === this.selectedTimeslot?.date.getTime();
            });
            if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
                this.slideConfig.initialSlide = this.findInitialSlideForNC(selectedSlotIndex);
            }
            else {
                this.slideConfig.initialSlide = selectedSlotIndex;
            }
        }
    }
    findInitialSlideForNC(slotIndex) {
        return floor(slotIndex / this.slideConfig.slidesToScroll) * this.slideConfig.slidesToScroll;
    }
    shouldRenderMoment() {
        return !(this.consumerType === AppointmentPickerConsumerTypeEnum.NC &&
            this.appointmentPickerType === AppointmentPickerTypeEnum.BY_MOMENT);
    }
    getSlideUpAnimationStyling(index) {
        return '--animation-delay: ' + index;
    }
    ngOnChanges(changes) {
        if (changes?.['momentFilter']) {
            if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC && !this.selectedTimeslot) {
                this.slideConfig.initialSlide = 0;
            }
            this.reRender = true;
            setTimeout(() => (this.reRender = false));
        }
        if (changes?.['showLoadMore']) {
            this.showLoadMore = changes['showLoadMore'].currentValue;
        }
        this.handleUpdateTimeSlots(changes);
        if (changes?.['isDeviceLandscape'] && this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
            this.configSlideConfig();
            this.reRender = true;
            setTimeout(() => {
                this.reRender = false;
                this.scrollToSelectedSlides();
            });
        }
    }
    handleUpdateTimeSlots(changes) {
        if (changes?.['updateSlots']?.currentValue) {
            if (this.enableAppointmentsUI) {
                this.currentSlots = changes['updateSlots']?.currentValue;
                this.disablePrevious =
                    undefined !==
                        this.currentSlots.find((timeSlot) => timeSlot.date.toDateString() === this.currentDate.toDateString());
                this.handleNextButtonDisable();
            }
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(changes['updateSlots']?.currentValue);
            if (TimeslotUtil.shouldUpdateTimeSlots(this.updateSlots, this.timeslots)) {
                this.reRender = true;
                this.timeslots = this.timeslots.concat(changes['updateSlots'].currentValue);
                this.reRender = false;
                this.cdr.detectChanges();
                if (!this.enableAppointmentsUI) {
                    this.slickModal.slickGoTo(this.timeslots.length - this.updateSlots.length);
                }
            }
        }
    }
    configSlideConfig() {
        if (this.isDeviceLandscape) {
            this.slideConfig.arrows = true;
            this.slideConfig.slidesToScroll = 4;
            this.slideConfig.slidesToShow = this.slidesToShow ? this.slidesToShow : 1;
        }
        else {
            this.slideConfig.arrows = false;
            this.slideConfig.slidesToScroll = 2;
            this.slideConfig.slidesToShow = 2;
        }
    }
    loadMoreSlots() {
        this.loadMore.emit();
        if (this.enableAppointmentsUI) {
            this.appointmentSelected.emit(undefined);
            this.disablePrevious = false;
            this.handleNextButtonDisable();
        }
    }
    handleNextButtonDisable() {
        this.disableNext = this.startDate >= this.endDate;
    }
    loadPreviousSlots() {
        this.loadMore.emit(true);
        this.disableNext = false;
        this.appointmentSelected.emit(undefined);
    }
    static ɵfac = function InputAppointmentDatePickerComponent_Factory(t) { return new (t || InputAppointmentDatePickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentDatePickerComponent, selectors: [["app-form-appointment-date-picker"]], viewQuery: function InputAppointmentDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$l, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slickModal = _t.first);
        } }, inputs: { messageGroup: "messageGroup", startDate: "startDate", endDate: "endDate", timeslots: "timeslots", selectedTimeslot: "selectedTimeslot", momentFilter: "momentFilter", initialSlide: "initialSlide", slidesToScroll: "slidesToScroll", slidesToShow: "slidesToShow", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", enableAppointmentsUI: "enableAppointmentsUI", appointmentPickerType: "appointmentPickerType", isDeviceLandscape: "isDeviceLandscape", datePickerLabel: "datePickerLabel" }, outputs: { appointmentSelected: "appointmentSelected", loadMore: "loadMore", scrollTo: "scrollTo" }, features: [i0.ɵɵNgOnChangesFeature], decls: 6, vars: 2, consts: [[4, "ngIf"], ["slides", ""], ["noAppointmentSlots", ""], [1, "text-flow", "text-flow--h3", "section__title", "text-align--left"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "label-modifier-box slick-slider card-date card-date-with-value", 3, "config", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "label-modifier-box", "slick-slider", "card-date", "card-date-with-value", 3, "config"], ["slickModal", "slick-carousel"], [3, "ngSubmit", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "label-modifier-slot", "slick-slide", "animation-show-slide-up"], ["type", "radio", "name", "day", 1, "label-modifier-radio", 3, "value", "id", "disabled", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "text-flow", "text-flow--label", "label-modifier-content__header"], [1, "text-flow", "text-flow--body", "label-modifier-content__body"], ["class", "text-flow text-flow--label label-modifier-content__timing", 4, "ngIf"], [1, "text-flow", "text-flow--label", "label-modifier-content__footer"], [1, "text-flow", "text-flow--label", "label-modifier-content__timing"], [1, "icon", "icon-sunrise"], [1, "icon", "icon-sun"], [1, "icon", "icon-sun-half-semifilled"], [1, "icon", "icon-moon"], [3, "ngSubmit"], [1, "button", "button--secondary", "mt-50", 3, "innerHTML"], [1, "display--flex", "justify-content--between", "ng-star-inserted", "align-items--center--md", "flex-direction--row--md", "flex-direction--column", "mt--m"], [1, "display--flex", "justify-content--between", "justify-content--end--md", "mb--m", "mb--n--md"], ["href", "javascript:void(0)", 1, "link", "link--with-icon", "mr--l", 3, "ngClass", "click"], [1, "icon", "icon-chevron-left"], [1, "text-flow", "text-flow--button"], ["href", "javascript:void(0)", 1, "link", "link--with-icon", 3, "ngClass", "click"], [1, "icon", "icon-chevron-right", "icon--after"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hide-until-md", "col-12"], [1, "display--flex"], [1, "select-tile--group", "display--grid", "grid-template-column--3", "grid-template-column--7--md", "gap--m", "mb--m", "col-12"], [1, "hide-from-md"], [1, "display--grid"], [1, "select-tile--group", "display--grid", "grid-template-column--3", "grid-template-column--7--md", "gap--xxs", "mb--xxs"], [1, "animation-show-slide-up"], [1, "select-tile", "position--relative", "display--flex", "align-items--start", "gap--m", "gap--l--sm", "color-text", "p--m", "p--xs--sm", "p--l--lg", "m--n", "background-white", 3, "for", "click"], ["type", "radio", "name", "day", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--body-regular", "hidden-input-box", "cursor--pointer", 3, "value", "id", "checked", "disabled"], [1, "select-tile__content", "display--flex", "flex-direction--column", "align-self--stretch", "flex-grow"], [1, "select-tile__content--inner", "display--flex", "gap--xm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "align-items--center"], [1, "font--caption", "mb--xxs"], [1, "text-flow", "text-flow--h5", "hide-until-md"], [1, "text-flow", "text-flow--h6", "hide-from-md"], [3, "messageGroup", "disableLoadMore", "loadMoreSlots"]], template: function InputAppointmentDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputAppointmentDatePickerComponent_ng_container_0_Template, 8, 9, "ng-container", 0)(1, InputAppointmentDatePickerComponent_ng_container_1_Template, 21, 21, "ng-container", 0)(2, InputAppointmentDatePickerComponent_ng_template_2_Template, 17, 23, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, InputAppointmentDatePickerComponent_ng_template_4_Template, 1, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.enableAppointmentsUI);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.enableAppointmentsUI);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i1$1.NgTemplateOutlet, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i4.SlickCarouselComponent, i4.SlickItemDirective, FormDirective, MessageGroupDirective, NoAvailableAppointmentDateComponent, i1$1.AsyncPipe, i1$1.SlicePipe, i1$1.TitleCasePipe, i1$1.DatePipe, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-date-picker', template: "<ng-container *ngIf=\"!enableAppointmentsUI\">\n  <h6 class=\"text-flow text-flow--h3 section__title text-align--left\">{{ datePickerLabel | translate }}</h6>\n  <ng-container *ngIf=\"!(appointmentsAvailable$ | async)\" [ngTemplateOutlet]=\"noAppointmentSlots\"></ng-container>\n  <ngx-slick-carousel\n    *ngIf=\"(appointmentsAvailable$ | async)\"\n    class=\"label-modifier-box slick-slider card-date card-date-with-value\"\n    #slickModal=\"slick-carousel\"\n    [config]=\"slideConfig\">\n    <ng-container *ngIf=\"!reRender\">\n      <ng-container *ngFor=\"let appointmentSlot of timeslots; let i = index\">\n        <div\n          ngxSlickItem\n          class=\"label-modifier-slot slick-slide animation-show-slide-up\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(i)\">\n          <input\n            type=\"radio\"\n            name=\"day\"\n            value=\"{{ appointmentSlot.date | date:'ddmm' }}\"\n            id=\"day-{{ i }}\"\n            class=\"label-modifier-radio\"\n            [disabled]=\"isDisabled(appointmentSlot)\"\n            [checked]=\"appointmentSlot === selectedTimeslot\" />\n          <div\n            [attr.data-cy]=\"'appointment-date-picker-'+i\"\n            class=\"label-modifier--append label-modifier--container cursor--pointer\"\n            [class.disabled]=\"isDisabled(appointmentSlot)\">\n            <div class=\"label-modifier--body\">\n              <div class=\"label-modifier--body--inner-container\">\n                <label\n                  for=\"day-{{ i }}\"\n                  class=\"label-modifier-radio__label\"\n                  (click)=\"selectInstallSlotDay(appointmentSlot)\"></label>\n                <div class=\"text-flow text-flow--label label-modifier-content__header\">\n                  {{ appointmentSlot.date | date:'EEEE' }}\n                </div>\n                <div class=\"text-flow text-flow--body label-modifier-content__body\">\n                  {{ appointmentSlot.date | date:'dd' }}\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__timing\" *ngIf=\"shouldRenderMoment()\">\n                  <i\n                    class=\"icon icon-sunrise\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.MORNING)\"></i>\n                  <i\n                    class=\"icon icon-sun\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.LUNCH)\"></i>\n                  <i\n                    class=\"icon icon-sun-half-semifilled\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.AFTERNOON)\"></i>\n                  <i\n                    class=\"icon icon-moon\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.EVENING)\"></i>\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__footer\">\n                  {{ appointmentSlot.date | date:'MMMM yyyy' }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <form (ngSubmit)=\"loadMoreSlots()\" *ngIf=\"showLoadMore && !reRender && (appointmentsAvailable$ | async)\">\n      <button\n        class=\"button button--secondary mt-50\"\n        [class.disabled]=\"disableLoadMore\"\n        [innerHTML]=\"'ng.sales-checkout.appointment.date-loadmore.lbl' | translate\"></button>\n    </form>\n  </ngx-slick-carousel>\n</ng-container>\n\n<ng-container *ngIf=\"enableAppointmentsUI\">\n  <div\n    class=\"display--flex justify-content--between ng-star-inserted align-items--center--md flex-direction--row--md flex-direction--column mt--m\">\n    <h6 class=\"text-flow text-flow--h3 section__title text-align--left\">{{ datePickerLabel | translate }}</h6>\n    <div class=\"display--flex justify-content--between justify-content--end--md mb--m mb--n--md\">\n      <a\n        href=\"javascript:void(0)\"\n        (click)=\"loadPreviousSlots()\"\n        class=\"link link--with-icon mr--l\"\n        [ngClass]=\"{\n            'disabled' : disablePrevious\n          }\"\n        ><i class=\"icon icon-chevron-left\"></i\n        ><span class=\"text-flow text-flow--button\"\n          >{{'ng.sales-checkout.appointment.previous.button' | translate}}</span\n        ></a\n      >\n      <a\n        href=\"javascript:void(0)\"\n        (click)=\"loadMoreSlots()\"\n        class=\"link link--with-icon\"\n        [ngClass]=\"{\n            'disabled' : disableNext\n          }\"\n        ><i class=\"icon icon-chevron-right icon--after\"></i\n        ><span class=\"text-flow text-flow--button\">{{'ng.sales-checkout.appointment.next.button' | translate}}</span></a\n      >\n    </div>\n  </div>\n  <div>\n    <ng-container\n      *ngIf=\"!(appointmentsAvailable$ | async)\"\n      [ngTemplateOutlet]=\"noAppointmentSlots\"\n      [ngTemplateOutletContext]=\"{'disableLoadMore': disableNext}\"></ng-container>\n    <ng-container *ngIf=\"!reRender && (appointmentsAvailable$ | async)\">\n      <div class=\"hide-until-md col-12\">\n        <div\n          class=\"display--flex\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(0)\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--3 grid-template-column--7--md gap--m mb--m col-12\">\n            <ng-container\n              *ngFor=\"let appointmentSlot of currentSlots | slice: 0:(noOfAppointmentSlotsPerPage/2); let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slides\"\n                [ngTemplateOutletContext]=\"\n                {appointmentSlot: appointmentSlot, i: i}\"></ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div\n          class=\"display--flex\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(1)\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--3 grid-template-column--7--md gap--m mb--m col-12\">\n            <ng-container\n              *ngFor=\"let appointmentSlot of currentSlots | slice: (noOfAppointmentSlotsPerPage/2):noOfAppointmentSlotsPerPage; let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slides\"\n                [ngTemplateOutletContext]=\"\n                {appointmentSlot: appointmentSlot, i: (i+(noOfAppointmentSlotsPerPage/2))}\"></ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <div class=\"hide-from-md\">\n        <div\n          class=\"display--grid\"\n          [attr.style]=\"consumerType === consumerTypeEnum.NC ? getSlideUpAnimationStyling(0) : getSlideUpAnimationStyling(0)\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--3 grid-template-column--7--md gap--xxs mb--xxs\">\n            <ng-container *ngFor=\"let appointmentSlot of currentSlots; let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slides\"\n                [ngTemplateOutletContext]=\"\n              {appointmentSlot: appointmentSlot, i: i+noOfAppointmentSlotsPerPage}\"></ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #slides let-appointmentSlot=\"appointmentSlot\" let-i=\"i\">\n  <div class=\"animation-show-slide-up\">\n    <label\n      [attr.data-cy]=\"'appointment-date-'+i\"\n      (click)=\"selectInstallSlotDay(appointmentSlot)\"\n      for=\"day-{{ i }}\"\n      class=\"select-tile position--relative display--flex align-items--start gap--m gap--l--sm color-text p--m p--xs--sm p--l--lg m--n background-white\">\n      <input\n        type=\"radio\"\n        name=\"day\"\n        value=\"{{ appointmentSlot.date | date:'ddmm' }}\"\n        id=\"day-{{ i }}\"\n        class=\"select-tile__input display--flex align-items--center justify-content--center font--body-regular hidden-input-box cursor--pointer\"\n        [checked]=\"appointmentSlot === selectedTimeslot\"\n        [disabled]=\"isDisabled(appointmentSlot)\" />\n      <div class=\"select-tile__content display--flex flex-direction--column align-self--stretch flex-grow\">\n        <div class=\"select-tile__content--inner display--flex gap--xm\">\n          <div class=\"select-tile__content_text display--flex flex-direction--column flex-grow align-items--center\">\n            <div class=\"font--caption mb--xxs\">{{ appointmentSlot.date | date:'EEEE' | titlecase}}</div>\n            <div class=\"text-flow text-flow--h5 hide-until-md\">{{ appointmentSlot.date | date:'dd/MM' }}</div>\n            <div class=\"text-flow text-flow--h6 hide-from-md\">{{ appointmentSlot.date | date:'dd/MM' }}</div>\n          </div>\n        </div>\n      </div>\n    </label>\n  </div>\n</ng-template>\n\n<ng-template #noAppointmentSlots let-disableLoadMore=\"disableLoadMore\">\n  <app-no-available-appointment-date\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"\n    [disableLoadMore]=\"disableLoadMore\"></app-no-available-appointment-date>\n</ng-template>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: i0.ChangeDetectorRef }], { messageGroup: [{
            type: Input
        }], startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], selectedTimeslot: [{
            type: Input
        }], momentFilter: [{
            type: Input
        }], initialSlide: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], slidesToShow: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], appointmentPickerType: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], datePickerLabel: [{
            type: Input
        }], appointmentSelected: [{
            type: Output
        }], loadMore: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }], slickModal: [{
            type: ViewChild,
            args: ['slickModal']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentDatePickerComponent, { className: "InputAppointmentDatePickerComponent" }); })();

class TimeslotPipe {
    transform(moment, _args) {
        const momentObject = TimeslotUtil.enumToMomentObject(moment);
        return `${momentObject?.startHours}:${momentObject?.startMinutes} - ${momentObject?.endHours}:${momentObject?.endMinutes}`;
    }
    static ɵfac = function TimeslotPipe_Factory(t) { return new (t || TimeslotPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "timeslotFormat", type: TimeslotPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimeslotPipe, [{
        type: Pipe,
        args: [{
                name: 'timeslotFormat',
            }]
    }], null, null); })();

function InputAppointmentMomentPickerComponent_ng_container_3_app_no_available_appointment_date_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 6);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentMomentPickerComponent_ng_container_3_app_no_available_appointment_date_1_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disableLoadMore", ctx_r8.startDate >= ctx_r8.endDate && ctx_r8.enableAppointmentsUI)("messageGroup", ctx_r8.messageGroup);
} }
const _c0$k = (a0, a1, a2, a3, a4) => ({ moment: a0, i: a1, selectedMoment: a2, timeFormat: a3, label: a4 });
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵpipe(3, "timeslotFormat");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = i0.ɵɵnextContext(6);
    const _r4 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵattribute("style", ctx_r17.getSlideUpAnimationStyling(i_r19), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction5(7, _c0$k, moment_r18, i_r19, ctx_r17.selectedMoment, i0.ɵɵpipeBind1(3, 3, moment_r18), i0.ɵɵpipeBind1(4, 5, ctx_r17.getLabel(moment_r18))));
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-slick-carousel", 9, 10);
    i0.ɵɵtemplate(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_ng_container_2_Template, 5, 13, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("config", ctx_r14.slideConfig);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r14.generateMoments());
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 13);
    i0.ɵɵpipe(2, "timeslotFormat");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = i0.ɵɵnextContext(6);
    const _r6 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction5(6, _c0$k, moment_r21, i_r22, ctx_r20.selectedMoment, i0.ɵɵpipeBind1(2, 2, moment_r21), i0.ɵɵpipeBind1(3, 4, ctx_r20.getLabel(moment_r21))));
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵtemplate(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template, 4, 12, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r15.generateMoments());
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ngx_slick_carousel_1_Template, 3, 2, "ngx-slick-carousel", 8)(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r13.enableAppointmentsUI);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r13.enableAppointmentsUI);
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r12.reRender);
} }
function InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r9.consumerType === ctx_r9.consumerTypeEnum.NC)("ngIfElse", _r2);
} }
function InputAppointmentMomentPickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_container_3_app_no_available_appointment_date_1_Template, 1, 2, "app-no-available-appointment-date", 5)(2, InputAppointmentMomentPickerComponent_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r7 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r7.appointmentsAvailable && !ctx_r0.selectedMoment);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.appointmentsAvailable || ctx_r0.selectedMoment);
} }
function InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementContainer(1, 13);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext();
    const i_r26 = ctx_r28.index;
    const moment_r25 = ctx_r28.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    const _r4 = i0.ɵɵreference(8);
    i0.ɵɵattribute("style", ctx_r27.getSlideUpAnimationStyling(i_r26), i0.ɵɵsanitizeStyle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", _r4)("ngTemplateOutletContext", i0.ɵɵpureFunction5(7, _c0$k, moment_r25, i_r26, ctx_r27.selectedMoment, i0.ɵɵpipeBind1(2, 3, ctx_r27.getTimeslotMomentDisplay(moment_r25)), i0.ɵɵpipeBind1(3, 5, ctx_r27.getLabel(moment_r25))));
} }
function InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_div_1_Template, 4, 13, "div", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r25 = ctx.$implicit;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r24.getTimeslotMomentDisplay(moment_r25));
} }
function InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r23.generateMoments());
} }
function InputAppointmentMomentPickerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, InputAppointmentMomentPickerComponent_ng_template_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.reRender);
} }
function InputAppointmentMomentPickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "input", 18);
    i0.ɵɵelementStart(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "label", 22);
    i0.ɵɵlistener("click", function InputAppointmentMomentPickerComponent_ng_template_7_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const moment_r30 = restoredCtx.moment; const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.selectMoment(moment_r30)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23);
    i0.ɵɵelement(6, "span", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 25)(8, "div", 26);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 27);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(12, "div");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const timeFormat_r29 = ctx.timeFormat;
    const moment_r30 = ctx.moment;
    const i_r31 = ctx.i;
    const selectedMoment_r32 = ctx.selectedMoment;
    const label_r33 = ctx.label;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("value", moment_r30);
    i0.ɵɵpropertyInterpolate1("id", "time-", i_r31, "");
    i0.ɵɵproperty("checked", moment_r30 === selectedMoment_r32);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", ctx_r3.isDisabled(moment_r30));
    i0.ɵɵattribute("data-cy", "appointment-time-picker-" + (moment_r30 == null ? null : moment_r30.toLowerCase()));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "time-", i_r31, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(label_r33);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(timeFormat_r29);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("label-modifier-box-content__timing icon icon-", ctx_r3.getIcon(moment_r30), "appointment");
} }
function InputAppointmentMomentPickerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "label", 29);
    i0.ɵɵlistener("click", function InputAppointmentMomentPickerComponent_ng_template_9_Template_label_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r42); const moment_r37 = restoredCtx.moment; const ctx_r41 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r41.selectMoment(moment_r37)); });
    i0.ɵɵelement(2, "input", 30);
    i0.ɵɵelementStart(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "div", 34);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 35);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const timeFormat_r36 = ctx.timeFormat;
    const moment_r37 = ctx.moment;
    const i_r38 = ctx.i;
    const selectedMoment_r39 = ctx.selectedMoment;
    const label_r40 = ctx.label;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("for", "time-", i_r38, "");
    i0.ɵɵattribute("data-cy", "appointment-time-" + i_r38);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", moment_r37);
    i0.ɵɵpropertyInterpolate1("id", "time-", i_r38, "");
    i0.ɵɵproperty("checked", moment_r37 === selectedMoment_r39)("disabled", ctx_r5.isDisabled(moment_r37));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(label_r40);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(timeFormat_r36);
} }
const _c1$d = a0 => ({ appointmentsAvailable: a0 });
class InputAppointmentMomentPickerComponent {
    messageGroup;
    timeslots = [];
    startDate = new Date();
    endDate;
    selectedMoment;
    selectedTimeslot;
    consumerType;
    updateSlots;
    isDeviceLandscape;
    enableAppointmentsUI;
    momentPickerLabel;
    momentSelected = new EventEmitter();
    scrollTo = new EventEmitter();
    loadMore = new EventEmitter();
    appointmentsAvailable$;
    reRender = false;
    disabled;
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    slideConfig = {
        infinite: false,
        initialSlide: 0,
        mobileFirst: true,
        arrows: true,
        nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
        prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
    };
    isDisabled(moment) {
        this.disabled = true;
        if (this.selectedTimeslot) {
            if (this.selectedTimeslot.hasAvailableMoment(moment)) {
                this.disabled = false;
            }
        }
        else if (this.timeslots) {
            this.timeslots.forEach((timeslot) => {
                if (timeslot.hasAvailableMoment(moment)) {
                    this.disabled = false;
                }
            });
        }
        return this.disabled;
    }
    ngOnInit() {
        this.reRender = true;
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            this.slideConfig.arrows = false;
            this.slideConfig.nextArrow = 'false';
            this.slideConfig.prevArrow = 'false';
        }
        setTimeout(() => {
            this.reRender = false;
            this.setSelectedMomentToInitialSlide();
        });
    }
    setSelectedMomentToInitialSlide() {
        if (this.consumerType === this.consumerTypeEnum.NC) {
            if (this.selectedMoment && !this.isDeviceLandscape) {
                this.slideConfig.initialSlide = this.generateMoments().findIndex((moment) => {
                    return moment === this.selectedMoment;
                });
            }
            else {
                this.slideConfig.initialSlide = 0;
            }
        }
    }
    generateMoments() {
        const moments = [];
        if (this.consumerType === AppointmentPickerConsumerTypeEnum.NC) {
            moments.push(TimeslotMomentEnum.DAY);
        }
        moments.push(TimeslotMomentEnum.MORNING);
        moments.push(TimeslotMomentEnum.LUNCH);
        moments.push(TimeslotMomentEnum.AFTERNOON);
        moments.push(TimeslotMomentEnum.EVENING);
        return moments;
    }
    getIcon(key) {
        switch (key) {
            case TimeslotMomentEnum.ALL_DAY:
                return 'allday';
            case TimeslotMomentEnum.DAY:
                return 'day';
            case TimeslotMomentEnum.MORNING:
                return 'morning';
            case TimeslotMomentEnum.EVENING:
                return 'evening';
            case TimeslotMomentEnum.AFTERNOON:
                return 'afternoon';
            case TimeslotMomentEnum.LUNCH:
                return 'lunch';
        }
    }
    getLabel(key, suffix) {
        let labelKey = 'timeslots.';
        if (this.messageGroup) {
            labelKey = this.messageGroup + '.timeslots.';
        }
        switch (key) {
            case TimeslotMomentEnum.DAY:
                labelKey += 'day';
                break;
            case TimeslotMomentEnum.ALL_DAY:
                labelKey += 'all-day';
                break;
            case TimeslotMomentEnum.MORNING:
                labelKey += 'morning';
                break;
            case TimeslotMomentEnum.LUNCH:
                labelKey += 'lunch';
                break;
            case TimeslotMomentEnum.EVENING:
                labelKey += 'evening';
                break;
            case TimeslotMomentEnum.AFTERNOON:
                labelKey += 'afternoon';
                break;
        }
        if (suffix) {
            labelKey += suffix;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(labelKey);
    }
    selectMoment(moment) {
        this.momentSelected.emit(moment);
        this.scrollTo.emit(AppointmentPickerTypeEnum.BY_DATE);
    }
    getSlideUpAnimationStyling(index) {
        return '--animation-delay: ' + index;
    }
    ngOnChanges(changes) {
        if (changes['moments']) {
            this.reRender = true;
            setTimeout(() => (this.reRender = false));
        }
        if (changes?.['updateSlots']?.currentValue) {
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(changes['updateSlots']?.currentValue);
            if (TimeslotUtil.shouldUpdateTimeSlots(this.updateSlots, this.timeslots)) {
                this.timeslots = this.timeslots.concat(changes['updateSlots']?.currentValue);
            }
        }
        if (changes['isDeviceLandscape']) {
            if (this.isDeviceLandscape) {
                this.slideConfig.arrows = true;
                this.slideConfig.slidesToScroll = 3;
                this.slideConfig.slidesToShow = 2;
            }
            else {
                this.slideConfig.arrows = false;
                this.slideConfig.slidesToScroll = 1;
                this.slideConfig.slidesToShow = 1;
            }
            this.setSelectedMomentToInitialSlide();
            this.reRender = true;
            setTimeout(() => (this.reRender = false));
        }
    }
    getTimeslotMomentDisplay(moment) {
        const momentObj = this.selectedTimeslot
            ? this.selectedTimeslot.getTimeslotMoment?.(moment)
            : TimeslotUtil.enumToMomentObject(moment);
        const isCustomMoment = this.timeslots && this.timeslots[0] && this.timeslots[0].isCustomMoment;
        if (!this.selectedTimeslot && isCustomMoment) {
            return this.getLabel(moment, '.timings');
        }
        if (momentObj) {
            return `${momentObj.startHours}:${momentObj.startMinutes} - ${momentObj.endHours}:${momentObj.endMinutes}`;
        }
        return '';
    }
    loadMoreSlots() {
        this.loadMore.emit();
    }
    static ɵfac = function InputAppointmentMomentPickerComponent_Factory(t) { return new (t || InputAppointmentMomentPickerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentMomentPickerComponent, selectors: [["app-form-appointment-moment-picker"]], inputs: { messageGroup: "messageGroup", timeslots: "timeslots", startDate: "startDate", endDate: "endDate", selectedMoment: "selectedMoment", selectedTimeslot: "selectedTimeslot", consumerType: "consumerType", updateSlots: "updateSlots", isDeviceLandscape: "isDeviceLandscape", enableAppointmentsUI: "enableAppointmentsUI", momentPickerLabel: "momentPickerLabel" }, outputs: { momentSelected: "momentSelected", scrollTo: "scrollTo", loadMore: "loadMore" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 8, consts: [[1, "text-flow", "text-flow--h3", "section__title", "text-align--left", "ml-5"], [4, "ngIf"], ["momentBAUTemplate", ""], ["slots", ""], ["slotsForReserveAppointment", ""], [3, "disableLoadMore", "messageGroup", "loadMoreSlots", 4, "ngIf"], [3, "disableLoadMore", "messageGroup", "loadMoreSlots"], [4, "ngIf", "ngIfElse"], ["class", "label-modifier-box card-mini card-mini--with-icon-and-amount card-mini--radio-circle-box", "style", "align-items: center; display: flex; flex-wrap: nowrap", 3, "config", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--with-icon-and-amount", "card-mini--radio-circle-box", 2, "align-items", "center", "display", "flex", "flex-wrap", "nowrap", 3, "config"], ["slickModalMoment", "slick-carousel"], [4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "label-modifier-slot", "animation-show-slide-up"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "select-tile--group", "display--grid", "grid-template-column--5--md", "grid-template-column--2", "gap--m--md", "gap--xxs"], [1, "label-modifier-box", "card-mini", "card-mini--with-icon"], ["class", "label-modifier label-modifier-slot animation-show-slide-up", 4, "ngIf"], [1, "label-modifier", "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", "name", "time", 1, "label-modifier-radio", 3, "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "radio-circle-box", "display--inline-flex", "justify-content--center", "align-items--center", "align-self--center", "border-radius--circle"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], [1, "text-flow", "text-flow--legal", "label-modifier-box-content__body-range"], [1, "animation-show-slide-up", "appointment-moment-picker--with-order"], [1, "select-tile", "position--relative", "display--flex", "align-items--start", "gap--m", "gap--l--sm", "color-text", "p--m", "p--l--sm", "m--n", "background-white", 2, "--animation-delay", "0", 3, "for", "click"], ["type", "radio", "name", "time", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "font--body-regular", "hidden-input-box", "cursor--pointer", 3, "value", "id", "checked", "disabled"], [1, "select-tile__content", "display--flex", "flex-direction--column", "align-self--stretch", "flex-grow"], [1, "select-tile__content--inner", "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow"], [1, "heading--6", "heading--nomargin"], [1, "font--caption-bold"]], template: function InputAppointmentMomentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h6", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, InputAppointmentMomentPickerComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
            i0.ɵɵpipe(4, "async");
            i0.ɵɵtemplate(5, InputAppointmentMomentPickerComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, InputAppointmentMomentPickerComponent_ng_template_7_Template, 13, 12, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(9, InputAppointmentMomentPickerComponent_ng_template_9_Template, 10, 8, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, ctx.momentPickerLabel));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction1(6, _c1$d, i0.ɵɵpipeBind1(4, 4, ctx.appointmentsAvailable$)));
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i1$1.NgTemplateOutlet, i4.SlickCarouselComponent, i4.SlickItemDirective, MessageGroupDirective, NoAvailableAppointmentDateComponent, i1$1.AsyncPipe, i3.TranslatePipe, TimeslotPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentMomentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-moment-picker', template: "<h6 class=\"text-flow text-flow--h3 section__title text-align--left ml-5\">{{ momentPickerLabel | translate }}</h6>\n<ng-container *ngIf=\"{ appointmentsAvailable: appointmentsAvailable$ | async } as data\">\n  <app-no-available-appointment-date\n    *ngIf=\"!data.appointmentsAvailable && !selectedMoment\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [disableLoadMore]=\"(startDate >= endDate && enableAppointmentsUI)\"\n    [messageGroup]=\"messageGroup\"></app-no-available-appointment-date>\n  <ng-container *ngIf=\"data.appointmentsAvailable || selectedMoment\">\n    <ng-container *ngIf=\"(consumerType === consumerTypeEnum.NC); else momentBAUTemplate\">\n      <ng-container *ngIf=\"!reRender\">\n        <ngx-slick-carousel\n          *ngIf=\"!enableAppointmentsUI\"\n          class=\"label-modifier-box card-mini card-mini--with-icon-and-amount card-mini--radio-circle-box\"\n          style=\"align-items: center; display: flex; flex-wrap: nowrap\"\n          #slickModalMoment=\"slick-carousel\"\n          [config]=\"slideConfig\">\n          <ng-container *ngFor=\"let moment of generateMoments(); let i = index\">\n            <div\n              ngxSlickItem\n              class=\"label-modifier-slot animation-show-slide-up\"\n              [attr.style]=\"getSlideUpAnimationStyling(i)\">\n              <ng-container\n                [ngTemplateOutlet]=\"slots\"\n                [ngTemplateOutletContext]=\"{moment: moment,\n                                                                i: i,\n                                                                selectedMoment: selectedMoment,\n                                                                timeFormat: (moment | timeslotFormat),\n                                                                label: (getLabel(moment) | translate)}\">\n              </ng-container>\n            </div>\n          </ng-container>\n        </ngx-slick-carousel>\n        <ng-container *ngIf=\"enableAppointmentsUI\">\n          <div\n            class=\"select-tile--group display--grid grid-template-column--5--md grid-template-column--2 gap--m--md gap--xxs\">\n            <ng-container *ngFor=\"let moment of generateMoments(); let i = index\">\n              <ng-container\n                [ngTemplateOutlet]=\"slotsForReserveAppointment\"\n                [ngTemplateOutletContext]=\"{moment: moment,\n                                                                  i: i,\n                                                                  selectedMoment: selectedMoment,\n                                                                  timeFormat: (moment | timeslotFormat),\n                                                                  label: (getLabel(moment) | translate)}\">\n              </ng-container>\n            </ng-container>\n          </div>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #momentBAUTemplate>\n  <div class=\"label-modifier-box card-mini card-mini--with-icon\">\n    <ng-container *ngIf=\"!reRender\">\n      <ng-container *ngFor=\"let moment of generateMoments(); let i = index\">\n        <div\n          class=\"label-modifier label-modifier-slot animation-show-slide-up\"\n          [attr.style]=\"getSlideUpAnimationStyling(i)\"\n          *ngIf=\"getTimeslotMomentDisplay(moment)\">\n          <ng-container\n            [ngTemplateOutlet]=\"slots\"\n            [ngTemplateOutletContext]=\"\n            {moment: moment,i: i,\n            selectedMoment: selectedMoment,\n            timeFormat: (getTimeslotMomentDisplay(moment) | translate),label: (getLabel(moment) | translate)}\">\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template\n  #slots\n  let-timeFormat=\"timeFormat\"\n  let-moment=\"moment\"\n  let-i=\"i\"\n  let-selectedMoment=\"selectedMoment\"\n  let-label=\"label\">\n  <input\n    type=\"radio\"\n    name=\"time\"\n    value=\"{{ moment }}\"\n    id=\"time-{{ i }}\"\n    class=\"label-modifier-radio\"\n    [checked]=\"moment === selectedMoment\" />\n  <div\n    [attr.data-cy]=\"'appointment-time-picker-'+moment?.toLowerCase()\"\n    class=\"label-modifier--append label-modifier--container cursor--pointer\"\n    [class.disabled]=\"isDisabled(moment)\">\n    <div class=\"label-modifier--body\">\n      <div class=\"label-modifier--body--inner-container\">\n        <label for=\"time-{{ i }}\" class=\"label-modifier-radio__label\" (click)=\"selectMoment(moment)\"></label>\n        <div class=\"label-modifier-content__header\">\n          <span\n            class=\"radio-circle-box display--inline-flex justify-content--center align-items--center align-self--center border-radius--circle\"></span>\n        </div>\n        <div class=\"label-modifier-content__body\">\n          <div class=\"text-flow text-flow--button label-modifier-content__body-label\">{{ label }}</div>\n          <div class=\"text-flow text-flow--legal label-modifier-box-content__body-range\">{{ timeFormat }}</div>\n        </div>\n        <div class=\"label-modifier-box-content__timing icon icon-{{ getIcon(moment) }}appointment\"></div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template\n  #slotsForReserveAppointment\n  let-timeFormat=\"timeFormat\"\n  let-moment=\"moment\"\n  let-i=\"i\"\n  let-selectedMoment=\"selectedMoment\"\n  let-label=\"label\">\n  <div class=\"animation-show-slide-up appointment-moment-picker--with-order\">\n    <label\n      [attr.data-cy]=\"'appointment-time-'+i\"\n      for=\"time-{{ i }}\"\n      class=\"select-tile position--relative display--flex align-items--start gap--m gap--l--sm color-text p--m p--l--sm m--n background-white\"\n      style=\"--animation-delay: 0\"\n      (click)=\"selectMoment(moment)\">\n      <input\n        type=\"radio\"\n        name=\"time\"\n        value=\"{{ moment }}\"\n        id=\"time-{{ i }}\"\n        class=\"select-tile__input display--flex align-items--center justify-content--center font--body-regular hidden-input-box cursor--pointer\"\n        [checked]=\"moment === selectedMoment\"\n        [disabled]=\"isDisabled(moment)\" />\n      <div class=\"select-tile__content display--flex flex-direction--column align-self--stretch flex-grow\">\n        <div class=\"select-tile__content--inner display--flex gap--m gap--l--sm\">\n          <div class=\"select-tile__content_text display--flex flex-direction--column flex-grow\">\n            <div class=\"heading--6 heading--nomargin\">{{ label }}</div>\n            <div class=\"font--caption-bold\">{{ timeFormat }}</div>\n          </div>\n        </div>\n      </div>\n    </label>\n  </div>\n</ng-template>\n" }]
    }], null, { messageGroup: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], selectedMoment: [{
            type: Input
        }], selectedTimeslot: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], momentPickerLabel: [{
            type: Input
        }], momentSelected: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }], loadMore: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentMomentPickerComponent, { className: "InputAppointmentMomentPickerComponent" }); })();

const _c0$j = a0 => ({ "mb-15": a0 });
function InputAppointmentPickerByMomentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$j, ctx_r0.consumerType === ctx_r0.consumerTypeEnum.NC));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx_r0.momentPickerErrorLabel));
} }
function InputAppointmentPickerByMomentComponent_app_no_available_appointment_date_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 8);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentPickerByMomentComponent_app_no_available_appointment_date_4_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r1.messageGroup);
} }
function InputAppointmentPickerByMomentComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r5.datePickerErrorLabel));
} }
function InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-form-appointment-date-picker", 13);
    i0.ɵɵlistener("appointmentSelected", function InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template_app_form_appointment_date_picker_appointmentSelected_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.setSelectedAppointmentSlot($event)); })("loadMore", function InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template_app_form_appointment_date_picker_loadMore_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.loadMoreSlots($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("messageGroup", ctx_r6.messageGroup)("timeslots", ctx_r6.timeslots)("startDate", ctx_r6.startDate)("endDate", ctx_r6.endDate)("selectedTimeslot", ctx_r6.selectedAppointmentSlot)("slidesToScroll", ctx_r6.slidesToScroll)("momentFilter", ctx_r6.selectedAppointmentMoment)("showLoadMore", ctx_r6.showLoadMore)("disableLoadMore", ctx_r6.disableLoadMore)("updateSlots", ctx_r6.updateSlots)("consumerType", ctx_r6.consumerType)("slidesToShow", ctx_r6.slidesToShow)("appointmentPickerType", ctx_r6.appointmentPickerType)("isDeviceLandscape", ctx_r6.isDeviceLandscape)("enableAppointmentsUI", ctx_r6.enableAppointmentsUI)("datePickerLabel", ctx_r6.datePickerLabel);
} }
function InputAppointmentPickerByMomentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, InputAppointmentPickerByMomentComponent_div_5_div_1_Template, 4, 3, "div", 10)(2, InputAppointmentPickerByMomentComponent_div_5_app_form_appointment_date_picker_2_Template, 1, 16, "app-form-appointment-date-picker", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasError("day_required"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r2.timeslots == null ? null : ctx_r2.timeslots.length) || (ctx_r2.updateSlots == null ? null : ctx_r2.updateSlots.length));
} }
class InputAppointmentPickerByMomentComponent extends AbstractAppointmentPickerByTemporalComponent {
    messageGroup;
    error;
    startDate = new Date();
    endDate;
    timeslots;
    slidesToScroll;
    initialSlide = 0;
    initialised = false;
    labelKeys;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    enableAppointmentsUI;
    slidesToShow;
    appointmentPickerType;
    isDeviceLandscape;
    loadMore = new EventEmitter();
    appointmentSlotSelected = new EventEmitter();
    scrollTo = new EventEmitter();
    datePickerLabel = '';
    momentPickerLabel = '';
    datePickerErrorLabel = '';
    momentPickerErrorLabel = '';
    selectedAppointmentSlot;
    selectedAppointmentMoment;
    moments = [];
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    constructor() {
        super();
        this.moments = this.generateMoments();
    }
    setSelectedAppointment(appointmentSlotOption) {
        this.selectedAppointmentSlot = this.timeslots.find((appointmentSlot) => {
            return (appointmentSlotOption.date &&
                InputAppointmentPickerByMomentComponent.isSelectedSlotsAvailable(appointmentSlot, appointmentSlotOption));
        });
        this.selectedAppointmentMoment = this.moments.find((moment) => {
            return moment === appointmentSlotOption.moment;
        });
        this.setInputValue();
    }
    setSelectedAppointmentSlot(appointmentSlot) {
        this.getComponent().selectedAppointmentSlot = appointmentSlot;
        this.setInputValue();
    }
    static isSelectedSlotsAvailable(slot, selectedSlot) {
        return (slot.date.getDate() === selectedSlot.date?.getDate() &&
            slot.date.getMonth() === selectedSlot.date?.getMonth() &&
            slot.date.getFullYear() === selectedSlot.date?.getFullYear());
    }
    getSelectedAppointment() {
        return new AppointmentSlotOption(this.selectedAppointmentSlot ? this.selectedAppointmentSlot.date : null, this.selectedAppointmentMoment ?? null);
    }
    generateMoments() {
        const moments = [];
        moments.push(TimeslotMomentEnum.MORNING);
        moments.push(TimeslotMomentEnum.LUNCH);
        moments.push(TimeslotMomentEnum.AFTERNOON);
        moments.push(TimeslotMomentEnum.EVENING);
        return moments;
    }
    getComponent() {
        return this;
    }
    scrollSectionTo($event) {
        super.scrollToSection($event);
    }
    static ɵfac = function InputAppointmentPickerByMomentComponent_Factory(t) { return new (t || InputAppointmentPickerByMomentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentPickerByMomentComponent, selectors: [["app-form-appointment-picker-by-date"]], inputs: { startDate: "startDate", endDate: "endDate", timeslots: "timeslots", slidesToScroll: "slidesToScroll", initialSlide: "initialSlide", initialised: "initialised", labelKeys: "labelKeys", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", enableAppointmentsUI: "enableAppointmentsUI", slidesToShow: "slidesToShow", appointmentPickerType: "appointmentPickerType", isDeviceLandscape: "isDeviceLandscape" }, outputs: { loadMore: "loadMore", appointmentSlotSelected: "appointmentSlotSelected", scrollTo: "scrollTo" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAppointmentPickerByMomentComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 13, consts: [[1, "appointment-picker"], [1, "section-time", "mx--xs--md"], ["class", "notification notification--errorfield notification--errorfield--flow", 3, "ngClass", 4, "ngIf"], [3, "messageGroup", "timeslots", "startDate", "endDate", "selectedMoment", "consumerType", "updateSlots", "isDeviceLandscape", "enableAppointmentsUI", "momentPickerLabel", "momentSelected", "loadMore", "scrollTo"], [3, "messageGroup", "loadMoreSlots", 4, "ngIf"], ["class", "section-date mx--xs--md", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow", 3, "ngClass"], [1, "icon", "icon-error-shape", "errorfield"], [3, "messageGroup", "loadMoreSlots"], [1, "section-date", "mx--xs--md"], ["class", "notification notification--errorfield notification--errorfield--flow", 4, "ngIf"], [3, "messageGroup", "timeslots", "startDate", "endDate", "selectedTimeslot", "slidesToScroll", "momentFilter", "showLoadMore", "disableLoadMore", "updateSlots", "consumerType", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [3, "messageGroup", "timeslots", "startDate", "endDate", "selectedTimeslot", "slidesToScroll", "momentFilter", "showLoadMore", "disableLoadMore", "updateSlots", "consumerType", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore"]], template: function InputAppointmentPickerByMomentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InputAppointmentPickerByMomentComponent_div_2_Template, 4, 6, "div", 2);
            i0.ɵɵelementStart(3, "app-form-appointment-moment-picker", 3);
            i0.ɵɵlistener("momentSelected", function InputAppointmentPickerByMomentComponent_Template_app_form_appointment_moment_picker_momentSelected_3_listener($event) { return ctx.setSelectedAppointmentMoment($event); })("loadMore", function InputAppointmentPickerByMomentComponent_Template_app_form_appointment_moment_picker_loadMore_3_listener($event) { return ctx.loadMoreSlots($event); })("scrollTo", function InputAppointmentPickerByMomentComponent_Template_app_form_appointment_moment_picker_scrollTo_3_listener($event) { return ctx.scrollSectionTo($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, InputAppointmentPickerByMomentComponent_app_no_available_appointment_date_4_Template, 1, 1, "app-no-available-appointment-date", 4)(5, InputAppointmentPickerByMomentComponent_div_5_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasError("slot_required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("messageGroup", ctx.messageGroup)("timeslots", ctx.timeslots)("startDate", ctx.startDate)("endDate", ctx.endDate)("selectedMoment", ctx.selectedAppointmentMoment)("consumerType", ctx.consumerType)("updateSlots", ctx.updateSlots)("isDeviceLandscape", ctx.isDeviceLandscape)("enableAppointmentsUI", ctx.enableAppointmentsUI)("momentPickerLabel", ctx.momentPickerLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !(ctx.timeslots == null ? null : ctx.timeslots.length) || !(ctx.updateSlots == null ? null : ctx.updateSlots.length));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedAppointmentMoment);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, InputAppointmentDatePickerComponent, InputAppointmentMomentPickerComponent, MessageGroupDirective, NoAvailableAppointmentDateComponent, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentPickerByMomentComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-picker-by-date', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAppointmentPickerByMomentComponent),
                        multi: true,
                    },
                ], template: "<div class=\"appointment-picker\">\n  <div class=\"section-time mx--xs--md\">\n    <div\n      class=\"notification notification--errorfield notification--errorfield--flow\"\n      [ngClass]=\"{'mb-15' : consumerType === consumerTypeEnum.NC}\"\n      *ngIf=\"hasError('slot_required')\">\n      <span class=\"icon icon-error-shape errorfield\">{{ momentPickerErrorLabel | translate }}</span>\n    </div>\n    <app-form-appointment-moment-picker\n      [messageGroup]=\"messageGroup\"\n      [timeslots]=\"timeslots\"\n      [startDate]=\"startDate\"\n      [endDate]=\"endDate\"\n      [selectedMoment]=\"selectedAppointmentMoment\"\n      (momentSelected)=\"setSelectedAppointmentMoment($event)\"\n      (loadMore)=\"loadMoreSlots($event)\"\n      [consumerType]=\"consumerType\"\n      [updateSlots]=\"updateSlots\"\n      (scrollTo)=\"scrollSectionTo($event)\"\n      [isDeviceLandscape]=\"isDeviceLandscape\"\n      [enableAppointmentsUI]=\"enableAppointmentsUI\"\n      [momentPickerLabel]=\"momentPickerLabel\">\n    </app-form-appointment-moment-picker>\n  </div>\n  <app-no-available-appointment-date\n    *ngIf=\"!timeslots?.length || !updateSlots?.length\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"></app-no-available-appointment-date>\n  <div class=\"section-date mx--xs--md\" *ngIf=\"selectedAppointmentMoment\">\n    <div class=\"notification notification--errorfield notification--errorfield--flow\" *ngIf=\"hasError('day_required')\">\n      <span class=\"icon icon-error-shape errorfield\">{{ datePickerErrorLabel | translate }}</span>\n    </div>\n    <app-form-appointment-date-picker\n      *ngIf=\"timeslots?.length || updateSlots?.length\"\n      [messageGroup]=\"messageGroup\"\n      [timeslots]=\"timeslots\"\n      [startDate]=\"startDate\"\n      [endDate]=\"endDate\"\n      [selectedTimeslot]=\"selectedAppointmentSlot\"\n      [slidesToScroll]=\"slidesToScroll\"\n      [momentFilter]=\"selectedAppointmentMoment\"\n      (appointmentSelected)=\"setSelectedAppointmentSlot($event)\"\n      [showLoadMore]=\"showLoadMore\"\n      [disableLoadMore]=\"disableLoadMore\"\n      (loadMore)=\"loadMoreSlots($event)\"\n      [updateSlots]=\"updateSlots\"\n      [consumerType]=\"consumerType\"\n      [slidesToShow]=\"slidesToShow\"\n      [appointmentPickerType]=\"appointmentPickerType\"\n      [isDeviceLandscape]=\"isDeviceLandscape\"\n      [enableAppointmentsUI]=\"enableAppointmentsUI\"\n      [datePickerLabel]=\"datePickerLabel\">\n    </app-form-appointment-date-picker>\n  </div>\n</div>\n" }]
    }], () => [], { startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], initialSlide: [{
            type: Input
        }], initialised: [{
            type: Input
        }], labelKeys: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], slidesToShow: [{
            type: Input
        }], appointmentPickerType: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], loadMore: [{
            type: Output
        }], appointmentSlotSelected: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentPickerByMomentComponent, { className: "InputAppointmentPickerByMomentComponent" }); })();

function InputAppointmentPickerByDateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.datePickerErrorLabel));
} }
function InputAppointmentPickerByDateComponent_app_no_available_appointment_date_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-no-available-appointment-date", 8);
    i0.ɵɵlistener("loadMoreSlots", function InputAppointmentPickerByDateComponent_app_no_available_appointment_date_3_Template_app_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r1.messageGroup);
} }
function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-form-appointment-date-picker", 9);
    i0.ɵɵlistener("appointmentSelected", function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template_app_form_appointment_date_picker_appointmentSelected_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.setSelectedAppointmentSlot($event)); })("loadMore", function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template_app_form_appointment_date_picker_loadMore_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.loadMoreSlots($event)); })("scrollTo", function InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template_app_form_appointment_date_picker_scrollTo_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.scrollToSection($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r2.messageGroup)("timeslots", ctx_r2.timeslots)("startDate", ctx_r2.startDate)("endDate", ctx_r2.endDate)("slidesToScroll", ctx_r2.slidesToScroll)("selectedTimeslot", ctx_r2.selectedAppointmentSlot)("initialSlide", ctx_r2.initialSlide)("showLoadMore", ctx_r2.showLoadMore)("updateSlots", ctx_r2.updateSlots)("consumerType", ctx_r2.consumerType)("disableLoadMore", ctx_r2.disableLoadMore)("slidesToShow", ctx_r2.slidesToShow)("appointmentPickerType", ctx_r2.appointmentPickerType)("isDeviceLandscape", ctx_r2.isDeviceLandscape)("enableAppointmentsUI", ctx_r2.enableAppointmentsUI)("datePickerLabel", ctx_r2.datePickerLabel);
} }
const _c0$i = a0 => ({ "mb-15": a0 });
function InputAppointmentPickerByDateComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0$i, ctx_r10.consumerType === ctx_r10.consumerTypeEnum.NC));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx_r10.momentPickerErrorLabel));
} }
function InputAppointmentPickerByDateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, InputAppointmentPickerByDateComponent_div_5_div_1_Template, 4, 6, "div", 11);
    i0.ɵɵelementStart(2, "app-form-appointment-moment-picker", 12);
    i0.ɵɵlistener("momentSelected", function InputAppointmentPickerByDateComponent_div_5_Template_app_form_appointment_moment_picker_momentSelected_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.setSelectedAppointmentMoment($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.hasError("slot_required"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("messageGroup", ctx_r3.messageGroup)("startDate", ctx_r3.startDate)("endDate", ctx_r3.endDate)("timeslots", ctx_r3.timeslots)("updateSlots", ctx_r3.updateSlots)("selectedTimeslot", ctx_r3.selectedAppointmentSlot)("selectedMoment", ctx_r3.selectedAppointmentMoment)("consumerType", ctx_r3.consumerType)("isDeviceLandscape", ctx_r3.isDeviceLandscape)("enableAppointmentsUI", ctx_r3.enableAppointmentsUI)("momentPickerLabel", ctx_r3.momentPickerLabel);
} }
class InputAppointmentPickerByDateComponent extends AbstractAppointmentPickerByTemporalComponent {
    messageGroup;
    error;
    startDate = new Date();
    endDate;
    timeslots;
    slidesToScroll;
    initialSlide = 0;
    initialised = false;
    labelKeys;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    enableAppointmentsUI;
    slidesToShow;
    appointmentPickerType;
    isDeviceLandscape;
    appointmentSlotSelected = new EventEmitter();
    loadMore = new EventEmitter();
    scrollTo = new EventEmitter();
    datePickerLabel = '';
    momentPickerLabel = '';
    datePickerErrorLabel = '';
    momentPickerErrorLabel = '';
    selectedAppointmentSlot;
    selectedAppointmentMoment;
    consumerTypeEnum = AppointmentPickerConsumerTypeEnum;
    setSelectedAppointment(appointmentSlotOption) {
        if (appointmentSlotOption.date || appointmentSlotOption.moment) {
            this.selectedAppointmentSlot = this.timeslots.find((appointmentSlot) => {
                return (appointmentSlot.date.getDate() === appointmentSlotOption.date?.getDate() &&
                    appointmentSlot.date.getMonth() === appointmentSlotOption.date?.getMonth() &&
                    appointmentSlot.date.getFullYear() === appointmentSlotOption.date?.getFullYear());
            });
            if (this.selectedAppointmentSlot) {
                this.selectedAppointmentSlot.timeSlots.forEach((moment) => {
                    if (moment.code === appointmentSlotOption.moment) {
                        this.selectedAppointmentMoment = moment.code;
                    }
                });
                this.setInputValue();
            }
        }
    }
    setSelectedAppointmentSlot(appointmentSlot) {
        this.getComponent().selectedAppointmentSlot = appointmentSlot;
        this.getComponent().selectedAppointmentMoment = undefined;
        this.setInputValue();
    }
    getSelectedAppointment() {
        return new AppointmentSlotOption(this.selectedAppointmentSlot?.date || null, this.selectedAppointmentMoment);
    }
    getComponent() {
        return this;
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputAppointmentPickerByDateComponent_BaseFactory; return function InputAppointmentPickerByDateComponent_Factory(t) { return (ɵInputAppointmentPickerByDateComponent_BaseFactory || (ɵInputAppointmentPickerByDateComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputAppointmentPickerByDateComponent)))(t || InputAppointmentPickerByDateComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentPickerByDateComponent, selectors: [["app-form-appointment-picker-by-date"]], inputs: { error: "error", startDate: "startDate", endDate: "endDate", timeslots: "timeslots", slidesToScroll: "slidesToScroll", initialSlide: "initialSlide", initialised: "initialised", labelKeys: "labelKeys", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", enableAppointmentsUI: "enableAppointmentsUI", slidesToShow: "slidesToShow", appointmentPickerType: "appointmentPickerType", isDeviceLandscape: "isDeviceLandscape" }, outputs: { appointmentSlotSelected: "appointmentSlotSelected", loadMore: "loadMore", scrollTo: "scrollTo" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAppointmentPickerByDateComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 4, consts: [[1, "section-date", "mx--xs--md"], [1, "mt--m"], ["class", "notification notification--errorfield notification--errorfield--flow", 4, "ngIf"], [3, "messageGroup", "loadMoreSlots", 4, "ngIf"], [3, "messageGroup", "timeslots", "startDate", "endDate", "slidesToScroll", "selectedTimeslot", "initialSlide", "showLoadMore", "updateSlots", "consumerType", "disableLoadMore", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore", "scrollTo", 4, "ngIf"], ["class", "section-time mx--xs--md", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon", "icon-error-shape", "errorfield"], [3, "messageGroup", "loadMoreSlots"], [3, "messageGroup", "timeslots", "startDate", "endDate", "slidesToScroll", "selectedTimeslot", "initialSlide", "showLoadMore", "updateSlots", "consumerType", "disableLoadMore", "slidesToShow", "appointmentPickerType", "isDeviceLandscape", "enableAppointmentsUI", "datePickerLabel", "appointmentSelected", "loadMore", "scrollTo"], [1, "section-time", "mx--xs--md"], ["class", "notification notification--errorfield notification--errorfield--flow", 3, "ngClass", 4, "ngIf"], [3, "messageGroup", "startDate", "endDate", "timeslots", "updateSlots", "selectedTimeslot", "selectedMoment", "consumerType", "isDeviceLandscape", "enableAppointmentsUI", "momentPickerLabel", "momentSelected"], [1, "notification", "notification--errorfield", "notification--errorfield--flow", 3, "ngClass"]], template: function InputAppointmentPickerByDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InputAppointmentPickerByDateComponent_div_2_Template, 4, 3, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, InputAppointmentPickerByDateComponent_app_no_available_appointment_date_3_Template, 1, 1, "app-no-available-appointment-date", 3)(4, InputAppointmentPickerByDateComponent_app_form_appointment_date_picker_4_Template, 1, 16, "app-form-appointment-date-picker", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, InputAppointmentPickerByDateComponent_div_5_Template, 3, 12, "div", 5);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.hasError("day_required"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !(ctx.timeslots == null ? null : ctx.timeslots.length) && !(ctx.updateSlots == null ? null : ctx.updateSlots.length));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.initialised && ((ctx.timeslots == null ? null : ctx.timeslots.length) || (ctx.updateSlots == null ? null : ctx.updateSlots.length)));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedAppointmentSlot);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, InputAppointmentDatePickerComponent, InputAppointmentMomentPickerComponent, MessageGroupDirective, NoAvailableAppointmentDateComponent, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentPickerByDateComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-picker-by-date', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAppointmentPickerByDateComponent),
                        multi: true,
                    },
                ], template: "<div class=\"section-date mx--xs--md\">\n  <div class=\"mt--m\">\n    <div class=\"notification notification--errorfield notification--errorfield--flow\" *ngIf=\"hasError('day_required')\">\n      <span class=\"icon icon-error-shape errorfield\">{{ datePickerErrorLabel | translate }}</span>\n    </div>\n  </div>\n  <app-no-available-appointment-date\n    *ngIf=\"!timeslots?.length && !updateSlots?.length\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"></app-no-available-appointment-date>\n  <app-form-appointment-date-picker\n    *ngIf=\"initialised && (timeslots?.length || updateSlots?.length)\"\n    [messageGroup]=\"messageGroup\"\n    [timeslots]=\"timeslots\"\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [slidesToScroll]=\"slidesToScroll\"\n    [selectedTimeslot]=\"selectedAppointmentSlot\"\n    [initialSlide]=\"initialSlide\"\n    (appointmentSelected)=\"setSelectedAppointmentSlot($event)\"\n    [showLoadMore]=\"showLoadMore\"\n    (loadMore)=\"loadMoreSlots($event)\"\n    [updateSlots]=\"updateSlots\"\n    [consumerType]=\"consumerType\"\n    [disableLoadMore]=\"disableLoadMore\"\n    (scrollTo)=\"scrollToSection($event)\"\n    [slidesToShow]=\"slidesToShow\"\n    [appointmentPickerType]=\"appointmentPickerType\"\n    [isDeviceLandscape]=\"isDeviceLandscape\"\n    [enableAppointmentsUI]=\"enableAppointmentsUI\"\n    [datePickerLabel]=\"datePickerLabel\">\n  </app-form-appointment-date-picker>\n</div>\n<div class=\"section-time mx--xs--md\" *ngIf=\"selectedAppointmentSlot\">\n  <div\n    class=\"notification notification--errorfield notification--errorfield--flow\"\n    [ngClass]=\"{'mb-15' : consumerType === consumerTypeEnum.NC}\"\n    *ngIf=\"hasError('slot_required')\">\n    <span class=\"icon icon-error-shape errorfield\">{{ momentPickerErrorLabel | translate }}</span>\n  </div>\n  <app-form-appointment-moment-picker\n    [messageGroup]=\"messageGroup\"\n    [startDate]=\"startDate\"\n    [endDate]=\"endDate\"\n    [timeslots]=\"timeslots\"\n    [updateSlots]=\"updateSlots\"\n    [selectedTimeslot]=\"selectedAppointmentSlot\"\n    [selectedMoment]=\"selectedAppointmentMoment\"\n    (momentSelected)=\"setSelectedAppointmentMoment($event)\"\n    [consumerType]=\"consumerType\"\n    [isDeviceLandscape]=\"isDeviceLandscape\"\n    [enableAppointmentsUI]=\"enableAppointmentsUI\"\n    [momentPickerLabel]=\"momentPickerLabel\">\n  </app-form-appointment-moment-picker>\n</div>\n" }]
    }], null, { error: [{
            type: Input
        }], startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], initialSlide: [{
            type: Input
        }], initialised: [{
            type: Input
        }], labelKeys: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], slidesToShow: [{
            type: Input
        }], appointmentPickerType: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], appointmentSlotSelected: [{
            type: Output
        }], loadMore: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentPickerByDateComponent, { className: "InputAppointmentPickerByDateComponent" }); })();

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const _c0$h = ["appointmentPickerComponent"];
let InputAppointmentPickerComponent = class InputAppointmentPickerComponent extends InputAbstractComponent {
    viewContainerRef;
    messageGroupDirective;
    languageService;
    formErrorService;
    injector;
    startDate = new Date();
    endDate;
    timeslots;
    slidesToScroll;
    slidesToShow;
    appointmentPickerType;
    updateSlots;
    showLoadMore;
    consumerType;
    disableLoadMore;
    error;
    isDeviceLandscape;
    reset;
    enableAppointmentsUI;
    loadMore = new EventEmitter();
    scrollTo = new EventEmitter();
    sendAnalytics = new EventEmitter();
    appointmentPickerComponent;
    componentRef;
    selectedAppointmentSlotOption;
    constructor(viewContainerRef, messageGroupDirective, languageService, formErrorService, injector) {
        super(languageService, formErrorService, messageGroupDirective, injector);
        this.viewContainerRef = viewContainerRef;
        this.messageGroupDirective = messageGroupDirective;
        this.languageService = languageService;
        this.formErrorService = formErrorService;
        this.injector = injector;
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouched = () => {
        // empty implementation
    };
    ngOnInit() {
        super.ngOnInit();
        this.initMessageGroup();
        this.loadAppointmentPickerComponent();
    }
    setError(value) {
        if (value) {
            this.componentRef.instance.error = Object.keys(value)[0];
        }
        else {
            this.componentRef.instance.error = null;
        }
    }
    ngOnChanges(changes) {
        if (changes['appointmentPickerType']) {
            this.formErrorService.reset$.next(null);
            this.appointmentPickerType = changes['appointmentPickerType'].currentValue;
            this.loadAppointmentPickerComponent();
        }
        if (changes['reset']?.currentValue) {
            this.loadAppointmentPickerComponent();
        }
        if (changes['showLoadMore']) {
            this.componentRef.instance.showLoadMore = this.showLoadMore;
        }
        if (changes['updateSlots']) {
            this.componentRef.instance.updateSlots = this.updateSlots;
        }
        if (changes['disableLoadMore']) {
            this.componentRef.instance.disableLoadMore = this.disableLoadMore;
        }
        if (changes['error']) {
            this.setError(this.error);
        }
        if (changes['isDeviceLandscape']) {
            this.componentRef.instance.isDeviceLandscape = this.isDeviceLandscape;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_) {
        // empty implementation
    }
    writeValue(appointmentSlotOption) {
        if (appointmentSlotOption) {
            this.selectedAppointmentSlotOption = appointmentSlotOption;
            this.componentRef.instance.setSelectedAppointment(appointmentSlotOption);
        }
    }
    loadAppointmentPickerComponent() {
        this.viewContainerRef.clear();
        const component = this.appointmentPickerType === AppointmentPickerTypeEnum.BY_DATE
            ? InputAppointmentPickerByDateComponent
            : InputAppointmentPickerByMomentComponent;
        this.componentRef = this.viewContainerRef.createComponent(component);
        this.componentRef.changeDetectorRef.detectChanges();
        this.setSelectedAppointment(new AppointmentSlotOption(null, null));
        this.componentRef.instance.startDate = this.startDate;
        this.componentRef.instance.endDate = this.endDate;
        this.componentRef.instance.timeslots = this.timeslots;
        this.componentRef.instance.slidesToScroll = this.slidesToScroll;
        this.componentRef.instance.appointmentSlotSelected
            .pipe(untilDestroyed(this))
            .subscribe((selectedAppointment) => {
            this.setSelectedAppointment(selectedAppointment);
        });
        this.componentRef.instance.messageGroup = this.messageGroup;
        this.componentRef.instance.initialised = true;
        this.componentRef.instance.setLabels([
            this.messageGroup || '',
            this.formControlName,
        ]);
        this.componentRef.instance.error = this.error;
        this.componentRef.instance.updateSlots = this.updateSlots;
        this.componentRef.instance.showLoadMore = this.showLoadMore;
        this.componentRef.instance.loadMore
            ?.pipe(untilDestroyed(this))
            .subscribe((value) => {
            this.loadMore.emit(value);
        });
        this.componentRef.instance.consumerType = this.consumerType;
        this.componentRef.instance.disableLoadMore = this.disableLoadMore;
        this.componentRef.instance.scrollTo
            ?.pipe(untilDestroyed(this))
            .subscribe((section) => {
            this.scrollTo.emit(section);
        });
        this.componentRef.instance.slidesToShow = this.slidesToShow;
        this.componentRef.instance.appointmentPickerType =
            this.appointmentPickerType;
        this.componentRef.instance.isDeviceLandscape = this.isDeviceLandscape;
        this.componentRef.instance.enableAppointmentsUI =
            this.enableAppointmentsUI;
    }
    setSelectedAppointment(selectedAppointment) {
        this.onChange(selectedAppointment);
        this.sendAnalytics.emit(selectedAppointment);
        this.onTouched();
        this.componentRef.instance.error = null;
    }
    static ɵfac = function InputAppointmentPickerComponent_Factory(t) { return new (t || InputAppointmentPickerComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAppointmentPickerComponent, selectors: [["app-form-appointment-picker"]], viewQuery: function InputAppointmentPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$h, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.appointmentPickerComponent = _t.first);
        } }, inputs: { startDate: "startDate", endDate: "endDate", timeslots: "timeslots", slidesToScroll: "slidesToScroll", slidesToShow: "slidesToShow", appointmentPickerType: "appointmentPickerType", updateSlots: "updateSlots", showLoadMore: "showLoadMore", consumerType: "consumerType", disableLoadMore: "disableLoadMore", error: "error", isDeviceLandscape: "isDeviceLandscape", reset: "reset", enableAppointmentsUI: "enableAppointmentsUI" }, outputs: { loadMore: "loadMore", scrollTo: "scrollTo", sendAnalytics: "sendAnalytics" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAppointmentPickerComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["appointmentPickerComponent", ""]], template: function InputAppointmentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, null, 0);
        } }, encapsulation: 2 });
};
InputAppointmentPickerComponent = __decorate$3([
    UntilDestroy()
], InputAppointmentPickerComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAppointmentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-appointment-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAppointmentPickerComponent),
                        multi: true,
                    },
                ], template: "<ng-container #appointmentPickerComponent></ng-container>\n" }]
    }], () => [{ type: i0.ViewContainerRef }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i1.LanguageService }, { type: FormErrorService }, { type: i0.Injector }], { startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], slidesToScroll: [{
            type: Input
        }], slidesToShow: [{
            type: Input
        }], appointmentPickerType: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], consumerType: [{
            type: Input
        }], disableLoadMore: [{
            type: Input
        }], error: [{
            type: Input
        }], isDeviceLandscape: [{
            type: Input
        }], reset: [{
            type: Input
        }], enableAppointmentsUI: [{
            type: Input
        }], loadMore: [{
            type: Output
        }], scrollTo: [{
            type: Output
        }], sendAnalytics: [{
            type: Output
        }], appointmentPickerComponent: [{
            type: ViewChild,
            args: ['appointmentPickerComponent', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAppointmentPickerComponent, { className: "InputAppointmentPickerComponent" }); })();

class InputCheckboxComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    checkBoxModifier;
    customLabel;
    value = '';
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        return super.getLabel(this.customLabel);
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouched = (_) => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onTouched(true);
        this.onChange(value);
        this.trackingEvent.emit({ label: this.getLabel(), value: value.toString() });
    }
    static ɵfac = function InputCheckboxComponent_Factory(t) { return new (t || InputCheckboxComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxComponent, selectors: [["tg-form-input-checkbox"]], inputs: { checkBoxModifier: "checkBoxModifier", customLabel: "customLabel" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 11, consts: [[1, "radio-checkbox"], [1, "form__checkbox"], ["type", "checkbox", 1, "form__checkbox__input", 3, "id", "checked", "ngModel", "ngModelChange"], [3, "for"], [1, "label--large", "color-text", 3, "for", "innerHTML"], ["errorContainer", ""]], template: function InputCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
            i0.ɵɵlistener("ngModelChange", function InputCheckboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputCheckboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label", 3);
            i0.ɵɵtext(4, "\u00A0");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(5, "label", 4);
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelement(7, "div", null, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵproperty("checked", ctx.value)("ngModel", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("form__checkbox__label ", ctx.checkBoxModifier, "");
            i0.ɵɵpropertyInterpolate("for", ctx.key);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("for", ctx.key);
            i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 9, ctx.getLabel()), i0.ɵɵsanitizeHtml);
        } }, dependencies: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input-checkbox', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxComponent),
                        multi: true,
                    },
                ], template: "<div class=\"radio-checkbox\">\n  <div class=\"form__checkbox\">\n    <input\n      type=\"checkbox\"\n      class=\"form__checkbox__input\"\n      id=\"{{ key }}\"\n      [checked]=\"value\"\n      (ngModelChange)=\"updateValue($event)\"\n      [(ngModel)]=\"value\" />\n    <label class=\"form__checkbox__label {{ checkBoxModifier }}\" for=\"{{ key }}\">&nbsp;</label>\n  </div>\n  <label class=\"label--large color-text\" for=\"{{ key }}\" [innerHTML]=\"getLabel() | translate\"></label>\n  <div #errorContainer></div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { checkBoxModifier: [{
            type: Input
        }], customLabel: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxComponent, { className: "InputCheckboxComponent" }); })();

var CheckboxModifierEnum;
(function (CheckboxModifierEnum) {
    CheckboxModifierEnum["DEFAULT_CIRCLE"] = "checkbox-control--circle";
})(CheckboxModifierEnum || (CheckboxModifierEnum = {}));

class InputOption {
    value;
    label;
    disabled;
    constructor(value = '', label = '', disabled = false) {
        this.value = value;
        this.label = label;
        this.disabled = disabled;
    }
    withValue(value) {
        this.value = value;
        return this;
    }
    withLabel(label) {
        this.label = label;
        return this;
    }
    withValueAndLabel(valueAndLabel) {
        this.value = valueAndLabel;
        this.label = valueAndLabel;
        return this;
    }
}

class InputOptionWithSubscript extends InputOption {
    subScript;
    constructor(value, label, subScript) {
        super(value, label);
        this.subScript = subScript;
    }
}

class InputOptionWithCard extends InputOption {
    text;
    constructor(value, label, text = '') {
        super(value, label);
        this.text = text;
    }
    withValue(value) {
        this.value = value;
        return this;
    }
    withLabel(label) {
        this.label = label;
        return this;
    }
    withText(text) {
        this.text = text;
        return this;
    }
}

class InputOptionWithOptionalInputField extends InputOption {
    hasInputField;
    constructor(value, label, hasInputField) {
        super(value, label);
        this.hasInputField = hasInputField ?? false;
    }
}

class InputOptionWithImage extends InputOption {
    imagePath;
    price;
    promoPrice;
    priceAfterPromo;
    isPromo;
    installTypePrice;
    constructor(value, label, imagePath = '') {
        super(value, label);
        this.imagePath = imagePath;
    }
    withValue(value) {
        this.value = value;
        return this;
    }
    withLabel(label) {
        this.label = label;
        return this;
    }
    withImage(imagePath) {
        this.imagePath = imagePath;
        return this;
    }
    withPrice(price) {
        this.price = price;
        return this;
    }
    withPromoPrice(promoPrice) {
        this.promoPrice = promoPrice;
        return this;
    }
    withPriceAndPromoPrice(price, promoPrice) {
        this.price = price;
        this.promoPrice = Math.abs(promoPrice);
        if (this.promoPrice === 0 || isNaN(this.promoPrice) || this.promoPrice === undefined) {
            this.priceAfterPromo = this.price;
            this.isPromo = false;
        }
        else {
            this.promoCalculation();
        }
        return this;
    }
    promoCalculation() {
        if (this.price !== 0) {
            this.priceAfterPromo = this.price - this.promoPrice;
            this.isPromo = true;
        }
        else {
            this.priceAfterPromo = this.price;
            this.isPromo = false;
        }
    }
}

class InputOptionWithIcon extends InputOption {
    icon;
    text;
    constructor(value, label, icon = '', text) {
        super(value, label);
        this.icon = icon;
        this.text = text;
    }
    withValue(value) {
        this.value = value;
        return this;
    }
    withLabel(label) {
        this.label = label;
        return this;
    }
    withIcon(icon) {
        this.icon = icon;
        return this;
    }
    withText(text) {
        this.text = text;
        return this;
    }
}

function InputRadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getLabel()));
} }
function InputRadioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
function InputRadioComponent_ng_container_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
function InputRadioComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div", 7)(3, "input", 8);
    i0.ɵɵlistener("click", function InputRadioComponent_ng_container_3_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 9);
    i0.ɵɵtext(5, "\u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "label", 10);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, InputRadioComponent_ng_container_3_div_8_Template, 1, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r2.surroundingClass);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r2.id, "-", ctx_r2.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r3.value);
    i0.ɵɵpropertyInterpolate3("id", "", ctx_r2.id, "-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate3("for", "", ctx_r2.id, "-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate3("for", "", ctx_r2.id, "-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 18, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideSpace);
} }
class InputRadioComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    messageGroup = '';
    optionList;
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    selectedOption;
    surroundingClass = '';
    horizontalStyle = '';
    useCustomLabel = false;
    id = 'choice';
    hideSpace = false;
    clearErrorMessagesFunction = new EventEmitter();
    error;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange(_value) {
        // empty implementation
    }
    onTouch = (_touched) => {
        // empty implementation
    };
    hasError(errorString) {
        return this.error === errorString;
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue) {
        this.selectedOption = new InputOption('', '', false);
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.clearErrorMessagesFunction.emit();
        this.selectedOption = option;
        this.onTouch(!!option.value);
        this.onChange(option.value);
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function InputRadioComponent_Factory(t) { return new (t || InputRadioComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioComponent, selectors: [["tg-form-radio"]], inputs: { messageGroup: "messageGroup", optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable", selectedOption: "selectedOption", surroundingClass: "surroundingClass", horizontalStyle: "horizontalStyle", useCustomLabel: "useCustomLabel", id: "id", hideSpace: "hideSpace" }, outputs: { clearErrorMessagesFunction: "clearErrorMessagesFunction" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "label-input-flow"], [1, "whitespace", "whitespace--tiny"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "form__radio"], ["type", "radio", 1, "form__radio__input", 3, "name", "value", "id", "checked", "click"], [1, "form__radio__label", 3, "for"], [1, "label--large", 3, "for", "innerHTML"], ["class", "whitespace whitespace--tiny", 4, "ngIf"]], template: function InputRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioComponent_div_0_Template, 5, 3, "div", 0)(1, InputRadioComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵtemplate(3, InputRadioComponent_ng_container_3_Template, 9, 20, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.useCustomLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.horizontalStyle);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"!useCustomLabel\">\n  <div class=\"label-input-flow\">{{ getLabel() | translate }}</div>\n  <div class=\"whitespace whitespace--tiny\"></div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"{{ horizontalStyle }}\">\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"{{ surroundingClass }}\">\n      <div class=\"form__radio\">\n        <input\n          type=\"radio\"\n          name=\"{{ id }}-{{ key }}\"\n          value=\"{{ option.value }}\"\n          id=\"{{ id }}-{{ i }}-{{ key }}\"\n          class=\"form__radio__input\"\n          [checked]=\"selectedOption && option.value === selectedOption.value\"\n          (click)=\"selectOption(option)\" />\n\n        <label class=\"form__radio__label\" for=\"{{ id }}-{{ i }}-{{ key }}\">&nbsp;</label>\n      </div>\n      <label class=\"label--large\" for=\"{{ id }}-{{ i }}-{{ key }}\" [innerHTML]=\"getOptionLabel(option) | translate\">\n      </label>\n    </div>\n    <div *ngIf=\"!hideSpace\" class=\"whitespace whitespace--tiny\"></div>\n  </ng-container>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { messageGroup: [{
            type: Input
        }], optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], selectedOption: [{
            type: Input
        }], surroundingClass: [{
            type: Input
        }], horizontalStyle: [{
            type: Input
        }], useCustomLabel: [{
            type: Input
        }], id: [{
            type: Input
        }], hideSpace: [{
            type: Input
        }], clearErrorMessagesFunction: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioComponent, { className: "InputRadioComponent" }); })();

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AbstractDateOfBirthPickerComponent_1;
const _c0$g = ["day"];
const _c1$c = ["year"];
let AbstractDateOfBirthPickerComponent = class AbstractDateOfBirthPickerComponent {
    static { AbstractDateOfBirthPickerComponent_1 = this; }
    translateService;
    static DOB_DAY_REGEX = /^(([0]?[1-9])|([1-2][0-9])|(3[01]))$/;
    static DOB_MONTH_REGEX = /^(0?[1-9]|1[012])$/;
    static DOB_YEAR_REGEX = /^(19|[2-9]\d)\d{2}$/;
    form;
    day;
    year;
    month;
    minDefaultAge;
    dayBasedValidationFeatureFlag = false;
    dayInputField;
    yearInputField;
    MIN_DEFAULT_LEGAL_AGE = 18;
    options;
    MAX_DEFAULT_LEGAL_AGE = 110;
    MOMENT_DATE_FORMAT = 'DD/MM/YYYY';
    set minDefaultLegalAge(value) {
        this.MIN_DEFAULT_LEGAL_AGE = value || value === 0 ? value : 18;
    }
    get minDefaultLegalAge() {
        return this.MIN_DEFAULT_LEGAL_AGE;
    }
    constructor(translateService) {
        this.translateService = translateService;
    }
    ngOnInit() {
        this.options = this.getTranslatedDayOrMonthNames('months').map((month, index) => new InputOption(String(index + 1), String(month)));
        this.form.addControl('day', new FormControl(this.day, {
            validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent_1.DOB_DAY_REGEX)],
            updateOn: 'blur',
        }));
        this.form.addControl('selectedMonth', new FormControl(this.month, {
            validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent_1.DOB_MONTH_REGEX)],
        }));
        this.form.addControl('year', new FormControl(this.year, {
            validators: [Validators.required, Validators.pattern(AbstractDateOfBirthPickerComponent_1.DOB_YEAR_REGEX)],
            updateOn: 'blur',
        }));
        this.detectFormControlsValueChange();
    }
    getTranslatedDayOrMonthNames(type) {
        const noOfDays = type === 'days' ? 7 : 12, key = type === 'days' ? 'general.date-picker-day-' : 'general.date-picker-month-';
        return times(noOfDays, (index) => {
            const monthIndex = index + 1;
            return this.translateService.instant(key + monthIndex);
        });
    }
    detectFormControlsValueChange() {
        this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
            const day = value.day ? value.day : null;
            const month = value.selectedMonth ? value.selectedMonth : null;
            const year = value.year ? value.year : null;
            const selectedDate = dayjs().month(month).date(day).year(year);
            if (!selectedDate.isValid()) {
                this.form.setErrors(null);
            }
            this.validateDayBasedOnMonth();
            if (day && month && year) {
                this.removeValidationErrors();
                this.checkDay(selectedDate);
                this.checkYear();
                this.checkDate(selectedDate, dayjs().add(1, 'months'));
            }
        });
    }
    validateDayBasedOnMonth() {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        let isValid;
        if (this.dayBasedValidationFeatureFlag && this.form.value.day && this.form.value.selectedMonth && this) {
            this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
                const day = Number(value.day);
                const year = Number(value.year);
                const month = Number(value.selectedMonth);
                isValid = year !== 0 ? this.isValidDate(year, month, day) : this.isValidDayForMonth(month, day);
                if (!isValid) {
                    this.dayInputField.setError({ invalidDate: true });
                    this.form.get('day')?.setErrors({ invalidDate: true });
                }
            });
        }
        return isValid;
    }
    isValidDate(year, month, day) {
        const noOfDays = new Date(year, month, 0).getDate();
        const date = new Date(year, month - 1, day);
        return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day && day <= noOfDays;
    }
    isValidDayForMonth(month, day) {
        const noOfDays = new Date(0, month, 0).getDate();
        return day <= noOfDays;
    }
    checkYear() {
        const yearErrors = this.form.get('year')?.errors;
        if (yearErrors?.['pattern']) {
            this.yearInputField.setError({ invalid: true });
            this.form.get('year')?.setErrors({ invalid: true });
        }
    }
    checkDay(selectedDate) {
        const yearErrors = this.form.get('year');
        if (!selectedDate.isValid() && !yearErrors?.errors) {
            this.dayInputField.setError({ invalid: true });
            this.form.get('day')?.setErrors({ invalid: true });
        }
    }
    checkDate(selectedDate, currentDate) {
        const yearErrors = this.form.get('year')?.errors;
        const dayErrors = this.form.get('day')?.errors;
        if (selectedDate.isValid() && !yearErrors && !dayErrors) {
            const maxLegalAge = dayjs(currentDate).add(1, 'months').add(-this.MAX_DEFAULT_LEGAL_AGE, 'years');
            const minLegalAge = dayjs(currentDate).add(1, 'months').add(-this.MIN_DEFAULT_LEGAL_AGE, 'years');
            selectedDate.isAfter(dayjs(minLegalAge));
            if (selectedDate.isAfter(currentDate)) {
                this.setInvalidBirthDateError('ng.dob.error-dob-constraint');
            }
            else if (selectedDate.isBefore(maxLegalAge) || selectedDate.isAfter(minLegalAge)) {
                this.setInvalidBirthDateError('ng.dob.error-age-constraint');
            }
        }
    }
    removeValidationErrors() {
        this.form.setErrors(null);
        this.dayInputField?.setError(null);
        this.form.get('day')?.setErrors(null);
        this.yearInputField.setError(null);
    }
    setInvalidBirthDateError(errorValue) {
        this.form.setErrors({ invalidBirthDate: this.translateService.instant(errorValue) });
    }
    static ɵfac = function AbstractDateOfBirthPickerComponent_Factory(t) { return new (t || AbstractDateOfBirthPickerComponent)(i0.ɵɵdirectiveInject(i3.TranslateService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractDateOfBirthPickerComponent, selectors: [["tg-abstract-date-of-birth-picker-with-dropdown-input"]], viewQuery: function AbstractDateOfBirthPickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$g, 5);
            i0.ɵɵviewQuery(_c1$c, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dayInputField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.yearInputField = _t.first);
        } }, inputs: { form: "form", day: "day", year: "year", month: "month", minDefaultAge: "minDefaultAge", dayBasedValidationFeatureFlag: "dayBasedValidationFeatureFlag", minDefaultLegalAge: "minDefaultLegalAge" }, decls: 1, vars: 0, template: function AbstractDateOfBirthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Do not use the abstract component!\n");
        } }, encapsulation: 2 });
};
AbstractDateOfBirthPickerComponent = AbstractDateOfBirthPickerComponent_1 = __decorate$2([
    UntilDestroy()
], AbstractDateOfBirthPickerComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractDateOfBirthPickerComponent, [{
        type: Component,
        args: [{ selector: 'tg-abstract-date-of-birth-picker-with-dropdown-input', template: "Do not use the abstract component!\n" }]
    }], () => [{ type: i3.TranslateService }], { form: [{
            type: Input
        }], day: [{
            type: Input
        }], year: [{
            type: Input
        }], month: [{
            type: Input
        }], minDefaultAge: [{
            type: Input
        }], dayBasedValidationFeatureFlag: [{
            type: Input
        }], dayInputField: [{
            type: ViewChild,
            args: ['day']
        }], yearInputField: [{
            type: ViewChild,
            args: ['year']
        }], minDefaultLegalAge: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractDateOfBirthPickerComponent, { className: "AbstractDateOfBirthPickerComponent" }); })();

const _c0$f = (a0, a1) => ({ labelStyle: a0, "text-flow--label": a1 });
function InputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0$f, ctx_r0.labelStyle, !ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function InputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r1.messageGroup + ".error." + ctx_r1.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r1.getText()), " ");
} }
const _c1$b = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
class InputComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    showPlaceHolder = true;
    labelStyle;
    customLabel;
    hideLabel = false;
    prefix;
    mask;
    disabled = false;
    required = true;
    maxLength;
    showError = true;
    changeInput = new EventEmitter();
    value;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        return super.getLabel(this.customLabel);
    }
    getPlaceholder() {
        return super.getPlaceholder(this.customLabel);
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouched = () => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onChange(value);
        this.changeInput.emit(value);
    }
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.value });
        this.onTouched();
    }
    static ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["tg-form-input"]], inputs: { showPlaceHolder: "showPlaceHolder", labelStyle: "labelStyle", customLabel: "customLabel", hideLabel: "hideLabel", prefix: "prefix", mask: "mask", disabled: "disabled", required: "required", maxLength: "maxLength", showError: "showError" }, outputs: { changeInput: "changeInput" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 20, consts: [[1, "form-group"], [3, "ngClass", 4, "ngIf"], ["type", "text", 1, "Form__input", "form-control", 3, "id", "ngClass", "required", "mask", "dropSpecialCharacters", "name", "prefix", "ngModel", "disabled", "placeholder", "maxlength", "blur", "ngModelChange"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, InputComponent_div_1_Template, 4, 8, "div", 1);
            i0.ɵɵelementStart(2, "input", 2);
            i0.ɵɵlistener("blur", function InputComponent_Template_input_blur_2_listener() { return ctx.onBlur(); })("ngModelChange", function InputComponent_Template_input_ngModelChange_2_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputComponent_div_4_Template, 3, 4, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideLabel);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("mask", ctx.mask && ctx.mask.maskValue);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵpropertyInterpolate("maxlength", ctx.maxLength);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(17, _c1$b, ctx.disabled, ctx.error))("required", ctx.required)("dropSpecialCharacters", ctx.mask && ctx.mask.dropSpecialCharacters)("prefix", ctx.prefix || "")("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(3, 15, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error && ctx.showError);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.MaxLengthValidator, i2.NgModel, i5.NgxMaskDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group\">\n  <div *ngIf=\"!hideLabel\" [ngClass]=\"{labelStyle: this.labelStyle, 'text-flow--label': !labelStyle}\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate}}</label>\n  </div>\n  <input\n    id=\"{{ key }}\"\n    type=\"text\"\n    class=\"Form__input form-control\"\n    [ngClass]=\"{'form__input--disabled' : disabled, 'form__input--error': error}\"\n    [required]=\"required\"\n    mask=\"{{ mask && mask.maskValue }}\"\n    [dropSpecialCharacters]=\"mask && mask.dropSpecialCharacters\"\n    name=\"{{ key }}\"\n    [prefix]=\"prefix || ''\"\n    (blur)=\"onBlur()\"\n    (ngModelChange)=\"updateValue($event)\"\n    [(ngModel)]=\"value\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n    [class.ng-invalid-custom]=\"error\"\n    maxlength=\"{{ maxLength }}\" />\n  <div\n    [attr.data-cy]=\"messageGroup + '.error.' + key\"\n    class=\"formErrorInput Form__input__invalid-message\"\n    *ngIf=\"error && showError\">\n    {{ getText() | translate}}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { showPlaceHolder: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], prefix: [{
            type: Input
        }], mask: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], showError: [{
            type: Input
        }], changeInput: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputComponent, { className: "InputComponent" }); })();

function DateOfBirthPickerComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "day-field-required-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-day-required"), " ");
} }
function DateOfBirthPickerComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "day-invalid-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-day-invalid"), " ");
} }
function DateOfBirthPickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, DateOfBirthPickerComponent_div_6_div_1_Template, 3, 4, "div", 19)(2, DateOfBirthPickerComponent_div_6_div_2_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.form.controls["day"].errors == null ? null : ctx_r1.form.controls["day"].errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.form.controls["day"].errors == null ? null : ctx_r1.form.controls["day"].errors["invalidDate"]);
} }
function DateOfBirthPickerComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵpipe(1, "number");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind1(1, 2, option_r10.value));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", option_r10.label, " ");
} }
function DateOfBirthPickerComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "month-of-birth-field-required-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-month-required"), " ");
} }
function DateOfBirthPickerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, DateOfBirthPickerComponent_div_17_div_1_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.form.controls["selectedMonth"].errors == null ? null : ctx_r4.form.controls["selectedMonth"].errors["required"]);
} }
function DateOfBirthPickerComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-cy", "year-of-birth-field-required-error");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "ng.dob.error-year-required"), " ");
} }
function DateOfBirthPickerComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, DateOfBirthPickerComponent_div_21_div_1_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r6.form.controls["year"].errors == null ? null : ctx_r6.form.controls["year"].errors["required"]);
} }
function DateOfBirthPickerComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", "year-of-birth-field-invalid-error");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.form.errors == null ? null : ctx_r7.form.errors["invalidBirthDate"], " ");
} }
const _c0$e = () => ({ maskValue: "d0", dropSpecialCharacters: true });
const _c1$a = () => ({ maskValue: "0000", dropSpecialCharacters: true });
class DateOfBirthPickerComponent extends AbstractDateOfBirthPickerComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵDateOfBirthPickerComponent_BaseFactory; return function DateOfBirthPickerComponent_Factory(t) { return (ɵDateOfBirthPickerComponent_BaseFactory || (ɵDateOfBirthPickerComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DateOfBirthPickerComponent)))(t || DateOfBirthPickerComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateOfBirthPickerComponent, selectors: [["app-date-of-birth-picker"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 25, consts: [[3, "formGroup"], [1, "form-group", "dob-field"], [1, "dob-field__content", "text-align--left"], [1, "date-field-day"], ["labelPrefix", "dob.error", "formControlName", "day", 3, "hideLabel", "required", "showPlaceHolder", "showError", "mask"], ["day", ""], ["class", "formErrorInput", 4, "ngIf"], [1, "form-group", "dob-picker__selectdiv"], [1, "dob-picker__dropdowns", "ml-5"], [1, "select-dropdown-section", "display--flex"], ["id", "dob-month-mobile", "name", "dob-month-mobile", "formControlName", "selectedMonth", 1, "form-control", "select-dropdown", "mb-0"], ["selectedMonth", ""], ["value", "", "hidden", "", 1, "placeholder-option", 3, "selected"], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "icon", "icon-chevron-down", "position--absolute", "text--m", "text-weight--g"], [1, "date-field-year"], ["formControlName", "year", "labelPrefix", "dob.error", 3, "required", "hideLabel", "showPlaceHolder", "showError", "mask"], ["year", ""], [1, "formErrorInput"], ["class", "text--s", 4, "ngIf"], [1, "text--s"], ["selected", "", 3, "value"], [1, "text--s", "mt-5"]], template: function DateOfBirthPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "tg-form-input", 4, 5);
            i0.ɵɵtemplate(6, DateOfBirthPickerComponent_div_6_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "select", 10, 11)(12, "option", 12);
            i0.ɵɵtext(13);
            i0.ɵɵpipe(14, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, DateOfBirthPickerComponent_option_15_Template, 3, 4, "option", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, DateOfBirthPickerComponent_div_17_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 15);
            i0.ɵɵelement(19, "tg-form-input", 16, 17);
            i0.ɵɵtemplate(21, DateOfBirthPickerComponent_div_21_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(22, DateOfBirthPickerComponent_div_22_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("hideLabel", true)("required", true)("showPlaceHolder", true)("showError", false)("mask", i0.ɵɵpureFunction0(23, _c0$e));
            i0.ɵɵattribute("data-cy", "day-of-birth-field");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.controls["day"].errors && ctx.form.controls["day"].touched);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("data-cy", "month-of-birth-field");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("selected", true);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 21, "ng.dob.lbl.select-month-placeholder"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.options);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.controls["selectedMonth"].errors && ctx.form.controls["selectedMonth"].touched);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("required", true)("hideLabel", true)("showPlaceHolder", true)("showError", false)("mask", i0.ɵɵpureFunction0(24, _c1$a));
            i0.ɵɵattribute("data-cy", "year-of-birth-field");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.controls["year"].errors && ctx.form.controls["year"].touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.form.errors == null ? null : ctx.form.errors["invalidBirthDate"]);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName, InputComponent, FormDirective, i1$1.DecimalPipe, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateOfBirthPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-date-of-birth-picker', template: "<form [formGroup]=\"form\">\n  <div class=\"form-group dob-field\">\n    <div class=\"dob-field__content text-align--left\">\n      <div class=\"date-field-day\">\n        <tg-form-input\n          #day\n          labelPrefix=\"dob.error\"\n          formControlName=\"day\"\n          [attr.data-cy]=\"'day-of-birth-field'\"\n          [hideLabel]=\"true\"\n          [required]=\"true\"\n          [showPlaceHolder]=\"true\"\n          [showError]=\"false\"\n          [mask]=\"{ maskValue: 'd0', dropSpecialCharacters: true }\">\n        </tg-form-input>\n        <div class=\"formErrorInput\" *ngIf=\"form.controls['day'].errors && form.controls['day'].touched\">\n          <div\n            class=\"text--s\"\n            *ngIf=\"form.controls['day'].errors?.['required']\"\n            [attr.data-cy]=\"'day-field-required-error'\">\n            {{ 'ng.dob.error-day-required' | translate }}\n          </div>\n          <div\n            class=\"text--s\"\n            [attr.data-cy]=\"'day-invalid-error'\"\n            *ngIf=\"form.controls['day'].errors?.['invalidDate']\">\n            {{ 'ng.dob.error-day-invalid' | translate }}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group dob-picker__selectdiv\">\n        <div class=\"dob-picker__dropdowns ml-5\">\n          <div class=\"select-dropdown-section display--flex\">\n            <select\n              #selectedMonth\n              id=\"dob-month-mobile\"\n              class=\"form-control select-dropdown mb-0\"\n              name=\"dob-month-mobile\"\n              formControlName=\"selectedMonth\"\n              [attr.data-cy]=\"'month-of-birth-field'\">\n              <option value=\"\" class=\"placeholder-option\" [selected]=\"true\" hidden>\n                {{ 'ng.dob.lbl.select-month-placeholder' | translate }}\n              </option>\n              <option selected *ngFor=\"let option of options\" value=\"{{ option.value | number }}\">\n                {{ option.label }}\n              </option>\n            </select>\n            <div class=\"icon icon-chevron-down position--absolute text--m text-weight--g\"></div>\n          </div>\n          <div\n            class=\"formErrorInput\"\n            *ngIf=\"form.controls['selectedMonth'].errors && form.controls['selectedMonth'].touched\">\n            <div\n              class=\"text--s\"\n              [attr.data-cy]=\"'month-of-birth-field-required-error'\"\n              *ngIf=\"form.controls['selectedMonth'].errors?.['required']\">\n              {{ 'ng.dob.error-month-required' | translate }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"date-field-year\">\n        <tg-form-input\n          #year\n          [required]=\"true\"\n          [hideLabel]=\"true\"\n          formControlName=\"year\"\n          [attr.data-cy]=\"'year-of-birth-field'\"\n          [showPlaceHolder]=\"true\"\n          [showError]=\"false\"\n          labelPrefix=\"dob.error\"\n          [mask]=\"{ maskValue: '0000', dropSpecialCharacters: true }\">\n        </tg-form-input>\n        <div class=\"formErrorInput\" *ngIf=\"form.controls['year'].errors && form.controls['year'].touched\">\n          <div\n            class=\"text--s\"\n            *ngIf=\"form.controls['year'].errors?.['required']\"\n            [attr.data-cy]=\"'year-of-birth-field-required-error'\">\n            {{ 'ng.dob.error-year-required' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      class=\"formErrorInput\"\n      [attr.data-cy]=\"'year-of-birth-field-invalid-error'\"\n      *ngIf=\"this.form.errors?.['invalidBirthDate']\">\n      <div class=\"text--s mt-5\">\n        {{ this.form.errors?.['invalidBirthDate'] }}\n      </div>\n    </div>\n  </div>\n</form>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DateOfBirthPickerComponent, { className: "DateOfBirthPickerComponent" }); })();

class AbstractDropdownComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    showPlaceHolder = true;
    optionList = [];
    customLabel = false;
    labelStyle = 'label-input-flow';
    value = '';
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange = (_) => {
        // This is intentional
    };
    onTouched = (_) => {
        // This is intentional
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        // This is intentional
    }
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    updateValue(value) {
        this.trackingEvent.emit({
            label: this.getLabel(),
            value: value?.toString() || '',
            type: DatalayerEventNames.OPTION_SELECTED,
        });
        this.onTouched(true);
        this.onChange(value);
    }
    static ɵfac = function AbstractDropdownComponent_Factory(t) { return new (t || AbstractDropdownComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractDropdownComponent, selectors: [["abstract-dropdown-component"]], inputs: { showPlaceHolder: "showPlaceHolder", optionList: "optionList", customLabel: "customLabel", labelStyle: "labelStyle" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AbstractDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Do not use the abstract component!\n");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractDropdownComponent, [{
        type: Component,
        args: [{ selector: 'abstract-dropdown-component', template: "Do not use the abstract component!\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { showPlaceHolder: [{
            type: Input
        }], optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractDropdownComponent, { className: "AbstractDropdownComponent" }); })();

function DropdownComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "label", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.labelStyle);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
} }
function DropdownComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", option_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r3.label, " ");
} }
function DropdownComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.getText()), " ");
} }
class DropdownComponent extends AbstractDropdownComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵDropdownComponent_BaseFactory; return function DropdownComponent_Factory(t) { return (ɵDropdownComponent_BaseFactory || (ɵDropdownComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DropdownComponent)))(t || DropdownComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["tg-form-dropdown"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropdownComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 10, consts: [[1, "form-group"], [4, "ngIf"], [1, "select-dropdown-section", 2, "border-bottom", "0"], ["required", "required", 1, "form-control", "select-dropdown", 3, "ngModel", "id", "name", "ngModelChange"], ["selected", "", "value", "", 1, "placeholder-option", 3, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [1, "icon", "icon-chevron-down", "position--absolute", "text--m", "text-weight--g"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "text-flow--label", 3, "for"], [3, "value"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropdownComponent_div_1_Template, 5, 7, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "select", 3);
            i0.ɵɵlistener("ngModelChange", function DropdownComponent_Template_select_ngModelChange_3_listener($event) { return ctx.updateValue($event); })("ngModelChange", function DropdownComponent_Template_select_ngModelChange_3_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementStart(4, "option", 4);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, DropdownComponent_option_7_Template, 2, 2, "option", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "div", 6);
            i0.ɵɵtemplate(9, DropdownComponent_div_9_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵproperty("hidden", !ctx.showPlaceHolder);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 8, ctx.getPlaceholder()), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group\">\n  <div *ngIf=\"customLabel\">\n    <div class=\"{{ labelStyle }}\">\n      <label class=\"text-flow--label\" for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n    </div>\n  </div>\n  <div class=\"select-dropdown-section\" style=\"border-bottom: 0\">\n    <select\n      (ngModelChange)=\"updateValue($event)\"\n      [(ngModel)]=\"value\"\n      class=\"form-control select-dropdown\"\n      id=\"{{ key }}\"\n      name=\"{{ key }}\"\n      required=\"required\">\n      <option class=\"placeholder-option\" [hidden]=\"!showPlaceHolder\" selected value=\"\">\n        {{ getPlaceholder() | translate }}\n      </option>\n      <option *ngFor=\"let option of optionList; let i = index\" value=\"{{ option.value }}\">\n        {{ option.label }}\n      </option>\n    </select>\n    <div class=\"icon icon-chevron-down position--absolute text--m text-weight--g\"></div>\n    <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n      {{ getText() | translate }}\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownComponent, { className: "DropdownComponent" }); })();

const _c0$d = a0 => ({ labelStyle: a0 });
function DropDownWithChipsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "label", 10);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0$d, ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function DropDownWithChipsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11)(1, "span", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 13);
    i0.ɵɵlistener("click", function DropDownWithChipsComponent_li_5_Template_a_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const selectedOption_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.removeOption(selectedOption_r4)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selectedOption_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(selectedOption_r4.label);
} }
function DropDownWithChipsComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵlistener("mousedown", function DropDownWithChipsComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const option_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.updateValue(option_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r8.label, " ");
} }
function DropDownWithChipsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "ul", 15);
    i0.ɵɵtemplate(2, DropDownWithChipsComponent_div_7_li_2_Template, 2, 1, "li", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.sortBy("label"));
} }
function DropDownWithChipsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r3.getText()), " ");
} }
class DropDownWithChipsComponent extends AbstractDropdownComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    shouldShowDropdown = false;
    disabled = false;
    required;
    dropDownValues = [];
    selectedOptions = [];
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
        this.dropDownValues = this.sortBy('label');
    }
    reset() {
        this.optionList = [...this.optionList, ...this.selectedOptions];
        this.selectedOptions = [];
    }
    updateValue(option) {
        this.selectedOptions.push(option);
        this.writeValues();
        this.toggle();
        this.dropDownValues = this.sortBy('label');
    }
    writeValues() {
        const selectedValues = [];
        if (this.selectedOptions !== null) {
            this.selectedOptions.forEach((option) => {
                selectedValues.push(option.value);
                this.optionList.splice(this.optionList.indexOf(option), 1);
            });
        }
        this.control.control?.setValue(selectedValues);
    }
    writeValue(value) {
        if (value === null) {
            this.reset();
        }
        this.value = value || '';
    }
    focusOut() {
        if (this.shouldShowDropdown) {
            if (this.control.control) {
                this.control.control.markAllAsTouched();
            }
            this.checkErrors();
            this.shouldShowDropdown = false;
        }
    }
    toggle() {
        this.shouldShowDropdown = !this.shouldShowDropdown;
    }
    checkErrors() {
        if (this.control.control && this.control.control.errors) {
            this.error = Object.keys(this.control.control.errors)[0];
        }
    }
    removeOption(selectedOption) {
        this.optionList.push(selectedOption);
        const optionIndex = this.selectedOptions.indexOf(selectedOption);
        this.selectedOptions.splice(optionIndex, 1);
        this.writeValues();
    }
    sortBy(prop) {
        return this.optionList.sort((a, b) => this.compareObjectProperties(a, b, prop));
    }
    compareObjectProperties(objA, objB, prop) {
        if (objA[prop] > objB[prop]) {
            return 1;
        }
        else if (objA[prop] === objB[prop]) {
            return 0;
        }
        else {
            return -1;
        }
    }
    static ɵfac = function DropDownWithChipsComponent_Factory(t) { return new (t || DropDownWithChipsComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropDownWithChipsComponent, selectors: [["tg-form-dropdown-with-chips"]], inputs: { disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropDownWithChipsComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 5, consts: [[1, "form-group", "position--relative"], [3, "ngClass", 4, "ngIf"], [1, "ui-select-container", "ui-select-multiple", "select2", "select2-container", "select2-container-multi"], [1, "select2-choices"], [1, "ui-select-match", 3, "click"], ["class", "ui-select-match-item select2-search-choice display--flex align-items--center", 4, "ngFor", "ngForOf"], [1, "icon", "fl-right", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "ui-select-match-item", "select2-search-choice", "display--flex", "align-items--center"], [1, "mx--xs"], [1, "ui-select-match-close", "select2-search-choice-close", 3, "click"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropDownWithChipsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropDownWithChipsComponent_div_1_Template, 4, 7, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "ul", 3)(4, "span", 4);
            i0.ɵɵlistener("click", function DropDownWithChipsComponent_Template_span_click_4_listener() { return ctx.toggle(); });
            i0.ɵɵtemplate(5, DropDownWithChipsComponent_li_5_Template, 4, 1, "li", 5);
            i0.ɵɵelement(6, "div", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(7, DropDownWithChipsComponent_div_7_Template, 3, 1, "div", 7)(8, DropDownWithChipsComponent_div_8_Template, 3, 3, "div", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.selectedOptions);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropDownWithChipsComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-chips', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropDownWithChipsComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div *ngIf=\"customLabel\" [ngClass]=\"{ labelStyle: this.labelStyle }\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n  </div>\n  <div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\">\n    <ul class=\"select2-choices\">\n      <span class=\"ui-select-match\" (click)=\"toggle()\">\n        <li\n          class=\"ui-select-match-item select2-search-choice display--flex align-items--center\"\n          *ngFor=\"let selectedOption of selectedOptions\">\n          <span class=\"mx--xs\">{{ selectedOption.label }}</span>\n          <a class=\"ui-select-match-close select2-search-choice-close\" (click)=\"removeOption(selectedOption)\"></a>\n        </li>\n        <div\n          class=\"icon fl-right text--m text-weight--g\"\n          [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n      </span>\n    </ul>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of sortBy('label')\"\n        (mousedown)=\"updateValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.label }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropDownWithChipsComponent, { className: "DropDownWithChipsComponent" }); })();

const _c0$c = a0 => ({ labelStyle: a0 });
function DropdownWithInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "label", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c0$c, ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function DropdownWithInputComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("mousedown", function DropdownWithInputComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.updateValue(option_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r4.value, " ");
} }
function DropdownWithInputComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "ul", 11);
    i0.ɵɵtemplate(2, DropdownWithInputComponent_div_7_li_2_Template, 2, 1, "li", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.optionList);
} }
function DropdownWithInputComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.getText()), " ");
} }
const _c1$9 = a0 => ({ "form__input--disabled": a0 });
const _c2$4 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
class DropdownWithInputComponent extends AbstractDropdownComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    shouldShowDropdown;
    disabled = false;
    required;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    updateValue(option) {
        this.writeValue(option.value);
        this.onChange(option.value);
        this.toggle();
    }
    focusOut() {
        if (this.shouldShowDropdown) {
            if (this.control.control) {
                this.control.control.markAllAsTouched();
            }
            this.checkErrors();
            this.toggle();
        }
    }
    toggle() {
        this.shouldShowDropdown = !this.shouldShowDropdown;
    }
    checkErrors() {
        if (this.control.control && this.control.control.errors) {
            this.error = Object.keys(this.control.control.errors)[0];
        }
    }
    static ɵfac = function DropdownWithInputComponent_Factory(t) { return new (t || DropdownWithInputComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownWithInputComponent, selectors: [["tg-form-dropdown-with-input"]], inputs: { disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropdownWithInputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 21, consts: [[1, "form-group", "position--relative"], [3, "ngClass", 4, "ngIf"], [1, "select-dropdown-section", "default"], [1, "form-control", "select-dropdown", "p--n", 3, "ngClass", "click"], ["type", "text", "readonly", "", 1, "form__input", "form-control", "cursor--pointer", "ellipsis", 3, "id", "name", "ngModel", "disabled", "required", "placeholder", "ngClass", "ngModelChange", "focusout"], [1, "icon", "position--absolute", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropdownWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropdownWithInputComponent_div_1_Template, 4, 7, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵlistener("click", function DropdownWithInputComponent_Template_div_click_3_listener() { return ctx.toggle(); });
            i0.ɵɵelementStart(4, "input", 4);
            i0.ɵɵlistener("ngModelChange", function DropdownWithInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("focusout", function DropdownWithInputComponent_Template_input_focusout_4_listener() { return ctx.focusOut(); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DropdownWithInputComponent_div_7_Template, 3, 1, "div", 6)(8, DropdownWithInputComponent_div_8_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(16, _c1$9, ctx.disabled));
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("required", ctx.required)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(5, 14, ctx.getPlaceholder()) : "")("ngClass", i0.ɵɵpureFunction2(18, _c2$4, ctx.disabled, ctx.error));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-input', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownWithInputComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div *ngIf=\"customLabel\" [ngClass]=\"{ labelStyle: this.labelStyle }\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n  </div>\n  <div class=\"select-dropdown-section default\">\n    <div class=\"form-control select-dropdown p--n\" [ngClass]=\"{ 'form__input--disabled': disabled }\" (click)=\"toggle()\">\n      <input\n        id=\"{{ key }}\"\n        type=\"text\"\n        class=\"form__input form-control cursor--pointer ellipsis\"\n        name=\"{{ key }}\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n        [class.ng-invalid-custom]=\"error\"\n        (focusout)=\"focusOut()\"\n        [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n        readonly />\n      <div\n        class=\"icon position--absolute text--m text-weight--g\"\n        [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of optionList\"\n        (mousedown)=\"updateValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.value }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownWithInputComponent, { className: "DropdownWithInputComponent" }); })();

function DropdownWithTooltipComponent_div_1_label_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r3.getLabel() + ".optional"));
} }
const _c0$b = a0 => ({ labelStyle: a0 });
function DropdownWithTooltipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div")(2, "label", 9);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 10)(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13)(9, "div", 14)(10, "div", 15)(11, "div", 16);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵtemplate(14, DropdownWithTooltipComponent_div_1_label_14_Template, 3, 3, "label", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c0$b, ctx_r0.labelStyle));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 7, ctx_r0.getTooltip()), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.required);
} }
function DropdownWithTooltipComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 22);
    i0.ɵɵlistener("mousedown", function DropdownWithTooltipComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.updateValue(option_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r5.label, " ");
} }
function DropdownWithTooltipComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "ul", 20);
    i0.ɵɵtemplate(2, DropdownWithTooltipComponent_div_7_li_2_Template, 2, 1, "li", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.optionList);
} }
function DropdownWithTooltipComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.getText()), " ");
} }
const _c1$8 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
class DropdownWithTooltipComponent extends AbstractDropdownComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    shouldShowDropdown;
    disabled = false;
    required;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    updateValue(option) {
        this.writeValue(option.value);
        this.onChange(option.value);
        this.toggle();
    }
    focusOut() {
        if (this.shouldShowDropdown) {
            if (this.control.control) {
                this.control.control.markAllAsTouched();
            }
            this.checkErrors();
            this.toggle();
        }
    }
    toggle() {
        this.shouldShowDropdown = !this.shouldShowDropdown;
    }
    checkErrors() {
        if (this.control.control && this.control.control.errors) {
            this.error = Object.keys(this.control.control.errors)[0];
        }
    }
    static ɵfac = function DropdownWithTooltipComponent_Factory(t) { return new (t || DropdownWithTooltipComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownWithTooltipComponent, selectors: [["tg-form-dropdown-with-tooltip"]], inputs: { disabled: "disabled", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DropdownWithTooltipComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 18, consts: [[1, "form-group", "position--relative"], ["class", "display--flex align-items--center justify-content--between", 3, "ngClass", 4, "ngIf"], [1, "select-dropdown-section", "default"], [1, "form-control", "select-dropdown", "p--n"], ["type", "text", "readonly", "", 1, "form__input", "form-control", "cursor--pointer", "ellipsis", 3, "id", "ngClass", "name", "ngModel", "disabled", "required", "placeholder", "ngModelChange", "focusout", "click"], [1, "icon", "position--absolute", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "display--flex", "align-items--center", "justify-content--between", 3, "ngClass"], [3, "for"], [1, "tooltip", "position--relative", "display--inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], ["class", "fl-right", 4, "ngIf"], [1, "fl-right"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function DropdownWithTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DropdownWithTooltipComponent_div_1_Template, 15, 11, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "input", 4);
            i0.ɵɵlistener("ngModelChange", function DropdownWithTooltipComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("focusout", function DropdownWithTooltipComponent_Template_input_focusout_4_listener() { return ctx.focusOut(); })("click", function DropdownWithTooltipComponent_Template_input_click_4_listener() { return ctx.toggle(); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DropdownWithTooltipComponent_div_7_Template, 3, 1, "div", 6)(8, DropdownWithTooltipComponent_div_8_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c1$8, ctx.disabled, ctx.error))("ngModel", ctx.value)("disabled", ctx.disabled)("required", ctx.required)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(5, 13, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownWithTooltipComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-tooltip', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownWithTooltipComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div\n    *ngIf=\"customLabel\"\n    [ngClass]=\"{ labelStyle: this.labelStyle }\"\n    class=\"display--flex align-items--center justify-content--between\">\n    <div>\n      <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n      <div class=\"tooltip position--relative display--inline-block\">\n        <div\n          class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n          <i class=\"icon icon-information-shape\"></i>\n        </div>\n        <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n          <div class=\"horizontal-center-align\">\n            <div class=\"info-section__description\">\n              <div class=\"info-section__description__text\">\n                {{ getTooltip() | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <label class=\"fl-right\" *ngIf=\"!required\">{{ getLabel() + '.optional' | translate }}</label>\n  </div>\n  <div class=\"select-dropdown-section default\">\n    <div class=\"form-control select-dropdown p--n\">\n      <input\n        id=\"{{ key }}\"\n        type=\"text\"\n        [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n        class=\"form__input form-control cursor--pointer ellipsis\"\n        name=\"{{ key }}\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n        [class.ng-invalid-custom]=\"error\"\n        (focusout)=\"focusOut()\"\n        (click)=\"toggle()\"\n        readonly />\n      <div\n        class=\"icon position--absolute text--m text-weight--g\"\n        [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of optionList\"\n        (mousedown)=\"updateValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.label }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DropdownWithTooltipComponent, { className: "DropdownWithTooltipComponent" }); })();

const _c0$a = ["selectDropdown"];
const _c1$7 = ["allSelected"];
function MatMultipleSelectWithInputComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵelement(2, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15)(4, "div", 16)(5, "div", 17)(6, "div", 18);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 1, ctx_r5.getTooltip()), " ");
} }
function MatMultipleSelectWithInputComponent_div_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r6.getLabel() + ".optional"));
} }
const _c2$3 = a0 => ({ labelStyle: a0 });
function MatMultipleSelectWithInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div")(2, "label", 9);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MatMultipleSelectWithInputComponent_div_1_div_5_Template, 9, 3, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MatMultipleSelectWithInputComponent_div_1_label_6_Template, 3, 3, "label", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c2$3, ctx_r0.labelStyle));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.toolTipRequired);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.required);
} }
function MatMultipleSelectWithInputComponent_mat_select_trigger_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-select-trigger", 20)(1, "span", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedOptionsCount);
} }
function MatMultipleSelectWithInputComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 22);
    i0.ɵɵlistener("click", function MatMultipleSelectWithInputComponent_mat_option_10_Template_mat_option_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.updateValueAndPreventClosing($event)); })("touchstart", function MatMultipleSelectWithInputComponent_mat_option_10_Template_mat_option_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.updateValueAndPreventClosing($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r7);
    i0.ɵɵattribute("data-cy", ctx_r4.messageGroup + ".mat-select." + ctx_r4.key + ".option." + option_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r7.label);
} }
class MatMultipleSelectWithInputComponent extends AbstractDropdownComponent {
    multiSelect;
    allSelectedOption;
    selectedOptions = [];
    toolTipRequired = false;
    required = true;
    selectedOptionsCount;
    ngOnChanges() {
        this.writeValues();
    }
    updateValueAndPreventClosing(event) {
        this.preventClosing(event);
        this.writeValues();
        if (this.allSelectedOption.selected) {
            this.multiSelect.options.first.deselect();
        }
    }
    toggleAllSelection(event) {
        this.preventClosing(event);
        if (this.allSelectedOption.selected) {
            this.multiSelect.options.forEach((item) => item.select());
        }
        else {
            this.multiSelect.options.forEach((item) => item.deselect());
        }
        this.writeValues();
    }
    handleOutsideClick(event) {
        if (this.multiSelect && !this.multiSelect._elementRef.nativeElement.contains(event.target)) {
            this.multiSelect.close();
        }
    }
    preventClosing(event) {
        event.stopPropagation();
    }
    writeValues() {
        const selectedValues = [];
        this.selectedOptions?.forEach((option) => {
            if (!isEmpty(option)) {
                selectedValues.push(option.value);
            }
        });
        this.selectedOptionsCount = selectedValues.length;
        this.control?.control?.setValue(selectedValues);
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵMatMultipleSelectWithInputComponent_BaseFactory; return function MatMultipleSelectWithInputComponent_Factory(t) { return (ɵMatMultipleSelectWithInputComponent_BaseFactory || (ɵMatMultipleSelectWithInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(MatMultipleSelectWithInputComponent)))(t || MatMultipleSelectWithInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatMultipleSelectWithInputComponent, selectors: [["tg-form-dropdown-with-multiple-select"]], viewQuery: function MatMultipleSelectWithInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$a, 5);
            i0.ɵɵviewQuery(_c1$7, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiSelect = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allSelectedOption = _t.first);
        } }, hostBindings: function MatMultipleSelectWithInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MatMultipleSelectWithInputComponent_click_HostBindingHandler($event) { return ctx.handleOutsideClick($event); }, false, i0.ɵɵresolveDocument)("touchstart", function MatMultipleSelectWithInputComponent_touchstart_HostBindingHandler($event) { return ctx.handleOutsideClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { selectedOptions: "selectedOptions", toolTipRequired: "toolTipRequired", required: "required" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MatMultipleSelectWithInputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 11, vars: 12, consts: [["appearance", "fill", 1, "width--full", "mat-select-multiple"], ["class", "display--flex align-items--center justify-content--between", 3, "ngClass", 4, "ngIf"], ["multiple", "", 3, "ngModel", "placeholder", "ngModelChange"], ["selectDropdown", ""], ["class", "background-yellow border-radius--all--l py--xxxs px--m", 4, "ngIf"], [3, "click", "touchstart"], ["allSelected", ""], [3, "value", "click", "touchstart", 4, "ngFor", "ngForOf"], [1, "display--flex", "align-items--center", "justify-content--between", 3, "ngClass"], [3, "for"], ["class", "tooltip position--relative inline-block", 4, "ngIf"], ["class", "fl-right", 4, "ngIf"], [1, "tooltip", "position--relative", "inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], [1, "fl-right"], [1, "background-yellow", "border-radius--all--l", "py--xxxs", "px--m"], [1, "text--s"], [3, "value", "click", "touchstart"]], template: function MatMultipleSelectWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵtemplate(1, MatMultipleSelectWithInputComponent_div_1_Template, 7, 9, "div", 1);
            i0.ɵɵelementStart(2, "mat-select", 2, 3);
            i0.ɵɵlistener("ngModelChange", function MatMultipleSelectWithInputComponent_Template_mat_select_ngModelChange_2_listener($event) { return ctx.selectedOptions = $event; });
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵtemplate(5, MatMultipleSelectWithInputComponent_mat_select_trigger_5_Template, 3, 1, "mat-select-trigger", 4);
            i0.ɵɵelementStart(6, "mat-option", 5, 6);
            i0.ɵɵlistener("click", function MatMultipleSelectWithInputComponent_Template_mat_option_click_6_listener($event) { return ctx.toggleAllSelection($event); })("touchstart", function MatMultipleSelectWithInputComponent_Template_mat_option_touchstart_6_listener($event) { return ctx.toggleAllSelection($event); });
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, MatMultipleSelectWithInputComponent_mat_option_10_Template, 2, 3, "mat-option", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngModel", ctx.selectedOptions)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(4, 8, ctx.getPlaceholder()) : "");
            i0.ɵɵattribute("data-cy", ctx.messageGroup + ".mat-select." + ctx.key);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.selectedOptions.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-cy", ctx.messageGroup + ".mat-select." + ctx.key + ".select-all");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 10, ctx.getLabel() + "-select-all"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i2.NgControlStatus, i2.NgModel, i3$1.MatFormField, i4$1.MatSelect, i4$1.MatSelectTrigger, i5$1.MatOption, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatMultipleSelectWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-with-multiple-select', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatMultipleSelectWithInputComponent),
                        multi: true,
                    },
                ], template: "<mat-form-field class=\"width--full mat-select-multiple\" appearance=\"fill\">\n  <div\n    *ngIf=\"customLabel\"\n    [ngClass]=\"{ labelStyle: this.labelStyle }\"\n    class=\"display--flex align-items--center justify-content--between\">\n    <div>\n      <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n      <div *ngIf=\"toolTipRequired\" class=\"tooltip position--relative inline-block\">\n        <div\n          class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n          <i class=\"icon icon-information-shape\"></i>\n        </div>\n        <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n          <div class=\"horizontal-center-align\">\n            <div class=\"info-section__description\">\n              <div class=\"info-section__description__text\">\n                {{ getTooltip() | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <label class=\"fl-right\" *ngIf=\"!required\">{{ getLabel() + '.optional' | translate }}</label>\n  </div>\n  <mat-select\n    #selectDropdown\n    multiple\n    [attr.data-cy]=\"messageGroup + '.mat-select.' + key\"\n    [(ngModel)]=\"selectedOptions\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\">\n    <mat-select-trigger\n      *ngIf=\"selectedOptions.length > 0\"\n      class=\"background-yellow border-radius--all--l py--xxxs px--m\">\n      <span class=\"text--s\">{{ selectedOptionsCount }}</span>\n    </mat-select-trigger>\n    <mat-option\n      [attr.data-cy]=\"messageGroup + '.mat-select.' + key + '.select-all'\"\n      #allSelected\n      (click)=\"toggleAllSelection($event)\"\n      (touchstart)=\"toggleAllSelection($event)\"\n      >{{ getLabel() + '-select-all' | translate }}</mat-option\n    >\n    <mat-option\n      [attr.data-cy]=\"messageGroup + '.mat-select.' + key + '.option.' + option.value\"\n      (click)=\"updateValueAndPreventClosing($event)\"\n      (touchstart)=\"updateValueAndPreventClosing($event)\"\n      *ngFor=\"let option of optionList\"\n      [value]=\"option\"\n      >{{ option.label }}</mat-option\n    >\n  </mat-select>\n</mat-form-field>\n" }]
    }], null, { multiSelect: [{
            type: ViewChild,
            args: ['selectDropdown']
        }], allSelectedOption: [{
            type: ViewChild,
            args: ['allSelected']
        }], selectedOptions: [{
            type: Input
        }], toolTipRequired: [{
            type: Input
        }], required: [{
            type: Input
        }], handleOutsideClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }, {
            type: HostListener,
            args: ['document:touchstart', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatMultipleSelectWithInputComponent, { className: "MatMultipleSelectWithInputComponent" }); })();

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const _c0$9 = ["selectDropdown"];
function MatSelectWithInputComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12);
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14)(4, "div", 15)(5, "div", 16)(6, "div", 17);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 1, ctx_r5.getTooltip()), " ");
} }
function MatSelectWithInputComponent_div_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r6.getLabel() + ".optional"));
} }
const _c1$6 = a0 => ({ labelStyle: a0 });
function MatSelectWithInputComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "label", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MatSelectWithInputComponent_div_1_div_5_Template, 9, 3, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, MatSelectWithInputComponent_div_1_label_6_Template, 3, 3, "label", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1$6, ctx_r0.labelStyle));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 5, ctx_r0.getLabel()));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.toolTipRequired);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.required);
} }
function MatSelectWithInputComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-option", 19);
} }
function MatSelectWithInputComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-option", 20);
    i0.ɵɵlistener("click", function MatSelectWithInputComponent_mat_option_6_Template_mat_option_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.changeSelectedValue()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r7);
    i0.ɵɵattribute("data-cy", ctx_r3.messageGroup + "." + ctx_r3.key + ".option." + option_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r7.label, " ");
} }
function MatSelectWithInputComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r4.messageGroup + ".error." + ctx_r4.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r4.getText()), "\n");
} }
const _c2$2 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
let MatSelectWithInputComponent = class MatSelectWithInputComponent extends AbstractDropdownComponent {
    select;
    required = true;
    disabled = false;
    toolTipRequired = false;
    selectChange = new EventEmitter();
    selectedOption;
    ngAfterContentInit() {
        this.selectedOption = this.getValueAsInputOption(this.value);
        this.changeControlValue();
        this.control?.control?.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((data) => (this.selectedOption = this.getValueAsInputOption(data)));
    }
    checkErrors() {
        if (this.control.control && this.control.control.errors) {
            this.error = Object.keys(this.control.control.errors)[0];
        }
    }
    getValueAsInputOption(value) {
        return this.optionList?.filter((option) => option.value === value)?.[0];
    }
    changeControlValue() {
        this.control?.control?.setValue(this.selectedOption?.value);
    }
    changeSelectedValue() {
        this.changeControlValue();
        this.selectChange.emit();
    }
    handleOutsideClick(event) {
        if (!this.select._elementRef.nativeElement.contains(event.target)) {
            this.select.close();
        }
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵMatSelectWithInputComponent_BaseFactory; return function MatSelectWithInputComponent_Factory(t) { return (ɵMatSelectWithInputComponent_BaseFactory || (ɵMatSelectWithInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(MatSelectWithInputComponent)))(t || MatSelectWithInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MatSelectWithInputComponent, selectors: [["tg-form-dropdown-single-select"]], viewQuery: function MatSelectWithInputComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$9, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.select = _t.first);
        } }, hostBindings: function MatSelectWithInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function MatSelectWithInputComponent_click_HostBindingHandler($event) { return ctx.handleOutsideClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { required: "required", disabled: "disabled", toolTipRequired: "toolTipRequired" }, outputs: { selectChange: "selectChange" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MatSelectWithInputComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 14, consts: [["appearance", "fill", 1, "width--full"], ["class", "display--flex align-items--center justify-content--between", 3, "ngClass", 4, "ngIf"], [3, "ngModel", "disabled", "ngClass", "placeholder", "ngModelChange", "closed"], ["selectDropdown", ""], ["disabled", "", 4, "ngIf"], ["class", "select-dropdown__options__list cursor---pointer", 3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "display--flex", "align-items--center", "justify-content--between", 3, "ngClass"], [3, "for"], ["class", "tooltip position--relative inline-block", 4, "ngIf"], ["class", "fl-right", 4, "ngIf"], [1, "tooltip", "position--relative", "inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], [1, "fl-right"], ["disabled", ""], [1, "select-dropdown__options__list", "cursor---pointer", 3, "value", "click"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function MatSelectWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵtemplate(1, MatSelectWithInputComponent_div_1_Template, 7, 9, "div", 1);
            i0.ɵɵelementStart(2, "mat-select", 2, 3);
            i0.ɵɵlistener("ngModelChange", function MatSelectWithInputComponent_Template_mat_select_ngModelChange_2_listener($event) { return ctx.selectedOption = $event; })("closed", function MatSelectWithInputComponent_Template_mat_select_closed_2_listener() { return ctx.checkErrors(); });
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵtemplate(5, MatSelectWithInputComponent_mat_option_5_Template, 1, 0, "mat-option", 4)(6, MatSelectWithInputComponent_mat_option_6_Template, 2, 3, "mat-option", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, MatSelectWithInputComponent_div_7_Template, 3, 4, "div", 6);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngModel", ctx.selectedOption)("disabled", ctx.disabled)("ngClass", i0.ɵɵpureFunction2(11, _c2$2, ctx.disabled, ctx.error))("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(4, 9, ctx.getPlaceholder()) : "");
            i0.ɵɵattribute("data-cy", ctx.messageGroup + ".select." + ctx.key);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", (ctx.optionList == null ? null : ctx.optionList.length) === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i2.NgControlStatus, i2.NgModel, i3$1.MatFormField, i4$1.MatSelect, i5$1.MatOption, i3.TranslatePipe], encapsulation: 2 });
};
MatSelectWithInputComponent = __decorate$1([
    UntilDestroy({ checkProperties: true })
], MatSelectWithInputComponent);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSelectWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-dropdown-single-select', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MatSelectWithInputComponent),
                        multi: true,
                    },
                ], template: "<mat-form-field class=\"width--full\" appearance=\"fill\">\n  <div\n    *ngIf=\"customLabel\"\n    [ngClass]=\"{ labelStyle: this.labelStyle }\"\n    class=\"display--flex align-items--center justify-content--between\">\n    <div>\n      <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n      <div *ngIf=\"toolTipRequired\" class=\"tooltip position--relative inline-block\">\n        <div\n          class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n          <i class=\"icon icon-information-shape\"></i>\n        </div>\n        <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n          <div class=\"horizontal-center-align\">\n            <div class=\"info-section__description\">\n              <div class=\"info-section__description__text\">\n                {{ getTooltip() | translate }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <label class=\"fl-right\" *ngIf=\"!required\">{{ getLabel() + '.optional' | translate }}</label>\n  </div>\n  <mat-select\n    #selectDropdown\n    [(ngModel)]=\"selectedOption\"\n    [attr.data-cy]=\"messageGroup + '.select.' + key\"\n    [disabled]=\"disabled\"\n    (closed)=\"checkErrors()\"\n    [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\">\n    <mat-option *ngIf=\"optionList?.length === 0\" disabled></mat-option>\n    <mat-option\n      [attr.data-cy]=\"messageGroup + '.' + key + '.option.' + option.value\"\n      (click)=\"changeSelectedValue()\"\n      class=\"select-dropdown__options__list cursor---pointer\"\n      *ngFor=\"let option of optionList\"\n      [value]=\"option\">\n      {{ option.label }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n<div [attr.data-cy]=\"messageGroup + '.error.' + key\" class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n  {{ getText() | translate }}\n</div>\n" }]
    }], null, { select: [{
            type: ViewChild,
            args: ['selectDropdown']
        }], required: [{
            type: Input
        }], disabled: [{
            type: Input
        }], toolTipRequired: [{
            type: Input
        }], selectChange: [{
            type: Output
        }], handleOutsideClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MatSelectWithInputComponent, { className: "MatSelectWithInputComponent" }); })();

function MonthDropdownComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵlistener("mousedown", function MonthDropdownComponent_div_7_li_2_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectOptionValue(option_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", option_r3.label, " ");
} }
function MonthDropdownComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "ul", 9);
    i0.ɵɵtemplate(2, MonthDropdownComponent_div_7_li_2_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.optionList);
} }
function MonthDropdownComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "ng.dob.error-month-required"), " ");
} }
class MonthDropdownComponent extends DropdownWithInputComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    month;
    optionLabel = '';
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        if (changes['month'] && changes['month'].currentValue !== changes['month'].previousValue) {
            const defaultInputOption = this.optionList.find((option) => Number(option.value) === this.month);
            this.optionLabel = defaultInputOption ? defaultInputOption.label : '';
        }
    }
    selectOptionValue(option) {
        this.optionLabel = option.label;
        this.updateValue(option);
    }
    static ɵfac = function MonthDropdownComponent_Factory(t) { return new (t || MonthDropdownComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthDropdownComponent, selectors: [["app-month-dropdown"]], inputs: { month: "month" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => MonthDropdownComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 9, vars: 13, consts: [[1, "form-group", "position--relative"], [1, "select-dropdown-section", "default"], [1, "form-control", "select-dropdown", "p--n"], ["type", "hidden", "readonly", "", 3, "ngModel", "ngModelChange"], ["type", "text", "readonly", "", "required", "", 1, "Form__input", "form-control", "cursor--pointer", 3, "id", "name", "value", "disabled", "placeholder", "focusout", "click"], [1, "icon", "position--absolute", "text--m", "text-weight--g", 3, "ngClass"], ["class", "select-dropdown__options position--absolute width--full", 4, "ngIf"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [1, "select-dropdown__options", "position--absolute", "width--full"], [1, "select-dropdown__options__content", "pl--n", "m--n", "position--relative"], ["class", "select-dropdown__options__list cursor---pointer", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "select-dropdown__options__list", "cursor---pointer", 3, "mousedown"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function MonthDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
            i0.ɵɵlistener("ngModelChange", function MonthDropdownComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 4);
            i0.ɵɵlistener("focusout", function MonthDropdownComponent_Template_input_focusout_4_listener() { return ctx.focusOut(); })("click", function MonthDropdownComponent_Template_input_click_4_listener() { return ctx.toggle(); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, MonthDropdownComponent_div_7_Template, 3, 1, "div", 6)(8, MonthDropdownComponent_div_8_Template, 3, 3, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.value);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵproperty("value", ctx.optionLabel)("disabled", ctx.disabled)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(5, 11, "ng.dob.lbl.select-month-placeholder") : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.shouldShowDropdown ? "icon-chevron-up" : "icon-chevron-down");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.shouldShowDropdown);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthDropdownComponent, [{
        type: Component,
        args: [{ selector: 'app-month-dropdown', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MonthDropdownComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group position--relative\">\n  <div class=\"select-dropdown-section default\">\n    <div class=\"form-control select-dropdown p--n\">\n      <input type=\"hidden\" readonly [(ngModel)]=\"value\" />\n      <input\n        id=\"{{ key }}\"\n        type=\"text\"\n        class=\"Form__input form-control cursor--pointer\"\n        name=\"{{ key }}\"\n        [value]=\"optionLabel\"\n        [disabled]=\"disabled\"\n        [placeholder]=\"showPlaceHolder ? ('ng.dob.lbl.select-month-placeholder' | translate) : ''\"\n        [class.ng-invalid-custom]=\"error\"\n        (focusout)=\"focusOut()\"\n        (click)=\"toggle()\"\n        readonly\n        required />\n      <div\n        class=\"icon position--absolute text--m text-weight--g\"\n        [ngClass]=\"shouldShowDropdown ? 'icon-chevron-up' : 'icon-chevron-down'\"></div>\n    </div>\n  </div>\n  <div *ngIf=\"shouldShowDropdown\" class=\"select-dropdown__options position--absolute width--full\">\n    <ul class=\"select-dropdown__options__content pl--n m--n position--relative\">\n      <li\n        *ngFor=\"let option of optionList\"\n        (mousedown)=\"selectOptionValue(option)\"\n        class=\"select-dropdown__options__list cursor---pointer\">\n        {{ option.label }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"formErrorInput Form__input__invalid-message\" *ngIf=\"error\">\n    {{ 'ng.dob.error-month-required' | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { month: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MonthDropdownComponent, { className: "MonthDropdownComponent" }); })();

function DateOfBirthPickerWithDropdownInputComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.form.errors == null ? null : ctx_r2.form.errors["invalidBirthDate"], " ");
} }
const _c0$8 = () => ({ maskValue: "99", dropSpecialCharacters: true });
const _c1$5 = () => ({ maskValue: "0000", dropSpecialCharacters: true });
class DateOfBirthPickerWithDropdownInputComponent extends AbstractDateOfBirthPickerComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵDateOfBirthPickerWithDropdownInputComponent_BaseFactory; return function DateOfBirthPickerWithDropdownInputComponent_Factory(t) { return (ɵDateOfBirthPickerWithDropdownInputComponent_BaseFactory || (ɵDateOfBirthPickerWithDropdownInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DateOfBirthPickerWithDropdownInputComponent)))(t || DateOfBirthPickerWithDropdownInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateOfBirthPickerWithDropdownInputComponent, selectors: [["tg-date-of-birth-picker-with-dropdown-input"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 14, consts: [[3, "formGroup"], [1, "form-group", "dob-field"], [1, "dob-field__content", "text-align--left"], [1, "date-field-day"], ["formControlName", "day", "labelPrefix", "dob.error", 3, "required", "hideLabel", "showPlaceHolder", "mask"], ["day", ""], [1, "form-group", "dob-picker__selectdiv"], [1, "dob-picker__dropdowns", "ml-5"], ["formControlName", "selectedMonth", "ngDefaultControl", "", 3, "month", "optionList"], [1, "date-field-year"], ["formControlName", "year", "labelPrefix", "dob.error", 3, "required", "hideLabel", "showPlaceHolder", "mask"], ["year", ""], ["class", "formErrorInput mt-5", 4, "ngIf"], [1, "formErrorInput", "mt-5"]], template: function DateOfBirthPickerWithDropdownInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
            i0.ɵɵelement(4, "tg-form-input", 4, 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7);
            i0.ɵɵelement(8, "app-month-dropdown", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 9);
            i0.ɵɵelement(10, "tg-form-input", 10, 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, DateOfBirthPickerWithDropdownInputComponent_div_12_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("required", true)("hideLabel", true)("showPlaceHolder", true)("mask", i0.ɵɵpureFunction0(12, _c0$8));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("month", ctx.month)("optionList", ctx.options);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("required", true)("hideLabel", true)("showPlaceHolder", true)("mask", i0.ɵɵpureFunction0(13, _c1$5));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.form.errors == null ? null : ctx.form.errors["invalidBirthDate"]);
        } }, dependencies: [i1$1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.FormGroupDirective, i2.FormControlName, InputComponent, FormDirective, MonthDropdownComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateOfBirthPickerWithDropdownInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-date-of-birth-picker-with-dropdown-input', template: "<form [formGroup]=\"form\">\n  <div class=\"form-group dob-field\">\n    <div class=\"dob-field__content text-align--left\">\n      <div class=\"date-field-day\">\n        <tg-form-input\n          #day\n          formControlName=\"day\"\n          labelPrefix=\"dob.error\"\n          [required]=\"true\"\n          [hideLabel]=\"true\"\n          [showPlaceHolder]=\"true\"\n          [mask]=\"{ maskValue: '99', dropSpecialCharacters: true }\">\n        </tg-form-input>\n      </div>\n      <div class=\"form-group dob-picker__selectdiv\">\n        <div class=\"dob-picker__dropdowns ml-5\">\n          <app-month-dropdown formControlName=\"selectedMonth\" [month]=\"month\" [optionList]=\"options\" ngDefaultControl>\n          </app-month-dropdown>\n        </div>\n      </div>\n      <div class=\"date-field-year\">\n        <tg-form-input\n          #year\n          formControlName=\"year\"\n          labelPrefix=\"dob.error\"\n          [required]=\"true\"\n          [hideLabel]=\"true\"\n          [showPlaceHolder]=\"true\"\n          [mask]=\"{ maskValue: '0000', dropSpecialCharacters: true }\">\n        </tg-form-input>\n      </div>\n    </div>\n    <div class=\"formErrorInput mt-5\" *ngIf=\"this.form.errors?.['invalidBirthDate']\">\n      {{ this.form.errors?.['invalidBirthDate'] }}\n    </div>\n  </div>\n</form>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DateOfBirthPickerWithDropdownInputComponent, { className: "DateOfBirthPickerWithDropdownInputComponent" }); })();

const _c0$7 = ["datepicker"];
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'L',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class DatepickerComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    customLabel = false;
    showPlaceHolder = true;
    minDate;
    maxDate;
    datepicker;
    value;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange = (_) => {
        // empty implementation
    };
    onTouch = (_) => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return '';
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onTouched(true);
        this.onChange(value);
    }
    onTouched = (_) => {
        // empty implementation
    };
    static ɵfac = function DatepickerComponent_Factory(t) { return new (t || DatepickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerComponent, selectors: [["app-datepicker"]], viewQuery: function DatepickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$7, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datepicker = _t.first);
        } }, inputs: { customLabel: "customLabel", showPlaceHolder: "showPlaceHolder", minDate: "minDate", maxDate: "maxDate" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => DatepickerComponent),
                    multi: true,
                },
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 11, consts: [[1, "form-builder", "form-group"], [1, "date-picker", "hide-until-sm"], ["matInput", "", 1, "date-picker-input", 3, "min", "max", "matDatepicker", "placeholder", "ngModel", "ngModelChange", "click"], ["matSuffix", "", 3, "for"], ["datepicker", ""], [1, "hide-from-sm", "display--flex", "align-content--center"], ["type", "date", 1, "form__input", "form-control"], [1, "icon-calendar"]], template: function DatepickerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "label");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1)(5, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.updateValue($event); })("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.value = $event; })("click", function DatepickerComponent_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(9); return i0.ɵɵresetView(_r0.open()); });
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "mat-datepicker-toggle", 3)(8, "mat-datepicker", null, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelement(11, "input", 6)(12, "i", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(9);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, ctx.getLabel()));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(6, 9, ctx.getPlaceholder()));
            i0.ɵɵproperty("min", ctx.minDate ? ctx.minDate : "")("max", ctx.maxDate ? ctx.maxDate : "")("matDatepicker", _r0)("ngModel", ctx.value);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("for", _r0);
        } }, dependencies: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i4$2.MatDatepicker, i4$2.MatDatepickerInput, i4$2.MatDatepickerToggle, i5$2.MatInput, i3$1.MatSuffix, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerComponent, [{
        type: Component,
        args: [{ selector: 'app-datepicker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatepickerComponent),
                        multi: true,
                    },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ], template: "<div class=\"form-builder form-group\">\n  <label>{{getLabel() | translate}}</label>\n  <div class=\"date-picker hide-until-sm\">\n    <input\n      matInput\n      class=\"date-picker-input\"\n      [min]=\"minDate? minDate: ''\"\n      [max]=\"maxDate? maxDate: ''\"\n      [matDatepicker]=\"datepicker\"\n      placeholder=\"{{getPlaceholder() | translate}}\"\n      (ngModelChange)=\"updateValue($event)\"\n      [(ngModel)]=\"value\"\n      (click)=\"datepicker.open()\" />\n    <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n    <mat-datepicker #datepicker></mat-datepicker>\n  </div>\n  <div class=\"hide-from-sm display--flex align-content--center\">\n    <input type=\"date\" class=\"form__input form-control\" />\n    <i class=\"icon-calendar\"></i>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { customLabel: [{
            type: Input
        }], showPlaceHolder: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], datepicker: [{
            type: ViewChild,
            args: ['datepicker']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DatepickerComponent, { className: "DatepickerComponent" }); })();

function InputAtomicComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r0.messageGroup + ".error." + ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r0.getText()), "\n");
} }
class InputAtomicComponent extends InputComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputAtomicComponent_BaseFactory; return function InputAtomicComponent_Factory(t) { return (ɵInputAtomicComponent_BaseFactory || (ɵInputAtomicComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputAtomicComponent)))(t || InputAtomicComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputAtomicComponent, selectors: [["tg-form-input-atomic"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputAtomicComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 11, consts: [[1, "label-input-flow"], [1, "text-flow--label", 3, "for"], [1, "form__input-container"], ["type", "text", "required", "required", 1, "Form__input", "form-control", 3, "id", "ngModel", "ngClass", "placeholder", "ngModelChange"], ["class", "form__msg--error form__input__invalid-message", 4, "ngIf"], [1, "form__msg--error", "form__input__invalid-message"]], template: function InputAtomicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "label", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "input", 3);
            i0.ɵɵlistener("ngModelChange", function InputAtomicComponent_Template_input_ngModelChange_5_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputAtomicComponent_Template_input_ngModelChange_5_listener($event) { return ctx.value = $event; });
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, InputAtomicComponent_div_7_Template, 3, 4, "div", 4);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate("for", ctx.key);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, ctx.getLabel()));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵproperty("ngModel", ctx.value)("ngClass", ctx.error ? "error" : "")("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(6, 9, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputAtomicComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input-atomic', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputAtomicComponent),
                        multi: true,
                    },
                ], template: "<div class=\"label-input-flow\">\n  <label for=\"{{ key }}\" class=\"text-flow--label\">{{ getLabel() | translate}}</label>\n</div>\n<div class=\"form__input-container\">\n  <input\n    id=\"{{ key }}\"\n    type=\"text\"\n    class=\"Form__input form-control\"\n    required=\"required\"\n    (ngModelChange)=\"updateValue($event)\"\n    [(ngModel)]=\"value\"\n    [ngClass]=\"error ? 'error' : ''\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\" />\n</div>\n<div\n  [attr.data-cy]=\"messageGroup + '.error.' + key\"\n  class=\"form__msg--error form__input__invalid-message\"\n  *ngIf=\"error\">\n  {{ getText() | translate}}\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputAtomicComponent, { className: "InputAtomicComponent" }); })();

const _c0$6 = (a0, a1) => ({ labelStyle: a0, "text-flow--label": a1 });
function InputWithTooltipComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 7);
    i0.ɵɵelement(6, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div", 12);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0$6, ctx_r0.labelStyle, !ctx_r0.labelStyle));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r0.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, ctx_r0.getLabel()));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 6, ctx_r0.getTooltip()), " ");
} }
function InputWithTooltipComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-cy", ctx_r1.messageGroup + ".error." + ctx_r1.key);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx_r1.getText()), " ");
} }
const _c1$4 = (a0, a1) => ({ "form__input--disabled": a0, "form__input--error": a1 });
class InputWithTooltipComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    showPlaceHolder = true;
    labelStyle;
    customLabel;
    hideLabel = false;
    prefix;
    mask;
    disabled = false;
    required = true;
    maxLength;
    changeInput = new EventEmitter();
    value;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        return super.getLabel(this.customLabel);
    }
    getPlaceholder() {
        return super.getPlaceholder(this.customLabel);
    }
    onChange = (_) => {
        this.changeInput.emit(_);
    };
    onTouched = () => {
        // empty implementation
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_) {
        // empty implementation
    }
    writeValue(value) {
        this.value = value;
    }
    updateValue(value) {
        this.onChange(value);
    }
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.value });
        this.onTouched();
    }
    static ɵfac = function InputWithTooltipComponent_Factory(t) { return new (t || InputWithTooltipComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputWithTooltipComponent, selectors: [["tg-form-input-with-tooltip"]], inputs: { showPlaceHolder: "showPlaceHolder", labelStyle: "labelStyle", customLabel: "customLabel", hideLabel: "hideLabel", prefix: "prefix", mask: "mask", disabled: "disabled", required: "required", maxLength: "maxLength" }, outputs: { changeInput: "changeInput" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputWithTooltipComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 20, consts: [[1, "form-group"], [3, "ngClass", 4, "ngIf"], ["type", "text", 1, "Form__input", "form-control", 3, "id", "required", "ngClass", "mask", "dropSpecialCharacters", "name", "prefix", "ngModel", "disabled", "placeholder", "maxlength", "blur", "ngModelChange"], ["class", "formErrorInput Form__input__invalid-message", 4, "ngIf"], [3, "ngClass"], [3, "for"], [1, "tooltip", "position--relative", "display--inline-block"], [1, "tooltip__icon-section", "display--flex", "flex-direction--row--sm", "flex-direction--row-reverse", "align-items--center", "justify-content--center", "cursor--pointer", "my--xxxs"], [1, "icon", "icon-information-shape"], [1, "tooltip__info-section", "tooltip__info-section__arrow-left", "tooltip__info-section__auto-width"], [1, "horizontal-center-align"], [1, "info-section__description"], [1, "info-section__description__text"], [1, "formErrorInput", "Form__input__invalid-message"]], template: function InputWithTooltipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, InputWithTooltipComponent_div_1_Template, 13, 11, "div", 1);
            i0.ɵɵelementStart(2, "input", 2);
            i0.ɵɵlistener("blur", function InputWithTooltipComponent_Template_input_blur_2_listener() { return ctx.onBlur(); })("ngModelChange", function InputWithTooltipComponent_Template_input_ngModelChange_2_listener($event) { return ctx.updateValue($event); })("ngModelChange", function InputWithTooltipComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputWithTooltipComponent_div_4_Template, 3, 4, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideLabel);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ng-invalid-custom", ctx.error);
            i0.ɵɵpropertyInterpolate("id", ctx.key);
            i0.ɵɵpropertyInterpolate("mask", ctx.mask && ctx.mask.maskValue);
            i0.ɵɵpropertyInterpolate("name", ctx.key);
            i0.ɵɵpropertyInterpolate("maxlength", ctx.maxLength);
            i0.ɵɵproperty("required", ctx.required)("ngClass", i0.ɵɵpureFunction2(17, _c1$4, ctx.disabled, ctx.error))("dropSpecialCharacters", ctx.mask && ctx.mask.dropSpecialCharacters)("prefix", ctx.prefix || "")("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.showPlaceHolder ? i0.ɵɵpipeBind1(3, 15, ctx.getPlaceholder()) : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [i1$1.NgClass, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.MaxLengthValidator, i2.NgModel, i5.NgxMaskDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputWithTooltipComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-input-with-tooltip', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputWithTooltipComponent),
                        multi: true,
                    },
                ], template: "<div class=\"form-group\">\n  <div *ngIf=\"!hideLabel\" [ngClass]=\"{ labelStyle: this.labelStyle, 'text-flow--label': !labelStyle }\">\n    <label for=\"{{ key }}\">{{ getLabel() | translate }}</label>\n    <div class=\"tooltip position--relative display--inline-block\">\n      <div\n        class=\"tooltip__icon-section display--flex flex-direction--row--sm flex-direction--row-reverse align-items--center justify-content--center cursor--pointer my--xxxs\">\n        <i class=\"icon icon-information-shape\"></i>\n      </div>\n      <div class=\"tooltip__info-section tooltip__info-section__arrow-left tooltip__info-section__auto-width\">\n        <div class=\"horizontal-center-align\">\n          <div class=\"info-section__description\">\n            <div class=\"info-section__description__text\">\n              {{ getTooltip() | translate }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <input\n    id=\"{{ key }}\"\n    type=\"text\"\n    class=\"Form__input form-control\"\n    [required]=\"required\"\n    [ngClass]=\"{ 'form__input--disabled': disabled, 'form__input--error': error }\"\n    mask=\"{{ mask && mask.maskValue }}\"\n    [dropSpecialCharacters]=\"mask && mask.dropSpecialCharacters\"\n    name=\"{{ key }}\"\n    [prefix]=\"prefix || ''\"\n    (blur)=\"onBlur()\"\n    (ngModelChange)=\"updateValue($event)\"\n    [(ngModel)]=\"value\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"showPlaceHolder ? (getPlaceholder() | translate) : ''\"\n    [class.ng-invalid-custom]=\"error\"\n    maxlength=\"{{ maxLength }}\" />\n  <div\n    [attr.data-cy]=\"messageGroup + '.error.' + key\"\n    class=\"formErrorInput Form__input__invalid-message\"\n    *ngIf=\"error\">\n    {{ getText() | translate }}\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { showPlaceHolder: [{
            type: Input
        }], labelStyle: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], prefix: [{
            type: Input
        }], mask: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], changeInput: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputWithTooltipComponent, { className: "InputWithTooltipComponent" }); })();

class AppointmentPickerUtil {
    static compareDate(appointmentA, appointmentB) {
        return !(appointmentA.date < appointmentB.date || appointmentA.date > appointmentB.date);
    }
    static getInitialSlideIndex(selectedSlotIndex, slidesToScroll) {
        return floor(selectedSlotIndex / slidesToScroll) * slidesToScroll;
    }
    static getSelectedDateSlotIndex(timeslots, selectedTimeslot) {
        return timeslots.findIndex((slot) => {
            return slot.date.getTime() === selectedTimeslot.date.getTime();
        });
    }
    static getTimeslotLabel(timeslot, messageGroup, suffix) {
        const labelKeys = [];
        if (messageGroup) {
            labelKeys.push(messageGroup);
        }
        labelKeys.push('timeslots');
        switch (timeslot) {
            case TimeslotMomentEnum.DAY:
                labelKeys.push('day');
                break;
            case TimeslotMomentEnum.ALL_DAY:
                labelKeys.push('all-day');
                break;
            case TimeslotMomentEnum.MORNING:
                labelKeys.push('morning');
                break;
            case TimeslotMomentEnum.LUNCH:
                labelKeys.push('lunch');
                break;
            case TimeslotMomentEnum.EVENING:
                labelKeys.push('evening');
                break;
            case TimeslotMomentEnum.AFTERNOON:
                labelKeys.push('afternoon');
                break;
        }
        if (suffix) {
            labelKeys.push(suffix);
        }
        return LabelUtil.getLabelKeyWithTypeLabel(labelKeys.join('.'));
    }
}

const DefaultDateSlideConfig = {
    infinite: false,
    initialSlide: 0,
    mobileFirst: true,
    arrows: true,
    nextArrow: '<div class="cards-slider-button arrow arrow--right slick-arrow" aria-disabled="false"></div>',
    prevArrow: '<div class="cards-slider-button arrow arrow--left slick-arrow" aria-disabled="false"></div>',
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 6,
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            },
        },
    ],
};

const DefaultTimeslotMoments = [
    TimeslotMomentEnum.DAY,
    TimeslotMomentEnum.MORNING,
    TimeslotMomentEnum.LUNCH,
    TimeslotMomentEnum.AFTERNOON,
    TimeslotMomentEnum.EVENING,
];

class NewNoAvailableAppointmentDateComponent {
    languageService;
    loadMoreSlots = new EventEmitter();
    messageGroup;
    constructor(languageService) {
        this.languageService = languageService;
    }
    loadSlots() {
        this.loadMoreSlots.emit();
    }
    static ɵfac = function NewNoAvailableAppointmentDateComponent_Factory(t) { return new (t || NewNoAvailableAppointmentDateComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewNoAvailableAppointmentDateComponent, selectors: [["app-new-no-available-appointment-date"]], inputs: { messageGroup: "messageGroup" }, outputs: { loadMoreSlots: "loadMoreSlots" }, decls: 8, vars: 6, consts: [[1, "Container", "text-align--center", "p--xxl", "background-shade_08", "border--all--r", "border-width--all--r", "border-style--all--solid", "border-color--all--shade_24"], [1, "mb--xxs"], [1, "button", "button--secondary", 3, "click"]], template: function NewNoAvailableAppointmentDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵlistener("click", function NewNoAvailableAppointmentDateComponent_Template_div_click_4_listener() { return ctx.loadSlots(); });
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "ng." + ctx.messageGroup + ".unavailable-timeslots.lbl"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, "ng." + ctx.messageGroup + ".load-more-timeslots.lbl"));
        } }, dependencies: [i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewNoAvailableAppointmentDateComponent, [{
        type: Component,
        args: [{ selector: 'app-new-no-available-appointment-date', template: "<div\n  class=\"Container text-align--center p--xxl background-shade_08 border--all--r border-width--all--r border-style--all--solid border-color--all--shade_24\">\n  <p class=\"mb--xxs\">{{'ng.' + messageGroup + '.unavailable-timeslots.lbl' | translate}}</p>\n  <div class=\"button button--secondary\" (click)=\"loadSlots()\">\n    <span>{{'ng.' + messageGroup + '.load-more-timeslots.lbl' | translate}}</span>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }], { loadMoreSlots: [{
            type: Output
        }], messageGroup: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NewNoAvailableAppointmentDateComponent, { className: "NewNoAvailableAppointmentDateComponent" }); })();

const _c0$5 = ["slickModal"];
function InputDatePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.labels.datePickerErrorLabel));
} }
function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "i", 23)(2, "i", 24)(3, "i", 25)(4, "i", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const appointmentSlot_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.MORNING));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.LUNCH));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.AFTERNOON));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !appointmentSlot_r7.hasAvailableMoment(ctx_r9.appointmentMomentEnum.EVENING));
} }
function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementStart(4, "div", 14)(5, "div", 15)(6, "div", 16)(7, "label", 17);
    i0.ɵɵlistener("click", function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const appointmentSlot_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r11.selectInstallSlotDay(appointmentSlot_r7)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 18);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 19);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_div_14_Template, 5, 8, "div", 20);
    i0.ɵɵelementStart(15, "div", 21);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "date");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const appointmentSlot_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵstyleMap("--animation-delay:" + (i_r8 - ctx_r6.dateSlideConfig.initialSlide));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", i0.ɵɵpipeBind2(3, 14, appointmentSlot_r7.date, "ddmm"));
    i0.ɵɵpropertyInterpolate1("id", "day-", i_r8, "");
    i0.ɵɵproperty("disabled", ctx_r6.withMoment && !appointmentSlot_r7.hasAvailableMoments())("checked", appointmentSlot_r7 === ctx_r6.selectedTimeslot);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("disabled", ctx_r6.withMoment && !appointmentSlot_r7.hasAvailableMoments());
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "day-", i_r8, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(10, 17, appointmentSlot_r7.date, "EEEE"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(13, 20, appointmentSlot_r7.date, "dd"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r6.withMoment);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(17, 23, appointmentSlot_r7.date, "MMMM yyyy"), " ");
} }
function InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_ng_container_1_Template, 18, 26, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.timeslots);
} }
function InputDatePickerComponent_ngx_slick_carousel_5_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 27);
    i0.ɵɵlistener("ngSubmit", function InputDatePickerComponent_ngx_slick_carousel_5_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.loadMoreSlots()); });
    i0.ɵɵelement(1, "button", 28);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, ctx_r5.labels.loadMoreLabel), i0.ɵɵsanitizeHtml);
} }
function InputDatePickerComponent_ngx_slick_carousel_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-slick-carousel", 7, 8);
    i0.ɵɵtemplate(2, InputDatePickerComponent_ngx_slick_carousel_5_ng_container_2_Template, 2, 1, "ng-container", 9)(3, InputDatePickerComponent_ngx_slick_carousel_5_form_3_Template, 3, 3, "form", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r1.dateSlideConfig);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.reRender);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showLoadMore && !ctx_r1.reRender);
} }
function InputDatePickerComponent_app_new_no_available_appointment_date_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-new-no-available-appointment-date", 29);
    i0.ɵɵlistener("loadMoreSlots", function InputDatePickerComponent_app_new_no_available_appointment_date_7_Template_app_new_no_available_appointment_date_loadMoreSlots_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.loadMoreSlots()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("messageGroup", ctx_r2.messageGroup);
} }
class InputDatePickerComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    cdr;
    disableNoAvailableSlots = false;
    withMoment = false;
    showLoadMore;
    timeslots;
    updateSlots;
    dateSlideConfig = DefaultDateSlideConfig;
    loadMore = new EventEmitter();
    labels;
    selectedTimeslot;
    appointmentMomentEnum = TimeslotMomentEnum;
    slickModal;
    appointmentsAvailable$;
    reRender;
    constructor(languageService, formService, messageGroupDirective, injector, cdr) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
        this.cdr = cdr;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setLabels();
        this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots ?? [], this.disableNoAvailableSlots);
    }
    ngOnChanges(changes) {
        if (changes['showLoadMore']) {
            this.showLoadMore = changes['showLoadMore']?.currentValue;
        }
        if (changes['updateSlots'] &&
            this.updateSlots &&
            this.timeslots.length > this.updateSlots.length &&
            this.timeslots[this.timeslots.length - this.updateSlots.length - 1].date.toDateString() !==
                this.updateSlots[this.updateSlots.length - 1].date.toDateString()) {
            this.reRender = true;
            setTimeout(() => {
                this.reRender = false;
                this.cdr.detectChanges();
                this.slickModal.slickGoTo(this.timeslots.length - this.updateSlots.length);
            });
            return;
        }
        if (changes['updateSlots'] &&
            this.updateSlots &&
            this.timeslots.length > 0 &&
            this.timeslots.every((timeslot) => !timeslot.hasAvailableMoments())) {
            this.timeslots = changes['updateSlots'].currentValue;
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.updateSlots, this.disableNoAvailableSlots);
        }
    }
    onChange = (_) => {
        // empty on purpose
    };
    onTouch = (_) => {
        // empty on purpose
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        if (value) {
            this.selectedTimeslot = this.timeslots.find((timeslot) => {
                return AppointmentPickerUtil.compareDate(timeslot, value);
            });
            this.scrollToSelectedSlides();
        }
    }
    selectInstallSlotDay(appointmentSlot) {
        this.selectedTimeslot = appointmentSlot;
        this.onTouch(true);
        this.onChange(appointmentSlot);
    }
    loadMoreSlots() {
        this.loadMore.emit();
    }
    scrollToSelectedSlides() {
        if (this.selectedTimeslot) {
            const selectedSlotIndex = AppointmentPickerUtil.getSelectedDateSlotIndex(this.timeslots, this.selectedTimeslot);
            this.dateSlideConfig.initialSlide = AppointmentPickerUtil.getInitialSlideIndex(selectedSlotIndex, this.dateSlideConfig.slidesToScroll);
        }
    }
    setLabels() {
        this.labels = {
            datePickerLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'date-picker']),
            datePickerErrorLabel: LabelUtil.getLabelKeyWithTypeLabel([
                this.messageGroup,
                this.formControlName,
                'date-picker-error',
            ]),
            loadMoreLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'load-more']),
        };
    }
    static ɵfac = function InputDatePickerComponent_Factory(t) { return new (t || InputDatePickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputDatePickerComponent, selectors: [["app-form-date-picker"]], viewQuery: function InputDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$5, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slickModal = _t.first);
        } }, inputs: { disableNoAvailableSlots: "disableNoAvailableSlots", withMoment: "withMoment", showLoadMore: "showLoadMore", timeslots: "timeslots", updateSlots: "updateSlots", dateSlideConfig: "dateSlideConfig" }, outputs: { loadMore: "loadMore" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputDatePickerComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 9, vars: 10, consts: [[1, "section", "section-date", "container"], [1, "text-flow", "text-flow--h3", "section__title", "text-align--center"], ["class", "notification notification--errorfield notification--errorfield--flow", 4, "ngIf"], ["class", "label-modifier-box slick-slider card-date card-date-with-value", 3, "config", 4, "ngIf"], [3, "messageGroup", "loadMoreSlots", 4, "ngIf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-box", "slick-slider", "card-date", "card-date-with-value", 3, "config"], ["slickModal", "slick-carousel"], [4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "label-modifier-slot", "slick-slide", "animation-show-slide-up"], ["type", "radio", "name", "day", 1, "label-modifier-radio", 3, "value", "id", "disabled", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "text-flow", "text-flow--label", "label-modifier-content__header"], [1, "text-flow", "text-flow--body", "label-modifier-content__body"], ["class", "text-flow text-flow--label label-modifier-content__timing", 4, "ngIf"], [1, "text-flow", "text-flow--label", "label-modifier-content__footer"], [1, "text-flow", "text-flow--label", "label-modifier-content__timing"], [1, "icon", "icon-sunrise"], [1, "icon", "icon-sun"], [1, "icon", "icon-sun-half-semifilled"], [1, "icon", "icon-moon"], [3, "ngSubmit"], [1, "button", "button--secondary", "mt-50", 3, "innerHTML"], [3, "messageGroup", "loadMoreSlots"]], template: function InputDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputDatePickerComponent_div_4_Template, 4, 3, "div", 2)(5, InputDatePickerComponent_ngx_slick_carousel_5_Template, 4, 3, "ngx-slick-carousel", 3);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵtemplate(7, InputDatePickerComponent_app_new_no_available_appointment_date_7_Template, 1, 1, "app-new-no-available-appointment-date", 4);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, ctx.labels.datePickerLabel), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 6, ctx.appointmentsAvailable$));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !i0.ɵɵpipeBind1(8, 8, ctx.appointmentsAvailable$));
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i4.SlickCarouselComponent, i4.SlickItemDirective, FormDirective, MessageGroupDirective, NewNoAvailableAppointmentDateComponent, i1$1.AsyncPipe, i1$1.DatePipe, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-date-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputDatePickerComponent),
                        multi: true,
                    },
                ], template: "<div class=\"section section-date container\">\n  <div class=\"text-flow text-flow--h3 section__title text-align--center\">\n    {{ labels.datePickerLabel | translate }}\n  </div>\n  <div class=\"notification notification--errorfield notification--errorfield--flow\" *ngIf=\"error\">\n    <span class=\"icon icon-error-shape errorfield\">{{ labels.datePickerErrorLabel | translate }}</span>\n  </div>\n  <ngx-slick-carousel\n    *ngIf=\"appointmentsAvailable$ | async\"\n    class=\"label-modifier-box slick-slider card-date card-date-with-value\"\n    #slickModal=\"slick-carousel\"\n    [config]=\"dateSlideConfig\">\n    <ng-container *ngIf=\"!reRender\">\n      <ng-container *ngFor=\"let appointmentSlot of timeslots; let i = index\">\n        <div\n          ngxSlickItem\n          class=\"label-modifier-slot slick-slide animation-show-slide-up\"\n          style=\"{{ '--animation-delay:' + (i - this.dateSlideConfig.initialSlide) }}\">\n          <input\n            type=\"radio\"\n            name=\"day\"\n            value=\"{{ appointmentSlot.date | date: 'ddmm' }}\"\n            id=\"day-{{ i }}\"\n            class=\"label-modifier-radio\"\n            [disabled]=\"withMoment && !appointmentSlot.hasAvailableMoments()\"\n            [checked]=\"appointmentSlot === selectedTimeslot\" />\n          <div\n            class=\"label-modifier--append label-modifier--container cursor--pointer\"\n            [class.disabled]=\"withMoment && !appointmentSlot.hasAvailableMoments()\">\n            <div class=\"label-modifier--body\">\n              <div class=\"label-modifier--body--inner-container\">\n                <label\n                  for=\"day-{{ i }}\"\n                  class=\"label-modifier-radio__label\"\n                  (click)=\"selectInstallSlotDay(appointmentSlot)\"></label>\n                <div class=\"text-flow text-flow--label label-modifier-content__header\">\n                  {{ appointmentSlot.date | date: 'EEEE' }}\n                </div>\n                <div class=\"text-flow text-flow--body label-modifier-content__body\">\n                  {{ appointmentSlot.date | date: 'dd' }}\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__timing\" *ngIf=\"withMoment\">\n                  <i\n                    class=\"icon icon-sunrise\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.MORNING)\"></i>\n                  <i\n                    class=\"icon icon-sun\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.LUNCH)\"></i>\n                  <i\n                    class=\"icon icon-sun-half-semifilled\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.AFTERNOON)\"></i>\n                  <i\n                    class=\"icon icon-moon\"\n                    [class.disabled]=\"!appointmentSlot.hasAvailableMoment(appointmentMomentEnum.EVENING)\"></i>\n                </div>\n                <div class=\"text-flow text-flow--label label-modifier-content__footer\">\n                  {{ appointmentSlot.date | date: 'MMMM yyyy' }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <form (ngSubmit)=\"loadMoreSlots()\" *ngIf=\"showLoadMore && !reRender\">\n      <button class=\"button button--secondary mt-50\" [innerHTML]=\"labels.loadMoreLabel | translate\"></button>\n    </form>\n  </ngx-slick-carousel>\n  <app-new-no-available-appointment-date\n    *ngIf=\"!(appointmentsAvailable$ | async)\"\n    (loadMoreSlots)=\"loadMoreSlots()\"\n    [messageGroup]=\"messageGroup\"></app-new-no-available-appointment-date>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }], { disableNoAvailableSlots: [{
            type: Input
        }], withMoment: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], timeslots: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], dateSlideConfig: [{
            type: Input
        }], loadMore: [{
            type: Output
        }], slickModal: [{
            type: ViewChild,
            args: ['slickModal']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputDatePickerComponent, { className: "InputDatePickerComponent" }); })();

function InputMomentPickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.labels.momentPickerErrorLabel));
} }
function InputMomentPickerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "input", 8);
    i0.ɵɵelementStart(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "label", 12);
    i0.ɵɵlistener("click", function InputMomentPickerComponent_ng_container_6_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const moment_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectMoment(moment_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵelement(8, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 15)(10, "div", 16);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 17);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(16, "div", 18);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moment_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("value", moment_r2);
    i0.ɵɵpropertyInterpolate1("id", "time-", i_r3, "");
    i0.ɵɵproperty("checked", moment_r2.timeslot === ctx_r1.selectedMoment);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("disabled", !moment_r2.available);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("for", "time-", i_r3, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 11, moment_r2.label), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 13, moment_r2.displayTime), " ");
} }
class InputMomentPickerComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    timeslot;
    availableMoments;
    labels;
    selectedMoment;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        this.setLabels();
    }
    onChange = (_) => {
        // empty on purpose
    };
    onTouch = (_) => {
        // empty on purpose
    };
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        if (value) {
            this.selectedMoment = this.availableMoments?.find((moment) => {
                return moment?.timeslot === value;
            })?.timeslot;
        }
        else {
            this.selectedMoment = undefined;
            if (this.control.valueChanges) {
                this.valueChangesSubscription$?.unsubscribe();
                this.error = null;
            }
        }
    }
    selectMoment(moment) {
        this.onChange(moment.timeslot);
    }
    setLabels() {
        this.labels = {
            momentPickerLabel: LabelUtil.getLabelKeyWithTypeLabel([this.messageGroup, this.formControlName, 'moment-picker']),
            momentPickerErrorLabel: LabelUtil.getLabelKeyWithTypeLabel([
                this.messageGroup,
                this.formControlName,
                'moment-picker-error',
            ]),
        };
    }
    static ɵfac = function InputMomentPickerComponent_Factory(t) { return new (t || InputMomentPickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputMomentPickerComponent, selectors: [["app-form-moment-picker"]], inputs: { timeslot: "timeslot", availableMoments: "availableMoments" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputMomentPickerComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 5, consts: [[1, "section", "section-time", "container"], [1, "text-flow", "text-flow--h3", "section__title", "text-align--center"], ["class", "notification notification--errorfield notification--errorfield--flow mb-15", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--with-icon"], [4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield", "notification--errorfield--flow", "mb-15"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", "name", "time", 1, "label-modifier-radio", 3, "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer", "mb--m"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], [1, "text-flow", "text-flow--legal", "label-modifier-content__body-range"], [1, "label-modifier-content__timing", "icon-appointment"]], template: function InputMomentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, InputMomentPickerComponent_div_4_Template, 4, 3, "div", 2);
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵtemplate(6, InputMomentPickerComponent_ng_container_6_Template, 17, 15, "ng-container", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, ctx.labels.momentPickerLabel), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.availableMoments);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputMomentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-moment-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputMomentPickerComponent),
                        multi: true,
                    },
                ], template: "<div class=\"section section-time container\">\n  <div class=\"text-flow text-flow--h3 section__title text-align--center\">\n    {{ labels.momentPickerLabel | translate }}\n  </div>\n  <div class=\"notification notification--errorfield notification--errorfield--flow mb-15\" *ngIf=\"error\">\n    <span class=\"icon icon-error-shape errorfield\">{{ labels.momentPickerErrorLabel | translate }}</span>\n  </div>\n\n  <div class=\"label-modifier-box card-mini card-mini--with-icon\">\n    <ng-container *ngFor=\"let moment of availableMoments; let i = index\">\n      <div class=\"label-modifier-slot animation-show-slide-up\" style=\"{{ '--animation-delay:' + i }}\">\n        <input\n          type=\"radio\"\n          name=\"time\"\n          value=\"{{ moment }}\"\n          id=\"time-{{ i }}\"\n          class=\"label-modifier-radio\"\n          [checked]=\"moment.timeslot === selectedMoment\" />\n        <div\n          class=\"label-modifier--append label-modifier--container cursor--pointer mb--m\"\n          [class.disabled]=\"!moment.available\">\n          <div class=\"label-modifier--body\">\n            <div class=\"label-modifier--body--inner-container\">\n              <label for=\"time-{{ i }}\" class=\"label-modifier-radio__label\" (click)=\"selectMoment(moment)\"></label>\n              <div class=\"label-modifier-content__header\"><i class=\"icon icon-tick\"></i></div>\n              <div class=\"label-modifier-content__body\">\n                <div class=\"text-flow text-flow--button label-modifier-content__body-label\">\n                  {{ moment.label | translate }}\n                </div>\n                <div class=\"text-flow text-flow--legal label-modifier-content__body-range\">\n                  {{ moment.displayTime | translate }}\n                </div>\n              </div>\n              <div class=\"label-modifier-content__timing icon-appointment\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { timeslot: [{
            type: Input
        }], availableMoments: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputMomentPickerComponent, { className: "InputMomentPickerComponent" }); })();

function InputNewAppointmentPickerComponent_app_form_moment_picker_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-form-moment-picker", 3);
    i0.ɵɵlistener("ngModelChange", function InputNewAppointmentPickerComponent_app_form_moment_picker_2_Template_app_form_moment_picker_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectMoment($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("timeslot", ctx_r0.appointment.date)("availableMoments", ctx_r0.availableMoments);
} }
class InputNewAppointmentPickerComponent {
    languageService;
    messageGroupDirective;
    injector;
    timeslots;
    updateSlots;
    selectableMoments = DefaultTimeslotMoments;
    showLoadMore;
    dateSlideConfig = DefaultDateSlideConfig;
    loadMore = new EventEmitter();
    formBuilder = inject(FormBuilder);
    form = this.formBuilder.group({
        appointment: [null, Validators.required],
        moment: [null, Validators.required],
    });
    availableMoments;
    appointmentsAvailable$;
    appointment;
    error;
    formService;
    constructor(languageService, formService, messageGroupDirective, injector) {
        this.languageService = languageService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
        this.formService = formService;
        this.form.patchValue({
            appointment: this.appointment?.date,
            moment: this.appointment?.moment,
        });
    }
    onChange(_) {
        // empty on purpose
    }
    onTouch(_) {
        // empty on purpose
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        if (value) {
            this.appointment = value;
            this.availableMoments = this.setAvailableMoments(value.date);
            this.form.get('appointment')?.setValue(value.date);
            this.form.get('moment')?.setValue(value.moment);
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots);
        }
        if (value && this.timeslots && this.timeslots.every((timeslot) => !timeslot.hasAvailableMoments())) {
            this.availableMoments = this.setAvailableMoments(value.date);
            this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.timeslots);
            this.form.reset();
        }
    }
    selectInstallSlotDay(appointmentSlot) {
        this.appointment = InputNewAppointmentPickerComponent.getNewAppointment();
        this.form.get('moment')?.reset(null);
        this.appointment.date = appointmentSlot;
        this.availableMoments = this.setAvailableMoments(appointmentSlot);
        this.onChange(this.appointment);
        this.appointmentsAvailable$ = TimeslotUtil.calculateTimeSlotsAvailability(this.updateSlots ?? this.timeslots);
    }
    selectMoment(moment) {
        this.appointment.moment = moment;
        this.onChange(this.appointment);
    }
    static getNewAppointment() {
        return {
            date: undefined,
            moment: undefined,
        };
    }
    setAvailableMoments(appointmentSlot) {
        let messageGroup = '';
        if (this.messageGroupDirective && this.messageGroupDirective.messageGroup) {
            messageGroup = this.messageGroupDirective.messageGroup;
        }
        return this.selectableMoments.map((selectableMoment) => {
            return {
                timeslot: selectableMoment,
                available: appointmentSlot?.hasAvailableMoment(selectableMoment),
                displayTime: AppointmentPickerUtil.getTimeslotLabel(selectableMoment, messageGroup, 'time'),
                label: AppointmentPickerUtil.getTimeslotLabel(selectableMoment, messageGroup),
            };
        });
    }
    loadMoreSlots() {
        this.loadMore.emit();
    }
    static ɵfac = function InputNewAppointmentPickerComponent_Factory(t) { return new (t || InputNewAppointmentPickerComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputNewAppointmentPickerComponent, selectors: [["app-form-new-appointment-picker"]], inputs: { timeslots: "timeslots", updateSlots: "updateSlots", selectableMoments: "selectableMoments", showLoadMore: "showLoadMore", dateSlideConfig: "dateSlideConfig" }, outputs: { loadMore: "loadMore" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputNewAppointmentPickerComponent),
                    multi: true,
                },
            ])], decls: 4, vars: 8, consts: [[3, "formGroup"], ["formControlName", "appointment", 3, "timeslots", "withMoment", "showLoadMore", "updateSlots", "loadMore", "ngModelChange"], ["formControlName", "moment", 3, "timeslot", "availableMoments", "ngModelChange", 4, "ngIf"], ["formControlName", "moment", 3, "timeslot", "availableMoments", "ngModelChange"]], template: function InputNewAppointmentPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵelementStart(1, "app-form-date-picker", 1);
            i0.ɵɵlistener("loadMore", function InputNewAppointmentPickerComponent_Template_app_form_date_picker_loadMore_1_listener() { return ctx.loadMoreSlots(); })("ngModelChange", function InputNewAppointmentPickerComponent_Template_app_form_date_picker_ngModelChange_1_listener($event) { return ctx.selectInstallSlotDay($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, InputNewAppointmentPickerComponent_app_form_moment_picker_2_Template, 1, 2, "app-form-moment-picker", 2);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("timeslots", ctx.timeslots)("withMoment", true)("showLoadMore", ctx.showLoadMore)("updateSlots", ctx.updateSlots);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.appointment == null ? null : ctx.appointment.date) && i0.ɵɵpipeBind1(3, 6, ctx.appointmentsAvailable$));
        } }, dependencies: [i1$1.NgIf, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, InputMomentPickerComponent, InputDatePickerComponent, i1$1.AsyncPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputNewAppointmentPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-form-new-appointment-picker', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputNewAppointmentPickerComponent),
                        multi: true,
                    },
                ], template: "<ng-container [formGroup]=\"form\">\n  <app-form-date-picker\n    [timeslots]=\"timeslots\"\n    [withMoment]=\"true\"\n    [showLoadMore]=\"showLoadMore\"\n    [updateSlots]=\"updateSlots\"\n    (loadMore)=\"loadMoreSlots()\"\n    formControlName=\"appointment\"\n    (ngModelChange)=\"selectInstallSlotDay($event)\">\n  </app-form-date-picker>\n  <app-form-moment-picker\n    *ngIf=\"appointment?.date && (appointmentsAvailable$ | async)\"\n    [timeslot]=\"appointment.date\"\n    [availableMoments]=\"availableMoments\"\n    formControlName=\"moment\"\n    (ngModelChange)=\"selectMoment($event)\">\n  </app-form-moment-picker>\n</ng-container>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { timeslots: [{
            type: Input
        }], updateSlots: [{
            type: Input
        }], selectableMoments: [{
            type: Input
        }], showLoadMore: [{
            type: Input
        }], dateSlideConfig: [{
            type: Input
        }], loadMore: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputNewAppointmentPickerComponent, { className: "InputNewAppointmentPickerComponent" }); })();

function InputRadioCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()));
} }
function InputRadioCardComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r4.getOptionSubLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
function InputRadioCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioCardComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "div", 14);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵtemplate(11, InputRadioCardComponent_div_2_div_11_Template, 2, 3, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 11, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", option_r2.text && option_r2.text !== "");
} }
class InputRadioCardComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    clearErrorMessagesFunction = new EventEmitter();
    inputChanged = new EventEmitter();
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    selectedOption;
    onChange(_) {
        // empty implementation
    }
    onTouched(_) {
        // empty implementation
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    getOptionSubLabel(option) {
        return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.text));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_) {
        // empty implementation
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-card.choose';
    }
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.clearErrorMessagesFunction.emit();
        this.selectedOption = option;
        this.onTouched(true);
        this.onChange(option.value);
        this.inputChanged.emit(option.value);
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function InputRadioCardComponent_Factory(t) { return new (t || InputRadioCardComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioCardComponent, selectors: [["tg-form-radio-card"]], inputs: { optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, outputs: { clearErrorMessagesFunction: "clearErrorMessagesFunction", inputChanged: "inputChanged" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[4, "ngIf"], [1, "label-modifier-box", "card-mini"], ["class", "label-modifier-slot animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h3"], [1, "whitespace", "whitespace--tiny"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "name", "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["class", "text-flow text-flow--legal label-modifier-content__body-range", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], [1, "text-flow", "text-flow--legal", "label-modifier-content__body-range", 3, "innerHTML"]], template: function InputRadioCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioCardComponent_div_0_Template, 5, 5, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioCardComponent_div_2_Template, 13, 13, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioCardComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\">\n  <!-- optional class can be added, defined by parent component -->\n  <div class=\"text-flow text-flow--h3\" [class.form__label--error]=\"error\">{{ getLabel() | translate }}</div>\n  <div class=\"whitespace whitespace--tiny\"></div>\n\n  <!-- Error banner/message for the input groups with label-modifiers -->\n</div>\n<div class=\"label-modifier-box card-mini\">\n  <div\n    class=\"label-modifier-slot animation-show-slide-up\"\n    *ngFor=\"let option of optionList; let i = index\"\n    [style]=\"'--animation-delay:' + i\">\n    <input\n      type=\"radio\"\n      name=\"choice-{{ key }}\"\n      value=\"{{ option.value }}\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      class=\"label-modifier-radio\"\n      [checked]=\"selectedOption && option.value === selectedOption.value\" />\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            for=\"choice-{{ i }}-{{ key }}\"\n            class=\"label-modifier-radio__label\"\n            (click)=\"selectOption(option)\"></label>\n          <div class=\"label-modifier-content__header\">\n            <i class=\"icon icon-tick\"></i>\n          </div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"\n              [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n            <div\n              *ngIf=\"option.text && option.text !== ''\"\n              class=\"text-flow text-flow--legal label-modifier-content__body-range\"\n              [innerHTML]=\"getOptionSubLabel(option) | translate\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Error label-message for the default input group -->\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], clearErrorMessagesFunction: [{
            type: Output
        }], inputChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioCardComponent, { className: "InputRadioCardComponent" }); })();

class AbstractRadioCheckboxComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    hideError = false;
    customOptionLabel = false;
    multipleSelectable = false;
    selectEvent = new EventEmitter();
    selectedOption;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    onChange = (_value) => {
        // empty implementation
    };
    onTouch = (_touched) => {
        // empty implementation
    };
    toHideError() {
        return this.hideError;
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    getOptionText(option) {
        return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.label));
    }
    getLabelValue(option) {
        if (this.customOptionLabel) {
            return option;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function AbstractRadioCheckboxComponent_Factory(t) { return new (t || AbstractRadioCheckboxComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractRadioCheckboxComponent, selectors: [["abstract-radio-checkbox"]], inputs: { optionList: "optionList", customLabel: "customLabel", hideError: "hideError", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, outputs: { selectEvent: "selectEvent" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function AbstractRadioCheckboxComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractRadioCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'abstract-radio-checkbox',
                template: '',
            }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideError: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], selectEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractRadioCheckboxComponent, { className: "AbstractRadioCheckboxComponent" }); })();

class AbstractRadioComponent extends AbstractRadioCheckboxComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    customOptionExplanationText = false;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getOptionText(option) {
        return LabelUtil.getLabelKeyWithTypeText(super.getKey(option.label));
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue = '') {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
        else {
            this.selectedOption = undefined;
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
        this.selectEvent.emit(option.value);
        this.trackingEvent.emit({
            label: this.getLabel(),
            value: option.value,
            type: DatalayerEventNames.OPTION_SELECTED,
        });
    }
    hasSubscript(option) {
        return option instanceof InputOptionWithSubscript;
    }
    getSubscript(option) {
        return option.subScript || '';
    }
    static ɵfac = function AbstractRadioComponent_Factory(t) { return new (t || AbstractRadioComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractRadioComponent, selectors: [["tg-form-abstract-radio"]], inputs: { customOptionExplanationText: "customOptionExplanationText" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, template: function AbstractRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1, "Do not use the abstract component");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractRadioComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-abstract-radio', template: "<div>Do not use the abstract component</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { customOptionExplanationText: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractRadioComponent, { className: "AbstractRadioComponent" }); })();

class WhitespaceDirective {
    renderer;
    el;
    whitespaceSize = 'small';
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'whitespace');
        switch (this.whitespaceSize) {
            case 'small':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--small');
                break;
            case 'medium':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--medium');
                break;
            case 'large':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--large');
                break;
            case 'extra-large':
                this.renderer.addClass(this.el.nativeElement, 'whitespace--xlarge');
                break;
            default:
                this.renderer.addClass(this.el.nativeElement, 'whitespace--small');
                break;
        }
    }
    static ɵfac = function WhitespaceDirective_Factory(t) { return new (t || WhitespaceDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: WhitespaceDirective, selectors: [["", "tgWhitespace", ""]], inputs: { whitespaceSize: [i0.ɵɵInputFlags.None, "tgWhitespace", "whitespaceSize"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WhitespaceDirective, [{
        type: Directive,
        args: [{
                selector: '[tgWhitespace]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { whitespaceSize: [{
            type: Input,
            args: ['tgWhitespace']
        }] }); })();

function InputRadioDefaultComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "input", 3);
    i0.ɵɵlistener("click", function InputRadioDefaultComponent_ng_container_0_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectOption(option_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "label", 5);
    i0.ɵɵlistener("click", function InputRadioDefaultComponent_ng_container_0_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r1)); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(7, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate2("id", "form-input-radio-", i_r2, "-", ctx_r0.key, "")("name", "radio-group-name-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵproperty("checked", ctx_r0.selectedOption && option_r1.value === ctx_r0.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 11, ctx_r0.getOptionLabel(option_r1)), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("data-cy", ctx_r0.messageGroup + "." + ctx_r0.key + ".option." + option_r1.value);
} }
class InputRadioDefaultComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioDefaultComponent_BaseFactory; return function InputRadioDefaultComponent_Factory(t) { return (ɵInputRadioDefaultComponent_BaseFactory || (ɵInputRadioDefaultComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioDefaultComponent)))(t || InputRadioDefaultComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioDefaultComponent, selectors: [["tg-form-radio-default"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioDefaultComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "radio-checkbox"], [1, "radio", "form__radio", 2, "--animation-delay", "i"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name", "click"], [1, "form__radio__label", 3, "for"], [1, "label--large", 3, "innerHTML", "for", "click"], ["tgWhitespace", "tiny"]], template: function InputRadioDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioDefaultComponent_ng_container_0_Template, 8, 13, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, WhitespaceDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioDefaultComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-default', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioDefaultComponent),
                        multi: true,
                    },
                ], template: "<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"radio-checkbox\">\n    <div class=\"radio form__radio\" style=\"--animation-delay: i\">\n      <input\n        (click)=\"selectOption(option)\"\n        [checked]=\"selectedOption && option.value === selectedOption.value\"\n        class=\"form__radio__input\"\n        id=\"form-input-radio-{{ i }}-{{ key }}\"\n        name=\"radio-group-name-{{ i }}-{{ key }}\"\n        type=\"radio\" />\n      <label class=\"form__radio__label\" for=\"form-input-radio-{{ i }}-{{ key }}\"></label>\n    </div>\n    <label\n      (click)=\"selectOption(option)\"\n      [innerHTML]=\"getOptionLabel(option) | translate\"\n      class=\"label--large\"\n      [attr.data-cy]=\"messageGroup + '.' + key + '.option.' + option.value\"\n      for=\"form-input-radio-{{ i }}-{{ key }}\">\n    </label>\n  </div>\n  <div tgWhitespace=\"tiny\"></div>\n</ng-container>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioDefaultComponent, { className: "InputRadioDefaultComponent" }); })();

function InputRadioHorizontalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getLabel()));
} }
function InputRadioHorizontalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
function InputRadioHorizontalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "div", 9);
    i0.ɵɵelement(3, "input", 10);
    i0.ɵɵelementStart(4, "label", 11);
    i0.ɵɵlistener("click", function InputRadioHorizontalComponent_ng_container_3_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r3)); });
    i0.ɵɵtext(5, "\u00A0");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "label", 12);
    i0.ɵɵlistener("click", function InputRadioHorizontalComponent_ng_container_3_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectOption(option_r3)); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate2("id", "form-input-radio-", i_r4, "-", ctx_r2.key, "")("name", "radio-group-name-", i_r4, "-", ctx_r2.key, " ");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("for", "form-input-radio-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 10, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
} }
class InputRadioHorizontalComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioHorizontalComponent_BaseFactory; return function InputRadioHorizontalComponent_Factory(t) { return (ɵInputRadioHorizontalComponent_BaseFactory || (ɵInputRadioHorizontalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioHorizontalComponent)))(t || InputRadioHorizontalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioHorizontalComponent, selectors: [["tg-form-radio-horizontal"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioHorizontalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], [1, "radio-checkbox--horizontal"], [4, "ngFor", "ngForOf"], [1, "label-input-flow"], [1, "whitespace", "whitespace--tiny"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "radio-checkbox", "mb--xxs", "mb--n--sm"], [1, "radio", "form__radio", 2, "--animation-delay", "i"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name"], [1, "form__radio__label", 3, "for", "click"], [1, "label--large", 3, "innerHTML", "for", "click"], ["tgWhitespace", "tiny"]], template: function InputRadioHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioHorizontalComponent_div_0_Template, 5, 3, "div", 0)(1, InputRadioHorizontalComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioHorizontalComponent_ng_container_3_Template, 9, 12, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, WhitespaceDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioHorizontalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-horizontal', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioHorizontalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\">\n  <div class=\"label-input-flow\">{{ getLabel() | translate }}</div>\n  <div class=\"whitespace whitespace--tiny\"></div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"radio-checkbox--horizontal\">\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"radio-checkbox mb--xxs mb--n--sm\">\n      <div class=\"radio form__radio\" style=\"--animation-delay: i\">\n        <input\n          [checked]=\"selectedOption && option.value === selectedOption.value\"\n          class=\"form__radio__input\"\n          id=\"form-input-radio-{{ i }}-{{ key }}\"\n          name=\"radio-group-name-{{ i }}-{{ key }} \"\n          type=\"radio\" />\n        <label (click)=\"selectOption(option)\" class=\"form__radio__label\" for=\"form-input-radio-{{ i }}-{{ key }}\"\n          >&nbsp;</label\n        >\n      </div>\n      <label\n        (click)=\"selectOption(option)\"\n        [innerHTML]=\"getOptionLabel(option) | translate\"\n        class=\"label--large\"\n        for=\"form-input-radio-{{ i }}-{{ key }}\">\n      </label>\n    </div>\n    <div tgWhitespace=\"tiny\"></div>\n  </ng-container>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioHorizontalComponent, { className: "InputRadioHorizontalComponent" }); })();

function InputRadioWithCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputRadioWithCardComponent_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 18);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r4.getOptionText(option_r2)), i0.ɵɵsanitizeHtml);
} }
function InputRadioWithCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioWithCardComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 13);
    i0.ɵɵelementStart(9, "div", 14);
    i0.ɵɵelement(10, "div", 15);
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵtemplate(12, InputRadioWithCardComponent_div_2_div_12_Template, 2, 3, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "div", 17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("inlineSVG", option_r2.imagePath);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(11, 13, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.customOptionExplanationText);
} }
class InputRadioWithCardComponent extends AbstractRadioComponent {
    optionList = [];
    multipleSelectable = false;
    small = false;
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardComponent_BaseFactory; return function InputRadioWithCardComponent_Factory(t) { return (ɵInputRadioWithCardComponent_BaseFactory || (ɵInputRadioWithCardComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardComponent)))(t || InputRadioWithCardComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardComponent, selectors: [["tg-form-radio-with-card"]], inputs: { optionList: "optionList", multipleSelectable: "multipleSelectable", small: "small" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [1, "label-modifier-box", "card-square", "flex-direction--column", "flex-direction--row--sm"], ["class", "animation-show-slide-up mr--default--sm", 3, "style", 4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "animation-show-slide-up", "mr--default--sm"], ["type", "radio", 1, "label-modifier-radio", 3, "checked", "id", "name", "value"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__image", "hide-until-sm", 3, "inlineSVG"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["class", "text-align--left text-align--center--sm", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], [1, "text-align--left", "text-align--center--sm", 3, "innerHTML"]], template: function InputRadioWithCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithCardComponent_div_0_Template, 4, 3, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioWithCardComponent_div_2_Template, 14, 15, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("card-square--small", ctx.small);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i4$3.InlineSVGDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div\n  [class.card-square--small]=\"small\"\n  class=\"label-modifier-box card-square flex-direction--column flex-direction--row--sm\">\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"animation-show-slide-up mr--default--sm\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      [checked]=\"selectedOption && option.value === selectedOption.value\"\n      class=\"label-modifier-radio\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"radio\"\n      value=\"{{ option.value }}\" />\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            (click)=\"selectOption(option)\"\n            class=\"label-modifier-radio__label\"\n            for=\"choice-{{ i }}-{{ key }}\"></label>\n          <div class=\"label-modifier-content__header\">\n            <i class=\"icon icon-tick\"></i>\n          </div>\n          <div [inlineSVG]=\"option.imagePath\" class=\"label-modifier-content__image hide-until-sm\"></div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              [innerHTML]=\"getOptionLabel(option) | translate\"\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"></div>\n            <div\n              *ngIf=\"customOptionExplanationText\"\n              [innerHTML]=\"getOptionText(option) | translate\"\n              class=\"text-align--left text-align--center--sm\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { optionList: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], small: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardComponent, { className: "InputRadioWithCardComponent" }); })();

const EMPTY_INPUT_VALUE = 'EMPTY_INPUT';
class AbstractInputRadioWithInputComponent extends AbstractRadioComponent {
    optionList = [];
    fieldLabel;
    inputPlaceholder;
    inputRadioSelected = false;
    inputValue;
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
            if (!this.selectedOption) {
                this.inputValue = optionValue === EMPTY_INPUT_VALUE ? '' : optionValue;
                this.selectInput();
            }
        }
        else {
            this.selectedOption = undefined;
        }
    }
    selectOption(option) {
        this.inputRadioSelected = false;
        this.selectedOption = option;
        this.inputValue = '';
        this.onTouch(option.value);
        this.onChange(option.value);
        this.selectEvent.emit();
        this.trackingEvent.emit({ label: this.getOptionLabel(option), value: option.value });
    }
    selectInput() {
        this.selectedOption = undefined;
        this.inputRadioSelected = true;
        let value = this.inputValue;
        if (!value) {
            value = EMPTY_INPUT_VALUE;
        }
        this.onTouch(value);
        this.onChange(value);
        this.selectEvent.emit();
    }
    focusOtherSelected() {
        this.selectInput();
        this.trackingEvent.emit({ label: this.getOptionLabel(this.optionList[0]), value: 'other' });
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵAbstractInputRadioWithInputComponent_BaseFactory; return function AbstractInputRadioWithInputComponent_Factory(t) { return (ɵAbstractInputRadioWithInputComponent_BaseFactory || (ɵAbstractInputRadioWithInputComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AbstractInputRadioWithInputComponent)))(t || AbstractInputRadioWithInputComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractInputRadioWithInputComponent, selectors: [["tg-form-abstract-radio-with-input"]], inputs: { optionList: "optionList", fieldLabel: "fieldLabel", inputPlaceholder: "inputPlaceholder" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, template: function AbstractInputRadioWithInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1, "Do not use the abstract component");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractInputRadioWithInputComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-abstract-radio-with-input', template: "<div>Do not use the abstract component</div>\n" }]
    }], null, { optionList: [{
            type: Input
        }], fieldLabel: [{
            type: Input
        }], inputPlaceholder: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractInputRadioWithInputComponent, { className: "AbstractInputRadioWithInputComponent" }); })();

var MarginSize;
(function (MarginSize) {
    MarginSize["xSmall"] = "xxs";
    MarginSize["xxSmall"] = "xxxs";
    MarginSize["small"] = "s";
    MarginSize["medium"] = "m";
    MarginSize["large"] = "l";
    MarginSize["xLarge"] = "xl";
    MarginSize["xxLarge"] = "xxl";
})(MarginSize || (MarginSize = {}));
var MarginPosition;
(function (MarginPosition) {
    MarginPosition["top"] = "t";
    MarginPosition["bottom"] = "b";
    MarginPosition["left"] = "l";
    MarginPosition["right"] = "r";
})(MarginPosition || (MarginPosition = {}));
class MarginDirective {
    renderer;
    el;
    margin;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (!this.margin) {
            return;
        }
        if (Array.isArray(this.margin)) {
            this.margin.forEach((margin) => {
                this.renderer.addClass(this.el.nativeElement, `m${margin.position}--${margin.size}`);
            });
        }
        else {
            this.renderer.addClass(this.el.nativeElement, `m${this.margin.position}--${this.margin.size}`);
        }
    }
    static ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "tgMargin", ""]], inputs: { margin: [i0.ɵɵInputFlags.None, "tgMargin", "margin"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarginDirective, [{
        type: Directive,
        args: [{
                selector: '[tgMargin]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { margin: [{
            type: Input,
            args: ['tgMargin']
        }] }); })();

class RowDirective {
    renderer;
    el;
    fullGutters;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'row');
        this.checkGutter();
    }
    checkGutter() {
        if (this.fullGutters) {
            this.renderer.addClass(this.el.nativeElement, 'row--full-gutters');
        }
    }
    static ɵfac = function RowDirective_Factory(t) { return new (t || RowDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RowDirective, selectors: [["div", "tgGridRow", ""]], inputs: { fullGutters: "fullGutters" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RowDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgGridRow]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fullGutters: [{
            type: Input
        }] }); })();

const _c0$4 = () => ({ size: "m", position: "b" });
function InputRadioWithInputHorizontalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 10)(2, "div", 13);
    i0.ɵɵelement(3, "div", 14);
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(4, _c0$4));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, ctx_r0.getLabel()));
} }
function InputRadioWithInputHorizontalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
const _c1$3 = () => ({ size: "m", position: "t" });
const _c2$1 = (a0, a1) => [a0, a1];
function InputRadioWithInputHorizontalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    i0.ɵɵelement(5, "input", 7);
    i0.ɵɵelementStart(6, "label", 8);
    i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_ng_container_3_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r3)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "label", 17);
    i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_ng_container_3_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectOption(option_r3)); });
    i0.ɵɵpipe(8, "translate");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction2(17, _c2$1, i0.ɵɵpureFunction0(15, _c1$3), i0.ɵɵpureFunction0(16, _c0$4)));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap("--animation-delay:" + i_r4);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r4, "-", ctx_r2.key, "")("name", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(8, 13, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
} }
const _c3 = () => ({ size: "l", position: "b" });
class InputRadioWithInputHorizontalComponent extends AbstractInputRadioWithInputComponent {
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.inputValue });
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithInputHorizontalComponent_BaseFactory; return function InputRadioWithInputHorizontalComponent_Factory(t) { return (ɵInputRadioWithInputHorizontalComponent_BaseFactory || (ɵInputRadioWithInputHorizontalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithInputHorizontalComponent)))(t || InputRadioWithInputHorizontalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithInputHorizontalComponent, selectors: [["tg-form-radio-with-input-horizontal"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithInputHorizontalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 26, consts: [["tgGridRow", "", 3, "tgMargin", 4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], ["tgGridRow", "", 3, "tgMargin"], [4, "ngFor", "ngForOf"], [3, "tgMargin"], [1, "radio-checkbox"], [1, "radio", "form__radio"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name"], [1, "form__radio__label", 3, "for", "click"], [1, "label--large", 3, "for", "click"], [1, "col--grow"], [1, "form__input-container"], ["name", "radio-group-name", "pattern", "", "required", "required", "type", "text", 1, "form__input", "Form__input", 3, "ngModel", "id", "placeholder", "blur", "focus", "ngModelChange"], ["appTextFlow", "label"], [1, "label-input-flow"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label--large", 3, "innerHTML", "for", "click"]], template: function InputRadioWithInputHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithInputHorizontalComponent_div_0_Template, 7, 5, "div", 0)(1, InputRadioWithInputHorizontalComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioWithInputHorizontalComponent_ng_container_3_Template, 9, 20, "ng-container", 3);
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵelement(7, "input", 7);
            i0.ɵɵelementStart(8, "label", 8);
            i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_Template_label_click_8_listener() { return ctx.selectInput(); });
            i0.ɵɵtext(9, "\u00A0");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "label", 9);
            i0.ɵɵlistener("click", function InputRadioWithInputHorizontalComponent_Template_label_click_10_listener() { return ctx.selectInput(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 10)(12, "div", 11)(13, "input", 12);
            i0.ɵɵlistener("blur", function InputRadioWithInputHorizontalComponent_Template_input_blur_13_listener() { return ctx.onBlur(); })("focus", function InputRadioWithInputHorizontalComponent_Template_input_focus_13_listener() { return ctx.focusOtherSelected(); })("ngModelChange", function InputRadioWithInputHorizontalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(20, _c3));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction2(23, _c2$1, i0.ɵɵpureFunction0(21, _c1$3), i0.ɵɵpureFunction0(22, _c0$4)));
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap("--animation-delay:" + ctx.optionList.length);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate2("id", "choice-", ctx.optionList.length, "-", ctx.key, "")("name", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵproperty("checked", ctx.inputRadioSelected);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate2("for", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate2("for", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate2("id", "choice-input-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵpropertyInterpolate("placeholder", ctx.inputPlaceholder);
            i0.ɵɵproperty("ngModel", ctx.inputValue);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.PatternValidator, i2.NgModel, MarginDirective, RowDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithInputHorizontalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-input-horizontal', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithInputHorizontalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\" [tgMargin]=\"{ size: 'm', position: 'b' }\" tgGridRow>\n  <div class=\"col--grow\">\n    <div appTextFlow=\"label\">\n      <div class=\"label-input-flow\"></div>\n      <label>{{ getLabel() | translate }}</label>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div [tgMargin]=\"{ size: 'l', position: 'b' }\" tgGridRow>\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"col--grow\">\n      <div\n        [tgMargin]=\"[\n          { size: 'm', position: 't' },\n          { size: 'm', position: 'b' }\n        ]\">\n        <div class=\"radio-checkbox\">\n          <div [style]=\"'--animation-delay:' + i\" class=\"radio form__radio\">\n            <input\n              [checked]=\"selectedOption && option.value === selectedOption.value\"\n              class=\"form__radio__input\"\n              id=\"choice-{{ i }}-{{ key }}\"\n              name=\"choice-{{ i }}-{{ key }}\"\n              type=\"radio\" />\n            <label (click)=\"selectOption(option)\" class=\"form__radio__label\" for=\"choice-{{ i }}-{{ key }}\"></label>\n          </div>\n          <label\n            (click)=\"selectOption(option)\"\n            [innerHTML]=\"getOptionLabel(option) | translate\"\n            class=\"label--large\"\n            for=\"choice-{{ i }}-{{ key }}\">\n          </label>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <div\n    [tgMargin]=\"[\n      { size: 'm', position: 't' },\n      { size: 'm', position: 'b' }\n    ]\">\n    <div class=\"radio-checkbox\">\n      <div [style]=\"'--animation-delay:' + optionList.length\" class=\"radio form__radio\">\n        <input\n          [checked]=\"inputRadioSelected\"\n          class=\"form__radio__input\"\n          id=\"choice-{{ optionList.length }}-{{ key }}\"\n          name=\"choice-{{ optionList.length }}-{{ key }}\"\n          type=\"radio\" />\n        <label (click)=\"selectInput()\" class=\"form__radio__label\" for=\"choice-{{ optionList.length }}-{{ key }}\"\n          >&nbsp;</label\n        >\n      </div>\n      <label (click)=\"selectInput()\" class=\"label--large\" for=\"choice-{{ optionList.length }}-{{ key }}\"></label>\n    </div>\n  </div>\n  <div class=\"col--grow\">\n    <div class=\"form__input-container\">\n      <input\n        (blur)=\"onBlur()\"\n        (focus)=\"focusOtherSelected()\"\n        [(ngModel)]=\"inputValue\"\n        class=\"form__input Form__input\"\n        id=\"choice-input-{{ optionList.length }}-{{ key }}\"\n        name=\"radio-group-name\"\n        pattern=\"\"\n        placeholder=\"{{ inputPlaceholder }}\"\n        required=\"required\"\n        type=\"text\" />\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithInputHorizontalComponent, { className: "InputRadioWithInputHorizontalComponent" }); })();

const _c0$3 = () => ({ size: "m", position: "b" });
function InputRadioWithInputVerticalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 12)(2, "div", 13);
    i0.ɵɵelement(3, "div", 14);
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(4, _c0$3));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, ctx_r0.getLabel()));
} }
function InputRadioWithInputVerticalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r1.getText()));
} }
function InputRadioWithInputVerticalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5);
    i0.ɵɵelement(3, "input", 6);
    i0.ɵɵelementStart(4, "label", 7);
    i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_ng_container_3_Template_label_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectOption(option_r3)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label", 17);
    i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_ng_container_3_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const option_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.selectOption(option_r3)); });
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap("--animation-delay:" + i_r4);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r4, "-", ctx_r2.key, "")("name", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("checked", ctx_r2.selectedOption && option_r3.value === ctx_r2.selectedOption.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r4, "-", ctx_r2.key, "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 12, ctx_r2.getOptionLabel(option_r3)), i0.ɵɵsanitizeHtml);
} }
const _c1$2 = () => ({ size: "l", position: "b" });
class InputRadioWithInputVerticalComponent extends AbstractInputRadioWithInputComponent {
    onBlur() {
        this.trackingEvent.emit({ label: this.getLabel(), value: this.inputValue });
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithInputVerticalComponent_BaseFactory; return function InputRadioWithInputVerticalComponent_Factory(t) { return (ɵInputRadioWithInputVerticalComponent_BaseFactory || (ɵInputRadioWithInputVerticalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithInputVerticalComponent)))(t || InputRadioWithInputVerticalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithInputVerticalComponent, selectors: [["tg-form-radio-with-input-vertical"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithInputVerticalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 22, consts: [["tgGridRow", "", 3, "tgMargin", 4, "ngIf"], ["class", "notification notification--errorfield", 4, "ngIf"], ["tgGridRow", "", 3, "tgMargin"], [4, "ngFor", "ngForOf"], [1, "radio-checkbox"], [1, "radio", "form__radio"], ["type", "radio", 1, "form__radio__input", 3, "checked", "id", "name"], [1, "form__radio__label", 3, "for", "click"], [1, "label--large", 3, "for", "click"], [1, "input-field-in-radio"], [1, "form__input-container"], ["name", "radio-group-name", "pattern", "", "required", "required", "type", "text", 1, "form__input", "Form__input", 3, "ngModel", "id", "placeholder", "blur", "focus", "ngModelChange"], [1, "col--grow"], ["appTextFlow", "label"], [1, "label-input-flow"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label--large", 3, "innerHTML", "for", "click"]], template: function InputRadioWithInputVerticalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithInputVerticalComponent_div_0_Template, 7, 5, "div", 0)(1, InputRadioWithInputVerticalComponent_div_1_Template, 4, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioWithInputVerticalComponent_ng_container_3_Template, 7, 14, "ng-container", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 4)(6, "div", 5);
            i0.ɵɵelement(7, "input", 6);
            i0.ɵɵelementStart(8, "label", 7);
            i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_Template_label_click_8_listener() { return ctx.selectInput(); });
            i0.ɵɵtext(9, "\u00A0");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "label", 8);
            i0.ɵɵlistener("click", function InputRadioWithInputVerticalComponent_Template_label_click_10_listener() { return ctx.selectInput(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 9)(12, "div", 10)(13, "input", 11);
            i0.ɵɵlistener("blur", function InputRadioWithInputVerticalComponent_Template_input_blur_13_listener() { return ctx.onBlur(); })("focus", function InputRadioWithInputVerticalComponent_Template_input_focus_13_listener() { return ctx.focusOtherSelected(); })("ngModelChange", function InputRadioWithInputVerticalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.inputValue = $event; });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(20, _c1$2));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
            i0.ɵɵadvance();
            i0.ɵɵproperty("tgMargin", i0.ɵɵpureFunction0(21, _c1$2));
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap("--animation-delay:" + ctx.optionList.length);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate2("id", "choice-", ctx.optionList.length, "-", ctx.key, "")("name", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵproperty("checked", ctx.inputRadioSelected);
            i0.ɵɵadvance();
            i0.ɵɵpropertyInterpolate2("for", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate2("for", "choice-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate2("id", "choice-input-", ctx.optionList.length, "-", ctx.key, "");
            i0.ɵɵpropertyInterpolate("placeholder", ctx.inputPlaceholder);
            i0.ɵɵproperty("ngModel", ctx.inputValue);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.PatternValidator, i2.NgModel, MarginDirective, RowDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithInputVerticalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-input-vertical', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithInputVerticalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"customLabel\" [tgMargin]=\"{ size: 'm', position: 'b' }\" tgGridRow>\n  <div class=\"col--grow\">\n    <div appTextFlow=\"label\">\n      <div class=\"label-input-flow\"></div>\n      <label>{{ getLabel() | translate }}</label>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div [tgMargin]=\"{ size: 'l', position: 'b' }\" tgGridRow>\n  <ng-container *ngFor=\"let option of optionList; let i = index\">\n    <div class=\"radio-checkbox\">\n      <div [style]=\"'--animation-delay:' + i\" class=\"radio form__radio\">\n        <input\n          [checked]=\"selectedOption && option.value === selectedOption.value\"\n          class=\"form__radio__input\"\n          id=\"choice-{{ i }}-{{ key }}\"\n          name=\"choice-{{ i }}-{{ key }}\"\n          type=\"radio\" />\n        <label (click)=\"selectOption(option)\" class=\"form__radio__label\" for=\"choice-{{ i }}-{{ key }}\"></label>\n      </div>\n      <label\n        (click)=\"selectOption(option)\"\n        [innerHTML]=\"getOptionLabel(option) | translate\"\n        class=\"label--large\"\n        for=\"choice-{{ i }}-{{ key }}\">\n      </label>\n    </div>\n  </ng-container>\n</div>\n<div [tgMargin]=\"{ size: 'l', position: 'b' }\" tgGridRow>\n  <div class=\"radio-checkbox\">\n    <div [style]=\"'--animation-delay:' + optionList.length\" class=\"radio form__radio\">\n      <input\n        [checked]=\"inputRadioSelected\"\n        class=\"form__radio__input\"\n        id=\"choice-{{ optionList.length }}-{{ key }}\"\n        name=\"choice-{{ optionList.length }}-{{ key }}\"\n        type=\"radio\" />\n      <label (click)=\"selectInput()\" class=\"form__radio__label\" for=\"choice-{{ optionList.length }}-{{ key }}\"\n        >&nbsp;</label\n      >\n    </div>\n    <label (click)=\"selectInput()\" class=\"label--large\" for=\"choice-{{ optionList.length }}-{{ key }}\"></label>\n  </div>\n  <div class=\"input-field-in-radio\">\n    <div class=\"form__input-container\">\n      <input\n        (blur)=\"onBlur()\"\n        (focus)=\"focusOtherSelected()\"\n        [(ngModel)]=\"inputValue\"\n        class=\"form__input Form__input\"\n        id=\"choice-input-{{ optionList.length }}-{{ key }}\"\n        name=\"radio-group-name\"\n        pattern=\"\"\n        placeholder=\"{{ inputPlaceholder }}\"\n        required=\"required\"\n        type=\"text\" />\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithInputVerticalComponent, { className: "InputRadioWithInputVerticalComponent" }); })();

class PriceService {
    pathCategorisationService;
    constructor(pathCategorisationService) {
        this.pathCategorisationService = pathCategorisationService;
    }
    isValidPrice(price) {
        return !!(price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00');
    }
    getTaxType() {
        switch (this.pathCategorisationService.getCustomerCategory()) {
            case CustomerCategoryEnum.RESIDENTIAL:
                return TaxTypeEnum.INCLUSIVE;
            case CustomerCategoryEnum.BUSINESS:
                return TaxTypeEnum.EXCLUSIVE;
            default:
                return TaxTypeEnum.INCLUSIVE;
        }
    }
    transform(price, showZeroes = true, isEnLocale = false) {
        if (isNil(price))
            return '';
        const hasZeroes = price % 1 === 0;
        const decimalPrice = price.toFixed(showZeroes || !hasZeroes ? 2 : 0);
        return isEnLocale ? decimalPrice : decimalPrice.replace('.', ',');
    }
    static ɵfac = function PriceService_Factory(t) { return new (t || PriceService)(i0.ɵɵinject(i1.PathCategorisationService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PriceService, factory: PriceService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PriceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.PathCategorisationService }], null); })();

class SvgConfig extends InlineSVGConfig {
    imageBasePath;
    // Do what ever conditions you need to set this, e.g. checking for server-side rendering
    // and only set baseURL when server-side rendered if you want.
    constructor(imageBasePath) {
        super();
        this.imageBasePath = imageBasePath;
        // When the server-side rendered app runs on localhost:3000, make sure baseURL is
        // http://localhost:3000 and make sure the Express server is configured properly to
        // allow the URL of the asset folders storing the SVG files.
        this.baseUrl = this.imageBasePath || '';
        // If you don't want the directive to run on the server side.
        this.clientOnly = true;
    }
    static ɵfac = function SvgConfig_Factory(t) { return new (t || SvgConfig)(i0.ɵɵinject('IMAGE_BASE_PATH')); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SvgConfig, factory: SvgConfig.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SvgConfig, [{
        type: Injectable
    }], () => [{ type: undefined, decorators: [{
                type: Inject,
                args: ['IMAGE_BASE_PATH']
            }] }], null); })();

class PricePipe {
    priceService;
    constructor(priceService) {
        this.priceService = priceService;
    }
    transform(price, absolute = false, showZeroes = true, locale = 'nl') {
        const newPrice = Number(price);
        return this.priceService.transform(absolute ? Math.abs(newPrice) : newPrice, showZeroes, locale === 'en');
    }
    static ɵfac = function PricePipe_Factory(t) { return new (t || PricePipe)(i0.ɵɵdirectiveInject(PriceService, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "price", type: PricePipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PricePipe, [{
        type: Pipe,
        args: [{
                name: 'price',
                standalone: true,
            }]
    }], () => [{ type: PriceService }], null); })();

class EuroSignPipe {
    languageService;
    constructor(languageService) {
        this.languageService = languageService;
    }
    transform(value) {
        const isFrench = this.languageService.getLanguage() === LanguageEnum.FR;
        if (isFrench) {
            return value + '€';
        }
        else {
            return '€' + value;
        }
    }
    static ɵfac = function EuroSignPipe_Factory(t) { return new (t || EuroSignPipe)(i0.ɵɵdirectiveInject(i1.LanguageService, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "euroSign", type: EuroSignPipe, pure: true, standalone: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EuroSignPipe, [{
        type: Pipe,
        args: [{
                name: 'euroSign',
                standalone: true,
            }]
    }], () => [{ type: i1.LanguageService }], null); })();

function InstallTypePriceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "euroSign");
    i0.ɵɵpipe(3, "price");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-tid", "strike-through");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, i0.ɵɵpipeBind1(3, 4, ctx_r0.strikeThroughPrice)), " ");
} }
function InstallTypePriceComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, "\u20AC");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-tid", "nl");
} }
function InstallTypePriceComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, "\u20AC");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-tid", "fr");
} }
class InstallTypePriceComponent {
    languageService;
    installTypePrice;
    integer;
    decimal;
    strikeThroughPrice;
    isFrench;
    constructor(languageService) {
        this.languageService = languageService;
    }
    ngOnInit() {
        this.splitPriceIntoIntegerAndDecimal();
        this.strikeThroughPrice = this.installTypePrice.originalPrice || '';
        this.isFrench = this.languageService.getLanguage() === LanguageEnum.FR;
    }
    splitPriceIntoIntegerAndDecimal() {
        const priceArray = this.installTypePrice.price.split('.');
        this.integer = priceArray[0];
        this.decimal = priceArray[1];
    }
    static ɵfac = function InstallTypePriceComponent_Factory(t) { return new (t || InstallTypePriceComponent)(i0.ɵɵdirectiveInject(i1.LanguageService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstallTypePriceComponent, selectors: [["app-install-type-price"]], inputs: { installTypePrice: "installTypePrice" }, decls: 11, vars: 7, consts: [[1, "promo-highlight", "display--flex", "flex-direction--column", "align-items--center--md", "align-items--baseline", "flex-wrap--wrap"], [1, "display--flex", "align-items--start", "align-items--center--md", "flex-direction--column"], ["class", "promo-highlight__second-row text-decoration--line-through align-items--baseline font--caption space-nowrap mx--xxxs mb--xxxs", 4, "ngIf"], [1, "display--flex", "flex-direction--row", "flex-direction--column--md", "align-items--center"], [1, "promo-highlight__third-row", "display--flex", "justify-content--center", "space-nowrap"], ["class", "font--body-regular-bold", 4, "ngIf"], [1, "text-flow", "text-flow--h2"], [1, "font--body-regular-bold"], [1, "promo-highlight__second-row", "text-decoration--line-through", "align-items--baseline", "font--caption", "space-nowrap", "mx--xxxs", "mb--xxxs"]], template: function InstallTypePriceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InstallTypePriceComponent_div_2_Template, 4, 6, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, InstallTypePriceComponent_span_5_Template, 2, 1, "span", 5);
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 7);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, InstallTypePriceComponent_span_10_Template, 2, 1, "span", 5);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.strikeThroughPrice);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.isFrench);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-tid", "integer");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.integer);
            i0.ɵɵadvance();
            i0.ɵɵattribute("data-tid", "decimal");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(",", ctx.decimal, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isFrench);
        } }, dependencies: [i1$1.NgIf, PricePipe, EuroSignPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallTypePriceComponent, [{
        type: Component,
        args: [{ selector: 'app-install-type-price', template: "<div\n  class=\"promo-highlight display--flex flex-direction--column align-items--center--md align-items--baseline flex-wrap--wrap\">\n  <div class=\"display--flex align-items--start align-items--center--md flex-direction--column\">\n    <div\n      *ngIf=\"strikeThroughPrice\"\n      [attr.data-tid]=\"'strike-through'\"\n      class=\"promo-highlight__second-row text-decoration--line-through align-items--baseline font--caption space-nowrap mx--xxxs mb--xxxs\">\n      {{ strikeThroughPrice | price | euroSign }}\n    </div>\n    <div class=\"display--flex flex-direction--row flex-direction--column--md align-items--center\">\n      <div class=\"promo-highlight__third-row display--flex justify-content--center space-nowrap\">\n        <span *ngIf=\"!isFrench\" [attr.data-tid]=\"'nl'\" class=\"font--body-regular-bold\">\u20AC</span>\n        <span class=\"text-flow text-flow--h2\" [attr.data-tid]=\"'integer'\">{{ integer }}</span>\n        <span class=\"font--body-regular-bold\" [attr.data-tid]=\"'decimal'\">,{{ decimal }}</span>\n        <span *ngIf=\"isFrench\" class=\"font--body-regular-bold\" [attr.data-tid]=\"'fr'\">\u20AC</span>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }], { installTypePrice: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InstallTypePriceComponent, { className: "InstallTypePriceComponent" }); })();

function InputRadioWithCardAndPriceComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 2);
    i0.ɵɵlistener("click", function InputRadioWithCardAndPriceComponent_label_2_Template_label_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const option_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectOption(option_r1)); });
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "img", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(11, "div", 11);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 12);
    i0.ɵɵelement(14, "app-install-type-price", 13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 14);
    i0.ɵɵelement(16, "input", 15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r2, "-", option_r1.value, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", option_r1.imagePath, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 11, ctx_r0.getOptionLabel(option_r1)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(12, 13, ctx_r0.getOptionText(option_r1)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("installTypePrice", option_r1.installTypePrice);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r0.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r1.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r2, "-", option_r1.value, "");
    i0.ɵɵproperty("checked", ctx_r0.selectedOption && option_r1.value === ctx_r0.selectedOption.value);
} }
class InputRadioWithCardAndPriceComponent extends AbstractRadioComponent {
    optionList = [];
    amountOfColumnsClass;
    screenTypeEnum = ScreenType;
    ngOnInit() {
        super.ngOnInit();
        this.amountOfColumnsClass = this.calculateAmountOfColumnsClass();
    }
    calculateAmountOfColumnsClass() {
        if (this.optionList && this.optionList.length <= 5) {
            const amountOfColumns = this.optionList.length;
            return `grid-template-column--${amountOfColumns}--md`;
        }
        return 'grid-template-column--3--md';
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardAndPriceComponent_BaseFactory; return function InputRadioWithCardAndPriceComponent_Factory(t) { return (ɵInputRadioWithCardAndPriceComponent_BaseFactory || (ɵInputRadioWithCardAndPriceComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardAndPriceComponent)))(t || InputRadioWithCardAndPriceComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardAndPriceComponent, selectors: [["tg-form-radio-with-card-and-price"]], inputs: { optionList: "optionList" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardAndPriceComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [[1, "display--flex", "flex-direction--row--md", "flex-direction--column", "position--full-height", "col-12", "gap--s"], ["class", "background-white select-tile display--flex flex-direction--column m--n color-text animation-show-slide-up flex-direction--column p--m px--l--sm", "style", "--animation-delay: 2", 3, "for", "click", 4, "ngFor", "ngForOf"], [1, "background-white", "select-tile", "display--flex", "flex-direction--column", "m--n", "color-text", "animation-show-slide-up", "flex-direction--column", "p--m", "px--l--sm", 2, "--animation-delay", "2", 3, "for", "click"], [1, "select-tile__content--image", "width--full", "pointer-events--none", "display--inline-flex", "justify-content--center", "hide-until-md", "px--l", "pb--l"], ["alt", "telenet", 3, "src"], [1, "select-tile__content", "display--flex", "flex-direction--column--md", "flex-direction--row", "flex-grow", "gap--xxs", "gap--xs--sm", "justify-content--between", "align-items--start", "align-items--center--md"], [1, "display--flex", "height--full", "flex-direction--column", "justify-content--between"], [1, "select-tile__content--inner", "display--flex", "flex-direction--column"], [1, "display--flex", "gap--m", "gap--l--sm"], [1, "select-tile__content_text", "display--flex", "flex-direction--column", "flex-grow", "gap--xxs"], [1, "heading--6", "heading--nomargin"], [1, "font--body-regular", "py--m", 3, "innerHTML"], [1, "mt--auto"], [3, "installTypePrice"], [1, "display--flex", "justify-content--center--md"], ["type", "radio", 1, "select-tile__input", "display--flex", "align-items--center", "justify-content--center", "align-self--center", "font--caption", "align-self--center", "order--last", "cursor--pointer", "border-radius--circle", 3, "name", "value", "id", "checked"]], template: function InputRadioWithCardAndPriceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div");
            i0.ɵɵtemplate(2, InputRadioWithCardAndPriceComponent_label_2_Template, 17, 15, "label", 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("select-tile--group display--grid ", ctx.amountOfColumnsClass, " gap--xm position--full-height--md");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1.ImageSrcPathDirective, InstallTypePriceComponent, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardAndPriceComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card-and-price', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardAndPriceComponent),
                        multi: true,
                    },
                ], template: "<div class=\"display--flex flex-direction--row--md flex-direction--column position--full-height col-12 gap--s\">\n  <div class=\"select-tile--group display--grid {{ amountOfColumnsClass }} gap--xm position--full-height--md\">\n    <label\n      *ngFor=\"let option of optionList; let i = index\"\n      for=\"choice-{{ i }}-{{ option.value }}\"\n      class=\"background-white select-tile display--flex flex-direction--column m--n color-text animation-show-slide-up flex-direction--column p--m px--l--sm\"\n      style=\"--animation-delay: 2\"\n      (click)=\"selectOption(option)\">\n      <div\n        class=\"select-tile__content--image width--full pointer-events--none display--inline-flex justify-content--center hide-until-md px--l pb--l\">\n        <img alt=\"telenet\" [src]=\"option.imagePath\" />\n      </div>\n      <div\n        class=\"select-tile__content display--flex flex-direction--column--md flex-direction--row flex-grow gap--xxs gap--xs--sm justify-content--between align-items--start align-items--center--md\">\n        <div class=\"display--flex height--full flex-direction--column justify-content--between\">\n          <div class=\"select-tile__content--inner display--flex flex-direction--column\">\n            <div class=\"display--flex gap--m gap--l--sm\">\n              <div class=\"select-tile__content_text display--flex flex-direction--column flex-grow gap--xxs\">\n                <div class=\"heading--6 heading--nomargin\">{{ getOptionLabel(option) | translate }}</div>\n              </div>\n            </div>\n            <div class=\"font--body-regular py--m\" [innerHTML]=\"getOptionText(option) | translate\"></div>\n          </div>\n          <div class=\"mt--auto\">\n            <app-install-type-price [installTypePrice]=\"option.installTypePrice\"></app-install-type-price>\n          </div>\n        </div>\n        <div class=\"display--flex justify-content--center--md\">\n          <input\n            type=\"radio\"\n            name=\"choice-{{ key }}\"\n            value=\"{{ option.value }}\"\n            id=\"choice-{{ i }}-{{ option.value }}\"\n            class=\"select-tile__input display--flex align-items--center justify-content--center align-self--center font--caption align-self--center order--last cursor--pointer border-radius--circle\"\n            [checked]=\"selectedOption && option.value === selectedOption.value\" />\n        </div>\n      </div>\n    </label>\n  </div>\n</div>\n" }]
    }], null, { optionList: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardAndPriceComponent, { className: "InputRadioWithCardAndPriceComponent" }); })();

function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r4.getSubscript(option_r2), i0.ɵɵsanitizeHtml);
} }
function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "div", 14);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵtemplate(11, InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_div_11_Template, 1, 1, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 12, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasSubscript(option_r2));
} }
class InputRadioWithCardMiniNoSelectBoxLabelsComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardMiniNoSelectBoxLabelsComponent_BaseFactory; return function InputRadioWithCardMiniNoSelectBoxLabelsComponent_Factory(t) { return (ɵInputRadioWithCardMiniNoSelectBoxLabelsComponent_BaseFactory || (ɵInputRadioWithCardMiniNoSelectBoxLabelsComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardMiniNoSelectBoxLabelsComponent)))(t || InputRadioWithCardMiniNoSelectBoxLabelsComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardMiniNoSelectBoxLabelsComponent, selectors: [["tg-form-radio-with-card-mini-no-select-box-labels"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardMiniNoSelectBoxLabelsComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--no-select-box"], ["class", "label-modifier-slot animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "checked", "id", "name", "value"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["appTextFlow", "legal", "class", "label-modifier-content__body-range", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], ["appTextFlow", "legal", 1, "label-modifier-content__body-range", 3, "innerHTML"]], template: function InputRadioWithCardMiniNoSelectBoxLabelsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_0_Template, 4, 3, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioWithCardMiniNoSelectBoxLabelsComponent_div_2_Template, 13, 14, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardMiniNoSelectBoxLabelsComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card-mini-no-select-box-labels', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardMiniNoSelectBoxLabelsComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"label-modifier-box card-mini card-mini--no-select-box\">\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"label-modifier-slot animation-show-slide-up\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      [checked]=\"selectedOption && option.value === selectedOption.value\"\n      class=\"label-modifier-radio\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"radio\"\n      value=\"{{ option.value }}\" />\n    <!-- Effective body -->\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            (click)=\"selectOption(option)\"\n            class=\"label-modifier-radio__label\"\n            for=\"choice-{{ i }}-{{ key }}\"></label>\n          <div class=\"label-modifier-content__header\">\n            <i class=\"icon icon-tick\"></i>\n          </div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              [innerHTML]=\"getOptionLabel(option) | translate\"\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"></div>\n            <div\n              *ngIf=\"hasSubscript(option)\"\n              [innerHTML]=\"getSubscript(option)\"\n              appTextFlow=\"legal\"\n              class=\"label-modifier-content__body-range\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardMiniNoSelectBoxLabelsComponent, { className: "InputRadioWithCardMiniNoSelectBoxLabelsComponent" }); })();

function InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r4.getSubscript(option_r2), i0.ɵɵsanitizeHtml);
} }
function InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "input", 6);
    i0.ɵɵelementStart(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label", 10);
    i0.ɵɵlistener("click", function InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_2_Template_label_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵelement(7, "span", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "div", 14);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵtemplate(11, InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_2_div_11_Template, 1, 1, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(10, 12, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasSubscript(option_r2));
} }
class InputRadioWithCardMiniWithSelectBoxLabelsComponent extends AbstractRadioComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputRadioWithCardMiniWithSelectBoxLabelsComponent_BaseFactory; return function InputRadioWithCardMiniWithSelectBoxLabelsComponent_Factory(t) { return (ɵInputRadioWithCardMiniWithSelectBoxLabelsComponent_BaseFactory || (ɵInputRadioWithCardMiniWithSelectBoxLabelsComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputRadioWithCardMiniWithSelectBoxLabelsComponent)))(t || InputRadioWithCardMiniWithSelectBoxLabelsComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioWithCardMiniWithSelectBoxLabelsComponent, selectors: [["tg-form-radio-with-card-mini-with-select-box-labels"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioWithCardMiniWithSelectBoxLabelsComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [1, "label-modifier-box", "card-mini", "card-mini--radio-circle-box"], ["class", "label-modifier-slot animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "checked", "id", "name", "value"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "radio-circle-box", "display--inline-flex", "justify-content--center", "align-items--center", "align-self--center", "border-radius--circle"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], ["appTextFlow", "legal", "class", "label-modifier-content__body-range", 3, "innerHTML", 4, "ngIf"], [1, "label-modifier-content__timing"], ["appTextFlow", "legal", 1, "label-modifier-content__body-range", 3, "innerHTML"]], template: function InputRadioWithCardMiniWithSelectBoxLabelsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_0_Template, 4, 3, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioWithCardMiniWithSelectBoxLabelsComponent_div_2_Template, 13, 14, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioWithCardMiniWithSelectBoxLabelsComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-with-card-mini-with-select-box-labels', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioWithCardMiniWithSelectBoxLabelsComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<div class=\"label-modifier-box card-mini card-mini--radio-circle-box\">\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"label-modifier-slot animation-show-slide-up\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      [checked]=\"selectedOption && option.value === selectedOption.value\"\n      class=\"label-modifier-radio\"\n      id=\"choice-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"radio\"\n      value=\"{{ option.value }}\" />\n    <!-- Effective body -->\n    <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n      <div class=\"label-modifier--body\">\n        <div class=\"label-modifier--body--inner-container\">\n          <label\n            (click)=\"selectOption(option)\"\n            class=\"label-modifier-radio__label\"\n            for=\"choice-{{ i }}-{{ key }}\"></label>\n          <div class=\"label-modifier-content__header\">\n            <span\n              class=\"radio-circle-box display--inline-flex justify-content--center align-items--center align-self--center border-radius--circle\"></span>\n          </div>\n          <div class=\"label-modifier-content__body\">\n            <div\n              [innerHTML]=\"getOptionLabel(option) | translate\"\n              class=\"text-flow text-flow--button label-modifier-content__body-label\"></div>\n            <div\n              *ngIf=\"hasSubscript(option)\"\n              [innerHTML]=\"getSubscript(option)\"\n              appTextFlow=\"legal\"\n              class=\"label-modifier-content__body-range\"></div>\n          </div>\n          <div class=\"label-modifier-content__timing\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioWithCardMiniWithSelectBoxLabelsComponent, { className: "InputRadioWithCardMiniWithSelectBoxLabelsComponent" }); })();

class AbstractCheckboxComponent extends AbstractRadioCheckboxComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    selectedOptions = [];
    maxOptions;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValues) {
        if (optionValues) {
            this.optionList.forEach((option) => {
                if (optionValues.includes(option.value)) {
                    this.selectedOptions.push(option);
                }
            });
            this.handleMaxOptions();
        }
        else {
            this.selectedOptions = [];
        }
    }
    selectOption(option) {
        if (this.selectedOptions.includes(option)) {
            this.selectedOptions = this.selectedOptions.filter((selectedOption) => selectedOption !== option);
        }
        else {
            this.handleToggle();
            this.selectedOptions.push(option);
            this.trackingEvent.emit({
                label: option.label,
                value: option.value,
                type: DatalayerEventNames.OPTION_SELECTED,
            });
        }
        this.onTouch(true);
        this.onChange(this.selectedOptions.map((selectedOption) => selectedOption.value));
        this.handleMaxOptions();
        this.selectEvent.emit();
    }
    hasSubscript(option) {
        return option instanceof InputOptionWithSubscript;
    }
    handleMaxOptions() {
        if (!this.maxOptions || this.maxOptions === 1) {
            return;
        }
        if (this.selectedOptions.length >= this.maxOptions) {
            this.optionList.forEach((option) => {
                if (!this.selectedOptions.includes(option)) {
                    option.disabled = true;
                }
            });
        }
        else {
            this.optionList.forEach((option) => {
                option.disabled = false;
            });
        }
    }
    handleToggle() {
        if (this.maxOptions === 1) {
            this.selectedOptions = [];
        }
    }
    static ɵfac = function AbstractCheckboxComponent_Factory(t) { return new (t || AbstractCheckboxComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AbstractCheckboxComponent, selectors: [["tg-form-abstract-checkbox"]], inputs: { maxOptions: "maxOptions" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, template: function AbstractCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtext(0, "Do not use the abstract component!\n");
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-abstract-checkbox', template: "Do not use the abstract component!\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { maxOptions: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AbstractCheckboxComponent, { className: "AbstractCheckboxComponent" }); })();

function InputCheckboxDefaultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputCheckboxDefaultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "input", 6);
    i0.ɵɵlistener("click", function InputCheckboxDefaultComponent_ng_container_1_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "label", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "label", 8);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.key + i_r3);
    i0.ɵɵproperty("checked", ctx_r1.selectedOptions.includes(option_r2));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.key + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.key + i_r3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 5, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
class InputCheckboxDefaultComponent extends AbstractCheckboxComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputCheckboxDefaultComponent_BaseFactory; return function InputCheckboxDefaultComponent_Factory(t) { return (ɵInputCheckboxDefaultComponent_BaseFactory || (ɵInputCheckboxDefaultComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputCheckboxDefaultComponent)))(t || InputCheckboxDefaultComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxDefaultComponent, selectors: [["tg-form-checkbox"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxDefaultComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "radio-checkbox"], [1, "form__checkbox", 2, "--animation-delay", "i"], ["name", "checkbox-group-name", "type", "checkbox", 1, "form__checkbox__input", 3, "checked", "id", "click"], [1, "form__checkbox__label", 3, "for"], [1, "label--large", 3, "innerHTML", "for"]], template: function InputCheckboxDefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputCheckboxDefaultComponent_div_0_Template, 4, 3, "div", 0)(1, InputCheckboxDefaultComponent_ng_container_1_Template, 7, 7, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxDefaultComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-checkbox', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxDefaultComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"radio-checkbox\">\n    <div class=\"form__checkbox\" style=\"--animation-delay: i\">\n      <input\n        (click)=\"selectOption(option)\"\n        [checked]=\"selectedOptions.includes(option)\"\n        class=\"form__checkbox__input\"\n        id=\"{{ key + i }}\"\n        name=\"checkbox-group-name\"\n        type=\"checkbox\" />\n      <label class=\"form__checkbox__label\" for=\"{{ key + i }}\"></label>\n    </div>\n    <label [innerHTML]=\"getOptionLabel(option) | translate\" class=\"label--large\" for=\"{{ key + i }}\"> </label>\n  </div>\n</ng-container>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxDefaultComponent, { className: "InputCheckboxDefaultComponent" }); })();

var FontWeight;
(function (FontWeight) {
    FontWeight["regular"] = "r";
    FontWeight["medium"] = "m";
    FontWeight["large"] = "l";
    FontWeight["giant"] = "g";
    FontWeight["xxl"] = "xxl";
})(FontWeight || (FontWeight = {}));
class FontWeightDirective {
    renderer;
    el;
    fontWeight;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.fontWeight) {
            this.renderer.addClass(this.el.nativeElement, 'text-weight--' + this.fontWeight);
        }
    }
    static ɵfac = function FontWeightDirective_Factory(t) { return new (t || FontWeightDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontWeightDirective, selectors: [["", "tgFontWeight", ""]], inputs: { fontWeight: [i0.ɵɵInputFlags.None, "tgFontWeight", "fontWeight"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontWeightDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontWeight]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontWeight: [{
            type: Input,
            args: ['tgFontWeight']
        }] }); })();

function InputCheckboxLegalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, ctx_r0.getText()));
} }
function InputCheckboxLegalComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "input", 6);
    i0.ɵɵlistener("click", function InputCheckboxLegalComponent_ng_container_1_Template_input_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "label", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "label", 8);
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.key + i_r3);
    i0.ɵɵproperty("checked", ctx_r1.selectedOptions.includes(option_r2));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.key + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.key + i_r3);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 5, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
class InputCheckboxLegalComponent extends AbstractCheckboxComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputCheckboxLegalComponent_BaseFactory; return function InputCheckboxLegalComponent_Factory(t) { return (ɵInputCheckboxLegalComponent_BaseFactory || (ɵInputCheckboxLegalComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputCheckboxLegalComponent)))(t || InputCheckboxLegalComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxLegalComponent, selectors: [["tg-form-checkbox-legal"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxLegalComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "notification notification--errorfield", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "notification", "notification--errorfield"], [1, "icon", "icon-error-shape", "errorfield"], [1, "radio-checkbox"], [1, "form__checkbox", 2, "--animation-delay", "i"], ["name", "checkbox-group-name", "type", "checkbox", 1, "form__checkbox__input", 3, "checked", "id", "click"], [1, "form__checkbox__label", 3, "for"], ["tgFontWeight", "r", "appTextFlow", "legal", 3, "innerHTML", "for"]], template: function InputCheckboxLegalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputCheckboxLegalComponent_div_0_Template, 4, 3, "div", 0)(1, InputCheckboxLegalComponent_ng_container_1_Template, 7, 7, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, FontWeightDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxLegalComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-checkbox-legal', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxLegalComponent),
                        multi: true,
                    },
                ], template: "<div *ngIf=\"error\" class=\"notification notification--errorfield\">\n  <span class=\"icon icon-error-shape errorfield\">{{ getText() | translate }}</span>\n</div>\n<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"radio-checkbox\">\n    <div class=\"form__checkbox\" style=\"--animation-delay: i\">\n      <input\n        (click)=\"selectOption(option)\"\n        [checked]=\"selectedOptions.includes(option)\"\n        class=\"form__checkbox__input\"\n        id=\"{{ key + i }}\"\n        name=\"checkbox-group-name\"\n        type=\"checkbox\" />\n      <label class=\"form__checkbox__label\" for=\"{{ key + i }}\"></label>\n    </div>\n    <label [innerHTML]=\"getOptionLabel(option) | translate\" for=\"{{ key + i }}\" tgFontWeight=\"r\" appTextFlow=\"legal\">\n    </label>\n  </div>\n</ng-container>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxLegalComponent, { className: "InputCheckboxLegalComponent" }); })();

function InputCheckboxWithCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, ctx_r0.getLabel()), i0.ɵɵsanitizeHtml);
} }
function InputCheckboxWithCardComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r4.getSubscript(option_r2), i0.ɵɵsanitizeHtml);
} }
function InputCheckboxWithCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "input", 5);
    i0.ɵɵlistener("click", function InputCheckboxWithCardComponent_div_3_Template_input_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const option_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 6)(3, "div", 7);
    i0.ɵɵelement(4, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵelement(6, "div", 10);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtemplate(8, InputCheckboxWithCardComponent_div_3_div_8_Template, 1, 1, "div", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap("--animation-delay:" + i_r3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "checkboxCard-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵproperty("checked", ctx_r1.selectedOptions.includes(option_r2));
    i0.ɵɵattribute("disabled", option_r2.disabled ? "disabled" : null);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("for", "checkboxCard-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(7, 13, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasSubscript(option_r2));
} }
class InputCheckboxWithCardComponent extends AbstractCheckboxComponent {
    getSubscript(option) {
        return option.subScript || '';
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵInputCheckboxWithCardComponent_BaseFactory; return function InputCheckboxWithCardComponent_Factory(t) { return (ɵInputCheckboxWithCardComponent_BaseFactory || (ɵInputCheckboxWithCardComponent_BaseFactory = i0.ɵɵgetInheritedFactory(InputCheckboxWithCardComponent)))(t || InputCheckboxWithCardComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputCheckboxWithCardComponent, selectors: [["tg-form-checkbox-with-card"]], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputCheckboxWithCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[4, "ngIf"], ["class", "checkbox-container animation-show-slide-up", 3, "style", 4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h3", "text-align--center", 3, "innerHTML"], [1, "whitespace", "whitespace--small"], [1, "checkbox-container", "animation-show-slide-up"], ["disabled", "disabled", "type", "checkbox", 1, "checkbox-container__input", 3, "checked", "id", "name", "value", "click"], [1, "checkbox-container__label", 3, "for"], [1, "checkbox-container__label__tick"], [1, "icon-tick"], [1, "checkbox-container__label__content"], [3, "innerHTML"], ["class", "text--small", 3, "innerHTML", 4, "ngIf"], [1, "text--small", 3, "innerHTML"]], template: function InputCheckboxWithCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, InputCheckboxWithCardComponent_div_1_Template, 4, 5, "div", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div");
            i0.ɵɵtemplate(3, InputCheckboxWithCardComponent_div_3_Template, 9, 15, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customLabel && !ctx.toHideError());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputCheckboxWithCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-checkbox-with-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputCheckboxWithCardComponent),
                        multi: true,
                    },
                ], template: "<div>\n  <!-- Error banner/message for the input groups with label-modifiers -->\n  <div *ngIf=\"customLabel && !toHideError()\">\n    <div\n      [class.form__label--error]=\"error\"\n      [innerHTML]=\"getLabel() | translate\"\n      class=\"text-flow text-flow--h3 text-align--center\"></div>\n    <div class=\"whitespace whitespace--small\"></div>\n  </div>\n</div>\n<div>\n  <div\n    *ngFor=\"let option of optionList; let i = index\"\n    class=\"checkbox-container animation-show-slide-up\"\n    style=\"{{ '--animation-delay:' + i }}\">\n    <input\n      (click)=\"selectOption(option)\"\n      [attr.disabled]=\"option.disabled ? 'disabled' : null\"\n      [checked]=\"selectedOptions.includes(option)\"\n      class=\"checkbox-container__input\"\n      disabled=\"disabled\"\n      id=\"checkboxCard-{{ i }}-{{ key }}\"\n      name=\"choice-{{ key }}\"\n      type=\"checkbox\"\n      value=\"{{ option.value }}\" />\n    <!-- Effective body -->\n    <label class=\"checkbox-container__label\" for=\"checkboxCard-{{ i }}-{{ key }}\">\n      <div class=\"checkbox-container__label__tick\">\n        <i class=\"icon-tick\"></i>\n      </div>\n      <div class=\"checkbox-container__label__content\">\n        <div [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n        <div *ngIf=\"hasSubscript(option)\" [innerHTML]=\"getSubscript(option)\" class=\"text--small\"></div>\n      </div>\n    </label>\n    <!-- End Effective Body -->\n  </div>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputCheckboxWithCardComponent, { className: "InputCheckboxWithCardComponent" }); })();

function InputRadioGroupCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, ctx_r0.getLabel()), " ");
} }
function InputRadioGroupCardComponent_ng_container_4_span_13_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r8.getLabelValue("business-price-symbol")));
} }
const _c0$2 = a0 => ({ "text-strikethrough": a0 });
const _c1$1 = a0 => ({ price: a0 });
function InputRadioGroupCardComponent_ng_container_4_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "price");
    i0.ɵɵtemplate(4, InputRadioGroupCardComponent_ng_container_4_span_13_span_4_Template, 3, 3, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0$2, option_r2.isPromo));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(2, 3, ctx_r4.getLabelValue("installType-price"), i0.ɵɵpureFunction1(10, _c1$1, i0.ɵɵpipeBind1(3, 6, option_r2.price))), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !option_r2.isPromo && ctx_r4.isBusiness);
} }
function InputRadioGroupCardComponent_ng_container_4_span_14_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r10.getLabelValue("business-price-symbol")));
} }
const _c2 = a0 => ({ priceAfterPromo: a0 });
function InputRadioGroupCardComponent_ng_container_4_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "price");
    i0.ɵɵtemplate(4, InputRadioGroupCardComponent_ng_container_4_span_14_span_4_Template, 3, 3, "span", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(2, 2, ctx_r5.getLabelValue("installType-priceAfterPromo"), i0.ɵɵpureFunction1(7, _c2, i0.ɵɵpipeBind1(3, 5, option_r2.priceAfterPromo))), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.isBusiness);
} }
function InputRadioGroupCardComponent_ng_container_4_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, ctx_r6.getLabelValue("gratis")));
} }
function InputRadioGroupCardComponent_ng_container_4_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "span", 26);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 1, ctx_r7.getLabelValue("promo")));
} }
function InputRadioGroupCardComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "input", 8);
    i0.ɵɵelementStart(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "label", 12);
    i0.ɵɵlistener("click", function InputRadioGroupCardComponent_ng_container_4_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const option_r2 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13);
    i0.ɵɵelement(8, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "div", 15);
    i0.ɵɵelementStart(10, "div", 16);
    i0.ɵɵelement(11, "div", 17);
    i0.ɵɵpipe(12, "translate");
    i0.ɵɵtemplate(13, InputRadioGroupCardComponent_ng_container_4_span_13_Template, 5, 12, "span", 18)(14, InputRadioGroupCardComponent_ng_container_4_span_14_Template, 5, 9, "span", 19)(15, InputRadioGroupCardComponent_ng_container_4_span_15_Template, 3, 3, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, InputRadioGroupCardComponent_ng_container_4_div_16_Template, 6, 3, "div", 20);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("name", "choice-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("inlineSVG", option_r2.imagePath);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(12, 13, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", option_r2.price > 0 && ctx_r1.isModemInstallType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r2.priceAfterPromo > 0 && ctx_r1.isModemInstallType && option_r2.isPromo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r2.priceAfterPromo === 0 && option_r2.isPromo && ctx_r1.isModemInstallType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", option_r2.isPromo && ctx_r1.isModemInstallType);
} }
class InputRadioGroupCardComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    optionList = [];
    customLabel = false;
    hideError = false;
    customOptionLabel = false;
    multipleSelectable = false;
    isModemInstallType = false;
    isBusiness = false;
    selectEvent = new EventEmitter();
    selectedOption;
    onChange = (_value) => {
        // empty implementation
    };
    onTouch = (_touched) => {
        // empty implementation
    };
    toHideError() {
        return this.hideError;
    }
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    getLabelValue(option) {
        if (this.customOptionLabel) {
            return option;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(_isDisabled) {
        // empty implementation
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
        else {
            this.selectedOption = undefined;
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
        this.selectEvent.emit();
    }
    getKey(key) {
        if (this.messageGroup) {
            key = this.messageGroup + '.' + key;
        }
        return key;
    }
    static ɵfac = function InputRadioGroupCardComponent_Factory(t) { return new (t || InputRadioGroupCardComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioGroupCardComponent, selectors: [["tg-form-radio-group-card"]], inputs: { optionList: "optionList", customLabel: "customLabel", hideError: "hideError", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable", isModemInstallType: "isModemInstallType", isBusiness: "isBusiness" }, outputs: { selectEvent: "selectEvent" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioGroupCardComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 2, consts: [[1, "group-cards-input"], ["data-id", "choice", 1, "group", "group--square", "group--square__small"], [4, "ngIf"], [1, "cards"], [4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h2", "section__title"], [1, "whitespace", "whitespace--small"], [1, "cards-slot"], ["type", "radio", 1, "cards-radio", 3, "name", "value", "id", "checked"], [1, "cards--append", "cards--container", "cursor--pointer", "selected"], [1, "cards--body"], [1, "cards--body--inner-container"], [1, "cards-radio__label", 3, "for", "click"], [1, "cards-content__header"], [1, "icon-tick"], [1, "cards-content__image", 3, "inlineSVG"], [1, "cards-content__body"], [1, "text-flow", "text-flow--button", "cards-content__body-label", 3, "innerHTML"], ["class", "text-flow--detail", 3, "ngClass", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], ["class", "cover", 4, "ngIf"], [1, "text-flow--detail", 3, "ngClass"], [1, "text-uppercase"], [1, "cover"], [1, "promo-highlight", "promo-highlight--primary-color", "promo-highlight--mini"], [1, "promo-highlight__first-row"], [1, "promo-highlight__first-row--text"]], template: function InputRadioGroupCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, InputRadioGroupCardComponent_div_2_Template, 5, 5, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, InputRadioGroupCardComponent_ng_container_4_Template, 17, 15, "ng-container", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.customLabel && !ctx.toHideError());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i4$3.InlineSVGDirective, i3.TranslatePipe, PricePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioGroupCardComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-group-card', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioGroupCardComponent),
                        multi: true,
                    },
                ], template: "<div class=\"group-cards-input\">\n  <div class=\"group group--square group--square__small\" data-id=\"choice\">\n    <div *ngIf=\"customLabel && !toHideError()\">\n      <div class=\"text-flow text-flow--h2 section__title\" [class.form__label--error]=\"error\">\n        {{ getLabel() | translate }}\n      </div>\n      <div class=\"whitespace whitespace--small\"></div>\n    </div>\n    <div class=\"cards\">\n      <ng-container *ngFor=\"let option of optionList; let i = index\">\n        <div class=\"cards-slot\">\n          <input\n            type=\"radio\"\n            name=\"choice-{{ key }}\"\n            value=\"{{ option.value }}\"\n            id=\"choice-{{ i }}-{{ key }}\"\n            class=\"cards-radio\"\n            [checked]=\"selectedOption && option.value === selectedOption.value\" />\n          <div class=\"cards--append cards--container cursor--pointer selected\">\n            <div class=\"cards--body\">\n              <div class=\"cards--body--inner-container\">\n                <label for=\"choice-{{ i }}-{{ key }}\" class=\"cards-radio__label\" (click)=\"selectOption(option)\"></label>\n                <div class=\"cards-content__header\">\n                  <i class=\"icon-tick\"></i>\n                </div>\n                <div class=\"cards-content__image\" [inlineSVG]=\"option.imagePath\"></div>\n                <div class=\"cards-content__body\">\n                  <div\n                    class=\"text-flow text-flow--button cards-content__body-label\"\n                    [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n                  <span\n                    *ngIf=\"option.price > 0 && isModemInstallType\"\n                    [ngClass]=\"{ 'text-strikethrough': option.isPromo }\"\n                    class=\"text-flow--detail\"\n                    >{{ getLabelValue('installType-price') | translate: { price: option.price | price } }}\n                    <span *ngIf=\"!option.isPromo && isBusiness\">{{\n                      getLabelValue('business-price-symbol') | translate\n                    }}</span>\n                  </span>\n                  <span\n                    *ngIf=\"option.priceAfterPromo > 0 && isModemInstallType && option.isPromo\"\n                    class=\"text-uppercase\"\n                    >{{\n                      getLabelValue('installType-priceAfterPromo')\n                        | translate: { priceAfterPromo: option.priceAfterPromo | price }\n                    }}\n                    <span *ngIf=\"isBusiness\">{{ getLabelValue('business-price-symbol') | translate }}</span>\n                  </span>\n                  <span\n                    *ngIf=\"option.priceAfterPromo === 0 && option.isPromo && isModemInstallType\"\n                    class=\"text-uppercase\"\n                    >{{ getLabelValue('gratis') | translate }}</span\n                  >\n                </div>\n                <div class=\"cover\" *ngIf=\"option.isPromo && isModemInstallType\">\n                  <div class=\"promo-highlight promo-highlight--primary-color promo-highlight--mini\">\n                    <div class=\"promo-highlight__first-row\">\n                      <span class=\"promo-highlight__first-row--text\">{{ getLabelValue('promo') | translate }}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], hideError: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }], isModemInstallType: [{
            type: Input
        }], isBusiness: [{
            type: Input
        }], selectEvent: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioGroupCardComponent, { className: "InputRadioGroupCardComponent" }); })();

function InputRadioImageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("form__label--error", ctx_r0.error);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 3, ctx_r0.getLabel()), i0.ɵɵsanitizeHtml);
} }
function InputRadioImageComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelement(2, "input", 9);
    i0.ɵɵelementStart(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "label", 13);
    i0.ɵɵlistener("click", function InputRadioImageComponent_ng_container_5_Template_label_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const option_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectOption(option_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 14);
    i0.ɵɵelement(8, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 16);
    i0.ɵɵelement(10, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 18);
    i0.ɵɵelement(12, "div", 19);
    i0.ɵɵpipe(13, "translate");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleMapInterpolate1("--animation-delay: ", i_r3, "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "radio-group-name-", ctx_r1.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r2.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵproperty("checked", ctx_r1.selectedOption && option_r2.value === ctx_r1.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r3, "-", ctx_r1.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("inlineSVG", option_r2.imagePath);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(13, 12, ctx_r1.getOptionLabel(option_r2)), i0.ɵɵsanitizeHtml);
} }
class InputRadioImageComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    selectedOption;
    onChange = (_) => {
        // empty implementation
    };
    onTouch = (_) => {
        // empty implementation
    };
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-image.choose';
    }
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
    }
    getKey(key) {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        keyList.push(key);
        return keyList.join('.');
    }
    static ɵfac = function InputRadioImageComponent_Factory(t) { return new (t || InputRadioImageComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioImageComponent, selectors: [["tg-form-radio-image"]], inputs: { optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioImageComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 2, consts: [[1, "stepper-move", "stepper-move--user-input"], [1, "whitespace", "whitespace--small"], [1, "section", "section-choices", "container"], [4, "ngIf"], [1, "label-modifier-box", "card-square"], [4, "ngFor", "ngForOf"], [1, "text-flow", "text-flow--h3", "text-align--center", 3, "innerHTML"], [1, "whitespace", "whitespace--medium"], [1, "label-modifier-slot", "animation-show-slide-up"], ["type", "radio", 1, "label-modifier-radio", 3, "name", "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cursor--pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "icon", "icon-tick"], [1, "label-modifier-content__image"], [3, "inlineSVG"], [1, "label-modifier-content__body"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"]], template: function InputRadioImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, InputRadioImageComponent_div_3_Template, 4, 5, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtemplate(5, InputRadioImageComponent_ng_container_5_Template, 14, 14, "ng-container", 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.customLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i4$3.InlineSVGDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioImageComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-image', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioImageComponent),
                        multi: true,
                    },
                ], template: "<div class=\"stepper-move stepper-move--user-input\">\n  <div class=\"whitespace whitespace--small\"></div>\n  <div class=\"section section-choices container\">\n    <div *ngIf=\"customLabel\">\n      <div\n        class=\"text-flow text-flow--h3 text-align--center\"\n        [class.form__label--error]=\"error\"\n        [innerHTML]=\"getLabel() | translate\"></div>\n      <div class=\"whitespace whitespace--medium\"></div>\n    </div>\n\n    <div class=\"label-modifier-box card-square\">\n      <ng-container *ngFor=\"let option of optionList; let i = index\">\n        <div class=\"label-modifier-slot animation-show-slide-up\" style=\"--animation-delay: {{ i }}\">\n          <input\n            type=\"radio\"\n            class=\"label-modifier-radio\"\n            name=\"radio-group-name-{{ key }}\"\n            value=\"{{ option.value }}\"\n            id=\"choice-{{ i }}-{{ key }}\"\n            [checked]=\"selectedOption && option.value === selectedOption.value\" />\n          <div class=\"label-modifier--append label-modifier--container cursor--pointer\">\n            <div class=\"label-modifier--body\">\n              <div class=\"label-modifier--body--inner-container\">\n                <label\n                  for=\"choice-{{ i }}-{{ key }}\"\n                  class=\"label-modifier-radio__label\"\n                  (click)=\"selectOption(option)\"></label>\n                <div class=\"label-modifier-content__header\">\n                  <i class=\"icon icon-tick\"></i>\n                </div>\n                <div class=\"label-modifier-content__image\">\n                  <div [inlineSVG]=\"option.imagePath\"></div>\n                </div>\n                <div class=\"label-modifier-content__body\">\n                  <div\n                    class=\"text-flow text-flow--button label-modifier-content__body-label\"\n                    [innerHTML]=\"getOptionLabel(option) | translate\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioImageComponent, { className: "InputRadioImageComponent" }); })();

function InputRadioIconComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
    i0.ɵɵpipe(1, "translate");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r3.getLabel()), i0.ɵɵsanitizeHtml);
} }
function InputRadioIconComponent_ng_container_0_i_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
} if (rf & 2) {
    const option_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", option_r1.icon ? option_r1.icon : "");
} }
function InputRadioIconComponent_ng_container_0_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", !!ctx_r5.customOptionLabel ? option_r1.text : i0.ɵɵpipeBind1(2, 1, option_r1.text), " ");
} }
function InputRadioIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2);
    i0.ɵɵelement(3, "input", 3);
    i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7);
    i0.ɵɵlistener("click", function InputRadioIconComponent_ng_container_0_Template_label_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const option_r1 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.selectOption(option_r1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵelement(9, "span", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵtemplate(11, InputRadioIconComponent_ng_container_0_div_11_Template, 2, 3, "div", 11);
    i0.ɵɵelementStart(12, "div", 12);
    i0.ɵɵtemplate(13, InputRadioIconComponent_ng_container_0_i_13_Template, 1, 1, "i", 13);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, InputRadioIconComponent_ng_container_0_div_16_Template, 3, 3, "div", 14);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("name", "radio-group-name-", ctx_r0.key, "");
    i0.ɵɵpropertyInterpolate("value", option_r1.value);
    i0.ɵɵpropertyInterpolate2("id", "choice-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵproperty("checked", ctx_r0.selectedOption && option_r1.value === ctx_r0.selectedOption.value);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate2("for", "choice-", i_r2, "-", ctx_r0.key, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.customLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !!option_r1.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", !!ctx_r0.customOptionLabel ? option_r1.label : i0.ɵɵpipeBind1(15, 11, option_r1.label), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !!option_r1.text);
} }
class InputRadioIconComponent extends InputAbstractComponent {
    languageService;
    formService;
    messageGroupDirective;
    injector;
    optionList = [];
    customLabel = false;
    customOptionLabel = false;
    multipleSelectable = false;
    constructor(languageService, formService, messageGroupDirective, injector) {
        super(languageService, formService, messageGroupDirective, injector);
        this.languageService = languageService;
        this.formService = formService;
        this.messageGroupDirective = messageGroupDirective;
        this.injector = injector;
    }
    selectedOption;
    onChange = (_) => {
        // empty implementation
    };
    onTouch = (_) => {
        // empty implementation
    };
    getOptionLabel(option) {
        if (this.customOptionLabel) {
            return option.label;
        }
        return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    getLabel() {
        if (this.customLabel) {
            return super.getLabel();
        }
        return 'controls.input-radio-icon.choose';
    }
    writeValue(optionValue) {
        if (optionValue) {
            this.selectedOption = this.optionList.find((optionOfList) => {
                return optionOfList.value === optionValue;
            });
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.onTouch(option.value);
        this.onChange(option.value);
    }
    getKey(key) {
        const keyList = [];
        if (this.messageGroup) {
            keyList.push(this.messageGroup);
        }
        if (this.labelPrefix) {
            keyList.push(this.labelPrefix);
        }
        keyList.push(key);
        return keyList.join('.');
    }
    static ɵfac = function InputRadioIconComponent_Factory(t) { return new (t || InputRadioIconComponent)(i0.ɵɵdirectiveInject(i1.LanguageService), i0.ɵɵdirectiveInject(FormErrorService), i0.ɵɵdirectiveInject(MessageGroupDirective, 8), i0.ɵɵdirectiveInject(i0.Injector)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputRadioIconComponent, selectors: [["tg-form-radio-icon"]], inputs: { optionList: "optionList", customLabel: "customLabel", customOptionLabel: "customOptionLabel", multipleSelectable: "multipleSelectable" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => InputRadioIconComponent),
                    multi: true,
                },
            ]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["data-id", "choice", 1, "label-modifier-box", "card-mini", "card-mini--radio-circle-box"], [1, "label-modifier-slot"], ["type", "radio", 1, "label-modifier-radio", 3, "name", "value", "id", "checked"], [1, "label-modifier--append", "label-modifier--container", "cur-pointer"], [1, "label-modifier--body"], [1, "label-modifier--body--inner-container"], [1, "label-modifier-radio__label", 3, "for", "click"], [1, "label-modifier-content__header"], [1, "radio-circle-box", "display--inline-flex", "justify-content--center", "align-items--center", "align-self--center", "border-radius--circle"], [1, "label-modifier-content__body"], ["class", "text-flow text-flow--button label-modifier-content__body-label", 3, "innerHTML", 4, "ngIf"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label"], ["class", "icon", 3, "ngClass", 4, "ngIf"], ["class", "px--l text-flow text-flow--legal label-modifier-content__body-range", 4, "ngIf"], [1, "text-flow", "text-flow--button", "label-modifier-content__body-label", 3, "innerHTML"], [1, "icon", 3, "ngClass"], [1, "px--l", "text-flow", "text-flow--legal", "label-modifier-content__body-range"]], template: function InputRadioIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InputRadioIconComponent_ng_container_0_Template, 17, 13, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.optionList);
        } }, dependencies: [i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputRadioIconComponent, [{
        type: Component,
        args: [{ selector: 'tg-form-radio-icon', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputRadioIconComponent),
                        multi: true,
                    },
                ], template: "<ng-container *ngFor=\"let option of optionList; let i = index\">\n  <div class=\"label-modifier-box card-mini card-mini--radio-circle-box\" data-id=\"choice\">\n    <div class=\"label-modifier-slot\">\n      <input\n        type=\"radio\"\n        class=\"label-modifier-radio\"\n        name=\"radio-group-name-{{ key }}\"\n        value=\"{{ option.value }}\"\n        id=\"choice-{{ i }}-{{ key }}\"\n        [checked]=\"selectedOption && option.value === selectedOption.value\" />\n      <div class=\"label-modifier--append label-modifier--container cur-pointer\">\n        <div class=\"label-modifier--body\">\n          <div class=\"label-modifier--body--inner-container\">\n            <label\n              for=\"choice-{{ i }}-{{ key }}\"\n              class=\"label-modifier-radio__label\"\n              (click)=\"selectOption(option)\"></label>\n            <div class=\"label-modifier-content__header\">\n              <span\n                class=\"radio-circle-box display--inline-flex justify-content--center align-items--center align-self--center border-radius--circle\"></span>\n            </div>\n            <div class=\"label-modifier-content__body\">\n              <div\n                *ngIf=\"customLabel\"\n                class=\"text-flow text-flow--button label-modifier-content__body-label\"\n                [innerHTML]=\"getLabel() | translate\"></div>\n              <div class=\"text-flow text-flow--button label-modifier-content__body-label\">\n                <i *ngIf=\"!!option.icon\" class=\"icon\" [ngClass]=\"option.icon ? option.icon : ''\"></i>\n                {{ !!customOptionLabel ? option.label : (option.label | translate) }}\n              </div>\n              <div *ngIf=\"!!option.text\" class=\"px--l text-flow text-flow--legal label-modifier-content__body-range\">\n                {{ !!customOptionLabel ? option.text : (option.text | translate) }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n" }]
    }], () => [{ type: i1.LanguageService }, { type: FormErrorService }, { type: MessageGroupDirective, decorators: [{
                type: Optional
            }] }, { type: i0.Injector }], { optionList: [{
            type: Input
        }], customLabel: [{
            type: Input
        }], customOptionLabel: [{
            type: Input
        }], multipleSelectable: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InputRadioIconComponent, { className: "InputRadioIconComponent" }); })();

class MACAddressConstants {
    static DEFAULT_CLASS = 'default';
    static ERROR_CLASS = 'error';
    static FAIR_CLASS = 'fair';
    static VALID_CLASS = 'strong';
    static BACKSPACE = 'Backspace';
}

const _c0$1 = ["formRow"];
function MACAddressComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 4, 5);
    i0.ɵɵlistener("keyup", function MACAddressComponent_input_2_Template_input_keyup_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r7); const i_r4 = restoredCtx.index; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.keyUpEvent($event, i_r4)); })("blur", function MACAddressComponent_input_2_Template_input_blur_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.getFullMACAddress()); })("paste", function MACAddressComponent_input_2_Template_input_paste_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onPaste($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const input_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("formControlName", input_r3);
} }
function MACAddressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "ng.mac-address.lbl.mac-address-error"), " ");
} }
function MACAddressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "ng.mac-address.lbl.mac-address-invalid"), " ");
} }
class MACAddressComponent {
    macAddressForm = new FormGroup({});
    formInput = ['input0', 'input1', 'input2', 'input3', 'input4', 'input5'];
    rows;
    macAddress;
    canShowError;
    isValidMacAddress = true;
    isValuedCopied = false;
    constructor() {
        this.macAddressForm = this.toFormGroup(this.formInput);
    }
    ngOnInit() {
        if (this.macAddress) {
            const macAddressArray = this.macAddress.split(':');
            macAddressArray.forEach((value, i) => {
                const controlName = 'input' + i;
                this.macAddressForm.controls[controlName].setValue(value);
            });
        }
    }
    isValidMacAddressEntered() {
        let isValidMacAddressValue = true;
        if (!this.macAddress && this.macAddressForm.invalid) {
            this.rows.get(0)?.nativeElement.focus();
            this.macAddressForm.markAllAsTouched();
            this.canShowError = true;
            isValidMacAddressValue = false;
        }
        if (!RegexConstants.MAC_ADDRESS.test(this.macAddress)) {
            this.setErrorForFormControls(true);
            this.isValidMacAddress = false;
            isValidMacAddressValue = false;
        }
        return isValidMacAddressValue;
    }
    showError() {
        return this.macAddressForm.invalid && this.allElementsTouched();
    }
    getFullMACAddress() {
        this.canShowError = false;
        let currentMacAddress = '';
        each(this.macAddressForm.controls, function (input, index) {
            if (input.value) {
                currentMacAddress += index === 'input5' ? input.value : input.value + ':';
            }
        });
        this.macAddress = currentMacAddress;
        this.isValidMacAddress = true;
    }
    keyUpEvent(event, index) {
        const keyboardEvent = event;
        const position = keyboardEvent.code === '8' && keyboardEvent.key === MACAddressConstants.BACKSPACE ? index - 1 : index + 1;
        const isBackSpaceKeyAndValueEmpty = this.chechBackSpaceKeyAndValueEmpty(keyboardEvent);
        if (keyboardEvent.target) {
            if (keyboardEvent.code === '32') {
                keyboardEvent.target.value = '';
                keyboardEvent.preventDefault?.();
            }
            else if (position > -1 &&
                position < this.formInput.length &&
                ((!this.isValuedCopied && keyboardEvent.target.value.length === 2) ||
                    isBackSpaceKeyAndValueEmpty)) {
                this.rows.get(position)?.nativeElement.focus();
            }
        }
        if (this.isValuedCopied) {
            this.rows.get(5)?.nativeElement.focus();
            this.isValuedCopied = false;
        }
    }
    getMacAddressComplexityClass() {
        if (!this.macAddress) {
            return MACAddressConstants.DEFAULT_CLASS;
        }
        else if (this.showError()) {
            return MACAddressConstants.ERROR_CLASS;
        }
        else if (this.macAddress && this.macAddress.length < 12) {
            return MACAddressConstants.FAIR_CLASS;
        }
        return MACAddressConstants.VALID_CLASS;
    }
    onPaste(event) {
        const clipboardData = event.clipboardData;
        const pastedText = clipboardData?.getData('text') || '';
        const macAddress = pastedText.indexOf('-') > -1 ? pastedText.split('-') : pastedText.split(':');
        if (macAddress.length > 0) {
            macAddress.forEach((value, i) => {
                const controlName = 'input' + i;
                this.macAddressForm.controls[controlName].setValue(value);
            });
            this.isValuedCopied = true;
        }
    }
    toFormGroup(elements) {
        const group = {};
        elements.forEach((key) => {
            group[key] = new FormControl('', Validators.required);
        });
        return new FormGroup(group);
    }
    setErrorForFormControls(isInvalid) {
        Object.keys(this.macAddressForm.controls).forEach((controlName) => {
            const formControl = this.macAddressForm.controls[controlName];
            isInvalid ? formControl.setErrors({ InvalidMAC: true }) : formControl.setErrors(null);
        });
    }
    allElementsTouched() {
        return (filter(this.formInput, (input) => {
            return !this.macAddressForm.controls[input].touched;
        }).length === 0);
    }
    chechBackSpaceKeyAndValueEmpty(event) {
        return event.key === MACAddressConstants.BACKSPACE && event.target.value.length === 0;
    }
    static ɵfac = function MACAddressComponent_Factory(t) { return new (t || MACAddressComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MACAddressComponent, selectors: [["app-mac-address"]], viewQuery: function MACAddressComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rows = _t);
        } }, inputs: { macAddress: "macAddress" }, decls: 5, vars: 4, consts: [[3, "formGroup"], [1, "display--flex"], ["type", "text", "class", "form__input pid-profile__otp-value-container mr--xxs text-align--center pl-5", "required", "true", "placeholder", "00", "maxlength", "2", 3, "formControlName", "keyup", "blur", "paste", 4, "ngFor", "ngForOf"], ["class", "formErrorInput", 4, "ngIf"], ["type", "text", "required", "true", "placeholder", "00", "maxlength", "2", 1, "form__input", "pid-profile__otp-value-container", "mr--xxs", "text-align--center", "pl-5", 3, "formControlName", "keyup", "blur", "paste"], ["formRow", ""], [1, "formErrorInput"], [1, "color-red", "text--s", "text-align--left", "cursor--default"]], template: function MACAddressComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, MACAddressComponent_input_2_Template, 2, 1, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MACAddressComponent_div_3_Template, 4, 3, "div", 3)(4, MACAddressComponent_div_4_Template, 4, 3, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.macAddressForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.formInput);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showError() && ctx.isValidMacAddress && ctx.canShowError);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isValidMacAddress);
        } }, dependencies: [i1$1.NgForOf, i1$1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, FormDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MACAddressComponent, [{
        type: Component,
        args: [{ selector: 'app-mac-address', template: "<form [formGroup]=\"macAddressForm\">\n  <div class=\"display--flex\">\n    <input\n      *ngFor=\"let input of formInput; index as i\"\n      #formRow\n      type=\"text\"\n      formControlName=\"{{ input }}\"\n      class=\"form__input pid-profile__otp-value-container mr--xxs text-align--center pl-5\"\n      required=\"true\"\n      placeholder=\"00\"\n      maxlength=\"2\"\n      (keyup)=\"keyUpEvent($event, i)\"\n      (blur)=\"getFullMACAddress()\"\n      (paste)=\"onPaste($event)\" />\n  </div>\n  <div class=\"formErrorInput\" *ngIf=\"showError() && isValidMacAddress && canShowError\">\n    <div class=\"color-red text--s text-align--left cursor--default\">\n      {{ 'ng.mac-address.lbl.mac-address-error' | translate }}\n    </div>\n  </div>\n  <div class=\"formErrorInput\" *ngIf=\"!isValidMacAddress\">\n    <div class=\"color-red text--s text-align--left cursor--default\">\n      {{ 'ng.mac-address.lbl.mac-address-invalid' | translate }}\n    </div>\n  </div>\n</form>\n" }]
    }], () => [], { rows: [{
            type: ViewChildren,
            args: ['formRow']
        }], macAddress: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MACAddressComponent, { className: "MACAddressComponent" }); })();

const MinMaxLengthsValidator = (control) => {
    let duid = control.value;
    duid = duid.replace(/:/g, '');
    return duid.length < 20 || duid.length > 28 ? { InvalidDUID: true } : null;
};

const DuidFormatValidator = (control) => {
    let duid = control.value;
    duid = duid.replace(/:/g, '');
    return duid.length % 2 !== 0 ? { InvalidDUID: true } : null;
};

function DuidComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "ng.duid.lbl.duid-length-error"), " ");
} }
class DuidComponent {
    duidFormGroup;
    duid;
    ngOnInit() {
        this.duidFormGroup.addControl('duidField', new FormControl(this.duid, [Validators.required, MinMaxLengthsValidator, DuidFormatValidator]));
    }
    keyUpEvent(event) {
        const keyboardEvent = event;
        if (keyboardEvent.key !== 'Backspace') {
            const value = this.duidFormGroup.controls['duidField'].value;
            const newValue = value.replace(/:/g, '');
            this.duidFormGroup.controls['duidField'].setValue(newValue.replace(/.{2}(?!$)/g, '$&:'));
        }
    }
    keyPressEvent(event) {
        const keyboardEvent = event;
        const keyCharCode = keyboardEvent.key.charCodeAt(0);
        // 0-9
        if (keyCharCode >= 48 && keyCharCode <= 57) {
            return keyboardEvent.key;
        }
        // A-Z
        if (keyCharCode >= 65 && keyCharCode <= 90) {
            return keyboardEvent.key;
        }
        // a-z
        if (keyCharCode >= 97 && keyCharCode <= 122) {
            return keyboardEvent.key;
        }
        // backspace
        if (keyCharCode === 8) {
            return keyboardEvent.key;
        }
        return false;
    }
    static ɵfac = function DuidComponent_Factory(t) { return new (t || DuidComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DuidComponent, selectors: [["app-duid"]], inputs: { duidFormGroup: "duidFormGroup", duid: "duid" }, decls: 5, vars: 5, consts: [[3, "formGroup"], [1, "display--flex"], ["type", "text", "formControlName", "duidField", "required", "true", "maxlength", "41", 1, "form__input", "mr--xxs", "text-align--left", 3, "placeholder", "keyup", "keypress"], ["class", "formErrorInput", 4, "ngIf"], [1, "formErrorInput"], [1, "color-red", "text--s", "text-align--left", "cursor--default"]], template: function DuidComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "input", 2);
            i0.ɵɵlistener("keyup", function DuidComponent_Template_input_keyup_2_listener($event) { return ctx.keyUpEvent($event); })("keypress", function DuidComponent_Template_input_keypress_2_listener($event) { return ctx.keyPressEvent($event); });
            i0.ɵɵpipe(3, "translate");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DuidComponent_div_4_Template, 4, 3, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.duidFormGroup);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(3, 3, "ng.duid.lbl.placeholder"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.duidFormGroup.invalid);
        } }, dependencies: [i1$1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, FormDirective, i3.TranslatePipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DuidComponent, [{
        type: Component,
        args: [{ selector: 'app-duid', template: "<form [formGroup]=\"duidFormGroup\">\n  <div class=\"display--flex\">\n    <input\n      type=\"text\"\n      formControlName=\"duidField\"\n      class=\"form__input mr--xxs text-align--left\"\n      required=\"true\"\n      placeholder=\"{{ 'ng.duid.lbl.placeholder' | translate }}\"\n      maxlength=\"41\"\n      (keyup)=\"keyUpEvent($event)\"\n      (keypress)=\"keyPressEvent($event)\" />\n  </div>\n  <div class=\"formErrorInput\" *ngIf=\"duidFormGroup.invalid\">\n    <div class=\"color-red text--s text-align--left cursor--default\">\n      {{ 'ng.duid.lbl.duid-length-error' | translate }}\n    </div>\n  </div>\n</form>\n" }]
    }], null, { duidFormGroup: [{
            type: Input
        }], duid: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DuidComponent, { className: "DuidComponent" }); })();

class ScrollToErrorDirective {
    elmRef;
    formErrorService;
    formSubscription;
    constructor(elmRef, formErrorService) {
        this.elmRef = elmRef;
        this.formErrorService = formErrorService;
        this.formSubscription = this.formErrorService.submit$.subscribe(() => {
            this.scrollToFirstInvalidControl();
        });
    }
    scrollToFirstInvalidControl() {
        const firstInvalidControl = this.elmRef.nativeElement.querySelector('form input.ng-invalid, form input.ng-invalid-custom');
        if (firstInvalidControl) {
            window.scroll({
                top: ScrollToErrorDirective.getTopOffset(firstInvalidControl),
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    static getTopOffset(controlEl) {
        const labelOffset = 50;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }
    static ɵfac = function ScrollToErrorDirective_Factory(t) { return new (t || ScrollToErrorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(FormErrorService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScrollToErrorDirective, selectors: [["", "scrollToError", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollToErrorDirective, [{
        type: Directive,
        args: [{
                selector: '[scrollToError]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: FormErrorService }], null); })();

var TextFlowType;
(function (TextFlowType) {
    TextFlowType["body"] = "body";
    TextFlowType["h1"] = "h1";
    TextFlowType["h3"] = "h3";
    TextFlowType["h4"] = "h4";
    TextFlowType["legal"] = "legal";
    TextFlowType["label"] = "label";
    TextFlowType["detail"] = "detail";
    TextFlowType["details"] = "details";
    TextFlowType["button"] = "button";
})(TextFlowType || (TextFlowType = {}));
class TextFlowDirective {
    renderer;
    el;
    textFlow;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.textFlow) {
            this.renderer.addClass(this.el.nativeElement, 'text-flow');
            this.renderer.addClass(this.el.nativeElement, 'text-flow--' + this.textFlow);
        }
    }
    static ɵfac = function TextFlowDirective_Factory(t) { return new (t || TextFlowDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextFlowDirective, selectors: [["", "tgTextFlow", ""]], inputs: { textFlow: [i0.ɵɵInputFlags.None, "tgTextFlow", "textFlow"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFlowDirective, [{
        type: Directive,
        args: [{
                selector: '[tgTextFlow]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { textFlow: [{
            type: Input,
            args: ['tgTextFlow']
        }] }); })();

var PaddingSize;
(function (PaddingSize) {
    PaddingSize["xxxSmall"] = "xxxs";
    PaddingSize["xSmall"] = "xxs";
    PaddingSize["small"] = "s";
    PaddingSize["medium"] = "m";
    PaddingSize["large"] = "l";
    PaddingSize["xLarge"] = "xl";
    PaddingSize["xxLarge"] = "xxl";
})(PaddingSize || (PaddingSize = {}));
var PaddingPositions;
(function (PaddingPositions) {
    PaddingPositions[""] = "";
    PaddingPositions["top"] = "t";
    PaddingPositions["bottom"] = "b";
    PaddingPositions["left"] = "l";
    PaddingPositions["right"] = "r";
})(PaddingPositions || (PaddingPositions = {}));
class PaddingDirective {
    renderer;
    el;
    padding;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (!this.padding) {
            return;
        }
        if (Array.isArray(this.padding)) {
            this.padding.forEach((padding) => {
                if (!padding.position) {
                    padding.position = '';
                }
                this.renderer.addClass(this.el.nativeElement, `p${padding.position}--${padding.size}`);
            });
        }
        else {
            if (!this.padding.position) {
                this.padding.position = '';
            }
            this.renderer.addClass(this.el.nativeElement, `p${this.padding.position}--${this.padding.size}`);
        }
    }
    static ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "tgPadding", ""]], inputs: { padding: [i0.ɵɵInputFlags.None, "tgPadding", "padding"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[tgPadding]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { padding: [{
            type: Input,
            args: ['tgPadding']
        }] }); })();

class IconDirective {
    renderer;
    el;
    iconType;
    iconSize;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.iconType) {
            this.renderer.addClass(this.el.nativeElement, `icon-${this.iconType}`);
        }
        if (this.iconSize) {
            this.renderer.addClass(this.el.nativeElement, `icon-${this.iconSize}`);
        }
    }
    static ɵfac = function IconDirective_Factory(t) { return new (t || IconDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: IconDirective, selectors: [["i", "tgIcon", ""]], inputs: { iconType: "iconType", iconSize: "iconSize" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconDirective, [{
        type: Directive,
        args: [{
                selector: 'i[tgIcon]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { iconType: [{
            type: Input
        }], iconSize: [{
            type: Input
        }] }); })();

class TrackingInfoDirective {
    trackingInfo;
    static ɵfac = function TrackingInfoDirective_Factory(t) { return new (t || TrackingInfoDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TrackingInfoDirective, selectors: [["", "trackingInfo", ""]], inputs: { trackingInfo: "trackingInfo" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackingInfoDirective, [{
        type: Directive,
        args: [{
                selector: '[trackingInfo]',
            }]
    }], null, { trackingInfo: [{
            type: Input
        }] }); })();

class ButtonClickDirective {
    dataLayerService;
    trackingInfoDirective;
    clickEvent;
    constructor(_elmRef, dataLayerService, trackingInfoDirective) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
    }
    eventHandler() {
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory, this.trackingInfoDirective.trackingInfo.subCategory);
        this.addEvent({
            itemName: this.clickEvent?.label,
            itemData: '',
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
            cart: this.trackingInfoDirective.trackingInfo.cart,
        }, category).then();
    }
    addEvent(attributes, category) {
        let eventName = DatalayerEventNames.BUTTON_CLICKED;
        if (this.clickEvent && this.clickEvent.event && this.clickEvent.event.name) {
            eventName = this.clickEvent.event.name;
        }
        const eventInfoData = this.dataLayerService.createEventInfo(eventName, EventTypes.CLICK);
        return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
    }
    static ɵfac = function ButtonClickDirective_Factory(t) { return new (t || ButtonClickDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1$2.DataLayerService), i0.ɵɵdirectiveInject(TrackingInfoDirective, 1)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonClickDirective, selectors: [["button", "clickEvent", ""]], hostBindings: function ButtonClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ButtonClickDirective_click_HostBindingHandler($event) { return ctx.eventHandler($event); });
        } }, inputs: { clickEvent: "clickEvent" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonClickDirective, [{
        type: Directive,
        args: [{
                selector: 'button[clickEvent]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1$2.DataLayerService }, { type: TrackingInfoDirective, decorators: [{
                type: Host
            }] }], { clickEvent: [{
            type: Input
        }], eventHandler: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class EventLinkClickDirective {
    dataLayerService;
    trackingInfoDirective;
    clickEvent;
    constructor(_elmRef, dataLayerService, trackingInfoDirective) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
    }
    trackingEvent(event) {
        let label = '';
        if (this.clickEvent && this.clickEvent.label) {
            label = this.clickEvent.label;
        }
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory, this.trackingInfoDirective.trackingInfo.subCategory);
        this.addEvent({
            itemName: label,
            itemData: event.value,
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
        }, category).then();
    }
    addEvent(attributes, category) {
        const eventInfo = this.dataLayerService.createEventInfo(DatalayerEventNames.LINK_CLICKED, EventTypes.LINK_CLICK);
        return this.dataLayerService.sendEvent({
            eventInfo,
            attributes,
            category,
        });
    }
    static ɵfac = function EventLinkClickDirective_Factory(t) { return new (t || EventLinkClickDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1$2.DataLayerService), i0.ɵɵdirectiveInject(TrackingInfoDirective, 1)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: EventLinkClickDirective, selectors: [["a", "clickEvent", ""], ["span", "clickEvent", ""]], hostBindings: function EventLinkClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function EventLinkClickDirective_click_HostBindingHandler($event) { return ctx.trackingEvent($event); });
        } }, inputs: { clickEvent: "clickEvent" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventLinkClickDirective, [{
        type: Directive,
        args: [{
                selector: 'a[clickEvent], span[clickEvent]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1$2.DataLayerService }, { type: TrackingInfoDirective, decorators: [{
                type: Host
            }] }], { clickEvent: [{
            type: Input
        }], trackingEvent: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class TrackBlurEventDirective {
    dataLayerService;
    trackingInfoDirective;
    translateService;
    trackBlurEvent;
    blockData = true;
    constructor(dataLayerService, trackingInfoDirective, translateService) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
        this.translateService = translateService;
    }
    trackingEvent(event) {
        let label = event.target.attributes.getNamedItem('formControlName')?.value || '';
        if (this.trackBlurEvent && this.trackBlurEvent.label) {
            label = this.trackBlurEvent.label;
        }
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory, this.trackingInfoDirective.trackingInfo.subCategory);
        this.addFormFieldCompletedEvent({
            itemName: this.translateService.instant(label),
            itemData: !this.blockData ? event.target.value : '',
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
            cart: this.getCart(),
        }, category).then();
    }
    addFormFieldCompletedEvent(attributes, category) {
        const eventInfoData = this.dataLayerService.createEventInfo(DatalayerEventNames.FORM_FIELD_COMPLETED, EventTypes.CLICK);
        return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
    }
    getCart() {
        if (this.trackingInfoDirective && this.trackingInfoDirective.trackingInfo.cart) {
            return this.trackingInfoDirective.trackingInfo.cart;
        }
        return {};
    }
    static ɵfac = function TrackBlurEventDirective_Factory(t) { return new (t || TrackBlurEventDirective)(i0.ɵɵdirectiveInject(i1$2.DataLayerService), i0.ɵɵdirectiveInject(TrackingInfoDirective, 1), i0.ɵɵdirectiveInject(i3.TranslateService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TrackBlurEventDirective, selectors: [["input", "trackBlurEvent", ""]], hostBindings: function TrackBlurEventDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focusout", function TrackBlurEventDirective_focusout_HostBindingHandler($event) { return ctx.trackingEvent($event); });
        } }, inputs: { trackBlurEvent: "trackBlurEvent", blockData: "blockData" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackBlurEventDirective, [{
        type: Directive,
        args: [{
                selector: 'input[trackBlurEvent]',
            }]
    }], () => [{ type: i1$2.DataLayerService }, { type: TrackingInfoDirective, decorators: [{
                type: Host
            }] }, { type: i3.TranslateService }], { trackBlurEvent: [{
            type: Input
        }], blockData: [{
            type: Input
        }], trackingEvent: [{
            type: HostListener,
            args: ['focusout', ['$event']]
        }] }); })();

class TrackInputEventDirective {
    dataLayerService;
    trackingInfoDirective;
    translateService;
    trackInputEvent;
    blockData = true;
    constructor(dataLayerService, trackingInfoDirective, translateService) {
        this.dataLayerService = dataLayerService;
        this.trackingInfoDirective = trackingInfoDirective;
        this.translateService = translateService;
    }
    trackingEvent(event) {
        let label = event.label;
        if (this.trackInputEvent && this.trackInputEvent.label) {
            label = this.trackInputEvent.label;
        }
        const category = this.dataLayerService.createCategory(this.trackingInfoDirective.trackingInfo.primaryCategory || '', this.trackingInfoDirective.trackingInfo.subCategory);
        const type = event.type;
        this.addFormFieldCompletedEvent({
            itemName: label ? this.translateService.instant(label) : '',
            itemData: !this.blockData ? event.value : '',
            intent: this.trackingInfoDirective.trackingInfo.intent,
            flowType: this.trackingInfoDirective.trackingInfo.flowType,
            cart: this.getCart(),
        }, category, type).then();
    }
    addFormFieldCompletedEvent(attributes, category, type = DatalayerEventNames.FORM_FIELD_COMPLETED) {
        const eventInfoData = this.dataLayerService.createEventInfo(type, EventTypes.CLICK);
        return this.dataLayerService.sendEvent({ eventInfo: eventInfoData, attributes, category });
    }
    getCart() {
        if (this.trackingInfoDirective && this.trackingInfoDirective.trackingInfo.cart) {
            return this.trackingInfoDirective.trackingInfo.cart;
        }
        return {};
    }
    static ɵfac = function TrackInputEventDirective_Factory(t) { return new (t || TrackInputEventDirective)(i0.ɵɵdirectiveInject(i1$2.DataLayerService), i0.ɵɵdirectiveInject(TrackingInfoDirective, 1), i0.ɵɵdirectiveInject(i3.TranslateService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TrackInputEventDirective, selectors: [["tg-form-input", "trackInputEvent", ""], ["tg-form-input-checkbox", "trackInputEvent", ""], ["tg-form-radio-with-input-vertical", "trackInputEvent", ""], ["tg-form-radio-horizontal", "trackInputEvent", ""], ["tg-form-radio-with-input-horizontal", "trackInputEvent", ""], ["tg-form-checkbox", "trackInputEvent", ""], ["tg-form-checkbox-with-card", "trackInputEvent", ""], ["tg-form-radio-with-card", "trackInputEvent", ""], ["tg-form-dropdown", "trackInputEvent", ""], ["tg-form-radio-with-card-mini-no-select-box-labels", "trackInputEvent", ""], ["tg-form-dropdown", "trackInputEvent", ""], ["tg-form-radio-with-card-mini-with-select-box-labels", "trackInputEvent", ""]], hostBindings: function TrackInputEventDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("trackingEvent", function TrackInputEventDirective_trackingEvent_HostBindingHandler($event) { return ctx.trackingEvent($event); });
        } }, inputs: { trackInputEvent: "trackInputEvent", blockData: "blockData" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackInputEventDirective, [{
        type: Directive,
        args: [{
                selector: 'tg-form-input[trackInputEvent], tg-form-input-checkbox[trackInputEvent], ' +
                    'tg-form-radio-with-input-vertical[trackInputEvent], tg-form-radio-horizontal[trackInputEvent],' +
                    'tg-form-radio-with-input-horizontal[trackInputEvent], tg-form-checkbox[trackInputEvent],' +
                    'tg-form-checkbox-with-card[trackInputEvent], tg-form-radio-with-card[trackInputEvent],' +
                    'tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-no-select-box-labels[trackInputEvent],' +
                    'tg-form-dropdown[trackInputEvent], tg-form-radio-with-card-mini-with-select-box-labels[trackInputEvent]',
            }]
    }], () => [{ type: i1$2.DataLayerService }, { type: TrackingInfoDirective, decorators: [{
                type: Host
            }] }, { type: i3.TranslateService }], { trackInputEvent: [{
            type: Input
        }], blockData: [{
            type: Input
        }], trackingEvent: [{
            type: HostListener,
            args: ['trackingEvent', ['$event']]
        }] }); })();

class ContainerDirective {
    renderer;
    el;
    partitioned = false;
    shadow = true;
    bordered = false;
    cursor = false;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'Container');
        if (this.partitioned) {
            this.addContainerClass('partitioned');
        }
        if (this.bordered) {
            this.addContainerClass('bordered');
        }
        if (this.cursor) {
            this.renderer.addClass(this.el.nativeElement, 'cursor--pointer');
        }
        if (this.shadow) {
            this.addContainerClass('shadow--to-delete');
        }
    }
    addContainerClass(suffix) {
        this.renderer.addClass(this.el.nativeElement, 'Container--' + suffix);
    }
    static ɵfac = function ContainerDirective_Factory(t) { return new (t || ContainerDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContainerDirective, selectors: [["div", "tgContainer", ""]], inputs: { partitioned: "partitioned", shadow: "shadow", bordered: "bordered", cursor: "cursor" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgContainer]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { partitioned: [{
            type: Input
        }], shadow: [{
            type: Input
        }], bordered: [{
            type: Input
        }], cursor: [{
            type: Input
        }] }); })();

class ContainerPartitionDirective {
    renderer;
    el;
    firstItem;
    lastItem;
    inverted;
    dashed;
    noBorders;
    noPadding;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'Container--partitioned--partition');
        if (this.firstItem) {
            this.addContainerClass('first-item');
        }
        if (this.lastItem) {
            this.addContainerClass('last-item');
        }
        if (this.inverted) {
            this.addContainerClass('inverted');
        }
        if (this.dashed) {
            this.addContainerClass('dashed');
        }
        if (this.noBorders) {
            this.addContainerClass('no-borders');
        }
        if (this.noPadding) {
            this.addContainerClass('no-padding');
        }
    }
    addContainerClass(suffix) {
        this.renderer.addClass(this.el.nativeElement, 'Container--partitioned--partition--' + suffix);
    }
    static ɵfac = function ContainerPartitionDirective_Factory(t) { return new (t || ContainerPartitionDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContainerPartitionDirective, selectors: [["div", "tgContainerPartition", ""]], inputs: { firstItem: "firstItem", lastItem: "lastItem", inverted: "inverted", dashed: "dashed", noBorders: "noBorders", noPadding: "noPadding" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContainerPartitionDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgContainerPartition]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { firstItem: [{
            type: Input
        }], lastItem: [{
            type: Input
        }], inverted: [{
            type: Input
        }], dashed: [{
            type: Input
        }], noBorders: [{
            type: Input
        }], noPadding: [{
            type: Input
        }] }); })();

var FontColor;
(function (FontColor) {
    FontColor["brand-2e"] = "brand-2e";
    FontColor["brand-1e"] = "brand-1e";
})(FontColor || (FontColor = {}));
class FontColorDirective {
    renderer;
    el;
    fontColor = '';
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        const fontColor = FontColor[this.fontColor] ?? this.fontColor;
        this.renderer.addClass(this.el.nativeElement, 'color-' + fontColor);
    }
    static ɵfac = function FontColorDirective_Factory(t) { return new (t || FontColorDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontColorDirective, selectors: [["", "tgFontColor", ""]], inputs: { fontColor: [i0.ɵɵInputFlags.None, "tgFontColor", "fontColor"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontColorDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontColor]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontColor: [{
            type: Input,
            args: ['tgFontColor']
        }] }); })();

class FontFamilyDirective {
    renderer;
    el;
    fontFamily = 't4';
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'text-font-family--' + this.fontFamily);
    }
    static ɵfac = function FontFamilyDirective_Factory(t) { return new (t || FontFamilyDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontFamilyDirective, selectors: [["", "tgFontFamily", ""]], inputs: { fontFamily: [i0.ɵɵInputFlags.None, "tgFontFamily", "fontFamily"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontFamilyDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontFamily]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontFamily: [{
            type: Input,
            args: ['tgFontFamily']
        }] }); })();

var FontSize;
(function (FontSize) {
    FontSize["xxs"] = "xs";
    FontSize["xs"] = "xs";
    FontSize["s"] = "s";
    FontSize["m"] = "m";
    FontSize["xm"] = "xm";
    FontSize["r"] = "r";
})(FontSize || (FontSize = {}));
class FontSizeDirective {
    renderer;
    el;
    fontSize;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.fontSize) {
            this.renderer.addClass(this.el.nativeElement, 'text--' + this.fontSize);
        }
    }
    static ɵfac = function FontSizeDirective_Factory(t) { return new (t || FontSizeDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FontSizeDirective, selectors: [["", "tgFontSize", ""]], inputs: { fontSize: [i0.ɵɵInputFlags.None, "tgFontSize", "fontSize"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FontSizeDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFontSize]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { fontSize: [{
            type: Input,
            args: ['tgFontSize']
        }] }); })();

class ColDirective {
    renderer;
    el;
    columns = 12;
    breakpoint;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.breakpoint) {
            this.renderer.addClass(this.el.nativeElement, 'col-' + this.breakpoint + '-' + this.columns);
        }
        else {
            this.renderer.addClass(this.el.nativeElement, 'col-' + this.columns);
        }
    }
    static ɵfac = function ColDirective_Factory(t) { return new (t || ColDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ColDirective, selectors: [["div", "tgGridCol", ""]], inputs: { columns: "columns", breakpoint: "breakpoint" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColDirective, [{
        type: Directive,
        args: [{
                selector: 'div[tgGridCol]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { columns: [{
            type: Input
        }], breakpoint: [{
            type: Input
        }] }); })();

class FullWidthDirective {
    renderer;
    el;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        this.renderer.addClass(this.el.nativeElement, 'width--full');
    }
    static ɵfac = function FullWidthDirective_Factory(t) { return new (t || FullWidthDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FullWidthDirective, selectors: [["", "tgFullWidth", ""]] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullWidthDirective, [{
        type: Directive,
        args: [{
                selector: '[tgFullWidth]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], null); })();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let LoadPageDirective = class LoadPageDirective {
    el;
    renderer;
    window;
    http;
    document;
    tgLoadPage;
    constructor(el, renderer, window, http, document) {
        this.el = el;
        this.renderer = renderer;
        this.window = window;
        this.http = http;
        this.document = document;
    }
    onClick($event) {
        const url = this.tgLoadPage;
        if (!url) {
            return;
        }
        this.storeUrlParamsInSessionStorage(url);
        this.isOverlay(url) ? this.showOverlayContent(url) : this.window.open(url, '_self');
    }
    showOverlayContent(url) {
        const overlayContainer = this.renderer.createElement('div');
        this.renderer.setProperty(overlayContainer, 'id', 'overlayPage');
        this.renderer.setProperty(overlayContainer, 'class', 'overlay-page');
        this.http
            .get(url, { responseType: 'text' })
            .pipe(untilDestroyed(this))
            .subscribe((response) => {
            const overlayElement = this.document.querySelector('#overlayPage');
            if (overlayElement) {
                this.renderer.removeChild(this.document.body, overlayElement);
            }
            this.renderer.appendChild(this.document.body, overlayContainer);
            overlayContainer.innerHTML = response;
            this.recompileAngularJS();
        });
    }
    recompileAngularJS() {
        if (window.angular) {
            const bodyEl = window.document.body;
            window.angular
                .element(bodyEl)
                .injector()
                .invoke([
                '$rootScope',
                '$compile',
                ($rootScope, $compile) => {
                    const $scope = window.angular.element(bodyEl).scope();
                    $compile(bodyEl)($scope);
                    $rootScope.$digest();
                },
            ]);
        }
    }
    isOverlay(url) {
        return url?.indexOf('.overlay-content') !== -1;
    }
    storeUrlParamsInSessionStorage(urlString) {
        // Extract the query string from the URL string
        const queryString = urlString.split('?')[1];
        // Check if there's a query string
        if (queryString) {
            // Use URLSearchParams to parse the query string
            const params = new URLSearchParams(queryString);
            // Iterate over each parameter and store it in session storage
            for (const [key, value] of params.entries()) {
                sessionStorage.setItem(key, value);
            }
        }
    }
    static ɵfac = function LoadPageDirective_Factory(t) { return new (t || LoadPageDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject('Window'), i0.ɵɵdirectiveInject(i1$3.HttpClient), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LoadPageDirective, selectors: [["", "tgLoadPage", ""]], hostBindings: function LoadPageDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function LoadPageDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { tgLoadPage: "tgLoadPage" } });
};
LoadPageDirective = __decorate([
    UntilDestroy()
], LoadPageDirective);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadPageDirective, [{
        type: Directive,
        args: [{
                selector: '[tgLoadPage]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: Window, decorators: [{
                type: Inject,
                args: ['Window']
            }] }, { type: i1$3.HttpClient }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { tgLoadPage: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class AutoHeightDirective {
    el;
    document;
    matchWithClass;
    constructor(el, document) {
        this.el = el;
        this.document = document;
    }
    ngAfterViewChecked() {
        this.setHeight(this.el.nativeElement);
    }
    setHeight(element) {
        element.style.height = this.getHeight() + 'px';
    }
    getHeight() {
        if (this.matchWithClass) {
            return this.document?.getElementsByClassName?.(this.matchWithClass)?.item(0)?.clientHeight;
        }
        return 100;
    }
    static ɵfac = function AutoHeightDirective_Factory(t) { return new (t || AutoHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutoHeightDirective, selectors: [["", "autoHeight", ""]], inputs: { matchWithClass: "matchWithClass" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutoHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[autoHeight]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { matchWithClass: [{
            type: Input
        }] }); })();

class ClickPreventDefaultDirective {
    onClick(event) {
        event.preventDefault();
    }
    static ɵfac = function ClickPreventDefaultDirective_Factory(t) { return new (t || ClickPreventDefaultDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickPreventDefaultDirective, selectors: [["", "appClickPreventDefault", ""]], hostBindings: function ClickPreventDefaultDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickPreventDefaultDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickPreventDefaultDirective, [{
        type: Directive,
        args: [{
                selector: '[appClickPreventDefault]',
            }]
    }], null, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class ClickStopPropagationDirective {
    onClick(event) {
        event.stopPropagation();
    }
    static ɵfac = function ClickStopPropagationDirective_Factory(t) { return new (t || ClickStopPropagationDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ClickStopPropagationDirective, selectors: [["", "appClickStopPropagation", ""]], hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClickStopPropagationDirective, [{
        type: Directive,
        args: [{
                selector: '[appClickStopPropagation]',
            }]
    }], null, { onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();

class MatchHeightDirective {
    el;
    clientBrowserTypeService;
    static SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR = 1.4;
    matchHeightClass;
    constructor(el, clientBrowserTypeService) {
        this.el = el;
        this.clientBrowserTypeService = clientBrowserTypeService;
    }
    ngAfterViewChecked() {
        this.matchHeight(this.el.nativeElement);
    }
    matchHeight(parent) {
        if (!parent) {
            return;
        }
        const children = parent.getElementsByClassName(this.matchHeightClass);
        if (!children) {
            return;
        }
        Array.from(children).forEach((x) => {
            x.style.height = 'initial';
        });
        const itemHeights = Array.from(children).map((x) => {
            if (this.clientBrowserTypeService.isClientUsingSafari()) {
                return x.clientHeight * MatchHeightDirective.SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR;
            }
            else {
                return x.clientHeight;
            }
        });
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);
        Array.from(children).forEach((x) => (x.style.height = `${maxHeight}px`));
    }
    static ɵfac = function MatchHeightDirective_Factory(t) { return new (t || MatchHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ClientBrowserTypeService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: MatchHeightDirective, selectors: [["", "matchHeightClass", ""]], inputs: { matchHeightClass: "matchHeightClass" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatchHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[matchHeightClass]',
            }]
    }], () => [{ type: i0.ElementRef }, { type: i1.ClientBrowserTypeService }], { matchHeightClass: [{
            type: Input
        }] }); })();

class ScrollFocusInvalidInputDirective {
    el;
    submitButtonClassName;
    constructor(el) {
        this.el = el;
    }
    onFormSubmit() {
        this.focusElement(this.el.nativeElement);
    }
    onClick(targetElement) {
        if (targetElement) {
            this.focusElement(document);
        }
    }
    focusElement(element) {
        const invalidInput = element.querySelector('.form-control.ng-invalid.ng-touched')
            ? element.querySelector('.form-control.ng-invalid.ng-touched')
            : element.querySelector('.ng-pristine.ng-touched.error:not(form)');
        if (invalidInput) {
            invalidInput.focus();
            window.scroll({
                top: this.getTopOffset(invalidInput),
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    getTopOffset(controlEl) {
        const labelOffset = 50;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
    static ɵfac = function ScrollFocusInvalidInputDirective_Factory(t) { return new (t || ScrollFocusInvalidInputDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScrollFocusInvalidInputDirective, selectors: [["", "appScrollFocusInvalidInput", ""]], hostBindings: function ScrollFocusInvalidInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("submit", function ScrollFocusInvalidInputDirective_submit_HostBindingHandler() { return ctx.onFormSubmit(); })("click", function ScrollFocusInvalidInputDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
        } }, inputs: { submitButtonClassName: "submitButtonClassName" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollFocusInvalidInputDirective, [{
        type: Directive,
        args: [{
                selector: '[appScrollFocusInvalidInput]',
            }]
    }], () => [{ type: i0.ElementRef }], { submitButtonClassName: [{
            type: Input
        }], onFormSubmit: [{
            type: HostListener,
            args: ['submit']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event.target']]
        }] }); })();

var TextDecorationType;
(function (TextDecorationType) {
    TextDecorationType["line-through"] = "line-through";
})(TextDecorationType || (TextDecorationType = {}));
class TextDecorationDirective {
    renderer;
    el;
    textDecoration;
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        this.addClasses();
    }
    addClasses() {
        if (this.textDecoration) {
            this.renderer.addClass(this.el.nativeElement, 'text-decoration--' + this.textDecoration);
        }
    }
    static ɵfac = function TextDecorationDirective_Factory(t) { return new (t || TextDecorationDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TextDecorationDirective, selectors: [["", "tgTextDecoration", ""]], inputs: { textDecoration: [i0.ɵɵInputFlags.None, "tgTextDecoration", "textDecoration"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextDecorationDirective, [{
        type: Directive,
        args: [{
                selector: '[tgTextDecoration]',
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { textDecoration: [{
            type: Input,
            args: ['tgTextDecoration']
        }] }); })();

class CallexcellTimeslotMapper {
    toModel(rawData) {
        const cafeTimeslotList = new CafeTimeSlotList();
        cafeTimeslotList.timeslots =
            rawData.timeslots && this.createCallExcellTimeslots(this.getEnabledTimeslots(rawData.timeslots));
        return cafeTimeslotList;
    }
    createCallExcellTimeslots(rawCallexcellTimeslots) {
        const timeslots = [];
        const timeslotsGroupedByDate = groupBy(rawCallexcellTimeslots, 'date');
        for (const date in timeslotsGroupedByDate) {
            if (date && timeslotsGroupedByDate[date]) {
                const timeslotDate = new Date(date);
                const timeslotMomentObjs = timeslotsGroupedByDate[date].map((timeslot) => {
                    return this.createTimeslotMomentObject(timeslot);
                });
                const timeslotMomentKeys = timeslotsGroupedByDate[date]
                    .map((timeslot) => {
                    return timeslot.moment;
                })
                    .filter(isDefined);
                timeslots.push(new CallexcellTimeslot(timeslotDate, timeslotMomentKeys, timeslotMomentObjs));
            }
        }
        return timeslots;
    }
    createTimeslotMomentObject(timeslot) {
        const start = dayjs(timeslot.start);
        const end = dayjs(timeslot.end);
        const startHours = start.format('HH');
        const startMinutes = start.format('mm');
        const endHours = end.format('HH');
        const endMinutes = end.format('mm');
        const momentKey = timeslot.moment;
        return { key: momentKey, startHours, endHours, endMinutes, startMinutes };
    }
    getEnabledTimeslots(rawCallexcellTimeslots) {
        return rawCallexcellTimeslots
            .map((timeslot) => {
            timeslot.date = dayjs(timeslot.start).format('YYYY-MM-DD');
            return timeslot;
        })
            .filter((rawTimeslot) => rawTimeslot.enabled);
    }
    static ɵfac = function CallexcellTimeslotMapper_Factory(t) { return new (t || CallexcellTimeslotMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CallexcellTimeslotMapper, factory: CallexcellTimeslotMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CallexcellTimeslotMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class NCTimeSlotMapper {
    omapiProductMapper;
    constructor(omapiProductMapper) {
        this.omapiProductMapper = omapiProductMapper;
    }
    toModel(rawNCTimeSlot) {
        const nCTimeSlotList = new NCTimeSlotList();
        nCTimeSlotList.availabilities = this.createAvailabilities(rawNCTimeSlot.availabilities);
        nCTimeSlotList.isFtthAppointment = rawNCTimeSlot.isFtthAppointment;
        return nCTimeSlotList;
    }
    createAvailabilities(rawAvailabilities) {
        const timeslots = [];
        rawAvailabilities.forEach((rawAvailableSlots) => {
            timeslots.push(this.createTimeSlots(rawAvailableSlots));
        });
        return timeslots;
    }
    createTimeSlots(rawAvailableSlots) {
        const timeSlot = new NCTimeSlot();
        timeSlot.date = new Date(rawAvailableSlots.date);
        rawAvailableSlots.slots.forEach((rawAvailableSlot) => {
            if (rawAvailableSlot) {
                timeSlot.timeSlots.push(this.createTimeSlot(rawAvailableSlot));
            }
        });
        return timeSlot;
    }
    createTimeSlot(rawAvailableSlot) {
        const timeslot = new NCTimeSlotAvailability();
        timeslot.timeFormat = rawAvailableSlot.timeFormat;
        timeslot.availabilityId = rawAvailableSlot.availabilityId;
        timeslot.specUrl = rawAvailableSlot.specURL;
        timeslot.code = TimeslotUtil.stringToEnum(rawAvailableSlot.timeSlotCode) || TimeslotMomentEnum.DAY;
        timeslot.productInfo = rawAvailableSlot.rawOmapi && this.omapiProductMapper.toModel(rawAvailableSlot.rawOmapi);
        return timeslot;
    }
    static ɵfac = function NCTimeSlotMapper_Factory(t) { return new (t || NCTimeSlotMapper)(i0.ɵɵinject(i1$4.OmapiProductMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NCTimeSlotMapper, factory: NCTimeSlotMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NCTimeSlotMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$4.OmapiProductMapper }], null); })();

class CafeTimeSlotMapper {
    toModel(rawCafeTimeSlot) {
        const cafeTimeSlotList = new CafeTimeSlotList();
        cafeTimeSlotList.firstAvailableSlotMonth = rawCafeTimeSlot.firstAvailableSlotMonth;
        cafeTimeSlotList.firstDays = this.createFirstDays(rawCafeTimeSlot.firstDays);
        cafeTimeSlotList.timeslots = this.createTimeSlots(rawCafeTimeSlot.slots);
        return cafeTimeSlotList;
    }
    createFirstDays(firstDays) {
        return Object.keys(firstDays).map((key) => {
            return new Date(firstDays[key]);
        });
    }
    createTimeSlots(slots) {
        const timeslots = [];
        Object.keys(slots).forEach((monthKey) => {
            const slotsPerMonth = slots[monthKey];
            Object.keys(slotsPerMonth).forEach((dayKey) => {
                if (slotsPerMonth[dayKey]) {
                    timeslots.push(this.createTimeSlot(slotsPerMonth[dayKey]));
                }
            });
        });
        return timeslots.sort((a, b) => (a.date > b.date ? 1 : -1));
    }
    createTimeSlot(slot) {
        const cafeTimeSlot = new CafeTimeSlot();
        cafeTimeSlot.date = new Date(slot.date);
        cafeTimeSlot.moments = slot.timing.map((timing) => {
            return TimeslotUtil.stringToEnum(timing) || TimeslotMomentEnum.DAY;
        });
        return cafeTimeSlot;
    }
    static ɵfac = function CafeTimeSlotMapper_Factory(t) { return new (t || CafeTimeSlotMapper)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CafeTimeSlotMapper, factory: CafeTimeSlotMapper.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CafeTimeSlotMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

class AppointmentPickerPipe {
    datePipe;
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(appointmentSlot, _args) {
        const dateString = this.datePipe.transform(appointmentSlot.date, 'dd MMMM yyyy');
        const startTimeString = this.transformStartTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot?.moment));
        const endTimeString = this.transformEndTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot?.moment));
        return `${dateString} - ${startTimeString} tot ${endTimeString}`;
    }
    transformStartTimeToString(moment) {
        return `${moment?.startHours}:${moment?.startMinutes}`;
    }
    transformEndTimeToString(moment) {
        return `${moment?.endHours}:${moment?.endMinutes}`;
    }
    static ɵfac = function AppointmentPickerPipe_Factory(t) { return new (t || AppointmentPickerPipe)(i0.ɵɵdirectiveInject(i1$1.DatePipe, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appointmentFormat", type: AppointmentPickerPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPickerPipe, [{
        type: Pipe,
        args: [{
                name: 'appointmentFormat',
            }]
    }], () => [{ type: i1$1.DatePipe }], null); })();

class AppointmentPickerObjectPipe {
    datePipe;
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transform(appointmentSlot, _args) {
        const dateString = this.datePipe.transform(appointmentSlot.date, 'dd MMMM yyyy');
        const startTimeString = this.transformStartTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot.moment));
        const endTimeString = this.transformEndTimeToString(TimeslotUtil.enumToMomentObject(appointmentSlot.moment));
        return {
            dateString: dateString || '',
            startTimeString: startTimeString,
            endTimeString: endTimeString,
        };
    }
    transformStartTimeToString(moment) {
        return `${moment?.startHours}:${moment?.startMinutes}`;
    }
    transformEndTimeToString(moment) {
        return `${moment?.endHours}:${moment?.endMinutes}`;
    }
    static ɵfac = function AppointmentPickerObjectPipe_Factory(t) { return new (t || AppointmentPickerObjectPipe)(i0.ɵɵdirectiveInject(i1$1.DatePipe, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "appointmentObject", type: AppointmentPickerObjectPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPickerObjectPipe, [{
        type: Pipe,
        args: [{
                name: 'appointmentObject',
            }]
    }], () => [{ type: i1$1.DatePipe }], null); })();

class AppointmentPickerValidator extends Validators {
    static dayRequired(type) {
        return (control) => {
            switch (type) {
                case AppointmentPickerTypeEnum.BY_DATE:
                    if (control.value) {
                        const appointmentOption = control.value;
                        return this.checkDayType(appointmentOption);
                    }
                    else {
                        return { day_required: true };
                    }
                case AppointmentPickerTypeEnum.BY_MOMENT:
                    if (control.value) {
                        const appointmentOption = control.value;
                        return this.checkMomentType(appointmentOption);
                    }
                    else {
                        return { slot_required: true };
                    }
                default:
                    return null;
            }
        };
    }
    static checkDayType(appointmentOption) {
        if (appointmentOption.date && !appointmentOption.moment) {
            return { slot_required: true };
        }
        else if (!appointmentOption.date) {
            return { day_required: true };
        }
        return null;
    }
    static checkMomentType(appointmentOption) {
        if (appointmentOption.moment && !appointmentOption.date) {
            return { day_required: true };
        }
        else if (!appointmentOption.moment) {
            return { slot_required: true };
        }
        return null;
    }
    static newAppointmentRequired(control) {
        if (control.value) {
            const appointment = control.value;
            if (appointment.moment) {
                return null;
            }
            return { moment_required: true };
        }
        return { appointment_required: true };
    }
    static ɵfac = /*@__PURE__*/ (() => { let ɵAppointmentPickerValidator_BaseFactory; return function AppointmentPickerValidator_Factory(t) { return (ɵAppointmentPickerValidator_BaseFactory || (ɵAppointmentPickerValidator_BaseFactory = i0.ɵɵgetInheritedFactory(AppointmentPickerValidator)))(t || AppointmentPickerValidator); }; })();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppointmentPickerValidator, factory: AppointmentPickerValidator.ɵfac });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppointmentPickerValidator, [{
        type: Injectable
    }], null, null); })();

class BelgianEidValidator extends Validators {
    static isNumberValid(control) {
        const value = isEmpty(control.value) ? '' : control.value;
        const isValidFormat = RegexConstants.BELGIAN_EID_NUMBER.test(value);
        if (!isValidFormat && !isEmpty(value)) {
            return { invalidEid: true };
        }
        if (isValidFormat) {
            return BelgianEidValidator.isValidEid(value)
                ? null
                : {
                    invalidEid: true,
                };
        }
        return null;
    }
    static isValidEid(value) {
        // '592-8470056-97'
        const eidNo = isNaN(parseInt(value.substring(0, 3), 10))
            ? parseInt(value.substring(4, 11), 10)
            : parseInt(value.substring(0, 3) + value.substring(4, 11), 10);
        const lastTwoDigit = value.substring(value.length - 2, value.length);
        let checkSum = eidNo % 97;
        if (checkSum === 0) {
            checkSum = 97;
        }
        const checkSumString = checkSum.toString();
        return parseInt(checkSumString, 10) === parseInt(lastTwoDigit, 10);
    }
}

class BelgianPhoneNumberValidator extends Validators {
    static validBelgianNumber(control) {
        const value = control.value;
        return RegexConstants.TELENET_PHONE_NUMBER.test(value)
            ? null
            : {
                format: false,
            };
    }
    static validFixedLineBelgianNumber(control) {
        const value = control.value;
        return RegexConstants.FIXED_PHONE_NUMBER.test(value)
            ? null
            : {
                format: false,
            };
    }
    static validFixedLineOrMobileNumber(control) {
        const value = control.value;
        return RegexConstants.FIXED_PHONE_NUMBER.test(value) || RegexConstants.TELENET_PHONE_NUMBER.test(value)
            ? null
            : {
                format: false,
            };
    }
    static testMobileNumber(value) {
        return RegexConstants.TELENET_PHONE_NUMBER.test(value);
    }
}

class PhoneNumberValidator extends Validators {
    static validNumber(control) {
        const value = control.value.replace(/[-/\\,\s.]/g, '');
        return RegexConstants.DELIVERY_PHONE_NUMBER.test(value)
            ? null
            : {
                format: false,
            };
    }
}

class EmailValidator extends Validators {
    static validEmail(control) {
        return RegexConstants.EMAIL.test(control.value)
            ? null
            : {
                format: false,
            };
    }
}

class ForeignEidValidator extends Validators {
    static isForeignEidValid(control) {
        const value = isEmpty(control.value) ? '' : control.value;
        const isValidFormat = RegexConstants.FOREIGN_EID_NUMBER_REGEX.test(value);
        if (!isValidFormat && !isEmpty(value)) {
            return { invalidEid: true };
        }
        return null;
    }
}

class NationalRegistryNumberValidator extends Validators {
    static isNumberValid(control) {
        const value = isEmpty(control.value) ? '' : control.value;
        const isValidFormat = RegexConstants.NATIONAL_REGISTRY_NUMBER.test(value);
        if (!isValidFormat && !isEmpty(value)) {
            return { invalidNrn: true };
        }
        if (isValidFormat) {
            return NationalRegistryNumberValidator.isValidNrn(value)
                ? null
                : {
                    invalidNrn: true,
                };
        }
        return null;
    }
    static isValidNrn(value) {
        let mod97Value;
        value = value.replace(/[^0-9a-z]/gi, '');
        const YY = value.substring(0, 2);
        const MM = value.substring(2, 4);
        const DD = value.substring(4, 6);
        const SEQ = value.substring(6, 9);
        const checksum = parseInt(value.substring(9, 11), 10);
        const currentYear = parseInt(new Date().getFullYear().toString().substring(2), 10);
        const concatedPosValue = '' + 2 + YY + MM + DD + SEQ;
        const concatedNegValue = '' + YY + MM + DD + SEQ;
        const concatedPosValueInt = parseInt(concatedPosValue, 10);
        const concatedNegValueInt = parseInt(concatedNegValue, 10);
        if (currentYear - parseInt(YY, 10) >= 0) {
            mod97Value = 97 - (concatedPosValueInt % 97);
        }
        else {
            mod97Value = 97 - (concatedNegValueInt % 97);
        }
        return mod97Value === checksum;
    }
}

class NetworkNameValidator extends Validators {
    static validNetworkName(forbiddenNames, forbiddenWords) {
        return (control) => {
            const value = control.value;
            const pattern = RegexConstants.NETWORK_NAME.test(value);
            const notStartingWithSpace = this.notStartingWithSpace(value);
            const hasForbiiddenSSIDs = this.hasForbiiddenSSIDs(forbiddenNames, forbiddenWords, value);
            if (pattern || notStartingWithSpace || hasForbiiddenSSIDs) {
                return {
                    pattern: pattern,
                    notStartingWithSpace: notStartingWithSpace,
                    hasForbiiddenSSIDs: hasForbiiddenSSIDs,
                };
            }
            else {
                return null;
            }
        };
    }
    static notStartingWithSpace(value) {
        return RegexConstants.NO_START_SPACE_REGEX.test(value);
    }
    static hasForbiiddenSSIDs(forbiddenNames, forbiddenWords, value) {
        const startWithTelent = forbiddenWords.map((name) => 'telenet' + name);
        const endWithTelent = forbiddenWords.map((name) => name + 'telenet');
        const startWithTelenetWithSpace = forbiddenWords.map((name) => 'telenet ' + name);
        const endWithTelentWithSpace = forbiddenWords.map((name) => name + ' telenet');
        const wordsArrayNotAllowed = forbiddenNames.concat(startWithTelent, endWithTelent, startWithTelenetWithSpace, endWithTelentWithSpace);
        return value && wordsArrayNotAllowed.includes(value.toLowerCase());
    }
}

class VatNumberValidator extends Validators {
    static isValidVatNumber(control) {
        let value = control.value;
        if (value === null || value === ' ') {
            return { required: true };
        }
        value = value.replace(/\./g, '');
        value = value.replace(/^[a-zA-z]{2}/, '');
        // Check if there are 10 digits
        if (!((Math.log(value) * Math.LOG10E + 1) | 0)) {
            return { invalidVatNumber: value };
        }
        const part1 = Number(value.substring(0, 8));
        const part2 = Number(value.substring(8, 10));
        if (part2 !== 97 - (part1 % 97)) {
            return { invalidVatNumber: value };
        }
        return null;
    }
}

class EasySwitchIdValidator extends Validators {
    static isValidEasySwitchId(control) {
        const eid = isEmpty(control.value) ? '' : control.value;
        const rem1 = +eid.slice(-2);
        const num1 = +eid.slice(0, eid.length - 2);
        const num2 = +(num1 / 97).toString().split('.')[0] * 97;
        const rem2 = Math.abs(num1 - num2);
        return rem1 === rem2 ? null : { invalidEid: true };
    }
}

class CompanyNameValidator extends Validators {
    static validCompanyName(control) {
        return RegexConstants.COMPANY_REGEX.test(control.value)
            ? null
            : {
                invalidCompanyName: true,
            };
    }
}

const _c0 = a0 => ({ "dropdown-suggest__selector-menu--active": a0 });
function AutocompleteComponent_div_2_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("mousedown", function AutocompleteComponent_div_2_li_3_Template_li_mousedown_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.selectItem(item_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("id", ctx_r1.getItemId(item_r2))("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r1.highlightedItem === item_r2));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getLabel(item_r2), " ");
} }
function AutocompleteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "ul", 5);
    i0.ɵɵtemplate(3, AutocompleteComponent_div_2_li_3_Template, 2, 5, "li", 6);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r0.name + "-listbox")("scrollTop", ctx_r0.scrollTo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 3, ctx_r0.filteredItems, 0, ctx_r0.maxResults));
} }
const _c1 = a0 => ({ "form__input--error": a0 });
class AutocompleteComponent {
    searchTerm;
    autocompleteItems;
    createLabel;
    placeholder = '';
    maxResults = 5;
    name = 'autocomplete';
    showListOnFocus;
    setErrorState = false;
    selectionChange = new EventEmitter();
    inputTextChange = new EventEmitter();
    showSuggestions = false;
    highlightedItem;
    filteredItems;
    selectedItem;
    scrollTo = 0;
    highlightedItemHeight = 44;
    listItemHeight = 36;
    ngOnInit() {
        if (!this.createLabel) {
            this.createLabel = this.fallbackCreateLabel;
        }
    }
    fallbackCreateLabel(item) {
        if (typeof item !== 'string') {
            throw new TypeError(`Unable to determine how to retrieve the label from type. The 'createLabel' property should be passed.`);
        }
        return item;
    }
    handleKeyEvent(key) {
        switch (key) {
            case 'Enter':
                this.selectItem(this.highlightedItem);
                break;
            case 'Escape':
                this.onBlur();
                break;
            case 'ArrowUp':
                this.handleArrowUp();
                break;
            case 'ArrowDown':
                this.handleArrowDown();
                break;
            default:
                this.updateModelWithSearchTerm();
        }
    }
    updateModelWithSearchTerm() {
        this.showSuggestions = false;
        this.filteredItems = this.updateFilteredItems();
        this.showSuggestions = this.showListOnFocus || this.hasSearchTerm();
        this.setHighlightedItem(this.filteredItems);
    }
    getHighlightedItemIndex() {
        return this.filteredItems.findIndex((item) => item === this.highlightedItem);
    }
    handleArrowUp() {
        if (this.showListBox()) {
            const indexOfCurrentHighlightedItem = this.getHighlightedItemIndex();
            this.scrollTo = indexOfCurrentHighlightedItem * this.listItemHeight - this.highlightedItemHeight;
            if (indexOfCurrentHighlightedItem >= 1) {
                this.highlightedItem = this.filteredItems[indexOfCurrentHighlightedItem - 1];
            }
        }
    }
    handleArrowDown() {
        if (this.showListBox()) {
            const indexOfCurrentHighlightedItem = this.getHighlightedItemIndex();
            if (indexOfCurrentHighlightedItem > 4) {
                this.scrollTo = indexOfCurrentHighlightedItem * this.listItemHeight;
            }
            if (indexOfCurrentHighlightedItem + 1 < this.filteredItems.length) {
                this.highlightedItem = this.filteredItems[indexOfCurrentHighlightedItem + 1];
            }
        }
    }
    setSearchTerm(keyword) {
        this.searchTerm = keyword;
    }
    showListBox() {
        return this.showSuggestions && (this.hasSearchTerm() || this.showListOnFocus) && this.hasSuggestions();
    }
    getLabel(item) {
        return this.createLabel(item);
    }
    selectItem(item) {
        if (item) {
            this.setSearchTerm(this.getLabel(item));
        }
        this.selectedItem = item;
        this.showSuggestions = false;
        if (this.selectedItem) {
            this.selectionChange.emit(this.selectedItem);
        }
        else {
            this.selectionChange.emit();
        }
    }
    setHighlightedItem(filteredItems) {
        if (filteredItems.length === 0) {
            this.highlightedItem = null;
        }
        else {
            this.highlightedItem = filteredItems[0];
        }
    }
    onBlur(event) {
        if (!this.selectedItem) {
            this.selectItem(null);
        }
        const element = event?.currentTarget;
        this.inputTextChange.emit(element?.value);
        this.showSuggestions = false;
    }
    onFocus() {
        if (this.showListOnFocus) {
            this.updateModelWithSearchTerm();
        }
    }
    hasSearchTerm() {
        return !!this.searchTerm && this.searchTerm.length > 0;
    }
    hasSuggestions() {
        return !!this.filteredItems.length;
    }
    updateFilteredItems() {
        let filteredItems = this.autocompleteItems;
        if (this.hasSearchTerm()) {
            filteredItems = filteredItems
                .filter((filteredItem) => this.getLabel(filteredItem))
                .filter((filteredItem) => this.getLabel(filteredItem).toLowerCase().startsWith(this.searchTerm.toLowerCase()));
            // Modified 'contains' to 'startWith'. this can be handled using a configuration property in future if necessary.
        }
        return filteredItems.slice(0, this.maxResults);
    }
    getItemId(highlightedItem) {
        return window.btoa(JSON.stringify(highlightedItem));
    }
    getActiveItemId() {
        if (this.highlightedItem) {
            return this.getItemId(this.highlightedItem);
        }
        return '';
    }
    static ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AutocompleteComponent, selectors: [["tg-autocomplete"]], inputs: { searchTerm: "searchTerm", autocompleteItems: "autocompleteItems", createLabel: "createLabel", placeholder: "placeholder", maxResults: "maxResults", name: "name", showListOnFocus: "showListOnFocus", setErrorState: "setErrorState" }, outputs: { selectionChange: "selectionChange", inputTextChange: "inputTextChange" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 10, consts: [[1, "AutoComplete"], ["type", "text", "autocomplete", "off", "role", "combobox", "aria-autocomplete", "list", 1, "form__input", "m--n", 3, "ngModel", "name", "placeholder", "ngClass", "ngModelChange", "keyup", "blur", "focus"], ["class", "cmp dropdown dropdown-suggest dropdown-suggest--max5results", 4, "ngIf"], [1, "cmp", "dropdown", "dropdown-suggest", "dropdown-suggest--max5results"], [1, "dropdown-suggest__menu"], ["role", "listbox", "aria-label", "List of pages", 1, "dropdown-menu__menuitems__list", 3, "id", "scrollTop"], ["class", "dropdown-menu__menuitems__list-item", 3, "id", "ngClass", "mousedown", 4, "ngFor", "ngForOf"], [1, "dropdown-menu__menuitems__list-item", 3, "id", "ngClass", "mousedown"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchTerm = $event; })("keyup", function AutocompleteComponent_Template_input_keyup_1_listener($event) { return ctx.handleKeyEvent($event.key); })("blur", function AutocompleteComponent_Template_input_blur_1_listener($event) { return ctx.onBlur($event); })("focus", function AutocompleteComponent_Template_input_focus_1_listener() { return ctx.onFocus(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, AutocompleteComponent_div_2_Template, 5, 7, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngModel", ctx.searchTerm)("name", ctx.name)("placeholder", ctx.placeholder)("ngClass", i0.ɵɵpureFunction1(8, _c1, ctx.setErrorState));
            i0.ɵɵattribute("aria-controls", ctx.name + "-listbox")("aria-expanded", ctx.hasSearchTerm() && ctx.showSuggestions && ctx.hasSuggestions())("aria-activedescendant", ctx.getActiveItemId());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showListBox());
        } }, dependencies: [CommonModule, i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, i1$1.SlicePipe, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'tg-autocomplete', imports: [CommonModule, FormsModule], template: "<div class=\"AutoComplete\">\n  <input\n    [(ngModel)]=\"searchTerm\"\n    [name]=\"name\"\n    [placeholder]=\"placeholder\"\n    type=\"text\"\n    autocomplete=\"off\"\n    class=\"form__input m--n\"\n    [ngClass]=\"{ 'form__input--error': setErrorState }\"\n    role=\"combobox\"\n    [attr.aria-controls]=\"name + '-listbox'\"\n    aria-autocomplete=\"list\"\n    [attr.aria-expanded]=\"hasSearchTerm() && showSuggestions && hasSuggestions()\"\n    [attr.aria-activedescendant]=\"getActiveItemId()\"\n    (keyup)=\"handleKeyEvent($event.key)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus()\" />\n\n  <div class=\"cmp dropdown dropdown-suggest dropdown-suggest--max5results\" *ngIf=\"showListBox()\">\n    <div class=\"dropdown-suggest__menu\">\n      <ul\n        class=\"dropdown-menu__menuitems__list\"\n        [id]=\"name + '-listbox'\"\n        role=\"listbox\"\n        aria-label=\"List of pages\"\n        [scrollTop]=\"scrollTo\">\n        <li\n          *ngFor=\"let item of filteredItems | slice: 0 : maxResults\"\n          [id]=\"getItemId(item)\"\n          class=\"dropdown-menu__menuitems__list-item\"\n          [ngClass]=\"{ 'dropdown-suggest__selector-menu--active': highlightedItem === item }\"\n          (mousedown)=\"selectItem(item)\">\n          {{ getLabel(item) }}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n" }]
    }], null, { searchTerm: [{
            type: Input
        }], autocompleteItems: [{
            type: Input
        }], createLabel: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], maxResults: [{
            type: Input
        }], name: [{
            type: Input
        }], showListOnFocus: [{
            type: Input
        }], setErrorState: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], inputTextChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AutocompleteComponent, { className: "AutocompleteComponent" }); })();

function FormInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "pre");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "pre");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "json");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("formValue: ", i0.ɵɵpipeBind1(3, 6, ctx_r0.formGroup.value), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("valid: ", ctx_r0.formGroup.valid, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("touched: ", ctx_r0.formGroup.touched, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("pristine: ", ctx_r0.formGroup.pristine, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("errors: ", i0.ɵɵpipeBind1(12, 8, ctx_r0.formGroup.errors), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 10, ctx_r0.extractFormDetails(ctx_r0.formGroup)));
} }
function FormInfoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Did you forget to add the formGroup?");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵstyleProp("color", "red");
} }
class FormInfoComponent {
    extractFormDetails = extractFormDetails;
    formGroup;
    static ɵfac = function FormInfoComponent_Factory(t) { return new (t || FormInfoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormInfoComponent, selectors: [["tg-form-info"]], inputs: { formGroup: "formGroup" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["formGroupNotAvailable", ""]], template: function FormInfoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FormInfoComponent_div_0_Template, 16, 12, "div", 0)(1, FormInfoComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.formGroup)("ngIfElse", _r2);
        } }, dependencies: [CommonModule, i1$1.NgIf, i1$1.JsonPipe], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormInfoComponent, [{
        type: Component,
        args: [{
                selector: 'tg-form-info',
                imports: [CommonModule],
                template: `
    <div *ngIf="formGroup; else formGroupNotAvailable">
      <pre>formValue: {{ formGroup.value | json }}</pre>
      <div>valid: {{ formGroup.valid }}</div>
      <div>touched: {{ formGroup.touched }}</div>
      <div>pristine: {{ formGroup.pristine }}</div>
      <div>errors: {{ formGroup.errors | json }}</div>
      <pre>{{ extractFormDetails(formGroup) | json }}</pre>
    </div>
    <ng-template #formGroupNotAvailable>
      <div [style.color]="'red'">Did you forget to add the formGroup?</div>
    </ng-template>
  `,
                standalone: true,
            }]
    }], null, { formGroup: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormInfoComponent, { className: "FormInfoComponent" }); })();

const FORMS_PROVIDERS = [
    InputAbstractComponent,
    AbstractDropdownComponent,
    AbstractDateOfBirthPickerComponent,
    AbstractRadioCheckboxComponent,
    DatePipe,
    AppointmentPickerPipe,
    TimeslotPipe,
    FormErrorService,
    AppointmentPickerValidator,
    provideEnvironmentNgxMask(),
    PriceService,
];
class TgFormsModule {
    static forRoot(imagePath) {
        return {
            ngModule: TgFormsModule,
            providers: [
                ...FORMS_PROVIDERS,
                { provide: 'IMAGE_BASE_PATH', useValue: imagePath },
                { provide: InlineSVGConfig, useClass: SvgConfig },
            ],
        };
    }
    static ɵfac = function TgFormsModule_Factory(t) { return new (t || TgFormsModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TgFormsModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: FORMS_PROVIDERS, imports: [CommonModule,
            TranslateModule,
            ReactiveFormsModule,
            FormsModule,
            ImageSrcPathModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatMomentDateModule,
            InlineSVGModule,
            MatInputModule,
            SlickCarouselModule,
            MatSelectModule, TranslateModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TgFormsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    TranslateModule,
                    ReactiveFormsModule,
                    FormsModule,
                    ImageSrcPathModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatMomentDateModule,
                    InlineSVGModule,
                    NgxMaskDirective,
                    NgxMaskPipe,
                    MatInputModule,
                    SlickCarouselModule,
                    MatSelectModule,
                    PricePipe,
                    EuroSignPipe,
                ],
                declarations: [
                    InputAbstractComponent,
                    AppointmentPickerPipe,
                    AppointmentPickerObjectPipe,
                    TimeslotPipe,
                    AbstractDropdownComponent,
                    AbstractDateOfBirthPickerComponent,
                    InputAppointmentPickerComponent,
                    InputAppointmentPickerByDateComponent,
                    InputAppointmentPickerByMomentComponent,
                    InputAppointmentDatePickerComponent,
                    InputAppointmentMomentPickerComponent,
                    InputComponent,
                    InputWithTooltipComponent,
                    InputAtomicComponent,
                    InputRadioImageComponent,
                    InputRadioIconComponent,
                    InputRadioComponent,
                    AbstractRadioComponent,
                    AbstractRadioCheckboxComponent,
                    InputRadioDefaultComponent,
                    InputRadioHorizontalComponent,
                    InputRadioWithCardComponent,
                    InputRadioWithCardAndPriceComponent,
                    InputRadioWithCardMiniNoSelectBoxLabelsComponent,
                    InputRadioWithCardMiniWithSelectBoxLabelsComponent,
                    AbstractInputRadioWithInputComponent,
                    InputRadioWithInputHorizontalComponent,
                    InputRadioWithInputVerticalComponent,
                    AbstractCheckboxComponent,
                    InputCheckboxComponent,
                    InputCheckboxDefaultComponent,
                    InputCheckboxWithCardComponent,
                    InputCheckboxLegalComponent,
                    FormDirective,
                    DropdownComponent,
                    DropdownWithInputComponent,
                    DropDownWithChipsComponent,
                    MatMultipleSelectWithInputComponent,
                    MatSelectWithInputComponent,
                    DropdownWithTooltipComponent,
                    DateOfBirthPickerWithDropdownInputComponent,
                    MonthDropdownComponent,
                    InputRadioCardComponent,
                    InputRadioGroupCardComponent,
                    DatepickerComponent,
                    MessageGroupDirective,
                    DateOfBirthPickerComponent,
                    ScrollToErrorDirective,
                    InputMomentPickerComponent,
                    InputDatePickerComponent,
                    InputNewAppointmentPickerComponent,
                    MarginDirective,
                    RowDirective,
                    TextFlowDirective,
                    InstallTypePriceComponent,
                    PaddingDirective,
                    FontSizeDirective,
                    FontFamilyDirective,
                    FontWeightDirective,
                    FontColorDirective,
                    ButtonClickDirective,
                    IconDirective,
                    EventLinkClickDirective,
                    TrackBlurEventDirective,
                    TrackInputEventDirective,
                    TrackingInfoDirective,
                    ContainerDirective,
                    ContainerPartitionDirective,
                    ColDirective,
                    FullWidthDirective,
                    LoadPageDirective,
                    WhitespaceDirective,
                    AutoHeightDirective,
                    ClickPreventDefaultDirective,
                    ClickStopPropagationDirective,
                    MatchHeightDirective,
                    ScrollFocusInvalidInputDirective,
                    MACAddressComponent,
                    TextDecorationDirective,
                    DuidComponent,
                    NoAvailableAppointmentDateComponent,
                    NewNoAvailableAppointmentDateComponent,
                ],
                exports: [
                    MarginDirective,
                    RowDirective,
                    TextFlowDirective,
                    InputAbstractComponent,
                    AbstractDropdownComponent,
                    AbstractDateOfBirthPickerComponent,
                    InputAppointmentPickerComponent,
                    InputAppointmentPickerByDateComponent,
                    InputAppointmentPickerByMomentComponent,
                    InputAppointmentDatePickerComponent,
                    InputAppointmentMomentPickerComponent,
                    InputComponent,
                    InputAtomicComponent,
                    InputWithTooltipComponent,
                    InputRadioImageComponent,
                    InputRadioIconComponent,
                    InputRadioComponent,
                    AbstractRadioComponent,
                    AbstractRadioCheckboxComponent,
                    InputRadioDefaultComponent,
                    InputRadioHorizontalComponent,
                    InputRadioWithCardComponent,
                    AbstractCheckboxComponent,
                    InputCheckboxComponent,
                    InputCheckboxDefaultComponent,
                    InputCheckboxWithCardComponent,
                    InputCheckboxLegalComponent,
                    InputRadioWithCardMiniNoSelectBoxLabelsComponent,
                    InputRadioWithCardMiniWithSelectBoxLabelsComponent,
                    AbstractInputRadioWithInputComponent,
                    InputRadioWithInputHorizontalComponent,
                    InputRadioWithInputVerticalComponent,
                    FormDirective,
                    AppointmentPickerPipe,
                    AppointmentPickerObjectPipe,
                    TimeslotPipe,
                    DropdownComponent,
                    DropdownWithInputComponent,
                    DropdownWithTooltipComponent,
                    DateOfBirthPickerWithDropdownInputComponent,
                    InputRadioCardComponent,
                    InputRadioGroupCardComponent,
                    DatepickerComponent,
                    MessageGroupDirective,
                    DateOfBirthPickerComponent,
                    ScrollToErrorDirective,
                    InputNewAppointmentPickerComponent,
                    InputDatePickerComponent,
                    InputMomentPickerComponent,
                    DropDownWithChipsComponent,
                    MatMultipleSelectWithInputComponent,
                    MatSelectWithInputComponent,
                    InputRadioWithCardAndPriceComponent,
                    TranslateModule,
                    InstallTypePriceComponent,
                    PaddingDirective,
                    FontSizeDirective,
                    FontFamilyDirective,
                    FontWeightDirective,
                    FontColorDirective,
                    ButtonClickDirective,
                    IconDirective,
                    EventLinkClickDirective,
                    TrackBlurEventDirective,
                    TrackInputEventDirective,
                    TrackingInfoDirective,
                    ContainerDirective,
                    ContainerPartitionDirective,
                    ColDirective,
                    FullWidthDirective,
                    LoadPageDirective,
                    WhitespaceDirective,
                    AutoHeightDirective,
                    ClickPreventDefaultDirective,
                    ClickStopPropagationDirective,
                    MatchHeightDirective,
                    ScrollFocusInvalidInputDirective,
                    MACAddressComponent,
                    TextDecorationDirective,
                    DuidComponent,
                    NoAvailableAppointmentDateComponent,
                    NewNoAvailableAppointmentDateComponent,
                ],
                providers: FORMS_PROVIDERS,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TgFormsModule, { declarations: [InputAbstractComponent,
        AppointmentPickerPipe,
        AppointmentPickerObjectPipe,
        TimeslotPipe,
        AbstractDropdownComponent,
        AbstractDateOfBirthPickerComponent,
        InputAppointmentPickerComponent,
        InputAppointmentPickerByDateComponent,
        InputAppointmentPickerByMomentComponent,
        InputAppointmentDatePickerComponent,
        InputAppointmentMomentPickerComponent,
        InputComponent,
        InputWithTooltipComponent,
        InputAtomicComponent,
        InputRadioImageComponent,
        InputRadioIconComponent,
        InputRadioComponent,
        AbstractRadioComponent,
        AbstractRadioCheckboxComponent,
        InputRadioDefaultComponent,
        InputRadioHorizontalComponent,
        InputRadioWithCardComponent,
        InputRadioWithCardAndPriceComponent,
        InputRadioWithCardMiniNoSelectBoxLabelsComponent,
        InputRadioWithCardMiniWithSelectBoxLabelsComponent,
        AbstractInputRadioWithInputComponent,
        InputRadioWithInputHorizontalComponent,
        InputRadioWithInputVerticalComponent,
        AbstractCheckboxComponent,
        InputCheckboxComponent,
        InputCheckboxDefaultComponent,
        InputCheckboxWithCardComponent,
        InputCheckboxLegalComponent,
        FormDirective,
        DropdownComponent,
        DropdownWithInputComponent,
        DropDownWithChipsComponent,
        MatMultipleSelectWithInputComponent,
        MatSelectWithInputComponent,
        DropdownWithTooltipComponent,
        DateOfBirthPickerWithDropdownInputComponent,
        MonthDropdownComponent,
        InputRadioCardComponent,
        InputRadioGroupCardComponent,
        DatepickerComponent,
        MessageGroupDirective,
        DateOfBirthPickerComponent,
        ScrollToErrorDirective,
        InputMomentPickerComponent,
        InputDatePickerComponent,
        InputNewAppointmentPickerComponent,
        MarginDirective,
        RowDirective,
        TextFlowDirective,
        InstallTypePriceComponent,
        PaddingDirective,
        FontSizeDirective,
        FontFamilyDirective,
        FontWeightDirective,
        FontColorDirective,
        ButtonClickDirective,
        IconDirective,
        EventLinkClickDirective,
        TrackBlurEventDirective,
        TrackInputEventDirective,
        TrackingInfoDirective,
        ContainerDirective,
        ContainerPartitionDirective,
        ColDirective,
        FullWidthDirective,
        LoadPageDirective,
        WhitespaceDirective,
        AutoHeightDirective,
        ClickPreventDefaultDirective,
        ClickStopPropagationDirective,
        MatchHeightDirective,
        ScrollFocusInvalidInputDirective,
        MACAddressComponent,
        TextDecorationDirective,
        DuidComponent,
        NoAvailableAppointmentDateComponent,
        NewNoAvailableAppointmentDateComponent], imports: [CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule,
        ImageSrcPathModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        InlineSVGModule,
        NgxMaskDirective,
        NgxMaskPipe,
        MatInputModule,
        SlickCarouselModule,
        MatSelectModule,
        PricePipe,
        EuroSignPipe], exports: [MarginDirective,
        RowDirective,
        TextFlowDirective,
        InputAbstractComponent,
        AbstractDropdownComponent,
        AbstractDateOfBirthPickerComponent,
        InputAppointmentPickerComponent,
        InputAppointmentPickerByDateComponent,
        InputAppointmentPickerByMomentComponent,
        InputAppointmentDatePickerComponent,
        InputAppointmentMomentPickerComponent,
        InputComponent,
        InputAtomicComponent,
        InputWithTooltipComponent,
        InputRadioImageComponent,
        InputRadioIconComponent,
        InputRadioComponent,
        AbstractRadioComponent,
        AbstractRadioCheckboxComponent,
        InputRadioDefaultComponent,
        InputRadioHorizontalComponent,
        InputRadioWithCardComponent,
        AbstractCheckboxComponent,
        InputCheckboxComponent,
        InputCheckboxDefaultComponent,
        InputCheckboxWithCardComponent,
        InputCheckboxLegalComponent,
        InputRadioWithCardMiniNoSelectBoxLabelsComponent,
        InputRadioWithCardMiniWithSelectBoxLabelsComponent,
        AbstractInputRadioWithInputComponent,
        InputRadioWithInputHorizontalComponent,
        InputRadioWithInputVerticalComponent,
        FormDirective,
        AppointmentPickerPipe,
        AppointmentPickerObjectPipe,
        TimeslotPipe,
        DropdownComponent,
        DropdownWithInputComponent,
        DropdownWithTooltipComponent,
        DateOfBirthPickerWithDropdownInputComponent,
        InputRadioCardComponent,
        InputRadioGroupCardComponent,
        DatepickerComponent,
        MessageGroupDirective,
        DateOfBirthPickerComponent,
        ScrollToErrorDirective,
        InputNewAppointmentPickerComponent,
        InputDatePickerComponent,
        InputMomentPickerComponent,
        DropDownWithChipsComponent,
        MatMultipleSelectWithInputComponent,
        MatSelectWithInputComponent,
        InputRadioWithCardAndPriceComponent,
        TranslateModule,
        InstallTypePriceComponent,
        PaddingDirective,
        FontSizeDirective,
        FontFamilyDirective,
        FontWeightDirective,
        FontColorDirective,
        ButtonClickDirective,
        IconDirective,
        EventLinkClickDirective,
        TrackBlurEventDirective,
        TrackInputEventDirective,
        TrackingInfoDirective,
        ContainerDirective,
        ContainerPartitionDirective,
        ColDirective,
        FullWidthDirective,
        LoadPageDirective,
        WhitespaceDirective,
        AutoHeightDirective,
        ClickPreventDefaultDirective,
        ClickStopPropagationDirective,
        MatchHeightDirective,
        ScrollFocusInvalidInputDirective,
        MACAddressComponent,
        TextDecorationDirective,
        DuidComponent,
        NoAvailableAppointmentDateComponent,
        NewNoAvailableAppointmentDateComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractAppointmentPickerByTemporalComponent, AbstractCheckboxComponent, AbstractDateOfBirthPickerComponent, AbstractDropdownComponent, AbstractInputRadioWithInputComponent, AbstractRadioCheckboxComponent, AbstractRadioComponent, AppointmentPickerConsumerTypeEnum, AppointmentPickerObjectPipe, AppointmentPickerPipe, AppointmentPickerTypeEnum, AppointmentPickerUtil, AppointmentPickerValidator, AppointmentSlotOption, AppointmentTransformerModel, AppointmentTransformerSlot, AppointmentTransformerUtil, AutoHeightDirective, AutocompleteComponent, BelgianEidValidator, BelgianPhoneNumberValidator, ButtonClickDirective, CafeTimeSlot, CafeTimeSlotList, CafeTimeSlotMapper, CallexcellResponseType, CallexcellTimeslot, CallexcellTimeslotMapper, CheckboxModifierEnum, ClickPreventDefaultDirective, ClickStopPropagationDirective, ColDirective, CompanyNameValidator, ContainerDirective, ContainerPartitionDirective, DateOfBirthPickerComponent, DateOfBirthPickerWithDropdownInputComponent, DatepickerComponent, DefaultDateSlideConfig, DefaultTimeslotMoments, DropDownWithChipsComponent, DropdownComponent, DropdownWithInputComponent, DropdownWithTooltipComponent, DuidComponent, DuidFormatValidator, EasySwitchIdValidator, EmailValidator, EuroSignPipe, EventLinkClickDirective, FORMS_PROVIDERS, FontColor, FontColorDirective, FontFamilyDirective, FontSize, FontSizeDirective, FontWeight, FontWeightDirective, ForeignEidValidator, FormDirective, FormErrorService, FormInfoComponent, FullWidthDirective, IconDirective, InputAbstractComponent, InputAppointmentDatePickerComponent, InputAppointmentMomentPickerComponent, InputAppointmentPickerByDateComponent, InputAppointmentPickerByMomentComponent, InputAppointmentPickerComponent, InputAtomicComponent, InputCheckboxComponent, InputCheckboxDefaultComponent, InputCheckboxLegalComponent, InputCheckboxWithCardComponent, InputComponent, InputDatePickerComponent, InputMomentPickerComponent, InputNewAppointmentPickerComponent, InputOption, InputOptionWithCard, InputOptionWithIcon, InputOptionWithImage, InputOptionWithOptionalInputField, InputOptionWithSubscript, InputRadioCardComponent, InputRadioComponent, InputRadioDefaultComponent, InputRadioGroupCardComponent, InputRadioHorizontalComponent, InputRadioIconComponent, InputRadioImageComponent, InputRadioWithCardAndPriceComponent, InputRadioWithCardComponent, InputRadioWithCardMiniNoSelectBoxLabelsComponent, InputRadioWithCardMiniWithSelectBoxLabelsComponent, InputRadioWithInputHorizontalComponent, InputRadioWithInputVerticalComponent, InputWithTooltipComponent, InstallTypePriceComponent, InstallTypePriceModel, InstallTypePriceTestFactory, LabelUtil, LineEnum, LoadPageDirective, MACAddressComponent, MACAddressConstants, MY_FORMATS, MarginDirective, MarginPosition, MarginSize, MatMultipleSelectWithInputComponent, MatSelectWithInputComponent, MatchHeightDirective, MessageGroupDirective, MinMaxLengthsValidator, MonthDropdownComponent, NCTimeSlot, NCTimeSlotAvailability, NCTimeSlotList, NCTimeSlotMapper, NationalRegistryNumberValidator, NetworkNameValidator, NewNoAvailableAppointmentDateComponent, NoAvailableAppointmentDateComponent, PaddingDirective, PaddingPositions, PaddingSize, PhoneNumberValidator, PricePipe, PriceService, RegexConstants, RowDirective, ScreenType, ScrollFocusInvalidInputDirective, ScrollToErrorDirective, SvgConfig, TaxTypeEnum, TextDecorationDirective, TextDecorationType, TextFlowDirective, TextFlowType, TgFormsModule, TimeslotMoment, TimeslotMomentEnum, TimeslotPipe, TimeslotUtil, TrackBlurEventDirective, TrackInputEventDirective, TrackingInfoDirective, VatNumberValidator, WhitespaceDirective, extractFormDetails };
//# sourceMappingURL=telenet-ng-lib-form.mjs.map
