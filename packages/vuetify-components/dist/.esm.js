var script = {
    props: {
        error: {
            type: String
        },
        submitBtnProps: {
            type: Object
        },
        formFields: {
            type: Array
        }
    },
    data: function data() {
        return {
            isValid: false
        };
    },
    methods: {
        submit: function submit() {
            return (function ($return, $error) {
                var payload;
                return this.$validator.validateAll().then((function ($await_1) {
                    if (!this.isValid) {
                        return $return();
                    }
                    payload = this.getFormFieldValues();
                    this.$emit('submit', payload);
                    return $return();
                }).$asyncbind(this, $error), $error);
            }).$asyncbind(this, true);
        },
        getFormFieldValues: function getFormFieldValues() {
            return this.formFields.reduce(function (obj, field) {
                var obj$1;
                return Object.assign({}, obj, (obj$1 = {}, obj$1[field.name] = field.value, obj$1));
            }, {});
        }
    }
};

var __vue_script__ = script;
var __vue_render__ = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-form', {
        on: {
            "submit": function ($event) {
                $event.preventDefault();
                return _vm.submit($event);
            }
        },
        model: {
            value: _vm.isValid,
            callback: function ($$v) {
                _vm.isValid = $$v;
            },
            expression: "isValid"
        }
    }, [_vm._l(_vm.formFields, function (field) {
        return _c('v-text-field', {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: field.type !== 'hidden',
                expression: "field.type !== 'hidden'"
            },{
                name: "validate",
                rawName: "v-validate",
                value: field.validations,
                expression: "field.validations"
            }],
            key: field.name,
            attrs: {
                "autofocus": field.autofocus,
                "type": field.type,
                "color": field.color,
                "label": field.label,
                "placeholder": " ",
                "data-vv-name": field.name,
                "data-vv-validate-on": "blur",
                "error-messages": _vm.errors.collect(field.name)
            },
            model: {
                value: field.value,
                callback: function ($$v) {
                    _vm.$set(field, "value", $$v);
                },
                expression: "field.value"
            }
        });
    }),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('v-alert', {
        attrs: {
            "value": !(!_vm.error),
            "color": "error",
            "icon": "warning",
            "outline": ""
        }
    }, [_vm._v("\n    " + _vm._s(_vm.error) + "\n  ")]),_vm._v(" "),_c('v-btn', {
        staticClass: "mt-3",
        attrs: {
            "type": "submit",
            "color": _vm.submitBtnProps.color,
            "dark": _vm.submitBtnProps.dark,
            "isLoading": _vm.submitBtnProps.isLoading,
            "block": ""
        }
    }, [_vm._v("\n    " + _vm._s(_vm.submitBtnProps.title) + "\n  ")])], 2);
};
var __vue_staticRenderFns__ = [];
var __vue_inject_styles__ = function (inject) {
    if (!inject) {
        return;
    }
    inject("data-v-ad7329d2_0", {
        source: "input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset;transition:background-color 5000s ease-in-out 0s}",
        map: undefined,
        media: undefined
    });
};
var __vue_scope_id__ = undefined;
var __vue_module_identifier__ = undefined;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};
    component.__file = "BaseForm.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    {
        var hook;
        if (style) {
            hook = function (context) {
                style.call(this, createInjector(context));
            };
        }
        if (hook !== undefined) {
            if (component.functional) {
                var originalRender = component.render;
                component.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                var existing = component.beforeCreate;
                component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
    }
    return component;
}

function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) {
            return;
        }
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = {
            ids: [],
            parts: [],
            element: undefined
        });
        if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;
            style.ids.push(id);
            if (css.map) {
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
            }
            if (isOldIE) {
                style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }
            if (!style.element) {
                var el = style.element = document.createElement('style');
                el.type = 'text/css';
                if (css.media) {
                    el.setAttribute('media', css.media);
                }
                if (isOldIE) {
                    el.setAttribute('data-group', group);
                    el.setAttribute('data-next-index', '0');
                }
                head.appendChild(el);
            }
            if (isOldIE) {
                index = parseInt(style.element.getAttribute('data-next-index'));
                style.element.setAttribute('data-next-index', index + 1);
            }
            if (style.element.styleSheet) {
                style.parts.push(code);
                style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
            } else {
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index]) {
                    style.element.removeChild(nodes[index]);
                }
                if (nodes.length) {
                    style.element.insertBefore(textNode, nodes[index]);
                } else {
                    style.element.appendChild(textNode);
                }
            }
        }
    };
}

