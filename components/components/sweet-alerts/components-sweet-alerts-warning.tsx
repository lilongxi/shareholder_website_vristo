/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-03-01 11:52:58
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2025-04-24 20:59:10
 * @FilePath: /sbng_cake/shareholder_website_vristo/components/components/sweet-alerts/components-sweet-alerts-warning.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsWarning = () => {
    const showAlert = async () => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            // customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    // customClass: 'sweet-alerts'
                });
            }
        });
    };
    return (
        <PanelCodeHighlight
            title='Warning message, with "Confirm" button'
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        padding: '2em',
        customClass: 'sweet-alerts',
    }).then((result) => {
        if (result.value) {
            Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
        }
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={() => showAlert()}>
            Confirm
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-success" onClick={() => showAlert()}>
                        Confirm
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsWarning;
