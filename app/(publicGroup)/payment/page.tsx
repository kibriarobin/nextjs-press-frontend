import React from 'react'
import PricingSection from '../_components/payment/PricingSection'

const PaymentPage = () => {
  return (
    <div className='max-w-3xl mx-auto space-y-8 px-4 py-10 sm:px-6 lg:px-8'>
        <div className='space-y-2 text-center'>
            <h1 className='text-2xl font-semibold'>Go Premium</h1>
            <p className='text-sm text-muted-foreground'>
                Subscribe to unlock premium content.
            </p>
        </div>

        <PricingSection></PricingSection>
    </div>
  )
}

export default PaymentPage