import React from 'react'

import PropTypes from 'prop-types'

import './References.css'

const References = () => {
    return (
        <div className="thq-section-padding">
            <div className="testimonial-max-width thq-section-max-width">
                <div className="testimonial-container">
                    <h2 className="thq-heading-2">heading1</h2> //prop
                    <span className="testimonial-text01 thq-body-small">
                        content1
                    </span> //prop
                </div>
                <div className="thq-grid-2">
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div data-animated="true" className="thq-card testimonial-card">
                                <div className="testimonial-container02">
                                    <img
                                        alt="author1Alt" //prop
                                        src="author1Src" //prop
                                        className="testimonial-image"
                                    />
                                    <div className="testimonial-container03">
                                        <strong className="thq-body-large">
                                            author1Name prop
                                        </strong>
                                        <span className="thq-body-small">
                                            author1Position prop
                                        </span> 
                                    </div>
                                </div>
                                <span className="testimonial-text04 thq-body-small">
                                    review1 prop
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div data-animated="true" className="thq-card testimonial-card1">
                                <div className="testimonial-container04">
                                    <img
                                        alt="author2Alt" //prop
                                        src="author2Src" //prop
                                        className="testimonial-image1"
                                    />
                                    <div className="testimonial-container05">
                                        <strong className="thq-body-large">
                                            author2Name prop
                                        </strong>
                                        <span className="thq-body-small">
                                            author2Position prop
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial-text07 thq-body-small">
                                    review2 prop
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div data-animated="true" className="thq-card testimonial-card2">
                                <div className="testimonial-container06">
                                    <img
                                        alt="author3Alt" //prop
                                        src="author3Src" //prop
                                        className="testimonial-image2"
                                    />
                                    <div className="testimonial-container07">
                                        <strong className="thq-body-large">
                                            author3Name prop
                                        </strong>
                                        <span className="thq-body-small">
                                            author3Position prop
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial-text10 thq-body-small">
                                    review3 prop
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thq-animated-card-bg-2">
                        <div className="thq-animated-card-bg-1">
                            <div data-animated="true" className="thq-card testimonial-card3">
                                <div className="testimonial-container08">
                                    <img
                                        alt="author4Alt" //prop
                                        src="author4Src" //prop
                                        className="testimonial-image3"
                                    />
                                    <div className="testimonial-container09">
                                        <strong className="thq-body-large">
                                            author4Name prop
                                        </strong>
                                        <span className="thq-body-small">
                                            author4Position prop
                                        </span>
                                    </div>
                                </div>
                                <span className="testimonial-text13 thq-body-small">
                                    review4 prop
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// References.defaultProps = {
//     author2Position: 'Blockchain Developer',
//     author1Position: 'Crypto Enthusiast',
//     author3Alt: 'Image of David Lee',
//     author1Name: 'John Doe',
//     author1Src:
//         'https://images.unsplash.com/photo-1626967175524-c0bf5d61b21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzEzODc3N3w&ixlib=rb-4.0.3&q=80&w=1080',
//     author3Name: 'David Lee',
//     review2:
//         'The simplicity and efficiency of this NFT bridge exceeded my expectations. Great job!',
//     author2Name: 'Jane Smith',
//     author4Position: 'NFT Collector',
//     author4Name: 'Sarah Johnson',
//     author4Src:
//         'https://images.unsplash.com/photo-1468186376524-b53e47314061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzEzODc3N3w&ixlib=rb-4.0.3&q=80&w=1080',
//     author1Alt: 'Image of John Doe',
//     author2Src:
//         'https://images.unsplash.com/photo-1632377082529-611764ce0fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzEzODc3N3w&ixlib=rb-4.0.3&q=80&w=1080',
//     author3Src:
//         'https://images.unsplash.com/photo-1509399693673-755307bfc4e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzEzODc3OHw&ixlib=rb-4.0.3&q=80&w=1080',
//     author2Alt: 'Image of Jane Smith',
//     author4Alt: 'Image of Sarah Johnson',
//     content1:
//         'See what our users have to say about their experience with our NFT bridge platform.',
//     author3Position: 'Digital Artist',
//     review1:
//         'I was able to seamlessly transfer my NFTs across different platforms using this bridge. Highly recommended!',
//     heading1: 'Testimonials',
//     review3:
//         'As an artist, preserving the integrity of my digital creations is crucial. This bridge helped me achieve that effortlessly.',
//     review4:
//         "I've minted and traded numerous NFTs using this platform without any issues. A game-changer for the NFT community!",
// }

References.propTypes = {
    author2Position: PropTypes.string,
    author1Position: PropTypes.string,
    author3Alt: PropTypes.string,
    author1Name: PropTypes.string,
    author1Src: PropTypes.string,
    author3Name: PropTypes.string,
    review2: PropTypes.string,
    author2Name: PropTypes.string,
    author4Position: PropTypes.string,
    author4Name: PropTypes.string,
    author4Src: PropTypes.string,
    author1Alt: PropTypes.string,
    author2Src: PropTypes.string,
    author3Src: PropTypes.string,
    author2Alt: PropTypes.string,
    author4Alt: PropTypes.string,
    content1: PropTypes.string,
    author3Position: PropTypes.string,
    review1: PropTypes.string,
    heading1: PropTypes.string,
    review3: PropTypes.string,
    review4: PropTypes.string,
}

export default References;
