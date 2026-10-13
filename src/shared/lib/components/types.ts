export type Child = string | (() => string);

export type PropsWithChildren<P = Record<string, never>> = P & {
  children?: Child | Child[];
};

export type Component<P = Record<string, never>> = (
  props: PropsWithChildren<P>,
) => string;