var BaseForm = __vue_normalize__({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

var BaseFormMixin = {
    statusses: {
        idle: {
            color: 'secondary',
            dark: true,
            title: 'Submit'
        },
        submitting: {
            color: 'default',
            dark: false,
            title: 'Processing...'
        },
        success: {
            color: 'success',
            dark: false,
            title: 'Success!'
        },
        error: {
            color: 'error',
            dark: true,
            title: 'Oops! Something went wrong..'
        }
    },
    props: {
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            error: '',
            status: 'idle'
        };
    },
    computed: {
        submitBtnProps: function submitBtnProps() {
            return this.$options.statusses[this.status];
        }
    },
    methods: {
        submit: function submit(payload) {
            return (function ($return, $error) {
                var mixedPayload;
                this.error = '';
                this.status = 'submitting';
                mixedPayload = Object.assign({}, payload, this.payload);
                this.$emit('submit', mixedPayload);
                if (this.method) {
                    return this.callMethod(mixedPayload).then((function ($await_3) {
                        return $If_2.call(this);
                    }).$asyncbind(this, $error), $error);
                }
                function $If_2() {
                    return $return();
                }
                
                return $If_2.call(this);
            }).$asyncbind(this, true);
        },
        callMethod: function callMethod(payload) {
            return (function ($return, $error) {
                var this$1, method, result;
                this$1 = this;
                method = this[this.method];
                if (!method) {
                    this.triggerError("Method \"" + this.method + "\" not implemented. Did you forget to add a vue-accounts plugin?");
                }
                var $Try_1_Post = (function () {
                    return $return();
                }).$asyncbind(this, $error);
                var $Try_1_Catch = (function (error) {
                    this.triggerError(error);
                    return $Try_1_Post();
                }).$asyncbind(this, $error);
                try {
                    return method(payload).then((function ($await_4) {
                        result = $await_4;
                        this.status = 'success';
                        this.$emit('success', result);
                        setTimeout(function () {
                            return this$1.status = 'idle';
                        }, 3000);
                        return $Try_1_Post();
                    }).$asyncbind(this, $Try_1_Catch), $Try_1_Catch);
                } catch (error) {
                    $Try_1_Catch(error);
                }
            }).$asyncbind(this, true);
        },
        triggerError: function triggerError(error) {
            this.status = 'error';
            this.$emit('error', error);
            throw new Error(error);
        }
    }
};

var LoginFormMixin = {
    extends: BaseFormMixin,
    statusses: {
        idle: {
            color: 'secondary',
            dark: true,
            title: 'Login'
        },
        submitting: {
            color: 'default',
            dark: false,
            title: 'Logging you in...'
        },
        success: {
            color: 'success',
            dark: false,
            title: 'Success!'
        },
        error: {
            color: 'error',
            dark: true,
            title: 'Oops! Something went wrong..'
        }
    },
    data: function data() {
        return {
            method: '$login'
        };
    }
};

var script$1 = {
    mixins: [LoginFormMixin],
    components: {
        BaseForm: BaseForm
    },
    data: function data() {
        return {
            formFields: [{
                type: 'email',
                name: 'email',
                label: 'E-mail address',
                autofocus: true,
                validations: 'required|email',
                value: 'redroest@gmail.com'
            },{
                type: 'password',
                name: 'password',
                label: 'Password',
                validations: 'required',
                value: 'gompie'
            }]
        };
    }
};

var __vue_script__$1 = script$1;
var __vue_render__$1 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-form', {
        attrs: {
            "submitBtnProps": _vm.submitBtnProps,
            "formFields": _vm.formFields,
            "error": _vm.error
        },
        on: {
            "submit": _vm.submit
        }
    });
};
var __vue_staticRenderFns__$1 = [];
var __vue_inject_styles__$1 = undefined;
var __vue_scope_id__$1 = undefined;
var __vue_module_identifier__$1 = undefined;
var __vue_is_functional_template__$1 = false;
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "LoginForm.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    return component;
}

