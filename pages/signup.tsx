import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Input,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { SignUpInput } from "lib/types";
import { useState } from "react";

import AuthPageContainer from "../components/auth_page_container";

const SignUpPage = () => {
  const [obscureText, setObscureText] = useState(false);
  const handleClick = () => setObscureText(!obscureText);
  //
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
      <Text
        data="Sign Up"
        textAlign="left"
        fontWeight="bold"
        fontSize="25"
        textColor="black"
        padding="10px"
      >
        Sign Up
      </Text>
      <Formik
        initialValues={
          {
            firstName: "",
            lastName: "",
            password: "",
            email: "",
          } as SignUpInput
        }
        onSubmit={(values, actions) => {
          const errors = validateData(values);
          if (errors) {
            actions.setErrors({ ...errors });
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
          <Form id="signup-form">
            <Field name="firstName">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.firstName && form.touched.firstName}
                >
                  <FormLabel htmlFor="firstName" id="firstname">
                    First name
                  </FormLabel>
                  <Input {...field} id="firstName" placeholder="John" />
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="lastName">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.lastName && form.touched.lastName}
                >
                  <FormLabel htmlFor="lastName" id="lastname">
                    Last name
                  </FormLabel>
                  <Input {...field} id="lastName" placeholder="Doe" />
                  <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" id="email">
                    Email
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="johndoe@email.com"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel htmlFor="password" id="email">
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      id="password"
                      placeholder="janedoe"
                      type={obscureText ? "text" : "password"}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {obscureText ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              bg="black"
              _hover={{
                bgColor: "gray",
              }}
              textColor="white"
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
