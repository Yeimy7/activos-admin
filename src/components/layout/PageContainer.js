import React from 'react'

export const PageContainer = ({toggle, children}) => {
    return (
        <section className={`page-section ${toggle ? 'page-section-close' : ''}`}>
            <div className='page-content'>
                {children}
            </div>
        </section>
    )
}