var LoginForm = __vue_normalize__$1({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

var RegistrationFormMixin = {
    extends: BaseFormMixin,
    statusses: {
        idle: {
            color: 'secondary',
            dark: true,
            title: 'Register'
        },
        submitting: {
            color: 'default',
            dark: false,
            title: 'Signing you up...'
        },
        success: {
            color: 'success',
            dark: false,
            title: 'Finished! Logging you in...'
        },
        error: {
            color: 'error',
            dark: true,
            title: 'Oops! Something went wrong..'
        }
    },
    data: function data() {
        return {
            method: '$register'
        };
    }
};

var script$2 = {
    mixins: [RegistrationFormMixin],
    components: {
        BaseForm: BaseForm
    },
    data: function data() {
        return {
            formFields: [{
                type: 'text',
                name: 'displayName',
                label: 'Display Name',
                validations: 'required'
            },{
                type: 'email',
                name: 'email',
                label: 'E-mail address',
                validations: 'required|email'
            },{
                type: 'password',
                name: 'password',
                label: 'Password',
                validations: 'required'
            },{
                type: 'password',
                name: 'repeatPassword',
                label: 'Repeat Password',
                validations: 'required'
            }]
        };
    }
};

var __vue_script__$2 = script$2;
var __vue_render__$2 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-form', {
        attrs: {
            "submitBtnProps": _vm.submitBtnProps,
            "formFields": _vm.formFields,
            "autofocus": _vm.autofocus
        },
        on: {
            "submit": _vm.submit
        }
    });
};
var __vue_staticRenderFns__$2 = [];
var __vue_inject_styles__$2 = undefined;
var __vue_scope_id__$2 = undefined;
var __vue_module_identifier__$2 = undefined;
var __vue_is_functional_template__$2 = false;
function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "RegistrationForm.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    return component;
}

var RegistrationForm = __vue_normalize__$2({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

var ForgotPasswordFormMixin = {
    extends: BaseFormMixin,
    statusses: {
        idle: {
            color: 'secondary',
            dark: true,
            title: 'Send reset e-mail'
        },
        submitting: {
            color: 'default',
            dark: false,
            title: 'Sending the reset e-mail...'
        },
        success: {
            color: 'success',
            dark: false,
            title: 'Finished! Please check your e-mail.'
        },
        error: {
            color: 'error',
            dark: true,
            title: 'Oops! Something went wrong..'
        }
    },
    data: function data() {
        return {
            method: '$forgotPassword'
        };
    }
};

var script$3 = {
    mixins: [ForgotPasswordFormMixin],
    components: {
        BaseForm: BaseForm
    },
    data: function data() {
        return {
            formFields: [{
                type: 'email',
                name: 'email',
                label: 'E-mail address',
                validations: 'required|email'
            }]
        };
    }
};

var __vue_script__$3 = script$3;
var __vue_render__$3 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-form', {
        attrs: {
            "submitBtnProps": _vm.submitBtnProps,
            "formFields": _vm.formFields,
            "autofocus": _vm.autofocus
        },
        on: {
            "submit": _vm.submit
        }
    });
};
var __vue_staticRenderFns__$3 = [];
var __vue_inject_styles__$3 = undefined;
var __vue_scope_id__$3 = undefined;
var __vue_module_identifier__$3 = undefined;
var __vue_is_functional_template__$3 = false;
function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "ForgotPasswordForm.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    return component;
}

var ForgotPasswordForm = __vue_normalize__$3({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

var ResetPasswordFormMixin = {
    extends: BaseFormMixin,
    tokenName: 'reset-password-token',
    statusses: {
        idle: {
            color: 'secondary',
            dark: true,
            title: 'Save new password'
        },
        submitting: {
            color: 'default',
            dark: false,
            title: 'Saving your new password...'
        },
        success: {
            color: 'success',
            dark: false,
            title: 'Finished!'
        },
        error: {
            color: 'error',
            dark: true,
            title: 'Oops! Something went wrong..'
        }
    },
    data: function data() {
        return {
            method: '$resetPassword'
        };
    },
    computed: {
        payload: function payload() {
            return {
                token: this.$route.query[this.$options.tokenName]
            };
        }
    }
};

var script$4 = {
    mixins: [ResetPasswordFormMixin],
    components: {
        BaseForm: BaseForm
    },
    computed: {
        formFields: function formFields() {
            return [{
                type: 'password',
                name: 'password',
                label: 'Password',
                validations: 'required'
            },{
                type: 'password',
                name: 'repeatPassword',
                label: 'Repeat Password',
                validations: 'required'
            }];
        }
    }
};

var __vue_script__$4 = script$4;
var __vue_render__$4 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-form', {
        attrs: {
            "submitBtnProps": _vm.submitBtnProps,
            "formFields": _vm.formFields,
            "autofocus": _vm.autofocus
        },
        on: {
            "submit": _vm.submit
        }
    });
};
var __vue_staticRenderFns__$4 = [];
var __vue_inject_styles__$4 = undefined;
var __vue_scope_id__$4 = undefined;
var __vue_module_identifier__$4 = undefined;
var __vue_is_functional_template__$4 = false;
function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "ResetPasswordForm.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    return component;
}

