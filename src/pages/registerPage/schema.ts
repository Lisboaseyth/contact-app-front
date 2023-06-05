import * as yup from 'yup'

export const schemaRegister = yup.object().shape({
    name: yup
      .string()
      .required('Nome é obrigatório')
      .min(3, 'Nome precisa ter pelo menos 3 caracteres')
      .max(30, 'Nome precisa ter no máximo 30 caracteres'),
    email: yup
      .string()
      .required('Nome é obrigatório')
      .email('Insira um e-mail válido')
      .min(3, 'Nome precisa ter pelo menos 3 caracteres')
      .max(40, 'Nome precisa ter no máximo 40 caracteres'),
    password: yup
      .string()
      .required('Senha é obrigatória')
      .min(8, ' Senha precisa ser pelo menos de 8 caracteres')
      .matches(/(?=.*?[A-Z])/, 'Sua senha precisa uma letra maiúscula'),
    contactNumber: yup
        .string()
        .required('Contato é obrigatório'),
})