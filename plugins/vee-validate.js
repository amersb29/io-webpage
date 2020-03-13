import { extend } from "vee-validate";
import { required, email, alpha_spaces } from "vee-validate/dist/rules";

extend("required", {
    ...required,
//   message: "This field is required or your custom error message"
});

extend('email', {
    ...email,
    message: 'Ingrese un correo válido'
});

extend('alpha_spaces', alpha_spaces)