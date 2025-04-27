declare module "react-images" {
    import type { ComponentType } from "react";

    export interface ViewStylesBase {
        padding?: number | string;
        height?: string;
        display?: string;
        alignItems?: string;
        justifyContent?: string;
        [key: string]: unknown;
    }

    export interface FooterStylesBase {
        color?: string;
        padding?: string;
        textAlign?: string;
        [key: string]: unknown;
    }

    export interface HeaderStylesBase {
        padding?: string;
        [key: string]: unknown;
    }

    export interface NavigationStylesBase {
        color?: string;
        background?: string;
        borderRadius?: string;
        padding?: number | string;
        width?: number | string;
        height?: number | string;
        marginLeft?: number | string;
        marginRight?: number | string;
        [key: string]: unknown;
    }

    export interface CarouselViewItem {
        src: string;
        caption?: string;
        alt?: string;
        srcset?: string;
        [key: string]: unknown;
    }

    export interface CarouselStyles {
        view?: (base: ViewStylesBase) => ViewStylesBase;
        footer?: (base: FooterStylesBase) => FooterStylesBase;
        header?: (base: HeaderStylesBase) => HeaderStylesBase;
        navigationPrev?: (base: NavigationStylesBase) => NavigationStylesBase;
        navigationNext?: (base: NavigationStylesBase) => NavigationStylesBase;
        [key: string]: ((base: Record<string, unknown>) => Record<string, unknown>) | undefined;
    }

    export interface CarouselProps {
        currentIndex: number;
        views: Array<CarouselViewItem>;
        styles?: CarouselStyles;
        [key: string]: unknown;
    }

    export const ModalGateway: ComponentType<ModalGatewayProps>;
    export const Modal: ComponentType<ModalProps>;
    export default ComponentType<CarouselProps>;
}
