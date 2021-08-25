import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { SignUpInput } from "lib/types";
import { useState } from "react";
import NextLink from "next/link";
import AuthPageContainer from "../components/auth_page_container";
import Head from "next/head";
import { useMutation } from "@apollo/client";
import { signUpMutation } from "lib/mutations";

const SignUpPage = () => {
  const [obscureText, setObscureText] = useState(false);
  const handleClick = () => setObscureText(!obscureText);
  const [signUp, { data, loading, error }] = useMutation(signUpMutation);

  //
  const validateData = (value: SignUpInput) => {
    const errors: SignUpInput = {};
    if (!value.firstname) {
      errors.firstname = "First name cannot be empty";
    }
    if (!value.lastname) {
      errors.lastname = "Last name cannot be empty";
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
      <Head>
        <title>Sign Up</title>
      </Head>
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
            lastname: "",
            password: "",
            email: "",
          } as SignUpInput
        }
        onSubmit={async (values, actions) => {
          const errors = validateData(values);
          if (Object.keys(errors).length !== 0) {
            actions.setErrors(errors);
            actions.setSubmitting(false);
            return;
          }
          signUp({
            variables: { signupData: { ...values } },
          });
          console.log(`graphql error ${error}`);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="firstname">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.firstname && form.touched.firstname}
                >
                  <FormLabel htmlFor="firstname" id="firstname">
                    First name
                  </FormLabel>
                  <Input {...field} id="firstname" placeholder="John" />
                  <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="lastname">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.lastname && form.touched.lastname}
                >
                  <FormLabel htmlFor="lastname" id="lastname">
                    Last name
                  </FormLabel>
                  <Input {...field} id="lastname" placeholder="Doe" />
                  <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
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
      <Flex p="10" flexDirection="row" align="center" experimental_spaceX="2">
        <Text>Already a user?</Text>
        <NextLink href="/signin">
          <a>
            <Text fontWeight="bold" decoration="underline">
              Sign In
            </Text>
          </a>
        </NextLink>
      </Flex>
    </AuthPageContainer>
  );
};
export default SignUpPage;