var ResetPasswordForm = __vue_normalize__$4({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

var script$5 = {
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        }
    }
};

var __vue_script__$5 = script$5;
var __vue_render__$5 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('v-card', {
        attrs: {
            "width": "100%",
            "max-width": "450"
        }
    }, [_c('v-card-title', {
        attrs: {
            "primary-title": ""
        }
    }, [_c('div', [_c('h2', {
        staticClass: "headline mb-0"
    }, [_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p', [_vm._v(_vm._s(_vm.description))])])]),
        _vm._v(" "),_c('v-card-text', [_vm._t("default")], 2)], 1);
};
var __vue_staticRenderFns__$5 = [];
var __vue_inject_styles__$5 = undefined;
var __vue_scope_id__$5 = undefined;
var __vue_module_identifier__$5 = undefined;
var __vue_is_functional_template__$5 = false;
function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "BaseCard.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    return component;
}

var BaseCard = __vue_normalize__$5({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

var script$6 = {
    components: {
        BaseCard: BaseCard,
        LoginForm: LoginForm
    },
    props: {
        title: {
            type: String,
            default: 'Login'
        },
        description: {
            type: String,
            default: 'Welcome! Please login first'
        },
        forgotPasswordTitle: {
            type: String,
            default: 'Lost your password? Reset it here!'
        },
        registrationTitle: {
            type: String,
            default: 'Register yourself now!'
        }
    }
};

var __vue_script__$6 = script$6;
var __vue_render__$6 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-card', {
        attrs: {
            "action": "login",
            "title": _vm.title,
            "description": _vm.description
        }
    }, [_c('login-form'),_vm._v(" "),_c('p', {
        staticClass: "text-lg-right mt-4"
    }, [_c('v-btn', {
        attrs: {
            "flat": "",
            "small": "",
            "to": _vm.$gatewayRoutes.forgotPassword
        }
    }, [_vm._v("\n      " + _vm._s(_vm.forgotPasswordTitle) + "\n    ")])], 1),_vm._v(" "),
        _c('p', {
        staticClass: "text-lg-right mt-4"
    }, [_c('v-btn', {
        attrs: {
            "flat": "",
            "small": "",
            "to": _vm.$gatewayRoutes.registration
        }
    }, [_vm._v("\n      " + _vm._s(_vm.registrationTitle) + "\n    ")])], 1)], 1);
};
var __vue_staticRenderFns__$6 = [];
var __vue_inject_styles__$6 = undefined;
var __vue_scope_id__$6 = undefined;
var __vue_module_identifier__$6 = undefined;
var __vue_is_functional_template__$6 = false;
function __vue_normalize__$6(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "LoginCard.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    return component;
}

var LoginCard = __vue_normalize__$6({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);

var script$7 = {
    components: {
        BaseCard: BaseCard,
        RegistrationForm: RegistrationForm
    },
    props: {
        title: {
            type: String,
            default: 'Registration'
        },
        description: {
            type: String,
            default: 'You can create your new account here.'
        },
        loginLink: {
            type: String,
            default: '/'
        },
        loginLinkTitle: {
            type: String,
            default: 'Back to the login!'
        }
    },
    data: function data() {
        return {
            isValid: false,
            email: '',
            password: '',
            repeatPassword: '',
            displayName: '',
            error: '',
            status: 'idle'
        };
    },
    methods: {
        register: function register(ref) {
            return (function ($return, $error) {
                var this$1, email, password, displayName;
                this$1 = this;
                email = ref.email;
                password = ref.password;
                displayName = ref.displayName;
                this.status = 'submitting';
                return this.$store.dispatch('register', {
                    email: email,
                    password: password,
                    profile: {
                        displayName: displayName
                    }
                }).then(function () {
                    this$1.status = 'success';
                    setTimeout(function () {
                        this$1.$router.replace('/');
                    }, 1500);
                }).catch(function (error) {
                    this$1.status = 'error';
                    this$1.error = error;
                }).then((function ($await_1) {
                    return $return();
                }).$asyncbind(this, $error), $error);
            }).$asyncbind(this, true);
        }
    }
};

var __vue_script__$7 = script$7;
var __vue_render__$7 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-card', {
        attrs: {
            "action": "login",
            "title": _vm.title,
            "description": _vm.description
        }
    }, [_c('registration-form'),_vm._v(" "),_c('p', {
        staticClass: "text-lg-right mt-4"
    }, [_c('v-btn', {
        attrs: {
            "flat": "",
            "small": "",
            "to": _vm.$gatewayRoutes.login
        }
    }, [_vm._v("\n      " + _vm._s(_vm.loginLinkTitle) + "\n    ")])], 1)], 1);
};
var __vue_staticRenderFns__$7 = [];
var __vue_inject_styles__$7 = function (inject) {
    if (!inject) {
        return;
    }
    inject("data-v-23c81f0f_0", {
        source: "input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset;transition:background-color 5000s ease-in-out 0s}",
        map: undefined,
        media: undefined
    });
};
var __vue_scope_id__$7 = undefined;
var __vue_module_identifier__$7 = undefined;
var __vue_is_functional_template__$7 = false;
function __vue_normalize__$7(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "RegistrationCard.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    {
        var hook;
        if (style) {
            hook = function (context) {
                style.call(this, createInjector(context));
            };
        }
        if (hook !== undefined) {
            if (component.functional) {
                var originalRender = component.render;
                component.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                var existing = component.beforeCreate;
                component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
    }
    return component;
}

function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) {
            return;
        }
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = {
            ids: [],
            parts: [],
            element: undefined
        });
        if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;
            style.ids.push(id);
            if (css.map) {
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
            }
            if (isOldIE) {
                style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }
            if (!style.element) {
                var el = style.element = document.createElement('style');
                el.type = 'text/css';
                if (css.media) {
                    el.setAttribute('media', css.media);
                }
                if (isOldIE) {
                    el.setAttribute('data-group', group);
                    el.setAttribute('data-next-index', '0');
                }
                head.appendChild(el);
            }
            if (isOldIE) {
                index = parseInt(style.element.getAttribute('data-next-index'));
                style.element.setAttribute('data-next-index', index + 1);
            }
            if (style.element.styleSheet) {
                style.parts.push(code);
                style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
            } else {
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index]) {
                    style.element.removeChild(nodes[index]);
                }
                if (nodes.length) {
                    style.element.insertBefore(textNode, nodes[index]);
                } else {
                    style.element.appendChild(textNode);
                }
            }
        }
    };
}

