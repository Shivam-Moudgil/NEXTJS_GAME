// types/SpinWheel.ts
export interface SpinWheelOption {
    id: string;
    label: React.ReactNode;
    color?: string;
    value?: any;
}

export interface SpinWheelProps {
    options: SpinWheelOption[];
    onSpin?: (result: SpinWheelOption) => void;
    size?: number;
    spinDuration?: number;
    disabled?: boolean;
}
