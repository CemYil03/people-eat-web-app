import { type CSSProperties, type ReactElement } from 'react';

export interface VStackProps {
    className?: string;
    style?: CSSProperties;
    gap?: number;
}

export default function VStack(props: React.PropsWithChildren<VStackProps>): ReactElement {
    return (
        <div
            className={props.className}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: props.gap, ...props.style }}
        >
            {props.children}
        </div>
    );
}