var RegistrationCard = __vue_normalize__$7({
    render: __vue_render__$7,
    staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, __vue_create_injector__$1, undefined);

var script$8 = {
    components: {
        BaseCard: BaseCard,
        ForgotPasswordForm: ForgotPasswordForm
    },
    props: {
        title: {
            type: String,
            default: 'Recover Password'
        },
        description: {
            type: String,
            default: 'No worries. We got you covered. Just enter your e-mail address and we\'ll send you an e-mail with a link to reset your password.'
        },
        loginTitle: {
            type: String,
            default: 'Back to the login!'
        }
    }
};

var __vue_script__$8 = script$8;
var __vue_render__$8 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-card', {
        attrs: {
            "action": "login",
            "title": _vm.title,
            "description": _vm.description
        }
    }, [_c('forgot-password-form'),_vm._v(" "),_c('p', {
        staticClass: "text-lg-right mt-4"
    }, [_c('v-btn', {
        attrs: {
            "flat": "",
            "small": "",
            "to": _vm.$gatewayRoutes.login
        }
    }, [_vm._v("\n      " + _vm._s(_vm.loginTitle) + "\n    ")])], 1)], 1);
};
var __vue_staticRenderFns__$8 = [];
var __vue_inject_styles__$8 = function (inject) {
    if (!inject) {
        return;
    }
    inject("data-v-7463d3d1_0", {
        source: "input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset;transition:background-color 5000s ease-in-out 0s}",
        map: undefined,
        media: undefined
    });
};
var __vue_scope_id__$8 = undefined;
var __vue_module_identifier__$8 = undefined;
var __vue_is_functional_template__$8 = false;
function __vue_normalize__$8(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "ForgotPasswordCard.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    {
        var hook;
        if (style) {
            hook = function (context) {
                style.call(this, createInjector(context));
            };
        }
        if (hook !== undefined) {
            if (component.functional) {
                var originalRender = component.render;
                component.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                var existing = component.beforeCreate;
                component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
    }
    return component;
}

function __vue_create_injector__$2() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) {
            return;
        }
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = {
            ids: [],
            parts: [],
            element: undefined
        });
        if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;
            style.ids.push(id);
            if (css.map) {
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
            }
            if (isOldIE) {
                style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }
            if (!style.element) {
                var el = style.element = document.createElement('style');
                el.type = 'text/css';
                if (css.media) {
                    el.setAttribute('media', css.media);
                }
                if (isOldIE) {
                    el.setAttribute('data-group', group);
                    el.setAttribute('data-next-index', '0');
                }
                head.appendChild(el);
            }
            if (isOldIE) {
                index = parseInt(style.element.getAttribute('data-next-index'));
                style.element.setAttribute('data-next-index', index + 1);
            }
            if (style.element.styleSheet) {
                style.parts.push(code);
                style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
            } else {
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index]) {
                    style.element.removeChild(nodes[index]);
                }
                if (nodes.length) {
                    style.element.insertBefore(textNode, nodes[index]);
                } else {
                    style.element.appendChild(textNode);
                }
            }
        }
    };
}

