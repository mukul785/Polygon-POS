import React from 'react'

import PropTypes from 'prop-types'

import './Steps.css';

const Steps = () => {
    return (
        <div className="steps-container thq-section-padding">
            <div className="steps-max-width thq-section-max-width">
                <div className="steps-container1 thq-grid-2">
                    <div className="steps-section-header">
                        <h2 className="thq-heading-2">
                            Discover the Power of Our Products
                        </h2>
                        <p className="thq-body-large">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique. Duis cursus,
                            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                            libero vitae erat.
                        </p>
                        <div className="steps-actions">
                            <button className="thq-button-animated thq-button-filled steps-button">
                                <span className="thq-body-small">Main action</span>
                            </button>
                        </div>
                    </div>
                    <div className="steps-container2">
                        <div className="steps-container3 thq-card">
                            <h2 className="thq-heading-2">"Connect Wallet"</h2>
                            <span className="steps-text04 thq-body-small">
                                "Click on the 'Connect Wallet' button to link your digital wallet to the NFT bridge platform."
                            </span>
                            <label className="steps-text05 thq-heading-3">01</label>
                        </div>
                        <div className="steps-container4 thq-card">
                            <h2 className="thq-heading-2">"Select NFT"</h2>
                            <span className="steps-text07 thq-body-small">
                                'Choose the NFT you want to transfer between different blockchain networks.'
                            </span>
                            <label className="steps-text08 thq-heading-3">02</label>
                        </div>
                        <div className="steps-container5 thq-card">
                            <h2 className="thq-heading-2">'Input Details'</h2>
                            <span className="steps-text10 thq-body-small">
                                'Enter the required information such as destination network, recipient address, and any additional details.'
                            </span>
                            <label className="steps-text11 thq-heading-3">03</label>
                        </div>
                        <div className="steps-container6 thq-card">
                            <h2 className="thq-heading-2">'Mint NFT'</h2>
                            <span className="steps-text13 thq-body-small">
                                "Click on the 'Mint' button to initiate the transfer process and mint the NFT on the destination blockchain."
                            </span>
                            <label className="steps-text14 thq-heading-3">04</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Steps.propTypes = {
    step1Description: PropTypes.string,
    step3Description: PropTypes.string,
    step2Title: PropTypes.string,
    step2Description: PropTypes.string,
    step1Title: PropTypes.string,
    step3Title: PropTypes.string,
    step4Description: PropTypes.string,
    step4Title: PropTypes.string,
}

export default Steps;
