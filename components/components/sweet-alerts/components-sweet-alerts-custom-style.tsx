/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-03-01 11:52:58
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2025-04-24 20:57:59
 * @FilePath: /sbng_cake/shareholder_website_vristo/components/components/sweet-alerts/components-sweet-alerts-custom-style.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsCustomStyle = () => {
    const showAlert = async () => {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            // customClass: 'background-modal sweet-alerts',
            background: '#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%',
        });
    };
    return (
        <PanelCodeHighlight
            title="A message with custom width, padding and background"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    Swal.fire({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '7em',
        customClass: 'background-modal sweet-alerts',
        background: '#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%',
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert()}>
            Custom Message
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-info" onClick={() => showAlert()}>
                        Custom Message
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsCustomStyle;