var ForgotPasswordCard = __vue_normalize__$8({
    render: __vue_render__$8,
    staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, __vue_create_injector__$2, undefined);

var script$9 = {
    components: {
        BaseCard: BaseCard,
        ResetPasswordForm: ResetPasswordForm
    },
    props: {
        title: {
            type: String,
            default: 'Reset your password here'
        },
        description: {
            type: String,
            default: 'Please enter your new password below and you will be good to go! If this was a mistake, simply close this page or return to the login by clicking the link below the form.'
        },
        loginTitle: {
            type: String,
            default: 'To the login.'
        }
    },
    data: function data() {
        return {
            isValid: false,
            error: '',
            status: 'idle'
        };
    },
    methods: {
        resetPassword: function resetPassword(ref) {
            return (function ($return, $error) {
                var this$1, password, ref$1, token;
                this$1 = this;
                password = ref.password;
                ref$1 = this.$route.query;
                token = ref$1.token;
                this.status = 'submitting';
                return this.$store.dispatch('resetPassword', {
                    token: token,
                    password: password
                }).then(function () {
                    this$1.status = 'success';
                }).catch(function (error) {
                    this$1.status = 'error';
                    this$1.error = error;
                }).then((function ($await_1) {
                    return $return();
                }).$asyncbind(this, $error), $error);
            }).$asyncbind(this, true);
        }
    }
};

var __vue_script__$9 = script$9;
var __vue_render__$9 = function () {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('base-card', {
        attrs: {
            "action": "login",
            "title": _vm.title,
            "description": _vm.description
        }
    }, [_c('reset-password-form'),_vm._v(" "),_c('p', {
        staticClass: "text-lg-right mt-4"
    }, [_c('v-btn', {
        attrs: {
            "flat": "",
            "small": "",
            "to": _vm.$gatewayRoutes.login
        }
    }, [_vm._v("\n      " + _vm._s(_vm.loginTitle) + "\n    ")])], 1)], 1);
};
var __vue_staticRenderFns__$9 = [];
var __vue_inject_styles__$9 = function (inject) {
    if (!inject) {
        return;
    }
    inject("data-v-491c66ab_0", {
        source: "input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset;transition:background-color 5000s ease-in-out 0s}",
        map: undefined,
        media: undefined
    });
};
var __vue_scope_id__$9 = undefined;
var __vue_module_identifier__$9 = undefined;
var __vue_is_functional_template__$9 = false;
function __vue_normalize__$9(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};
    component.__file = "ResetPasswordCard.vue";
    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;
        if (functional) {
            component.functional = true;
        }
    }
    component._scopeId = scope;
    {
        var hook;
        if (style) {
            hook = function (context) {
                style.call(this, createInjector(context));
            };
        }
        if (hook !== undefined) {
            if (component.functional) {
                var originalRender = component.render;
                component.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                var existing = component.beforeCreate;
                component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
    }
    return component;
}

function __vue_create_injector__$3() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) {
            return;
        }
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = {
            ids: [],
            parts: [],
            element: undefined
        });
        if (!style.ids.includes(id)) {
            var code = css.source;
            var index = style.ids.length;
            style.ids.push(id);
            if (css.map) {
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
            }
            if (isOldIE) {
                style.element = style.element || document.querySelector('style[data-group=' + group + ']');
            }
            if (!style.element) {
                var el = style.element = document.createElement('style');
                el.type = 'text/css';
                if (css.media) {
                    el.setAttribute('media', css.media);
                }
                if (isOldIE) {
                    el.setAttribute('data-group', group);
                    el.setAttribute('data-next-index', '0');
                }
                head.appendChild(el);
            }
            if (isOldIE) {
                index = parseInt(style.element.getAttribute('data-next-index'));
                style.element.setAttribute('data-next-index', index + 1);
            }
            if (style.element.styleSheet) {
                style.parts.push(code);
                style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
            } else {
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index]) {
                    style.element.removeChild(nodes[index]);
                }
                if (nodes.length) {
                    style.element.insertBefore(textNode, nodes[index]);
                } else {
                    style.element.appendChild(textNode);
                }
            }
        }
    };
}

