/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-03-01 11:52:58
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2025-04-24 20:58:38
 * @FilePath: /sbng_cake/shareholder_website_vristo/components/components/sweet-alerts/components-sweet-alerts-rtl.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsRtl = () => {
    const showAlert = async () => {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            // customClass: 'sweet-alerts',
        });
    };

    return (
        <PanelCodeHighlight
            title="RTL support"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    Swal.fire({
        title: 'هل تريد الاستمرار؟',
        confirmButtonText: 'نعم',
        cancelButtonText: 'لا',
        showCancelButton: true,
        showCloseButton: true,
        padding: '2em',
        customClass: 'sweet-alerts',
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center" id="rtl-container">
        <button type="button" className="btn btn-primary" onClick={() => showAlert()}>
            RTL
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center" id="rtl-container">
                    <button type="button" className="btn btn-primary" onClick={() => showAlert()}>
                        RTL
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsRtl;
