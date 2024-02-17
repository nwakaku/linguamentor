import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import { Cookie } from "../components/Cookie";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Select,
  Text,
  Textarea,
  Button,
  Input,
} from "@chakra-ui/react";
import { RegisterSuccessDialog } from "../dialogs/RegisterSuccess";

const Studentfilled: FunctionComponent = () => {
  return (
    <>
      <div className="bg-white font-body-2-body-2">
        <Header />
        <section className="absolute top-[-0.3px] left-[0px] rounded-[50%] [background:linear-gradient(172.34deg,_rgba(88,_204,_2,_0.08),_rgba(88,_204,_2,_0))] [filter:blur(274.34px)] w-full h-full" />
        <div className="flex space-x-2 justify-center items-start py-10 px-6 ">
          <img src="/tutor.svg" />
          <div>
            <div className="flex space-x-2 items-center">
              <p className="bg-beige p-2 rounded-md text-green-2 text-sm">
                AS A TUTOR
              </p>
              <img src="/learnarrow.svg" />
            </div>

            <div className="text-black max-w-md">
              <p className="font-bold text-9xl ">
                Unlock Language Learning with Lingualink🍃
              </p>
              <p className="">
                Connect with language learners and educators worldwide
              </p>
            </div>

            <div className="mt-6 ">
              <Card className="bg-white border-2 border-gray-200 rounded-md text-black px-3 max-w-md">
                <CardBody>
                  <FormControl as="fieldset">
                    <FormLabel className="mt-6">
                      Your language you will teach
                    </FormLabel>
                    <Select
                      placeholder="English"
                      focusBorderColor="gray"
                      borderColor="gray"
                      className="hover:border-gray-500 "
                    >
                      <option>French</option>
                      <option>Spanish</option>
                      <option>Arabic</option>
                      <option>Chinese</option>
                      <option>Afrikans</option>
                    </Select>
                    <FormLabel className="mt-6">
                      Price per session{" "}
                      <span className="text-gray-400">(USDT)</span>
                    </FormLabel>
                    <Input
                      placeholder="Exam"
                      focusBorderColor="gray"
                      borderColor="gray"
                      className="hover:border-gray-500 "
                    ></Input>
                    <FormLabel className="mt-6">Duration</FormLabel>
                    <Select
                      placeholder="2 Weeks"
                      focusBorderColor="gray"
                      borderColor="gray"
                      className="hover:border-gray-500 "
                    >
                      <option>1 Month</option>
                      <option>3 Months</option>
                    </Select>

                    <Text className="mt-6 mb-3 font-medium">Bio</Text>
                    <Textarea
                      placeholder="Tell us a little about yourself"
                      focusBorderColor="gray"
                      borderColor="gray"
                      className="hover:border-gray-500 rounded-md text-black"
                      size="sm"
                    />
                  </FormControl>

                  <RegisterSuccessDialog />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <Box
          w={{ base: "350px", md: "550px", lg: "750px" }}
          className="mx-auto mb-8"
        >
          <Cookie />
        </Box>
      </div>
    </>
  );
};

export default Studentfilled;
