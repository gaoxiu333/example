import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import BaseLink from "./components/base/Link";
import BaseImage from "@/components/base/Image";
import type { ImageProps } from "next/image";
import { Route } from "next";
type ListPropsType = ComponentPropsWithoutRef<"ul">;
type AnchorPropsType = ComponentPropsWithoutRef<"a">;

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ul: ({ children, ...props }: ListPropsType) => (
      <ul className="listContainer" {...props}>
        {children}
      </ul>
    ),
    a: ({ children, href, ...props }: AnchorPropsType) => (
      <BaseLink href={href as Route} {...props}>
        {children}
      </BaseLink>
    ),
    img: (props) => <BaseImage {...(props as ImageProps)} />,
    ...components,
    ...components,
  };
}
