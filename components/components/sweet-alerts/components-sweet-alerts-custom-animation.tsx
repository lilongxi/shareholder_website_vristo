/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-03-01 11:52:58
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2025-04-24 20:56:37
 * @FilePath: /sbng_cake/shareholder_website_vristo/components/components/sweet-alerts/components-sweet-alerts-custom-animation.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsCustomAnimation = () => {
    const showAlert = async () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
                popup: 'animate__animated animate__flip',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            padding: '2em',
            // customClass: 'sweet-alerts',
        });
    };
    return (
        <PanelCodeHighlight
            title="Custom animation"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: {
            popup: 'animate__animated animate__flip',
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
        },
        padding: '2em',
        customClass: 'sweet-alerts',
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert()}>
            Custom animation
        </button>
    </div>
    <div className="fixed inset-0 z-[999] hidden bg-[black]/60 px-4 transition-all duration-300">
        <div className="panel absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center sm:w-[480px]">
            <h3 className="mb-5 text-2xl font-bold text-[#3b3f5c] dark:text-white-light">Custom animation with Animate.css</h3>
            <button type="button" className="btn btn-info">
                Ok
            </button>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-info" onClick={() => showAlert()}>
                        Custom animation
                    </button>
                </div>
                <div className="fixed inset-0 z-[999] hidden bg-[black]/60 px-4 transition-all duration-300">
                    <div className="panel absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center sm:w-[480px]">
                        <h3 className="mb-5 text-2xl font-bold text-[#3b3f5c] dark:text-white-light">Custom animation with Animate.css</h3>
                        <button type="button" className="btn btn-info">
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsCustomAnimation;
