import type {DocumentContext} from 'next/document';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

// 重载Document,添加html标签以及统一的头部信息
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
        };
    }

    render() {
        return (
            <Html lang="zh">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <meta name="theme-color" content="#000"/>
                    <link rel="apple-touch-icon" href="/icons/apple-touch-icon-57x57.png"/>
                    <link rel="apple-touch-icon" href="/icons/apple-touch-icon-120x120.png"/>
                    <link rel="apple-touch-icon" href="/icons/apple-touch-icon-196x196.png"/>
                    <link rel="canonical" href={process.env.NEXT_PUBLIC_CANONICAL_NAME}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}


