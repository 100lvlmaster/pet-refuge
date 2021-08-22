import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

import AuthPageContainer from "../components/auth_page_container";
interface SignUpInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}
const SignUpPage = () => {
  const validateData = (value: SignUpInput) => {
    const errors: SignUpInput = {};
    if (!value.firstName) {
      errors.firstName = "First name cannot be empty";
    }
    if (!value.lastName) {
      errors.lastName = "Last name cannot be empty";
    }
    if (!value.password) {
      errors.password = "Password cannot be empty";
    }
    if (!value.email) {
      errors.email = "Email cannot be empty";
    }

    return errors;
  };
  return (
    <AuthPageContainer>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          const errors = validateData(values);
          if (errors) {
            actions.setErrors(errors);
            actions.setSubmitting(false);
            return;
          }
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="firstName">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.firstName && form.touched.firstName}
                >
                  <FormLabel htmlFor="firstName">First name</FormLabel>
                  <Input {...field} id="firstName" placeholder="firstName" />
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="lastName">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.lastName && form.touched.lastName}
                >
                  <FormLabel htmlFor="lastName">Last name</FormLabel>
                  <Input {...field} id="lastName" placeholder="lastName" />
                  <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" placeholder="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input {...field} id="password" placeholder="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </AuthPageContainer>
  );
};
export default SignUpPage;
