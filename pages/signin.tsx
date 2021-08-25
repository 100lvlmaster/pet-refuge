import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Input,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import AuthPageContainer from "components/auth_page_container";
import { SignInInput } from "lib/types";
import { useState } from "react";
import NextLink from "next/link";
import Head from "next/head";
const SignInPage = () => {
  const [obscureText, setObscureText] = useState(false);
  const handleClick = () => setObscureText(!obscureText);
  //
  const validateData = (value: SignInInput) => {
    const errors: SignInInput = {};
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
        <title>Sign In</title>
      </Head>
      <Text
        data="Sign Up"
        textAlign="left"
        fontWeight="bold"
        fontSize="25"
        textColor="black"
        padding="10px"
      >
        Sign In
      </Text>
      <Formik
        initialValues={
          {
            firstName: "",
            lastName: "",
            password: "",
            email: "",
          } as SignInInput
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
          <Form id="signin-form">
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
        <Text>Dont have an account?</Text>
        <NextLink href="/signup">
          <a>
            <Text fontWeight="bold" decoration="underline">
              Create one.
            </Text>
          </a>
        </NextLink>
      </Flex>
    </AuthPageContainer>
  );
};
export default SignInPage;