var ResetPasswordCard = __vue_normalize__$9({
    render: __vue_render__$9,
    staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, __vue_create_injector__$3, undefined);



var components = /*#__PURE__*/Object.freeze({
  LoginForm: LoginForm,
  RegistrationForm: RegistrationForm,
  ForgotPasswordForm: ForgotPasswordForm,
  ResetPasswordForm: ResetPasswordForm,
  LoginCard: LoginCard,
  RegistrationCard: RegistrationCard,
  ForgotPasswordCard: ForgotPasswordCard,
  ResetPasswordCard: ResetPasswordCard
});

var store = {
    install: function install(Vue, ref) {
        var store = ref.store;
        var namespace = ref.namespace;
        if (namespace === void 0) 
            namespace = 'account';
        var modulePath = "" + (namespace ? namespace + "/" : '');
        var login = function async(payload) {
            return store.dispatch(modulePath + "login", payload).then((function () {}).$asyncbind(this, $error), $error);
        };
        var logout = function async(payload) {
            return store.dispatch(modulePath + "logout", payload).then((function () {}).$asyncbind(this, $error), $error);
        };
        var register = function async(payload) {
            return store.dispatch(modulePath + "register", payload).then((function () {}).$asyncbind(this, $error), $error);
        };
        var verifyEmail = function async(payload) {
            return store.dispatch(modulePath + "verifyEmail", payload).then((function () {}).$asyncbind(this, $error), $error);
        };
        var forgotPassword = function async(payload) {
            return store.dispatch(modulePath + "forgotPassword", payload).then((function () {}).$asyncbind(this, $error), $error);
        };
        var resetPassword = function async(payload) {
            return store.dispatch(modulePath + "resetPassword", payload).then((function () {}).$asyncbind(this, $error), $error);
        };
        Object.defineProperties(Vue.prototype, {
            $login: {
                value: login
            },
            $logout: {
                value: logout
            },
            $register: {
                value: register
            },
            $verifyEmail: {
                value: verifyEmail
            },
            $forgotPassword: {
                value: forgotPassword
            },
            $resetPassword: {
                value: resetPassword
            }
        });
    }
};

function install(Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    Object.keys(components).forEach(function (componentName) {
        Vue.component(componentName, components[componentName]);
    });
}

var plugin = {
    install: install
};
var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export { store as AuthStorePlugin, BaseFormMixin, LoginFormMixin, RegistrationFormMixin, ForgotPasswordFormMixin, ResetPasswordFormMixin, LoginForm, RegistrationForm, ForgotPasswordForm, ResetPasswordForm, LoginCard, RegistrationCard, ForgotPasswordCard, ResetPasswordCard };
