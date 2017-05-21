/* @flow */
// flow-typed signature: 31696940fc074bc5f5b3f26d6999f1c0
// flow-typed version: 622c2ee76d/redux-form_v5.x.x/flow_>=v0.22.1

import React from 'react';

declare module 'redux-form' {
  declare type InputProps = {
    input: {
      name: string,
      value: string | boolean,
      onChange: (eventOrValue: SyntheticEvent | string | boolean) => mixed,
      onUpdate: (eventOrValue: SyntheticEvent | string | boolean) => mixed,
      onBlur: (eventOrValue: SyntheticEvent | string | boolean) => mixed,
      onDragStart: Function,
      onDrop: Function,
      onFocus: Function,
    },
    meta: {
      valid: boolean,
      invalid: boolean,
      dirty: boolean,
      pristine: boolean,
      active: boolean,
      touched: boolean,
      visited: boolean,
      autofilled: boolean,
      error?: string,
    },
  };
  declare type FormProps = {
    active: string,
    asyncValidate: (values: Object, dispatch: Function, props: Object) => Promise<void>,
    asyncValidating: string | boolean,
    destroyForm: Function,
    dirty: boolean,
    error: string,
    fields: { [fieldName: string]: InputProps },
    handleSubmit: (data: { [field: string]: string }) => void | Promise<any>,
    initializeForm: (data: Object) => any,
    invalid: boolean,
    pristine: boolean,
    resetForm: Function,
    formKey: string,
    submitting: boolean,
    submitFailed: boolean,
    touch: (...fields: Array<string>) => void,
    touchAll: () => void,
    untouch: (...fields: Array<string>) => void,
    untouchAll: () => void,
    valid: boolean,
    values: Object,
  };
  declare type FormConfig = {
    fields: Array<string>,
    form: string,
    alwaysAsyncValidate?: boolean,
    asyncBlurFields?: Array<string>,
    asyncValidate?: (values: Object, dispatch: Function, props: Object) => Promise<void>,
    destroyOnUnmount?: boolean,
    formKey?: string,
    getFormState?: (state: Object, reduxMountPoint: string) => mixed,
    initialValues?: { [field: string]: string },
    onSubmit?: Function,
    onSubmitFail?: Function,
    onSubmitSuccess?: Function,
    overwriteOnInitialValuesChange?: boolean,
    propNamespace?: string,
    readonly?: boolean,
    reduxMountPoint?: String,
    returnRejectedSubmitPromise?: boolean,
    touchOnBlur?: boolean,
    touchOnChange?: boolean,
    validate?: (values: Object, props: Object) => Object,
  };
  declare function reduxForm(
    config: FormConfig,
    mapStateToProps?: Function,
    mapDispatchToProps?: Function,
    mergeProps?: any,
    options?: Object,
  ): (component: React.Component<*, *>) => React.Component<*, *>;

  declare function reducer(state: any, action: Object): any;
  declare function getValues(state: any): any;
}
