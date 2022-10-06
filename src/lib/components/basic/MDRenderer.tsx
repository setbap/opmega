import { Box, Link, chakra, Image } from "@chakra-ui/react";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import Renderer from "chakra-ui-markdown-renderer";

export default function MDRenderer({ children }: any) {
  return (
    <ReactMarkdown
      components={Renderer({
        a: CustomMarkDownLink,
        p: (props) => (
          <chakra.p fontWeight={"light"} lineHeight={"8"}>
            {props.children}
          </chakra.p>
        ),
        img: (props) => (
          <Image
            objectFit="cover"
            mx={"auto"}
            cursor="pointer"
            shadow={"dark-lg"}
            style={{ borderRadius: "16px" }}
            borderRadius="2xl"
            my={"4"}
            src={props.src}
            alt={props.alt}
          />
        ),
      })}
    >
      {children}
    </ReactMarkdown>
  );
}

const CustomMarkDownLink = (props: any) => {
  return (
    <Link
      href={props.href}
      isExternal
      target="_blank"
      rel="noopener noreferrer"
      display={"inline-flex"}
    >
      {props.children}{" "}
      <Box ps={"1"}>
        <FiExternalLink />
      </Box>
    </Link>
  );
};
