import React from 'react';
import ReactDOM from 'react-dom';
import RegisteredMicroApps from "./loadMicroApp/registerMicroApps";
import App from "./app";

function bootstrapMainApp(): void {
    const mainContainer: Element = document.getElementById('main');
    ReactDOM.render(<App />, mainContainer);
}

function bootstrap(): void {
    // 启动主应用
    bootstrapMainApp();
    // 注册子应用
    RegisteredMicroApps();
}

bootstrap();
