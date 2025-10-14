import { InputProps } from "@/components/ui/input";

export type InputStylePreset = Required<
    Pick<
        InputProps,
        | 'size'
        | 'glowColor'
        | 'glowSpread'
        | 'backgroundColor'
        | 'backgroundOpacity'
        | 'borderColor'
    >
>;