/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-03-01 11:52:58
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2025-04-24 20:58:30
 * @FilePath: /sbng_cake/shareholder_website_vristo/components/components/sweet-alerts/components-sweet-alerts-html.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsHtml = () => {
    const showAlert = async () => {
        Swal.fire({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i className="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i className="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            // customClass: 'sweet-alerts',
        });
    };

    return (
        <PanelCodeHighlight
            title="Custom HTML description and buttons"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    Swal.fire({
        icon: 'info',
        title: '<i>HTML</i> <u>example</u>',
        html: 'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i className="flaticon-checked-1"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i className="flaticon-cancel-circle"></i> Cancel',
        cancelButtonAriaLabel: 'Thumbs down',
        padding: '2em',
        customClass: 'sweet-alerts',
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-danger" onClick={() => showAlert()}>
            Custom Description & buttons
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-danger" onClick={() => showAlert()}>
                        Custom Description & buttons
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsHtml;
